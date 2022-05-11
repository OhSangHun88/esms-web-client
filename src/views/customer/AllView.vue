<template>
  <div>
    <!-- <HeaderComp></HeaderComp> -->
    <div v-if="!this.pending" style="text-align: center;">
      <img src="../../assets/images/loading.png"  />
    </div>
          <!-- <div class="abtn"><CButton color="primary" @click="openUploadPopup" class="mr-1">엑셀 업로드</CButton></div>
          <div class="abtn"><CButton color="primary" @click="excelDownload" class="mr-1">엑셀 다운로드</CButton></div>
          <div class="abtn">
            <CButton color="primary" @click="addCustomer = true" class="mr-1">고객추가</CButton>
          </div> -->
    <div v-else  class="container">
      <div class="list_title_wrap">
        <span>대상자 관리</span>
        <i class="ico_nav"></i>
        <span class="on">대상자조회</span>
      </div>
      <div class="box_search_wrap add_btn box_style">
        <div class="table_wrap">
            <table>
                <colgroup>
                    <col style="width:23%;">
                    <col style="width:23.6%;">
                    <col style="width:23.6%">
                    <col style="width:23.6%;">
                    <col style="width:auto;">
                </colgroup>
                <thead>
                    <th scope="row">시/도</th>
                    <th scope="row">시/군/구</th>
                    <th scope="row">관리기관</th>
                    <th scope="row">대상자명</th>
                    
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
                            <input type="text" value=" " v-model="filterName" @keypress.enter="getFilteredRecipientData()">
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="btn_area">
            <button type="button" class="btn" @click="getRecipientData()">조회</button>
        </div>
      </div>
    <div class="one_box box_style">
        <div class="result_txt">
            <p>조회결과 : {{ recipientItems ? recipientItems.length : 0}}건</p>
        </div>
        <div class="list result">
            <table>
                <colgroup>
                    <col style="width:8%;">
                    <col style="width:8%;">
                    <col style="width:8%;">
                    <col style="width:5%;">
                    <col style="width:10%;"><!--전번-->
                    <col style="width:8%;">
                    <col style="width:8%;">
                    <col style="width:auto;">
                    <col style="width:8%;">
                    <col style="width:8%;">
                    <col style="width:10%;"><!--등록시간-->
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col">대상자명</th>
                        <th scope="col">생년월일</th>
                        <th scope="col">나이</th>
                        <th scope="col">성별</th>
                        <th scope="col">전화번호</th>
                        <th scope="col">구분</th>
                        <th scope="col">상태</th>
                        <th scope="col">주소</th>
                        <th scope="col">관리기관</th>
                        <th scope="col">생활관리사</th>
                        <th scope="col">등록시간</th>
                    </tr>
                </thead>
            </table>
            <div class="tbody">
                <table>
                    <colgroup>
                        <col style="width:8%;">
                        <col style="width:8%;">
                        <col style="width:8%;">
                        <col style="width:5%;">
                        <col style="width:10%;"><!--전번-->
                        <col style="width:8%;">
                        <col style="width:8%;">
                        <col style="width:auto;">
                        <col style="width:8%;">
                        <col style="width:8%;">
                        <col style="width:10%;"><!--등록시간-->
                    </colgroup>
                    <tbody>
                        <tr v-for="(item,index) in recipientItems" v-bind:key="index" @click="goToDetailView(item.recipientId)">
                            
                            <td><a href="#" >{{item.recipientNm}}</a></td>
                            <td><a href="#">{{item.birthday}}</a></td>
                            <td><a href="#">{{makeAge(item.birthday) }}</a></td>
                            <td><a href="#">{{item.sex==="M"?'남':'여'}}</a></td>
                            <td><a href="#">{{changeRecipientPhoneno(item.recipientPhoneno)}}</a></td>
                            <td><a href="#">{{item.typeNm}}</a></td>
                            <td><a href="#">{{item.stateNm}}</a></td>
                            <td style="text-align: left;"><a href="#" >{{item.addr}}</a></td>
                            <td style="text-align: left;"><a href="#">{{item.orgNm}}</a></td>
                            <td><a href="#">{{item.managerNm}}</a></td>
                            <td><a href="#">{{$moment(item.regDtime).format('YYYY-MM-DD')}}</a></td>
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
    <!--<CRow>
      <CCol>
        <CCard>
          <CForm class="opt_select">
            <CSelect
                class="paddingSel"
                style="width: 300px"
                label="기관관리"
                :options="orgmItems"
                @change="onChangeOrg($event)"
                :value.sync="modelOrg"
            />
            <CSelect
                class="paddingSel"
                style="width: 140px"
                label="구분"
                :options="partItems"
                @change="onChangePart($event)"
                :value.sync="modelPart"
            />
            <CSelect
                class="paddingSel"
                style="width: 150px"
                label="상태"
                :options="statusItems"
                @change="onChangeStatus($event)"
                :value.sync="modelStatus"
            />
            <CInput
                type="text"
                style="width: 200px"
                class="paddingSel"
                label="이름"
                v-model="modelName"
            />
            <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">검색</CButton>
            <CButton block variant="outline" color="primary" class="initBtn"  v-on:click="initSet">초기화</CButton>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          CCardHeader class="header-del">
            <slot name="header">
              <strong style="color:#5d66ff;">{{caption}}</strong>
              <div class="pbtn">해제</div>
            </slot>
          </CCardHeader
          <CCardBody>
            <CDataTable
                class="mb-0 table-clear thBorder tdBorder thText"
                hover
                :items="recipientItems"
                :fields="recipientFields"
                head-color="light"
                sorting
            >
              <td slot="detail" style="text-align: center;width: 90px;" slot-scope="{item}">
                <CButton color="info" variant="outline" style="padding: 0.15rem 0.55rem" v-on:click="detailCustomerView(item.recipientId, item.orgNm)">상세</CButton>
              </td>
              <td slot="delete" style="text-align: center;width: 90px;" slot-scope="{item}">
                <CButton color="info" variant="outline" style="padding: 0.15rem 0.55rem" v-on:click="detailCustomerView(item.recipientId, item.orgNm)">해제</CButton>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CModal
        class="addCustomer"
        title="고객추가"
        :show.sync="addCustomer"
    >
      <CContainer>
        <CCard class="cardModal" >
          <CCardBody class="cbody">
            <CRow>
              <CCol md="3">
              </CCol>
              <CCol md="9">
                <CRow>
                  <CCol>이름</CCol>
                  <CCol>생년월일</CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CInput type="text" v-model="cName" style="width: 130px" />
                  </CCol>
                  <CCol>
                    <CInput type="date" v-model="cBirthday" style="width: 190px" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="3">
              </CCol>
              <CCol md="9">
                <CRow>
                  <CCol>휴대폰번호</CCol>
                  <CCol>성별</CCol>
                  <CCol>사회복지사</CCol>
                </CRow>
                <CRow>
                  <CCol><CInput type="text" v-model="cPhone" style="width: 130px" /></CCol>
                  <CCol>
                    <CSelect
                        :options="sexItems"
                        v-model="cSex"
                        @change="onChangeSex($event)"
                        style="width: 105px"
                    /></CCol>
                  <CCol><CInput type="text" v-model="cSocial" style="width: 110px" /></CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="3">
              </CCol>
              <CCol md="9">
                <CRow>
                  <CCol>
                    <CSelect
                        label="구분"
                        :options="partItems"
                        v-model="cPart"
                        @change="onChangePart($event)"
                        style="width: 105px"
                    />
                  </CCol>
                  <CCol>
                    <CSelect
                        label="상태"
                        :options="statusItems"
                        @change="onChangeStatus($event)"
                        v-model="cStatus"
                        style="width: 105px"
                    />
                  </CCol>
                  <CCol>
                    <CSelect
                        label="미감지주기"
                        :options="cycleItems"
                        @change="onChangeCycle($event)"
                        v-model="cCycle"
                        style="width: 105px"
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="12">
                <CRow>
                  <CCol md="2">주소</CCol>
                  <CCol md="10" class="emailBtn">
                    <CButton block color="primary" @click="findPostCode" style="width: 120px;">우편번호찾기</CButton>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol md="2"><CInput type="text" v-model="cAddr" style="width: 80px" /></CCol>
                  <CCol md="10"><CInput type="text" v-model="cDetail" style="width: 465px" /></CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="6">
                <CButton block color="primary" @click="customAdd">추가</CButton>
              </CCol>
              <CCol md="6">
                <CButton block variant="outline" @click="customCancel" color="primary">취소</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </CModal>

    <CModal
        class="addCustomer"
        title="엑셀파일 업로드"
        :show.sync="fileUpload"
    >
      <CContainer>
        <CCard class="cardModal" >
          <CCardBody class="cbody">
            <CRow>
              <CCol md="12">
                <CInput
                    type="file"
                    class="paddingSel"
                    label="파일선택"
                    v-model="fileName"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md="6">
                <CButton block color="primary" @click="excelUpload">업로드</CButton>
              </CCol>
              <CCol md="6">
                <CButton block variant="outline" @click="fileUpload = false" color="primary">취소</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </CModal>-->
  </div>

