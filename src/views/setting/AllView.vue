<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>관리</span>
                <i class="ico_nav"></i>
                <span class="on">장비관리</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:16%">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">장비구분</th>
                            <th scope="row">대상자 이름 입력</th>
                            <th scope="row">현재상태</th>
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
                                    <select name="" id="">
                                        <option value="">장비구분</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value="홍길동">
                                </td>
                                <td>
                                    <select name="" id="">
                                        <option value="">장애유형</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date" v-model="s_date"/>
                                            <span class="tilde">~</span>
                                            <input type="date" v-model="e_date"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                </div>
            </div>
            <div class="one_box box_style">
                <div class="result_txt">
                    <p>조회결과 : <strong>235</strong>건</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:auto;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">이름</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">서비스 번호</th>
                                <th scope="col">주소</th>
                                <th scope="col">장비구분</th>
                                <th scope="col">Serial NO</th>
                                <th scope="col">MAC address</th>
                                <th scope="col">현재상태</th>
                                <th scope="col">관리기관</th>
                                <th scope="col">응급요원</th>
                                <th scope="col">응급요원 번호</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:auto;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                            </colgroup>
                            <tbody v-if="noticItems">
                                <tr v-for="(item,index) in noticItems" v-bind:key="index">
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                    <td><a href="#">{{}}</a></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                
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
import moment from "moment";

export default {
    name: 'UserListComponent',
    components : {
        HeaderComp
    },
    data(){
      return{
        sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
        sidoItems:[], sggItems:[], orgmItems:[], noticItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
      }
    },
    created(){
      this.getSidoData();
      this.getSggData();
      this.getOrgmData();
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
     // this.getnoticeData();
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
    getnoticeData() {
      let uri = this.$store.state.serverApi + "/admin/notices?startDate="+this.s_date+"&endDate="+this.e_date;;
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.noticItems = response.data.data
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
    initSet() {
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
    },
    manageInquiry() {
        this.getnoticeData();
    },
    }
}
</script>
<style>
</style>