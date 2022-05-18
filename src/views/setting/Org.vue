<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
          <div id="" class="popupLayer" v-if="writeOrg === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">관리기관 등록</div>
                        <button type="button" class="btn_close" @click="writeOrg = false">닫기</button>
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
                            <hr/>
                            <div class="input_area">
                                <p class="input_tit">대표전화번호</p>
                                <input type="text" value="" v-model="selectedPhoneNumber">
                            </div>
                        </div>
                        <div>
                        <div class="input_wrap type-02">
                            <div class="input_area" >
                                <p class="input_tit">주소</p>
                                <input type="text" value="" v-model="selectedAddr">
                            </div>
                        </div>
                        <div class="input_wrap">
                            <div class="input_area" >
                                <p class="input_tit">세부주소</p>
                                <input type="text" value="" v-model="selectedAddrDetail">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="popbtn_area">
                        <button type="button" class="btn" @click="writeOrg = false">취소</button>
                        <button type="button" class="btn form2" @click="uploadData()">등록</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="detailOrg === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">관리기관 상세정보</div>
                        <button type="button" class="btn_close" @click="detailOrg = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">시/도</p>
                                <input type="text" value="" v-model="selectDetailsido">
                            </div>
                            <div class="input_area">
                              <p class="input_tit">시/군/구</p>
                              <input type="text" value="" v-model="selectDetailSgg">
                            </div>
                            <div class="input_area">
                              <p class="input_tit">관리기관</p>
                              <input type="text" value="" v-model="selectDetailOrg">
                            </div>
                            <hr/>
                            <div class="input_area">
                                <p class="input_tit">대표전화번호</p>
                                <input type="text" value="" v-model="selectedPhoneNumber">
                            </div>
                        </div>
                        <div class="input_wrap type-02">
                            <div class="input_area">
                                <p class="input_tit">주소</p>
                                <input type="text" value="" v-model="selectedAddr">
                            </div>
                        </div>
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">세부주소</p>
                                <input type="text" value="" v-model="selectedAddrDetail">
                            </div>
                        </div>
                    </div>
                    <div class="popbtn_area">
                        <button type="button" class="btn form2" @click="changeOrg = true, detailOrg = false">수정</button>
                        <button type="button" class="btn form3" @click="deleteOrg = true">삭제</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="changeOrg === true">
                <div class="popup_wrap">
                    <div class="title_wrap">
                        <div class="title">관리기관 정보 수정</div>
                        <button type="button" class="btn_close" @click="changeOrg = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">시/도</p>
                                <input type="text" value="" v-model="selectDetailsido">
                            </div>
                            <div class="input_area">
                              <p class="input_tit">시/군/구</p>
                              <input type="text" value="" v-model="selectDetailSgg">
                            </div>
                            <div class="input_area">
                              <p class="input_tit">관리기관</p>
                              <input type="text" value="" v-model="selectDetailOrg">
                            </div>
                            <hr/>
                            <div class="input_area">
                                <p class="input_tit">대표전화번호</p>
                                <input type="text" value="" v-model="selectedPhoneNumber">
                            </div>
                        </div>
                        <div class="input_wrap type-02">
                            <div class="input_area">
                                <p class="input_tit">주소</p>
                                <input type="text" value="" v-model="selectedAddr">
                            </div>
                        </div>
                        <div class="input_wrap">
                            <div class="input_area">
                                <p class="input_tit">세부주소</p>
                                <input type="text" value="" v-model="selectedAddrDetail">
                            </div>
                        </div>
                    </div>
                    <div class="popbtn_area">
                        <button type="button" class="btn" @click="changeOrg = false, detailOrg = true">취소</button>
                        <button type="button" class="btn form2" @click="changeOrgSuccess()">수정</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="deleteOrg == true">
              <div class="popup_wrap type-02">
                <div class="title_wrap">
                  <div class="title">경고</div>
                  <button type="button" class="btn_close" @click="deleteOrg = false">닫기</button>
                </div>
                <div class="popup_cnt">
                  <p class="alert_txt">선택하신 관리기관을 삭제하시겠습니까?</p>
                </div>
                <div class="popbtn_area type-02">
                  <button type="button" class="btn form2" @click="deleteOrgFail()">취소</button>
                  <button type="button" class="btn form3" @click="deleteOrgSuccess()">확인</button>
                </div>
              </div>
            </div>
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">기관관리</span>
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
                            <th scope="row">관리기관명</th>
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
                                    <input type="text" value="" v-model="selectedOrgNm">
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
                  <p>관리기관 정보</p>
                  <div class="btn_area">
                    <button type="button" style="margin-right:10px" class="btn" @click="createData()">등록</button>
                  </div>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                          <col style="width:5%;">
                          <col style="width:7%;">
                          <col style="width:8%;">
                          <col style="width:8%;">
                          <col style="width:10%;">
                          <col style="width:14%;">
                          <col style="width:auto;">
                          <col style="width:10%;">
                          <col style="width:10%;">
                          <col style="width:10%;">
                        </colgroup>
                        <thead>
                            <tr>
                              <th scope="col">순번</th>
                              <th scope="col">기관ID</th>
                              <th scope="col">시/도</th>
                              <th scope="col">시/군/구</th>
                              <th scope="col">관리기관명</th>
                              <th scope="col">대표 전화번호</th>
                              <th scope="col">주소</th>
                              <th scope="col">세부주소</th>
                              <th scope="col">등록일시</th>
                              <th scope="col">수정일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                            <col style="width:5%;">
                            <col style="width:7%;">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:10%;">
                            <col style="width:14%;">
                            <col style="width:auto;">
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:10%;">
                            </colgroup>
                            <tbody >
                                <tr v-for="(item,index) in TorgItems" v-bind:key="index" :ref="`target_${index}`" @click="detailOrgpopup(index)">
                                  <td>{{index+1}}</td>
                                  <td>{{item.orgId}}</td>
                                  <td>{{item.sidoName}}</td>
                                  <td>{{item.sggName}}</td>
                                  <td>{{item.orgNm}}</td>
                                  <td>{{item.phoneNumber}}</td>
                                  <td>{{item.addr}}</td>
                                  <td>{{item.addrDetail}}</td>
                                  <td>{{item.regDtime}}</td>
                                  <td></td>
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
        sidoItems:[], sggItems:[], orgmItems:[], noticItems:[], TorgItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'', selectedOrgNm:'', selectedPhoneNumber:'',
        selectedUpdateSidoItems:'', selectedUpdateSggItems:'', selectedUpdateOrgItems:'',
        selectDetailsido:'',selectDetailSgg:'',selectDetailOrg:'',
        selectedAddr: '', selectedAddrDetail: '',
        writeOrg: false, changeOrg: false, deleteOrg: false, detailOrg: false,
        saveChangeData: null,
        detailOrgId: '',
        detailArr: [],
      }
    },
    created(){
      this.getSidoData();
      this.getSggData();
      this.getOrgmData();
      this.getTorgData();
      //this.getTorgData();
      //this.getUserData();
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
    getTorgData() {
      let addrCd = ''
      let sgg = this.sggCd.substring(0,5)
      if(this.selectedSidoItems != '' && this.selectedSggItems == ''){
        sgg = this.sidoCd.substring(0,2)
      }else if(this.selectedSggItems != ''){
        sgg = this.sggCd.substring(0,5)
      }else{
        sgg = ''
      }
      let uri = this.$store.state.serverApi + "/admin/organizations?orgId="+this.selectedOrgItems+"&orgNm="+this.selectedOrgNm+"&sggCd="+sgg;
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.TorgItems = response.data.data
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
    manageInquiry() {
        this.getTorgData();
    },
    createData(){
      this.selectedUpdateSidoItems = ''
      this.selectedUpdateSggItems = ''
      this.selectedUpdateOrgItems = ''
      this.selectedPhoneNumber = ''
      this.selectedSidoItems = ''
      this.writeOrg = true
    }, 
    detailOrgpopup(index){
      this.detailArr = this.TorgItems[index]
      this.selectedPhoneNumber = ''
      this.selectDetailsido = ''
      this.selectDetailSgg = ''
      this.selectDetailOrg = ''
      this.selectedAddr = ''
      this.selectedAddrDetail = ''

      this.selectedPhoneNumber = this.detailArr.phoneNumber
      this.selectDetailsido = this.detailArr.sidoName
      this.selectDetailSgg = this.detailArr.sggName
      this.selectDetailOrg = this.detailArr.orgNm
      this.selectedAddr = this.detailArr.addr
      this.selectedAddrDetail = this.detailArr.addrDetail
      this.detailOrg = true
      
    },
    changeOrgSuccess(){
      alert("성공적으로 변경되었습니다")
      this.changeOrg = false
      this.detailOrg = true
    },
    deleteOrgFail(){
      alert("취소되었습니다")
      this.deleteOrg = false
    },
    deleteOrgSuccess(){
      alert("성공적으로 삭제되었습니다")
      this.deleteOrg = false
      this.detailOrg = false
    },
    uploadData(){
      let addrCd = ''
      let sgg = this.sggCd.substring(0,5)
      if(this.selectedUpdateSidoItems != '' && this.selectedUpdateSggItems == ''){
        sgg = this.sidoCd.substring(0,2)
      }else if(this.selectedSggItems != ''){
        sgg = this.sggCd.substring(0,5)
      }else{
        sgg = ''
      }
      let tmpUploadData = {
        addr:this.selectedAddr,
        addrCd:this.selectedUpdateSggItems,
        addrDetail:this.selectedAddrDetail,
        orgCd:this.selectedUpdateOrgItems
      }
      alert("성공적으로 등록되었습니다")
      this.writeOrg = false
    }
    }
}
</script>
<style>
</style>