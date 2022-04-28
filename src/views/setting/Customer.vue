<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
          <div id="" class="popupLayer" v-if="writeCus === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">사용자 등록</div>
                        <button type="button" class="btn_close" @click="writeCus = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">시/도</p>
                                <select v-model="selectedSidoItems" @change="onChangeSgg($event)">
                                  <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">시/군/구</p>
                                <select v-model="selectedSggItems" @change="onChangeOrg($event)">
                                  <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">관리기관</p>
                                <select v-model="selectedOrgItems">
                                  <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                </select>
                            </div>
                            <hr/>
                            <div class="input_area">
                                <p class="input_tit">사용자 ID</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">사용자명</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">전화번호</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">핸드폰번호</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area" >
                                <p class="input_tit">이메일주소</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area" >
                                <p class="input_tit">현재상태</p>
                                <input type="text" value="">
                            </div>
                        </div>
                    </div>
                    <div class="popbtn_area">
                        <button type="button" class="btn" @click="writeCus = false">취소</button>
                        <button type="button" class="btn form2" @click="uploadData()">등록</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="changeCus === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">사용자 정보 수정</div>
                        <button type="button" class="btn_close" @click="changeCus = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">시/도</p>
                                <select v-model="selectedSidoItems" @change="onChangeSgg($event)">
                                  <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">시/군/구</p>
                                <select v-model="selectedSggItems" @change="onChangeOrg($event)">
                                  <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">관리기관</p>
                                <select v-model="selectedOrgItems">
                                  <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                </select>
                            </div>
                            <hr/>
                            <div class="input_area">
                                <p class="input_tit">사용자 ID</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">사용자명</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">전화번호</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area">
                                <p class="input_tit">핸드폰번호</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area" >
                                <p class="input_tit">이메일주소</p>
                                <input type="text" value="">
                            </div>
                            <div class="input_area" >
                                <p class="input_tit">현재상태</p>
                                <input type="text" value="">
                            </div>
                        </div>
                    </div>
                    <div class="popbtn_area">
                        <button type="button" class="btn" @click="changeCus = false">취소</button>
                        <button type="button" class="btn form2" @click="changeCus = false">수정</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="deleteCus == true">
              <div class="popup_wrap type-02">
                <div class="title_wrap">
                  <div class="title">경고</div>
                  <button type="button" class="btn_close" @click="deleteCus = false">닫기</button>
                </div>
                <div class="popup_cnt">
                  <p class="alert_txt">선택하신 사용자를 삭제하시겠습니까?</p>
                </div>
                <div class="popbtn_area type-02">
                  <button type="button" class="btn form2" @click="deleteCus = false">취소</button>
                  <button type="button" class="btn form2" @click="deleteCus = false">삭제</button>
                </div>
              </div>
            </div>
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">사용자관리</span>
            </div>
            <div class="box_search_wrap add_btn box_style" @keypress.enter='manageInquiry'>
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
                                    <select v-model="selectedSidoItems" @change="onChangeSgg($event)">
                                        <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedSggItems" @change="onChangeOrg($event)">
                                      <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedOrgItems">
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input v-model="selectedUserNm" type="text" value="">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                </div>
            </div>
            <div class="one_box box_style ">
                <div class="result_txt">
                    <p>사용자 정보</p>
                    <div class="btn_area">
                    <button type="button" style="margin-right:10px" class="btn" @click="createData()">등록</button>
                    <button type="button" style="margin-right:10px" class="btn" @click="changeData()">수정</button>
                    <button type="button" style="margin-right:10px" class="btn" @click="deleteData()">삭제</button>
                  </div>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                                <col style="width:5%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:16%;">
                                <col style="width:10%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">사용자ID</th>
                                <th scope="col">사용자명</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">핸드폰번호</th>
                                <th scope="col">이메일주소</th>
                                <th scope="col">현재상태</th>
                                <th scope="col">등록일시</th>
                                <th scope="col">로그인일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:5%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:8%;">
                                <col style="width:16%;">
                                <col style="width:10%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                            </colgroup>
                            <tbody >
                                <tr v-for="(item,index) in userItems" v-bind:key="index">
                                  <td>{{index+1}}</td>
                                  <td>{{item.userId}}</td>
                                  <td>{{item.userNm}}</td>
                                  <td>{{item.phoneNumber}}</td>
                                  <td>{{item.mobileNumber}}</td>
                                  <td>{{item.email}}</td>
                                  <td>{{item.employStateNm}}</td>
                                  <td>{{item.regDtime}}</td>
                                  <td>{{item.loginDtime}}</td>
                                </tr>
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
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'', selectedUserNm: '',
        writeCus: false, changeCus: false, deleteCus: false,
        saveChangeData: null,
      }
    },
    created(){
      this.getSidoData();
      this.getSggData();
      this.getOrgmData();
      this.getUserData();
    },
    methods:{
    getSidoData() {
    axios.get(this.$store.state.serverApi + "/admin/address/sido", {headers: {"Authorization": sessionStorage.getItem("token")}})
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
      let url =this.$store.state.serverApi + "/admin/address/sgg";
      if(this.sidoCd != ''){
        url += "?sidoCd="+this.sidoCd;
      }else{
        this.selectedSggItems = ''
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tempArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          for(let i=0; i<response.data.data.length; i++) {
            tempArr.push({
              label: response.data.data[i].sgg,
              value: response.data.data[i].sggCd,
              value2: response.data.data[i].sidoCd
            });
          } 
          let tmpResult = tempArr.filter(cd=>{
            return cd.value2 === this.sidoCd
          });
          
          this.sggItems = [...tmpResult2,...tmpResult]
          console.log(this.sggItems )
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    // 관리 기관 목록
    getOrgmData() {
      let url =this.$store.state.serverApi + "/admin/organizations";
      if(this.sggCd != ''){
        let sggCode = this.sggCd.substring(0, 5);
        url += "?sggCd="+sggCode;
      }else{
        this.selectedOrgItems = ''
        this.orgmItems=[];
        this.orgmItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tmpArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          this.orgmItems=[];
          for(let i=0; i<response.data.data.length; i++) {
            tmpArr.push({
              label: response.data.data[i].orgNm,
              value: response.data.data[i].orgId,
            });
          } 
          let tmpResult = tmpArr
          this.orgmItems = [...tmpResult2,...tmpResult]
        this.orgmItems=tmpArr;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
      getUserData() {
      let uri = this.$store.state.serverApi + "/admin/users?pageIndex=1&recordCountPerPage=100"+"&orgId="+this.selectedOrgItems+"&userNm="+this.selectedUserNm;
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
      this.sidoCd = event.target.value
      this.getSggData()
      this.sggCd = ''
      this.getOrgmData()
    },
    onChangeOrg(event) {
      this.sggCd = event.target.value
      this.getOrgmData()
    },
    createData(){
      this.writeCus = true
    },
    changeData(){
      if(this.saveChangeData === null || this.saveChangeData === undefined){
        alert("사용자를 선택하여 주세요")
      }else{
      this.changeCus = true
      }  
    },
    deleteData(){
      if(this.saveChangeData === null || this.saveChangeData === undefined){
        alert("사용자를 선택하여 주세요")
      }else{
      this.deleteCus = true
      }
    },
    manageInquiry() {
        this.getUserData();
    },
    }
}
</script>
<style>
</style>