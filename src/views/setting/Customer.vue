<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>관리</span>
                <i class="ico_nav"></i>
                <span class="on">관리자 목록</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">관리자</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select @change="onChangeSgg($event)">
                                        <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select @change="onChangeOrg($event)">
                                      <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select>
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value="홍길동">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                </div>
            </div>
         
            <div class="one_box box_style mt30">
                <div class="result_txt">
                    <p>관리자 정보</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">시/도</th>
                                <th scope="col">시/군/구</th>
                                <th scope="col">관리기관명</th>
                                <th scope="col">관리자 구분</th>
                                <th scope="col">이름</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">담당지역</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody v-if="userItems">
                                <tr v-for="(item,index) in userItems" v-bind:key="index">
                                    <td><a href="#">{{item.sido}}</a></td>
                                    <td><a href="#">{{item.sgg}}</a></td>
                                    <td><a href="#">{{item.orgNm}}</a></td>
                                    <td><a href="#">{{item.userTypeNm}}</a></td>
                                    <td><a href="#">{{item.userNm}}</a></td>
                                    <td><a href="#">{{item.phoneNumber}}</a></td>
                                    <td><a href="#">{{item.chargeRegionNm}}</a></td>
                                </tr>
                            </tbody>
                            <tbody v-esle>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="pagination mt0">
					<a href="#" class="front">첫 페이지</a>
					<a href="#" class="prev">이전 페이지</a>
					<a href="#" class="on">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">6</a>
					<a href="#">7</a>
					<a href="#">8</a>
					<a href="#">9</a>
					<a href="#">10</a>
					<a href="#" class="next">다음 페이지</a>
					<a href="#" class="back">마지막 페이지</a>
				</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
</style>
<script>
import HeaderComp from "../pages/HeaderComp.vue";
import axios from "axios";


export default {
    name: 'UserListComponent',
    components : {
        HeaderComp
    },
    data(){
      return{
        sido:'', sidoCd:'', sgg:'', sggCd:'',
        sidoItems:[], sggItems:[], orgmItems:[], noticItems:[], TorgItems:[], userItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
      }
    },
    created(){
      this.getSidoData();
      this.getSggData();
      this.getOrgmData();
      //this.getTorgData();
      //this.getUserData();
    },
    methods:{
    getSidoData() {
    axios.get("/admin/address/sido", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.sidoItems=[];
            this.sidoItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.sidoItems.push({
                label: response.data.data[i].sido,
                value: response.data.data[i].sidoCd
              });
            }  
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

    // 시/군/구 목록
    getSggData() {
    let url = "/admin/address/sgg";
    if(this.sidoCd != ''){
        url += "?sidoCd="+this.sidoCd;
    }else{
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
    }
    axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            const tempArr = [];
            this.sggItems=[];
            tempArr.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              tempArr.push({
                label: response.data.data[i].sgg,
                value: response.data.data[i].sggCd,
                value2: response.data.data[i].sidoCd
              });
            } 
            this.sggItems = tempArr.filter(cd=>{
                return cd.value2 === this.sidoCd
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

    // 관리 기관 목록
     getOrgmData() {
    let url = "/admin/organizations";
        if(this.sggCd != ''){
            url += "?sggCd="+this.sggCd;
        }else{
          this.orgmItems=[];
          this.orgmItems.push({label: '전체', value: ''});
          return ; 
        }
       axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            const tempArr = [];
            this.orgmItems=[];
            tempArr.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              tempArr.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId,
                value2: response.data.data[i].addrCd
              });
            }
            this.orgmItems = tempArr.filter(cd=>{
            return cd.value2 === this.sggCd
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getTorgData() {
      let uri = this.$store.state.serverApi + "/admin/organizations";
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.TorgItems = response.data.data
          })          
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
      },
      getUserData() {
      let uri = this.$store.state.serverApi + "/admin/users";
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.userItems = response.data.data
          })          
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
      },
      onChangeSido(event){
      console.log("====onChangeSido($event) execution")
      this.getSggData()
      this.orgSido = event.target.value;
    },
    onChangeSgg(event){
      this.orgSgg = event.target.value;
      this.sidoCd = event.target.value
      this.getSggData()
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
      this.sggCd = event.target.value
      this.getOrgmData()
    },
    manageInquiry() {
        this.getTorgData();
        this.getUserData();
    },
    }
}
</script>
<style>
</style>