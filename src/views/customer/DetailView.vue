<template>
  <div>
    <div class="menuTitle">
      <slot name="header">
        <strong style="font-size: large;">{{personinfo}}</strong>
      </slot>
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

export default {
  name: "DetailView",
  data () {
    return {
      d_phone: '', d_sex: '', d_endcycle: '', d_part: '', d_status: '', d_zipCode: '', d_address: '', personinfo: '',

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
    CCycleSetting
  },
  methods: {
    getRecipientInfo() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid");

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
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
  },
  created() {
    this.getRecipientInfo();
  }
}
</script>

<style scoped>


</style>
