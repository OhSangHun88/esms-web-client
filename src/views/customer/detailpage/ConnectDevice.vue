<template>
  <div>
    <CCard>
      <CCardHeader class="header-del">
        <slot name="header">
          <strong>연결장비 기본 정보</strong>
          <CButton block color="primary" style="width: 120px;position: absolute;right: 690px;" v-on:click="ReleaseDevice">장비해제</CButton>
          <CButton block color="primary" style="width: 120px;position: absolute;right: 560px;">실시간 이벤트</CButton>
          <CButton block color="primary" style="width: 140px;position: absolute;right: 410px;">F/W 업그레이드</CButton>
          <CButton block color="primary" style="width: 120px;position: absolute;right: 280px;">로그레벨</CButton>
          <CButton block color="primary" style="width: 120px;position: absolute;right: 150px;">통신이력</CButton>
          <CButton block color="primary" style="width: 120px;">설치이력</CButton>
        </slot>
      </CCardHeader>
    </CCard>
    <CCard>
      <CCardHeader>Tablet PC</CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder thRowColor"
            hover
            :items="tabletItems"
            :fields="tabletFields"
            head-color="light"
            sorting
        />
      </CCardBody>
    </CCard>

    <CCard>
      <CCardHeader>게이트웨이</CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder thRowColor"
            hover
            :items="getwayItems"
            :fields="getwayFields"
            head-color="light"
            sorting
        ></CDataTable>
      </CCardBody>
    </CCard>

    <CCard>
      <CCardHeader>센서</CCardHeader>
      <CCardBody>
        <v-data-table style="display: inline-table;width: 100%;">
          <template>
            <thead style="background-color: rgba(234, 234, 234, 0.4);height: 65px;font-weight: bold;">
            <tr>
              <td colspan="1" rowspan="2" style="text-align:center">번호</td>
              <td colspan="1" rowspan="2" style="text-align:center">센서종류</td>
              <td colspan="1" rowspan="2" style="text-align:center;">설치장소</td>
              <td colspan="1" rowspan="2" style="text-align:center;">시리얼번호</td>
              <td colspan="1" rowspan="2" style="text-align:center">MAC Addr</td>
              <td colspan="2" rowspan="1" style="text-align:center">센서버전</td>
              <td colspan="1" rowspan="2" style="text-align:center">통신상태</td>
              <td colspan="1" rowspan="2" style="text-align:center">배터리</td>
              <td colspan="1" rowspan="2" style="text-align:center">장애여부</td>
              <td colspan="3" rowspan="1" style="text-align:center">센서 설정주기</td>
              <td colspan="2" rowspan="1" style="text-align:center">상태정보</td>
              <td colspan="2" rowspan="1" style="text-align:center;">활동미감지</td>
            </tr>
            <tr>
              <td style="text-align:center">설치</td>
              <td style="text-align:center">최신</td>
              <td style="text-align:center">감지주기(센서)</td>
              <td style="text-align:center">센서전송주기(센서&gt;GW)</td>
              <td style="text-align:center">GW전송주기(GW&gt;센서)</td>
              <td style="text-align:center">센서</td>
              <td style="text-align:center">GW</td>
              <td style="text-align:center">현재</td>
              <td style="text-align:center;">변경</td>
            </tr>
            </thead>
          </template>
          <tr style="height: 40px;vertical-align: middle;">
            <td style="text-align:center">001</td>
            <td style="text-align:center">도어감지</td>
            <td style="text-align:center;">화장실</td>
            <td style="text-align:center;">gdesa12312332397423649</td>
            <td style="text-align:center">43428749562376427364</td>
            <td style="text-align:center">정상</td>
            <td style="text-align:center">정상</td>
            <td style="text-align:center">정상</td>
            <td style="text-align:center">87%</td>
            <td style="text-align:center">정상</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center">-</td>
            <td style="text-align:center;">-</td>
          </tr>

        </v-data-table>
      </CCardBody>
    </CCard>

    <CCard>
      <CCardHeader>
        장비상태정보
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <CCard class="cardNoneBorder">
              <CCardHeader class="headLine">
                >최신 수신 정보
              </CCardHeader>
              <CCardBody>
                <CDataTable
                    class="mb-0 table-clear thBorder thRowColor"
                    hover
                    :items="tableItems4"
                    :fields="tableFields4"
                    head-color="light"
                    sorting
                />
              </CCardBody>
            </CCard>
          </CCol>

          <CCol>
            <CCard class="cardNoneBorder">
              <CCardHeader class="headLine">
                >직전 수신 정보
              </CCardHeader>
              <CCardBody>
                <CDataTable
                    class="mb-0 table-clear thBorder tdBorder thRowColor"
                    hover
                    :items="tableItems5"
                    :fields="tableFields5"
                    head-color="light"
                    sorting
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ConnectDevice",
  data () {
    return {
      tabletItems: [],
      tabletFields: [
        {key: 'phone', label: '전화번호', _classes: 'text-center'},
        {key: 'agency', label: '통신사', _classes: 'text-center'},
        {key: 'model', label: '모델', _classes: 'text-center'},
        {key: 'communityStatus', label: '통신상태', _classes: 'text-center'},
        {key: 'battery', label: '배터리', _classes: 'text-center'},
        {key: 'disorder', label: '장애여부', _classes: 'text-center'},
        {key: 'apVersion', label: 'AP버전(설치/최신)', _classes: 'text-center'},
        {key: 'tabletStatus', label: '테불릿 상태주기', _classes: 'text-center'},
        {key: 'gatewayConnect', label: '게트웨이 연결여부', _classes: 'text-center'},
        {key: 'serverReport', label: '서버 보고 일시', _classes: 'text-center'},
      ],
      getwayItems: [],
      getwayFields: [
        {key: 'serialNo', label: '시리얼번호(S/N)', _classes: 'text-center'},
        {key: 'macAddr', label: '맥어드레스', _classes: 'text-center'},
        {key: 'firmwareVersion', label: 'FW버전(설치/최신)', _classes: 'text-center'},
        {key: 'hardwareVersion', label: 'HW버전(설치/최신)', _classes: 'text-center'},
        {key: 'batteryValue', label: '배터리양', _classes: 'text-center'},
        {key: 'stateSendCycle', label: '게트웨이 상태주기', _classes: 'text-center'},
      ],
      tableItems4: [],
      tableFields4: [
        {key: 'communicatStatus', label: '통신상태', _classes: 'text-center'},
        {key: 'disabilityStatus', label: '장애여부', _classes: 'text-center'},
        {key: 'battery', label: '배터리', _classes: 'text-center'},
        {key: 'keepAlive', label: 'Keep-Alive', _classes: 'text-center'},
        {key: 'signalCount', label: '신호세기', _classes: 'text-center'},
        {key: 'serverReport', label: '서버 보고 일시', _classes: 'text-center'},
      ],
      tableItems5: [],
      tableFields5: [
        {key: 'communicatStatus', label: '통신상태', _classes: 'text-center'},
        {key: 'disabilityStatus', label: '장애여부', _classes: 'text-center'},
        {key: 'battery', label: '배터리', _classes: 'text-center'},
        {key: 'keepAlive', label: 'Keep-Alive', _classes: 'text-center'},
        {key: 'signalCount', label: '신호세기', _classes: 'text-center'},
        {key: 'serverReport', label: '서버 보고 일시', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getTabletData() {
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
    getGetwaytData() {
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
    ReleaseDevice() {

    }
  },
  created() {
    this.getTabletData();
    this.getGetwaytData();
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
.cardNoneBorder {
  border: 0;
}
.headLine {
  border: 0;
}
</style>