</template>

<script>
import axios from "axios";
import moment from "moment";
import HeaderComp from "../pages/HeaderComp.vue";

export default {
  name: "AllView",
  components :{
    HeaderComp
  },
  data () {
    return {
      pending:true, cName: '', cBirthday: '', cPhone: '', cSex: '', cSocial: '', cPart: '', cStatus: '', cCycle: '', cAddr: '', cDetail: '',
      caption: '', fileName: '',
      counter: 0,pageIndex: 1,
      orgmItems: [], partItems: [], statusItems: [], cycleItems: [], sexItems:[{label: '남', value: 'M'}, {label: '여', value: 'F'}],
      orgCode: '', partCode: '', statusCode: '', sexCode: '', cycleCode: '',selectedSidoItems: '', selectedSggItems: '', selectedOrgItems: '',
      modelOrg: '', modelPart: '', modelStatus: '', modelName: '',
      orgNm:'',orgId:'', sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
      sidoItems:[], sggItems:[],  actItems:[], recipientItems:[],recipientOrginItems:[], orgSido:'', orgSgg:'', filterName:'',
      recipientFields: [
        { key: 'orgNm', label: '기관관리', _classes: 'text-center' },
        { key: 'typeNm', label: '구분', _classes: 'text-center' },
        { key: 'stateNm', label: '상태' , _classes: 'text-center'},
        { key: 'activeUnsensingCycle', label: '미감지주기', _classes: 'text-center' },
        { key: 'recipientNm', label: '이름', _classes: 'text-center' },
        { key: 'sex', label: '성별', _classes: 'text-center' },
        { key: 'addr', label: '주소', _classes: 'text-center' },
        { key: 'careLevelNm', label: '기기', _classes: 'text-center' },
        { key: 'managerNm', label: '사회복지사', _classes: 'text-center' },
        { key: 'birthday', label: '생일', _classes: 'text-center' },
      
        { key: 'detail', label: '', _classes: 'text-center' },
        { key: 'delete', label: '', _classes: 'text-center' },    
      ],
      addCustomer: false, fileUpload: false,

    }
  },
  created() {
    this.pending = false
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    
    this.getRecipientData();
    //this.getPartData();
    //this.getStatusData();
    //this.getCycleData();
    this.cBirthday=moment().format('YYYY-MM-DD');
    this.s_date=moment().subtract(7, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.pending = true
  },
  methods: {
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
          console.log("this.sggItems ")
          console.log(this.sggItems)
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
        console.log(this.orgmItems)
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
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
    onChangeSido(event){
      this.getSggData()
      this.orgSido = event.target.value;
    },
  // onChangePart(event) {
  //     this.partCode = event.target.value;
  // },
  // onChangeStatus(event) {
  //     this.statusCode = event.target.value;
  // },
  // initSet() {
  //     this.orgCode='';
  //     this.partCode='';
  //     this.statusCode='';
  //     this.sexCode='';
  //     this.cycleCode='';
  //     this.modelName='';
  //     this.modelOrg="전체";
  //     this.modelPart="전체";
  //     this.modelStatus="전체";
  // },
  getFilteredRecipientData(){
    
    const regExp1 = this.selectedOrgItems !=='' ? new RegExp(this.selectedOrgItems, 'gi') : '';
    const regExp2 = this.filterName !=='' ? new RegExp(this.filterName, 'gi') : '';
    
    let tmpData = this.recipientItems
    
    if( this.filterName || this.selectedOrgItems ){
      
      this.recipientItems = tmpData.filter(ri=>{
      return ri.orgId.match(regExp1)&&ri.recipientNm.match(regExp2)
    })
    }else 
      return this.recipientItems = this.recipientOrginItems
  },
  getRecipientData() {
    let uri = '';
    let addrCd = ''
    if(this.selectedSidoItems != '' && this.selectedSggItems == ''){
        addrCd = this.sidoCd.substring(0,2)
        console.log(addrCd)
      }else if(this.selectedSggItems != ''){
        addrCd = this.sggCd.substring(0,5)
      }else{
        addrCd = ''
      }
    if(this.selectedOrgItems == '' && this.filterName == ''&& this.selectedSidoItems == ''&& this.selectedSggItems == '') {
      uri = this.$store.state.serverApi + "/admin/recipients?pageIndex=1&recordCountPerPage=100";
    } else {
      uri = this.$store.state.serverApi + "/admin/recipients?pageIndex=1&recordCountPerPage=100";
      uri += "&addrCd="+addrCd;
      if(this.selectedOrgItems != '') uri += "&orgId=" + this.selectedOrgItems;
      if(this.filterName != '') uri += "&recipientNm=" + this.filterName;
      console.log("uri")
      console.log(uri)

      // var fIdx = uri.indexOf("&", 0);
      // var uriArray = uri.split('');
      // uriArray.splice(fIdx, 1);
      // uri = uriArray.join('');
    }
    console.log(uri)

    axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(response => {
          this.recipientItems = response.data.data
          this.recipientOrginItems = response.data.data
          console.log("this.recipientItems")
          console.log(this.recipientItems)
          // this.recipientItems = [];
          // for(let i=0; i<response.data.data.length; i++) {
          //   this.recipientItems.push({
          //     recipientId:response.data.data[i].recipientId,
          //     orgNm:response.data.data[i].orgNm,
          //     typeNm:response.data.data[i].typeNm,
          //     stateNm:response.data.data[i].stateNm,
          //     activeUnsensingCycle:response.data.data[i].activeUnsensingCycle,
          //     recipientNm:response.data.data[i].recipientNm,
          //     sex:response.data.data[i].sex,
          //     addr:response.data.data[i].addr,
          //     careLevelNm:response.data.data[i].careLevelNm,
          //     managerNm:response.data.data[i].managerNm,
          //     detail:'',
          //     delete:''
          //   })
          // }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
  },
  changeRecipientPhoneno(phone){
    if(phone){
      let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
      return changeNumber
    }else{
      return ''
    }
    
  },


    // getPartData() {
    //   axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=RECIPIENT.TYPECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //       .then(response => {
    //         this.partItems=[];
    //         this.partItems.push({label: '전체', value: ''});
    //         for(let i=0; i<response.data.data.length; i++) {
    //           this.partItems.push({
    //             label: response.data.data[i].cmmnCdNm,
    //             value: response.data.data[i].cmmnCd
    //           });
    //         }
    //       })
    //       .catch(error => {
    //         this.errorMessage = error.message;
    //         console.error("There was an error!", error);
    //       });
    // },
    // getCycleData() {
    //   axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=RECIPIENT.LEVELCD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //       .then(response => {
    //         this.cycleItems=[];
    //         this.cycleItems.push({label: '전체', value: ''});
    //         for(let i=0; i<response.data.data.length; i++) {
    //           this.cycleItems.push({
    //             label: response.data.data[i].cmmnCdNm,
    //             value: response.data.data[i].cmmnCd
    //           });
    //         }
    //       })
    //       .catch(error => {
    //         this.errorMessage = error.message;
    //         console.error("There was an error!", error);
    //       });
    // },
    // getStatusData() {
    //   axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=RECIPIENT.STATECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //       .then(response => {
    //         this.statusItems=[];
    //         this.statusItems.push({label: '전체', value: ''});
    //         for(let i=0; i<response.data.data.length; i++) {
    //           this.statusItems.push({
    //             label: response.data.data[i].cmmnCdNm,
    //             value: response.data.data[i].cmmnCd
    //           });
    //         }
    //       })
    //       .catch(error => {
    //         this.errorMessage = error.message;
    //         console.error("There was an error!", error);
    //       });
    // },
    // say: function (message) {
    //   alert(message)
    // },
    // detailCustomerView(recipId, orgm) {
    //   sessionStorage.setItem("recipid", recipId);
    //   sessionStorage.setItem("orgm", orgm);
    //   this.$router.push('detailView');
    // },
    
    // onChangePart(event) {
    //   this.partCode = event.target.value;
    // },
    // onChangeStatus(event) {
    //   this.statusCode = event.target.value;
    // },
    // onChangeSex(event) {
    //   this.sexCode = event.target.value;
    // },
    // onChangeCycle(event) {
    //   this.cycleCode = event.target.value;
    // },
    // manageInquiry() {
    //   this.getRecipientData();
    // },
    // findPostCode() {
    //   axios.get("https://www.juso.go.kr/addrlink/addrLinkApiJsonp.do");
    // },
    // initSet() {
    //   this.orgCode='';
    //   this.partCode='';
    //   this.statusCode='';
    //   this.sexCode='';
    //   this.cycleCode='';
    //   this.modelName='';
    //   this.modelOrg="전체";
    //   this.modelPart="전체";
    //   this.modelStatus="전체";
    // },
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
    goToDetailView(recipientId) {
      this.$router.push({
                path : `/customer/DetailView/${recipientId}`
        })
    }

    // openUploadPopup() {
    //   this.fileUpload=true;
    // },
    // excelUpload() {
    //   let bodyFormData = new FormData();
    //   bodyFormData.append('file', this.fileName);

    //   const headers = {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': "Bearer " + sessionStorage.getItem("token")
    //   }
    //   let self = this;
    //   axios({
    //     method: "post",
    //     url: this.$store.state.serverApi + '/recipient/excel/upload',
    //     data: bodyFormData,
    //     headers: headers,
    //   })
    //   .then(function (response) {
    //     if(response.data.data() == true){
    //       self.fileUpload=false;
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });

    // },
    // excelDownload() {
    //   let uri = this.$store.state.serverApi + '/sensors/excel/download';
    //   axios.get(uri, {
    //     file_name: "test.xlsx"
    //   }, {
    //     responseType: 'blob'
    //   }).then((response) => {

    //     const url = URL.createObjectURL(new Blob([response.data], {
    //       type: 'application/vnd.ms-excel'
    //     }))
    //     const link = document.createElement('a')
    //     link.href = url
    //     link.setAttribute('download', "test.xlsx")
    //     document.body.appendChild(link)
    //     link.click()
    //   });
    // },
    // customAdd() {
    //   if(this.orgCode == '') {
    //     alert("관리기관을 선택하여 주세요.");
    //     return;
    //   }

    //   let bodyFormData = new FormData();
    //   bodyFormData.append('orgId', this.orgCode);
    //   bodyFormData.append('recipientNm', this.cName);
    //   bodyFormData.append('birthday', this.cBirthday);
    //   bodyFormData.append('sex', this.sexCode);
    //   bodyFormData.append('addr', this.cAddr);
    //   bodyFormData.append('addrDetail', this.cDetail);
    //   bodyFormData.append('recipientPhoneno', this.cPhone);
    //   bodyFormData.append('typeCd', this.partCode);
    //   bodyFormData.append('stateCd', this.statusCode);
    //   bodyFormData.append('activeUnsensingCycle', this.cycleCode);
    //   bodyFormData.append('sigunguCd', '????');

    //   const headers = {
    //     'Content-Type': 'multipart/form-data',
    //     'Authorization': "Bearer " + sessionStorage.getItem("token")
    //   }
    //   let self = this;
    //   axios({
    //     method: "post",
    //     url: this.$store.state.serverApi + '/recipients',
    //     data: bodyFormData,
    //     headers: headers,
    //   })
    //   .then(function (response) {
    //     if(response.data.totalCount > 0){
    //       self.getRecipientData();
    //       self.addCustomer=false;
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (response) {
    //     //handle error
    //     console.log(response);
    //   });
    // },
    // customCancel() {
    //   this.addCustomer=false;
    // },
    
  },
  
}
</script>
<style>
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
.tdBorder table td {
  border-top: 0px;
  border-bottom: 1px solid;
  border-bottom-color: #d8dbe0;
}
.table-clear td {
  border: 1px;
}
.header-del {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.opt_select {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.paddingSel {
  padding: 20px;
}
.cardModal {
  border: none;
  margin-bottom: 0;
}
.addCustomer .modal-dialog{
  max-width: 650px;
}
.emailBtn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px;
}
.modal-footer {
  display: none;
}
.searchBtn {
  width: 70px;
  right: 115px;
  position: absolute;
  margin-top: 10px;
}
.initBtn {
  width: 70px;
  right: 22px;
  position: absolute;
  margin-top: -1px;
  margin-top: 45px;
}
</style>
