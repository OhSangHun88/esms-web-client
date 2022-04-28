<template>
  <div class="wrap">
    <HeaderComp></HeaderComp>
    <div v-if="!this.pending" style="text-align: center;">
      <img src="../../assets/images/loading.png"  />
    </div>
    <div v-else class="container">
      
      <div class="box_search_wrap box_style">
          <table>
              <colgroup>
                  <col style="width:7.8%;">
                  <col style="width:7.8%;">
                  <col style="width:6%;">
                  <col style="width:auto;">
                  <col style="width:6.82%;">
                  <col style="width:9.091%;">
                  <col style="width:6.82%;">
                  <col style="width:18.17%;">
              </colgroup>
              <thead>
                  <th scope="row">대상자 이름</th>
                  <th scope="row">생년월일</th>
                  <th scope="row">나이</th>
                  <th scope="row">주소</th>
                  <th scope="row">성별</th>
                  <th scope="row">전화번호</th>
                  <th scope="col">활동미감지(분)</th>
                  <th scope="col">관리기관</th>
              </thead>
              <tbody>
                <tr>
                    <td>
                        <input type="text" :value="this.bodyData? this.bodyData.recipientNm : ''">
                    </td>
                    <td>
                        <input type="text" :value=" this.bodyData? this.bodyData.birthday : ''">
                    </td>
                    <td>
                        <input type="text" class="size-1" :value="this.bodyData? makeAge(this.bodyData.birthday) : ''">
                    </td>
                    <td>
                        <input type="text" class="size-4" :value="this.bodyData? this.bodyData.addr : ''">
                        <input type="text" class="size-2" :value="this.bodyData? this.bodyData.addrDetail : ''">
                    </td>
                    <td>
                        <div class="btn_area">
                            <button type="button" :class="this.bodyData && this.bodyData.sex === 'M'? 'btn on' :'btn'">남</button>
                            <button type="button" :class="this.bodyData && this.bodyData.sex === 'F'? 'btn on' :'btn'">여</button>
                        </div>
                    </td>
                    <td>
                        <input type="text" :value="this.bodyData? changeRecipientPhoneno(this.bodyData.recipientPhoneno) : ''">
                    </td>
                    <td>
                        <input type="text" class="size-1" :value="this.bodyData? this.bodyData.measureCycle : ''">
                    </td>
                    <td>
                        <input type="text" class="size-3" :value="this.bodyData? this.bodyData.orgNm : ''">
                    </td>
                </tr>
            </tbody>


          </table>
      </div>
      
      <div class="box_wrap">
          <div class="box_l">
              <div class="box_style box_col">
                  <div class="info_wrap_1">
                      <div class="tab">
                          <ul class="tabnav">
                              <li :class="menutoggle===1?'active':''"><a href="#" @click="menu(1)">현재상태</a></li>
                              <li :class="menutoggle===3?'active':''"><a href="#" @click="menu(3)">말벗</a></li>
                              <li :class="menutoggle===2?'active':''"><a href="#" @click="menu(2)">응급요원</a></li>
                              <li :class="menutoggle===4?'active':''"><a href="#" @click="menu(4)">생활관리사</a></li>
                          </ul>
                          <div class="tabcontent">
                            <!-- :recipientId="this.recipientId" -->
                            <menu1 :recipientId="this.recipientId" v-if="this.menutoggle===1"></menu1>
                            <menu3 ref="menu3"
                                   :recipientId="this.recipientId" 
                                   :menu3Refresh="this.menu3Refresh"
                                   v-if="this.menutoggle===3" 
                                   @sendData1="getFromMenuData" 
                                   @openPop="openModal"
                                   @openPopMsg="openModalMsg"
                                   @sendMenu3Lending="menu3Lending"></menu3>  
                            <menu2 :recipientId="this.recipientId" v-if="this.menutoggle===2"></menu2>  
                            <menu4 :recipientId="this.recipientId" v-if="this.menutoggle===4"></menu4>

                                
                          </div>
                      </div><!--tab-->
                  </div>
              </div>
              
              <div class="box_style box_col map map_box">
                  <div id="map"></div>
              </div>
          </div>
          <div class="box_style box_r">
              <div class="info_wrap_2">
                  <div class="tab">
                      <ul class="tabnav">
                          <li :class="taptoggle===1?'active':''"><a href="#" @click="tap(1)">수집정보</a></li>
                          <li :class="taptoggle===2?'active':''"><a href="#" @click="tap(2)">응급신호</a></li>
                          <li :class="taptoggle===3?'active':''"><a href="#" @click="tap(3)">통화이력</a></li>
                          <li :class="taptoggle===4?'active':''"><a href="#" @click="tap(4)">연결장비</a></li>
                          <li :class="taptoggle===5?'active':''"><a href="#" @click="tap(5)">주기설정</a></li>
                      </ul>
                      <tap1 v-if="this.taptoggle===1" :recipientId="this.recipientId"></tap1>
                      <tap2 v-if="this.taptoggle===2" :recipientId="this.recipientId"></tap2>
                      <tap3 v-if="this.taptoggle===3" :recipientId="this.recipientId"></tap3>
                      <tap4 v-if="this.taptoggle===4" :recipientId="this.recipientId"></tap4>
                      <tap5 v-if="this.taptoggle===5" :recipientId="this.recipientId"></tap5>
                  </div><!--tab-->
              </div>
          </div>
      </div>
    </div>
    <div id="" class="popupLayer" v-if="popCheck">
      <div class="popup_wrap">
          <div class="title_wrap">
              <div class="title">{{this.msg}} 추가</div>
              <button type="button" class="btn_close" @click="closeModal">닫기</button>
          </div>
          <div class="popup_cnt">
            <div class="input_wrap">
                <div class="input_area">
                  <p class="input_tit">이름</p>
                  <input type="text" v-model="managerName">
                </div>
                <!-- <div class="input_area">
                    <p class="input_tit">생년월일</p>
                    <input type="text" value="">
                </div> -->
                <div class="input_area">
                    <p class="input_tit">휴대폰번호</p>
                    <input type="text" v-model="managerPhone">
                </div>
                <div class="input_area">
                    <p class="input_tit">관계</p>
                    <select name="managerRelationCd" id="managerRelationCd" v-model="managerRelationCd" > <!--v-model="managerRelationNm"-->
                      <option v-for="(items, index ) in relationArr" v-bind:value="items.value" v-bind:key="index"> 
                          {{ items.text }}
                      </option>
                    </select> 
                </div>
            </div>
            <!-- <div class="input_wrap type-02">
                <div class="input_area">
                    <p class="input_tit">이메일</p>
                    <input type="text" v-model="managerEMail">
                </div>
                <div class="btn_area">
                    <p class="input_tit">생년월일</p>
                    <div class="toggle_btn">
                        <button type="button" class="btn on">남</button>
                        <button type="button" class="btn">여</button>
                    </div>
                </div> 
            </div>-->
            <!--<div class="input_wrap type-02">
                <div class="input_area">
                    <p class="input_tit">관리기관</p>
                    <input type="text" v-model="managerRelationOrg">
                         <option value="">경기도 용인시 사회복지관 2관</option> 
                    </select> 
                </div>
                 <div class="input_area size-s">
                    <p class="input_tit">담당지역</p>
                    <input type="text" value="풍덕천 1동">
                </div> 
            </div>-->
              <!-- <div class="input_wrap">
                  <div class="input_area">
                      <p class="input_tit">상태</p>
                      <select name="" id="">
                          <option value="">근무중</option>
                      </select>
                  </div>
                  <div class="input_area">
                      <p class="input_tit">입사일</p>
                      <input type="text" value="2022.06.23">
                  </div>
                  <div class="input_area">
                      <p class="input_tit">퇴사일</p>
                      <input type="text" disabled>
                  </div>
              </div> -->
          </div>
          <div class="popbtn_area">
              <button type="button" class="btn" @click="closeModal">취소</button>
              <button type="button" class="btn form2" @click="insertManager()">추가</button>
          </div>
      </div>
    </div>
    <!-- <CRow>
      <CCol xs="12" lg="5">
        <CCard class="mx-6 mb-0" >
          <CCardBody class="p-6">
            <CForm>
              <CRow>
                <CCol md="3">
                </CCol>
                <CCol md="9">
                  <CRow>
                    <CCol>휴대폰번호</CCol>
                    <CCol>성별</CCol>
                    <CCol>미감지주기</CCol>
                  </CRow>
                  <CRow>
                    <CCol><CInput v-model="d_phone" type="text" /></CCol>
                    <CCol><CInput v-model="d_sex" type="text" /></CCol>
                    <CCol><CInput v-model="d_endcycle" type="text" /></CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="3">
                </CCol>
                <CCol md="9">
                  <CRow>
                    <CCol>구분</CCol>
                    <CCol>상태</CCol>
                  </CRow>
                  <CRow>
                    <CCol><CInput type="text" v-model="d_part" /></CCol>
                    <CCol><CInput type="text" v-model="d_status" /></CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol md="12">
                  <CRow>
                    <CCol md="2">주소</CCol>
                    <CCol md="10"></CCol>
                  </CRow>
                  <CRow>
                    <CCol md="2"><CInput type="text" v-model="d_zipCode" /></CCol>
                    <CCol md="10"><CInput type="text" v-model="d_address"  /></CCol>
                  </CRow>
                </CCol>
              </CRow>

            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs="12" lg="7">
        <CTabs>
          <CTab title="응급요원" active >
            <CEmPerson/>
          </CTab>
          <CTab title="가족" >
            <CFamily/>
          </CTab>
          <CTab title="사회복지사" >
            <CSocilaWork/>
          </CTab>
        </CTabs>

      </CCol>
    </CRow>
    <br>
    <CRow>
      <CCol xs="12" lg="12">
        <CTabs>
          <CTab title="수집정보">
            <CCollectInfo/>
          </CTab>
          <CTab title="응급신호">
            <CEmSignal/>
          </CTab>
          <CTab title="방문일지" active>
            <CVisitLog/>
          </CTab>
          <CTab title="통화이력">
            <CCallHistory/>
          </CTab>
          <CTab title="연결장비">
            <CConnectDevice/>
          </CTab>
          <CTab title="주기설정">
            <CCycleSetting/>
          </CTab>
        </CTabs>
      </CCol>
    </CRow> -->
  </div>
