<template>
  <div>
    <CCard >
      <CCardBody>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader class="header-del">
                <slot name="header">
                  <strong>활동 미감지</strong>
                  <CButton block color="primary" style="width: 70px;">저장</CButton>
                </slot>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>현재 설정 시간(분)</CCol>
                  <CCol>변경 시간(분)</CCol>
                </CRow>
                <CRow>
                  <CCol><CInput/></CCol>
                  <CCol><CInput/></CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol>
            <CCard>
              <CCardHeader class="header-del">
                <slot name="header">
                  <strong>G/W 상태 전송 주기</strong>
                  <CButton block color="primary" style="width: 70px;position: absolute;right: 140px;">저장</CButton>
                  <CButton block variant="outline" color="primary" style="width: 70px;">취소</CButton>
                </slot>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>현재 설정 시간(분)</CCol>
                  <CCol>변경 시간(분)</CCol>
                </CRow>
                <CRow>
                  <CCol><CInput/></CCol>
                  <CCol><CInput/></CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>

    <CCard>
      <CCardHeader class="header-del">
        <slot name="header">
          <strong>센서 감지 및 전송 주기</strong>
          <CButton block color="primary" style="width: 70px;">저장</CButton>
        </slot>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="sensorAndCycleItems"
            :fields="sensorAndCycleFields"
            head-color="light"
            sorting
        >

          <td slot="chkSel" style="width: 70px;">
            <c-input-checkbox></c-input-checkbox>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <CCard>
      <CCardHeader class="header-del">
        <slot name="header">
          <strong>센서 상태값 전송주기</strong>
          <CButton block color="primary" style="width: 70px;">저장</CButton>
        </slot>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="sensorAndCycleValueItems"
            :fields="sensorAndCycleValueFields"
            head-color="light"
            sorting
        >

          <td slot="chkSel" style="width: 70px;">
            <c-input-checkbox></c-input-checkbox>
          </td>
          <td slot="activity" slot-scope="{item}">
            <div class="small text-muted">{{item.sensorPart}}</div>
          </td>
          <td slot="activity" slot-scope="{item}">
            <div class="small text-muted">{{item.placeWork}}</div>
          </td>
          <td slot="activity" slot-scope="{item}">
            <div class="small text-muted">{{item.sensorTran}}</div>
          </td>
          <td slot="activity" slot-scope="{item}">
            <div class="small text-muted">{{item.gwTran}}</div>
          </td>

        </CDataTable>
      </CCardBody>
    </CCard>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CycleSetting",
  data () {
    return {
      sensorAndCycleItems: [],
      sensorAndCycleFields: [
        {key: 'chkSel', label: '선택', _classes: 'text-left'},
        {key: 'sensorPart', label: '센서종류', _classes: 'text-center'},
        {key: 'placeWork', label: '설치장소', _classes: 'text-center'},
        {key: 'monitor', label: '감지 주기(초)', _classes: 'text-center'},
        {key: 'sensorTran', label: '센서 전송주기(배수)', _classes: 'text-center'},
        {key: 'gwTran', label: 'G/W 전송주기(배수)', _classes: 'text-center'},
      ],
      sensorAndCycleValueItems: [],
      sensorAndCycleValueFields: [
        {key: 'chkSel', label: '선택', _classes: 'text-left'},
        {key: 'sensorPart', label: '센서종류', _classes: 'text-center'},
        {key: 'placeWork', label: '설치장소', _classes: 'text-center'},
        {key: 'sensorTran', label: '센서 전송주기(분)', _classes: 'text-center'},
        {key: 'gwTran', label: 'G/W 전송주기(배수)', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getSensorAndCycletData() {
      let uri = this.$store.state.serverApi + "/tablets?tabletTypeCd=";
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
              .then(response => {
                this.tabletItems = [];
                // for(let i=0; i<response.data.data.length; i++) {
                //   this.tabletItems.push({
                //     phoneNumber:response.data.data[i].phoneNumber,
                //     modelNm:response.data.data[i].modelNm,
                //     incomeDate:response.data.data[i].incomeDate,
                //     phoneNumber:response.data.data[i].phoneNumber,
                //     provider:response.data.data[i].provider,
                //     modelNm:response.data.data[i].modelNm,
                //     tabletStateNm:response.data.data[i].tabletStateNm,
                //     recipientNm:response.data.data[i].recipientNm,
                //     log:'',
                //     history:''
                //   })
                // }
              })
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
    },
    getSensorAndCycleValueData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/gateways";

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
              .then(response => {
                this.getwayItems = [];
                this.getwayItems.push({
                  serialNo:response.data.data.serialNo,
                  macAddr:response.data.data.macAddr,
                  firmwareVersion:response.data.data.firmwareVersion,
                  hardwareVersion:response.data.data.hardwareVersion,
                  batteryValue:response.data.data.batteryValue,
                  stateSendCycle:response.data.data.stateSendCycle,
                })
              })
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
    },
  },
  created() {
    this.getSensorAndCycletData();
    this.getSensorAndCycleValueData();
  }
}
</script>

<style scoped>
.header-del {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-block + .btn-block {
  margin-top: 0;
}
</style>