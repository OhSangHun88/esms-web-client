<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
          <div id="" class="popupLayer" v-if="errorpopup1 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup1 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">조회 종료일자가 시작일자보다 빠릅니다<br/>일자를 다시 선택하여 주십시요</p>
                    </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup1 = false">확인</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="errorpopup2 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup2 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">일주일단위로 조회 가능합니다<br/>일자를 다시 선택하여 주십시요</p>
                   </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup2 = false">확인</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="writeNotice == true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">공지사항 작성</div>
                        <button type="button" class="btn_close" @click="writeNotice = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">시/도</p>
                                <select v-model="selectedUpdateSidoItems" @change="onChangeSgg($event)">
                                  <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">시/군/구</p>
                                <select v-model="selectedUpdateSggItems" @change="onChangeOrg($event)">
                                  <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                </select>
                            </div>
                            <div class="input_area">
                                <p class="input_tit">관리기관</p>
                                <select v-model="selectedUpdateOrgItems">
                                  <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="input_wrap type-03">
                            <div class="input_area">
                              <p class="input_tit">제목</p>
                              <input type="text" v-model="selectedUpdateTitle">
                            </div>
                        </div>
                        <div class="input_wrap type-03">
                            <div class="input_area">
                                <div class="tit_area">
                                    <p class="input_tit">공지내용</p>
                                </div>
                                <textarea name="" id="" v-model="selectedUpdateDetails">1.공지내용</textarea>
                            </div>
                        </div>
                    </div>
                    <div class="popbtn_wrap">
                        <div class="popbtn_area right">
                            <button type="button" class="btn" @click="writeNotice = false">취소</button>
                            <button type="button" class="btn form2" @click="UploadData()">저장</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">공지사항</span>
            </div>
            <div class="box_search_wrap add_btn box_style" @keypress.enter='manageInquiry'>
                <div class="table_wrap type-02">
                    <table>
                        <colgroup>
                            <col style="width:18%;">
                            <col style="width:18%;">
                            <col style="width:18%;">
                            <col style="width:18%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">제목</th>
                            <th scope="row">등록일자</th>
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
                                    <input v-model="selectedTitle" type="text" value="">
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date" v-model="s_date"/>
                                            <span class="tilde">~</span>
                                            <input type="date" v-model="e_date" :max="this.$moment().format('YYYY-MM-DD')"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                    <button type="button" class="btn form2" @click="writeNotice = true">작성</button>
                </div>
            </div>
            <div class="one_box box_style">
                <div class="result_txt">
                    <p>조회결과 : <strong class="num">{{!this.NCount? 0 : this.NCount}}</strong>건</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                          <col style="width:6%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:9%;">
                            <col style="width:8%;">
                            <col style="width:9%;">
                            <col style="width:3%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">관리기관</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">등록일시</th>
                                <th scope="col">수정일시</th>
                                <th scope="col"></th>
                                <th scope="col">공지내용</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                            <col style="width:6%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:9%;">
                            <col style="width:8%;">
                            <col style="width:9%;">
                            <col style="width:3%;">
                            <col style="width:auto;">
                            </colgroup>
                            <tbody >
                                <tr v-for="(item,index) in noticItems" v-bind:key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{item.orgNm}}</td>
                                    <td>{{item.title}}</td>
                                    <td>{{item.regId}}</td>
                                    <td>{{item.regDtime}}</td>
                                    <td>{{item.updDtime}}</td>
                                    <td></td>
                                    <td style="text-align:left">{{item.details}}</td>
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
import moment from "moment";

