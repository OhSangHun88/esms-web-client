<template>
  <div class="wrap">
    <HeaderComp></HeaderComp>
    <div class="container">
      
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
                  <th scope="row">이름</th>
                  <th scope="row">생년월일</th>
                  <th scope="row">나이</th>
                  <th scope="row">주소</th>
                  <th scope="row">성별</th>
                  <th scope="row">전화번호</th>
                  <th scope="col">감지주기</th>
                  <th scope="col">관리기관</th>
              </thead>
              <tbody>
                <tr>
                    <td>
                        <input type="text" :value="this.bodyData.recipientNm">
                    </td>
                    <td>
                        <input type="text" :value="this.bodyData.birthday">
                    </td>
                    <td>
                        <input type="text" class="size-1" :value="makeAge(this.bodyData.birthday)">
                    </td>
                    <td>
                        <input type="text" class="size-4" :value="this.bodyData.addr">
                        <input type="text" class="size-2" :value="this.bodyData.addrDetail">
                    </td>
                    <td>
                        <div class="btn_area">
                            <button type="button" :class="this.bodyData.sex === 'M'? 'btn on' :'btn'">남</button>
                            <button type="button" :class="this.bodyData.sex === 'F'? 'btn on' :'btn'">여</button>
                        </div>
                    </td>
                    <td>
                        <input type="text" :value="this.bodyData.recipientPhoneno">
                    </td>
                    <td>
                        <input type="text" class="size-1" :value="this.bodyData.measureCycle">
                    </td>
                    <td>
                        <input type="text" class="size-3" :value="this.bodyData.orgNm">
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
                              <li :class="menutoggle===2?'active':''"><a href="#" @click="menu(2)">응급요원</a></li>
                              <li :class="menutoggle===3?'active':''"><a href="#" @click="menu(3)">말벗</a></li>
                              <li :class="menutoggle===4?'active':''"><a href="#" @click="menu(4)">생활관리사</a></li>
                          </ul>
                          <div class="tabcontent">
                            <!-- :recipientId="this.recipientId" -->
                            <menu1 :recipientId="this.recipientId" v-if="this.menutoggle===1"></menu1>
                            <menu2 :recipientId="this.recipientId" v-if="this.menutoggle===2"></menu2>  
                            <menu3 :recipientId="this.recipientId" v-if="this.menutoggle===3"></menu3>  
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
import CEmPerson from "./detailpage/EmPerson";
import CVisitLog from "./detailpage/VisitLog";
import CCollectInfo from "./detailpage/CollectInfo";
import CFamily from "./detailpage/Family";
import CSocilaWork from "./detailpage/SocilaWork";
import CEmSignal from "./detailpage/EmSignal";
import CCallHistory from "./detailpage/CallHistory";
import CConnectDevice from "./detailpage/ConnectDevice";
import CCycleSetting from "./detailpage/CycleSetting";
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
      d_phone: '', d_sex: '', d_endcycle: '', d_part: '', d_status: '', d_zipCode: '', d_address: '', personinfo: '',
      recipientId: '',taptoggle:1, bodyData : null, reportMeasureData: { TPE005: 0,TPE011: 0,TPE006: 0,TPE008: 0,TPE007: 0,TPE012: 0 },
      menutoggle: 1,
    }
  },
  components: {
    CEmPerson,
    CVisitLog,
    CCollectInfo,
    CFamily,
    CSocilaWork,
    CEmSignal,
    CCallHistory,
    CConnectDevice,
    CCycleSetting,
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
    getRecipientInfo() {
      
      //let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid");
      let uri = this.$store.state.serverApi + "/admin/recipients/" + this.recipientId
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.bodyData = res.data.data
            console.log("bodyData is ");
            console.log(this.bodyData)
            this.d_zipCode = res.data.data.zipCode;
            this.d_address = res.data.data.addr + res.data.data.addrDetail;
            this.d_part = res.data.data.typeNm;
            this.d_phone = res.data.data.recipientPhoneno;
            this.d_status = res.data.data.stateNm;
            this.d_endcycle =  res.data.data.activeUnsensingCycle;
            this.d_sex =  res.data.data.sex;

            var cyear = new Date().getFullYear();
            var byear = res.data.data.birthday.substr(0,4);
            var age = cyear - byear;

            this.personinfo = res.data.data.recipientNm + '(' + res.data.data.birthday + ', 만' + age +'세)';
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
    async getMeasuresData(){
      //여기
      const url  = `/admin/recipients/${this.recipientId}/sensors/lastmeasures`
      await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
          let lastMeasures = res.data.data
          console.log("lastMeasures")
          console.log(lastMeasures)
          console.log("lastMeasures 가공")
          //this.reportMeasureData => 선언 처리 수정
          this.reportMeasureData = {
            TPE005: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE005"}).measureValue.split(',').slice(-1)[0],//심박
            TPE011: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE011"}).measureValue.split(',').slice(-1)[0],//호흡
            TPE006: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE006"}).measureValue.split(',').slice(-1)[0],//온도
            TPE008: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE008"}).measureValue.split(',').slice(-1)[0],//조도
            TPE007: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE007"}).measureValue.split(',').slice(-1)[0],//습도
            TPE012: !lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE012"}) ? 0: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE012"}).measureValue.split(',').slice(-1)[0],//활동량
          }
          console.log(this.reportMeasureData)
        }).catch(error => {
            console.log("fail to load")
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

    },
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
    makeMapData(){
        const container = document.getElementById("map");
        const mapOptions = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 5
        }
        let map = new kakao.maps.Map(container, mapOptions)

        let geocoder =  new daum.maps.services.Geocoder();
        console.log(`${this.bodyData.addr} ${this.bodyData.addrDetail}`)
        geocoder.addressSearch(`${this.bodyData.addr}`, (result, status)=>{
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
    }
  },
  created() {
    this.recipientId = this.$route.params.recipientId
    console.log("id is ");
    console.log(this.recipientId);
    this.getRecipientInfo();
    this.getMeasuresData();
    
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