</template>

<script>
// import CEmPerson from "./detailpage/EmPerson";
// import CVisitLog from "./detailpage/VisitLog";
// import CCollectInfo from "./detailpage/CollectInfo";
// import CFamily from "./detailpage/Family";
// import CSocilaWork from "./detailpage/SocilaWork";
// import CEmSignal from "./detailpage/EmSignal";
// import CCallHistory from "./detailpage/CallHistory";
// import CConnectDevice from "./detailpage/ConnectDevice";
// import CCycleSetting from "./detailpage/CycleSetting";
import axios from "axios";
import HeaderComp from "../pages/HeaderComp.vue";
import tap1 from "./detailpage/Tap1.vue";
import tap2 from "./detailpage/Tap2.vue";
import tap3 from "./detailpage/Tap3.vue";
import tap4 from "./detailpage/Tap4.vue";
import tap5 from "./detailpage/Tap5.vue";
import menu1 from "./detailpage/Menu1.vue";
import menu2 from "./detailpage/Menu2.vue";
import menu3 from "./detailpage/Menu3.vue";
import menu4 from "./detailpage/Menu4.vue";

export default {
  name: "DetailView",
  data () {
    return {
      pending:true,
      d_phone: '', d_sex: '', d_endcycle: '', d_part: '', d_status: '', d_zipCode: '', d_address: '', personinfo: '',
      recipientId: '',taptoggle:1, bodyData : null, menutoggle: 1,popCheck:false,insertData:null,msg: null,
      managerName: null,managerPhone: null,managerRelationNm: null,managerRelationCd:null,menu3Refresh:1,
      relationArr : [{value:'RL001', text: '남편'},{value:'RL002', text: '와이프'},{value:'RL003', text: '아들'},{value:'RL004', text: '딸'},{value:'RL005', text: '사위'},{value:'RL006', text: '며느리'},{value:'RL007', text: '손자'},{value:'RL008', text: '손녀'},{value:'RL009' , text:'기타'},]
    }
  },
  components: {
    // CEmPerson,
    // CVisitLog,
    // CCollectInfo,
    // CFamily,
    // CSocilaWork,
    // CEmSignal,
    // CCallHistory,
    // CConnectDevice,
    // CCycleSetting,
    HeaderComp,
    tap1,
    tap2,
    tap3,
    tap4,
    tap5,
    menu1,
    menu2,
    menu3,
    menu4,
  },
  methods: {
    getFromMenuData(data) {console.log(data);},
    openModal(data) {this.popCheck = data},
    openModalMsg(data) {this.msg = data},
    menu3Lending(data) {this.menu3Refresh = data},
    closeModal() {this.popCheck = false},
    async getRecipientInfo() {
      //this.$store.mutation.logout
      //let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid");
      let uri = this.$store.state.serverApi + "/admin/recipients/" + this.recipientId
      console.log(uri)
      await axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.bodyData = res.data.data
            console.log("bodyData is ");
            console.log(this.bodyData)
            
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    tap(value){
      switch (value){
          case 1 : this.taptoggle=1 ;break;
          case 2 : this.taptoggle=2 ;break;
          case 3 : this.taptoggle=3 ;break;
          case 4 : this.taptoggle=4 ;break;
          case 5 : this.taptoggle=5 ;break;

      }
    },
    menu(value){
      switch (value){
          case 1 : this.menutoggle=1 ;break;
          case 2 : this.menutoggle=2 ;break;
          case 3 : this.menutoggle=3 ;break;
          case 4 : this.menutoggle=4 ;break;

      }
    },
    
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
    makeMapData(){
        let addr = ''
        if(!this.bodyData){
          console.log("지도 오류 주소코딩중...")
          addr =  '경기도 과천시 별양로 85(별양동, 주공아파트)'
        }else {
          addr = this.bodyData.addr
        }
        const container = document.getElementById("map");
        const mapOptions = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 5
        }
        let map = new kakao.maps.Map(container, mapOptions)
        let geocoder =  new daum.maps.services.Geocoder();
        geocoder.addressSearch(addr, (result, status)=>{
          if(status === kakao.maps.services.Status.OK){
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log("coords")
            console.log(coords)
            let marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            // let infowindow = new kakao.maps.InfoWindow({
            //     content: `'<div style="width:150px;text-align:center;padding:6px 0;">이름 입력</div>'`
            // });
            // infowindow.open(map, marker);
            map.setCenter(coords);
          }
          else
            console.log("fail")
        })
    },
    changeRecipientPhoneno(phone){
      if(phone){
        let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        return changeNumber
      }else{
        return ''
      }
    
    },
    insertManager(){
      // /recipients/{recipientId}/phoneNumbers
      let uri = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers/save`
      this.managerRelationNm = this.relationArr.filter(cd=>{
       return cd.value === this.managerRelationCd
      })[0].text
      console.log(this.managerRelationNm)
      let data = {
        recipientId: this.recipientId,
        relationNm: this.managerName,
        relationPhone: this.managerPhone,
        relationCd: this.managerRelationCd, 
        relationCdNm: this.managerRelationNm,
        typeCd: "TPE008"
      }

      console.log(data)
      axios.post(uri,data, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.insertData = res.data.data
            this.$refs.menu3.sendMenu3Lending();
            this.popCheck = false
            console.log("insertData is ");
            console.log(this.insertData)
            
            alert("등록성공")
            
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          
    },

  },
  created() {
    this.pending = false;
    this.recipientId = this.$route.params.recipientId
    this.getRecipientInfo();
    this.pending = true;
  },
  mounted(){
    
    const script = document.createElement("script");
    script.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dafa9c5bd954ba036f344060208e1e83&libraries=services";
    script.addEventListener("load", ()=>{
      kakao.maps.load(this.makeMapData)
    })
    document.head.appendChild(script);
    
  }

}
</script>

<style scoped>
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
#map{
  width : 720px;
  height : 400px;
}
</style>