export default {
    name: 'Notice',
    components : {
        HeaderComp
    },
    data(){
      return{
        sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
        sidoItems:[], sggItems:[], orgmItems:[], orgmItems2:'', noticItems:[], 
        orgSido:'', orgSgg:'', orgCode:'',selectedOrgItems:'', selectedSidoItems:'', selectedSggItems:'', selectedTitle: '', selectedTitle: '', selectedDetail: '',
        selectedUpdateSidoItems:'', selectedUpdateSggItems:'', selectedUpdateOrgItems:'', selectedUpdateTitle:'', selectedUpdateDetails:'',
        NCount: 0,
        errorpopup1: false, errorpopup2: false, writeNotice: false,
        noticeId:'', orgdata:'', orgNm:'',
      }
    },
    created(){
      this.getSidoData();
      this.getSggData();
      this.getOrgmData();
      this.getnoticeData();
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
      

//      this.getnoticeData();
    },
    methods:{
    // 시/도 목록
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
      this.selectedSggItems = ''
      let uri =this.$store.state.serverApi + "/admin/address/sgg";
      if(this.sidoCd != ''){
        uri += "?sidoCd="+this.sidoCd;
      }else{
        this.selectedSggItems = ''
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
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
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    // 관리 기관 목록

    getOrgmData() {
      this.selectedOrgItems = ''
      let uri =this.$store.state.serverApi + "/admin/organizations";
      if(this.sggCd != ''){
        let sggCode = this.sggCd.substring(0, 5);
        uri += "?sggCd="+sggCode;
      }else{
        this.selectedOrgItems = ''
        this.orgmItems=[];
        this.orgmItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tmpArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          this.orgmItems=[];
          for(let i=0; i<response.data.data.length; i++) {
            tmpArr.push({
              label: response.data.data[i].orgNm,
              value: response.data.data[i].orgId,
              value2: response.data.data[i].typeCd,
            });
          }
          let tmpResult = tmpArr
          this.orgmItems = [...tmpResult2,...tmpResult]
          this.orgmItems = tmpArr;
          console.log(this.orgmItems)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
      getnoticeData(){
        console.log(this.orgmItems)
      let addrCd = ''
      if(this.selectedSidoItems != '' && this.selectedSggItems == ''){
        addrCd = this.sidoCd.substring(0,2)
      }else if(this.selectedSggItems != ''){
        addrCd = this.sggCd.substring(0,5)
      }else{
        addrCd = ''
      }
      let uri = this.$store.state.serverApi 
      +"/admin/notices?pageIndex=1&recordCountPerPage=100"
      +"&title="+this.selectedTitle
      +"&startDate="+this.s_date
      +"&endDate="+this.e_date

      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.noticItems = response.data.data
            this.NCount =this.noticItems.length
            for(let i=0; i<this.noticItems.length; i++){
              this.noticeId = this.noticItems[i].noticeId
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
      onChangeSido(event){
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
    initSet() {
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
    },
    manageInquiry() {
      if(this.s_date > this.e_date){
        this.errorpopup1 = true
      }/*else if(this.e_date > moment(this.s_date).add(6, 'days').format('YYYY-MM-DD')){
        this.errorpopup2 = true
      }*/else{
        this.getnoticeData();
      }
    },
    async UploadData(){
      if(this.selectedUpdateTitle === ''){
        alert("제목을 입력하여 주세요");
        return;
      }else if(this.selectedUpdateDetails === ''){
        alert("내용을 입력하여 주세요");
        return;
      }
      this.$store.state.userId = sessionStorage.getItem("userId")

      let uri =this.$store.state.serverApi + "/admin/organizations/all";
      await axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          this.orgmItems2=[];
          for(let i=0; i<response.data.data.length; i++) {
            this.orgmItems2.push({
              label: response.data.data[i].orgNm,
              value: response.data.data[i].orgId,
              value2: response.data.data[i].typeCd,
              value3: response.data.data[i].typeNm
            });
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
      if(this.selectedUpdateSidoItems==='' && this.selectedUpdateSggItems==='' && this.selectedUpdateOrgItems===''){
        this.orgdata = this.orgmItems2.filter(cd=>{
          return cd.value === 'ORG0000001'
        })
        this.selectedUpdateOrgItems === null
      }else{
        this.orgdata = this.orgmItems2.filter(cd=>{
          return cd.value === this.selectedUpdateOrgItems
        })
      }
      console.log(this.orgdata)
      console.log(this.$store.state.userId)

      let objectData = {
        orgId: this.orgdata[0].value,
        orgNm: this.orgdata[0].label,
        title: this.selectedUpdateTitle,
        typeCd: this.orgdata[0].value2,
        typeNm: this.orgdata[0].value3,
        details: this.selectedUpdateDetails,
        regId: this.$store.state.userId
      }
      console.log(objectData)
      
      uri =this.$store.state.serverApi + "/admin/notices";
      console.log(uri)
      axios.post(uri,objectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
          let resData = res.data.data
          if(resData){
              alert("저장이 완료되었습니다.")
              console.log(resData)
              this.writeNotice = false
              this.getnoticeData()
          }
          // this.getCSensorsData = res.data.data
        })
        .catch(error => {
          console.log("fail to load")
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

    
      // const uri = this.$store.state.serverApi+'/admin/notices?orgId='+objectData.orgId
      // +"&title="+objectData.title
      // +"&details="+objectData.details

      // axios.post(uri,objectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
      //     .then(response => {
      //       let resData = response.data.data
      //       console.log(uri)
      //       if(resData){
      //         alert("저장이 완료되었습니다.")
      //         this.writeNotice = false
      //       }
      //     })
      //     .catch(error => {
      //       this.errorMessage = error.message;
      //       console.error("There was an error!", error);
      //     });
    }
    }
}
</script>
<style>
</style>