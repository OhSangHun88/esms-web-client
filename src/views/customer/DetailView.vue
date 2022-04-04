<template>
  <div class="wrap">
    <div class="container">
      <div class="box_search_wrap box_style">
          <table>
              <colgroup>
                  <col style="width:6.82%;">
                  <col style="width:6.82%;">
                  <col style="width:6.82%;">
                  <col style="width:auto;">
                  <col style="width:6.82%;">
                  <col style="width:9.091%;">
                  <col style="width:6.82%;">
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
                  <th scope="row">상태</th>
                  <th scope="col">감지주기</th>
                  <th scope="col">관리기관</th>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <input type="text" class="size-1" value="홍길동">
                      </td>
                      <td>
                          <input type="text" class="size-1" value="1939.4.8">
                      </td>
                      <td>
                          <input type="text" class="size-1" value="83">
                      </td>
                      <td>
                          <input type="text" class="size-4" value="경기도 용인시 수지구 수지대로 916번길 11(수지1동)">
                          <input type="text" class="size-1" value="12-456">
                      </td>
                      <td>
                          <div class="btn_area">
                              <button type="button" class="btn on">남</button>
                              <button type="button" class="btn">여</button>
                          </div>
                      </td>
                      <td>
                          <input type="text" class="size-2" value="010-1234-1234">
                      </td>
                      <td>
                          <select name="" id="">
                              <option value="">승인</option>
                          </select>
                      </td>
                      <td>
                          <input type="text" class="size-1" value="1256">
                      </td>
                      <td>
                          <input type="text" class="size-3" value="경기도 용인시 사회복지관 2관">
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
                              <li class="active"><a href="#tab01">현재상태</a></li>
                              <li><a href="#tab02">응급요원</a></li>
                              <li><a href="#tab03">가족</a></li>
                              <li><a href="#tab04">생활관리사</a></li>
                          </ul>
                          <div class="tabcontent">
                              <div id="tab01" class="tabcnt01">
                                  <ul>
                                      <li>
                                          <i class="ico01"></i>
                                          <div class="txt">
                                              <strong>76</strong>
                                              <p>심장박동</p>
                                          </div>
                                      </li>
                                      <li>
                                          <i class="ico02"></i>
                                          <div class="txt">
                                              <strong>14</strong>
                                              <p>호흡</p>
                                          </div>
                                      </li>
                                      <li>
                                          <i class="ico03"></i>
                                          <div class="txt">
                                              <strong>135</strong>
                                              <p>활동량</p>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                              <div id="tab02" style="display:none;">tab2 content</div>
                          </div>
                      </div><!--tab-->
                  </div>
              </div>
              <div class="box_style box_col">
                  <ul class="info_list">
                      <li>
                          <i class="ico01"></i>
                          <div class="txt">
                              <strong>54%</strong>
                              <p>습도</p>
                          </div>
                      </li> 
                      <li>
                          <i class="ico02"></i>
                          <div class="txt">
                              <strong>23º</strong>
                              <p>온도</p>
                          </div>
                      </li> 
                      <li>
                          <i class="ico03"></i>
                          <div class="txt">
                              <strong>237lx</strong>
                              <p>조도</p>
                          </div>
                      </li> 
                      <li>
                          <i class="ico04"></i>
                          <div class="txt">
                              <strong>연결</strong>
                              <p>전원연결</p>
                          </div>
                      </li> 
                      <li>
                          <i class="ico05"></i>
                          <div class="txt">
                              <strong>감지</strong>
                              <p>활동감지</p>
                          </div>
                      </li> 
                  </ul>
              </div>
              <div class="box_style box_col">
                  <div class="map" style="height: 320px;">지도 영역</div>
              </div>
          </div>
          <div class="box_style box_r">
              <div class="info_wrap_2">
                  <div class="tab">
                      <ul class="tabnav">
                          <li class="active"><a href="#" @click="tap(1)">수집정보</a></li>
                          <li><a href="#" @click="tap(2)">응급신호</a></li>
                          <li><a href="#" @click="tap(3)">통화이력</a></li>
                          <li><a href="#">연결장비</a></li>
                          <li><a href="#">주기설정</a></li>
                      </ul>
                      <tap1 v-if="this.taptoggle===1" :recipientId="this.recipientId"></tap1>
                      <tap2 v-if="this.taptoggle===2" :recipientId="this.recipientId"></tap2>
                      <tap3 v-if="this.taptoggle===3"></tap3>
                  </div><!--tab-->
              </div>
          </div>
      </div>
    </div>
    
    <CRow>
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
    </CRow>
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
import tap1 from "./detailpage/Tap1.vue";
import tap2 from "./detailpage/Tap2.vue";
import tap3 from "./detailpage/Tap3.vue";

export default {
  name: "DetailView",
  data () {
    return {
      d_phone: '', d_sex: '', d_endcycle: '', d_part: '', d_status: '', d_zipCode: '', d_address: '', personinfo: '',
      recipientId: '',taptoggle:1,bodyData : null,

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
    tap1,
    tap2,
    tap3,
  },
  methods: {
    getRecipientInfo() {
      console.log('sessionStorage');
      console.log(sessionStorage.getItem("recipid"));
      //let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid");
      let uri = this.$store.state.serverApi + "/recipients/" + this.recipientId
      console.log("token and uri is ")
      console.log(uri)
      console.log({headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.bodyData = res.data
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

      }
                
    }

  },
  created() {
    this.recipientId = this.$route.params.recipientId
    console.log("id is ");
    console.log(this.recipientId);
    this.getRecipientInfo();
    console.log("bodyData is ");
    console.log(this.bodyData)
  }
}
</script>

<style scoped>
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';

</style>
