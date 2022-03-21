<template>
  <div>
    <CCard style="background-color: rgb(247 248 248);margin-top: 45px;border: none;">
      <CCardBody>
        <div role="group" class="form-check form-check-inline">
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio" checked="checked" value="1">고객테블릿
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="2">응급요원 테블릿
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="3">게이트웨이
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="4">레이더 센서
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="5">화개 감지기
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="6">응급호출기
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="7">활동 감지기
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabdevice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="8">출입문감지기
            </label>
          </div>
        </div>
        <div class="cardItem">
          <CSelect
              class="paddingSel"
              style="width: 300px"
              label="관리기관"
              :options="orgmItems"
              @change="onChangeOrg($event)"
              :value.sync="modelOrg"
          />
          <CSelect
              class="paddingSel"
              style="width: 160px"
              label="센서종류"
              @change="onChangeSensor($event)"
              v-show="isSensor"
              :options="sensorOptionItems"
              :value.sync="modelSensor"
          />
          <CSelect
              class="paddingSel"
              style="width: 160px"
              label="상태"
              @change="onChangeStatus($event)"
              :options="statusItems"
              :value.sync="modelStatus"
          />
          <CSelect
              class="paddingSel"
              style="width: 160px"
              label="장애여부"
              @change="onChangeDisorder($event)"
              :options="disorderItems"
              :value.sync="modelDisorder"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="modelIncomeNm"
              label="입고명"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="modelPhone"
              v-show="isPhone"
              label="휴대폰번호"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="modelModel"
              v-show="isModel"
              label="모델명"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="modelSerialNm"
              v-show="isSerial"
              label="시리얼번호"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="modelMacNm"
              v-show="isMac"
              label="맥주소"
          />
          <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">검색</CButton>
          <CButton block variant="outline" color="primary" class="initBtn"  v-on:click="initSet">초기화</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCard class="dataCard" v-show="isCTeblet">
      <CCardHeader class="dataCardHeader">
        <div class="mHeader">
          <CButton block variant="outline" color="primary" style="width: 120px;margin-right: 10px;" v-on:click="downloadExcel">엑셀다운로드</CButton>
          <CButton block variant="outline" color="primary" style="width: 90px;margin-top: -2px;margin-right: 10px;">엑셀등록</CButton>
          <CButton block variant="outline" color="primary" style="width: 90px;margin-top: -2px;">장비등록</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="tabletItems"
            :fields="tabletFields"
            head-color="light"
            sorting >

          <td slot="log" style="text-align: center;">
            <CButton color="info" variant="outline">조회</CButton>
          </td>
          <td slot="history" style="text-align: center;">
            <CButton color="info" variant="outline" v-on:click="hInquiry">조회</CButton>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <CCard class="dataCard" v-show="isCGatway">
      <CCardHeader class="dataCardHeader">
        <div style="display: flex;justify-content: space-between;">
          <div style="display: flex;justify-content: flex-start;">
            <CButton block variant="outline" color="primary" style="width: 120px;margin-right: 10px;">펌웨어업로드</CButton>
            <CSelect
                class="versionSel"
                style="width: 90px"
                :options="['v.101']"
            />
            <CButton block variant="outline" color="primary" style="width: 150px;margin-top: -1px;">펌웨어업그레드</CButton>
          </div>
          <div class="mHeader">
            <CButton block variant="outline" color="primary" style="width: 120px;margin-right: 10px;">엑셀다운로드</CButton>
            <CButton block variant="outline" color="primary" style="width: 90px;margin-top: -1px;">엑셀등록</CButton>
          </div>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="gatwayItems"
            :fields="gatwayFields"
            head-color="light"
            sorting >

          <td slot="log" style="text-align: center;">
            <CButton color="info" variant="outline">조회</CButton>
          </td>
          <td slot="history" style="text-align: center;">
            <CButton color="info" variant="outline" v-on:click="hInquiry">조회</CButton>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <CCard class="dataCard" v-show="isCSensor">
      <CCardHeader class="dataCardHeader">
        <div class="mHeader">
          <CButton block variant="outline" color="primary" style="width: 120px;margin-right: 10px;">엑셀다운로드</CButton>
          <CButton block variant="outline" color="primary" style="width: 90px;margin-top: -2px;margin-right: 10px;">엑셀등록</CButton>
          <CButton block variant="outline" color="primary" style="width: 90px;margin-top: -2px;">장비등록</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="sensorItems"
            :fields="sensorFields"
            head-color="light"
            sorting >

          <td slot="history" style="text-align: center;">
            <CButton color="info" variant="outline" v-on:click="hInquiry">조회</CButton>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ManageDevice",
  methods: {
    getOrgmData() {
      axios.get(this.$store.state.serverApi + "/organizations/all", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.orgmItems=[];
            this.orgmItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.orgmItems.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getStatusData() {
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=TABLET.STATECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.statusItems=[];
            this.statusItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.statusItems.push({
                label: response.data.data[i].cmmnCdNm,
                value: response.data.data[i].cmmnCd
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getDisorderData() {
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=TABLET.TAKECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.disorderItems=[];
            this.disorderItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.disorderItems.push({
                label: response.data.data[i].cmmnCdNm,
                value: response.data.data[i].cmmnCd
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getSensorData() {
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=SENSOR.TYPECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.sensorOptionItems=[];
            this.sensorOptionItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.sensorOptionItems.push({
                label: response.data.data[i].cmmnCdNm,
                value: response.data.data[i].cmmnCd
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getTabletData(typeCd) {
      let uri = this.$store.state.serverApi + "/tablets?tabletTypeCd=" + typeCd;
      if(this.orgCode != '') uri += "&orgId=" + this.orgCode;
      if(this.statusCode != '') uri += "&tabletStateCd=" + this.statusCode;
      if(this.disorderCode != '') uri += "&faultYnCd=" + this.disorderCode;
      if(this.modelIncomeNm != '') uri += "&incomeNm=" + this.modelIncomeNm;
      if(this.modelSerialNm != '') uri += "&serialNo=" + this.modelSerialNm;
      if(this.modelMacNm != '') uri += "&macAddr=" + this.modelMacNm;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.tabletItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.tabletItems.push({
                orgNm:response.data.data[i].orgNm,
                incomeNm:response.data.data[i].incomeNm,
                incomeDate:response.data.data[i].incomeDate,
                phoneNumber:response.data.data[i].phoneNumber,
                provider:response.data.data[i].provider,
                modelNm:response.data.data[i].modelNm,
                tabletStateNm:response.data.data[i].tabletStateNm,
                recipientNm:response.data.data[i].recipientNm,
                log:'',
                history:''
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getTabletExcelDownload(typeCd) {
      let uri = this.$store.state.serverApi + "/tablets/excel/download?tabletStateCd=" + typeCd;
      if(this.orgCode != '') uri += "&orgId=" + this.orgCode;
      if(this.statusCode != '') uri += "&tabletStateCd=" + this.statusCode;
      if(this.disorderCode != '') uri += "&faultYnCd=" + this.disorderCode;
      if(this.modelIncomeNm != '') uri += "&incomeNm=" + this.modelIncomeNm;
      if(this.modelSerialNm != '') uri += "&serialNo=" + this.modelSerialNm;
      if(this.modelMacNm != '') uri += "&macAddr=" + this.modelMacNm;

      alert(uri);

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}});
    },
    getGatwayData() {
      axios.get(this.$store.state.serverApi + "/gateways", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.gatwayItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.gatwayItems.push({
                gwId:response.data.data[i].gwId,
                orgNm:response.data.data[i].orgNm,
                incomeNm:response.data.data[i].incomeNm,
                incomeDate:response.data.data[i].incomeDate,
                serialNo:response.data.data[i].serialNo,
                firmwareVersion:response.data.data[i].firmwareVersion,
                macAddr:response.data.data[i].macAddr,
                recipientNm:response.data.data[i].recipientNm,
                faultYnNm:response.data.data[i].faultYnNm,
                history:''
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    radarData(){
      axios.get(this.$store.state.serverApi + "/sensors?sensorTypeCdList=TPE005&sensorTypeCdList=TPE011&sensorTypeCdList=TPE012", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.sensorItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.sensorItems.push({
                sensorId:response.data.data[i].sensorId,
                orgNm:response.data.data[i].orgNm,
                incomeNm:response.data.data[i].incomeNm,
                incomeDtime:response.data.data[i].incomeDtime,
                serialNo:response.data.data[i].serialNo,
                sensorVersion:response.data.data[i].sensorVersion,
                macAddr:response.data.data[i].macAddr,
                sensorTypeCd:response.data.data[i].sensorTypeCd,
                recipientNm:response.data.data[i].recipientNm,
                history:''
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    sensorData(typeCd) {
      axios.get(this.$store.state.serverApi + "/sensors?sensorTypeCd="+typeCd, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.sensorItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.sensorItems.push({
                sensorId:response.data.data[i].sensorId,
                orgNm:response.data.data[i].orgNm,
                incomeNm:response.data.data[i].incomeNm,
                incomeDtime:response.data.data[i].incomeDtime,
                serialNo:response.data.data[i].serialNo,
                sensorVersion:response.data.data[i].sensorVersion,
                macAddr:response.data.data[i].macAddr,
                sensorTypeCd:response.data.data[i].sensorTypeCd,
                recipientNm:response.data.data[i].recipientNm,
                history:''
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      switch (this.selectOption) {
        case 1:
          this.getTabletData("TPE001");
          break;
        case 2:
          this.getTabletData("TPE002");
          break;
      }

    },
    initSet() {
      this.modelOrg="전체";
      this.modelDisorder="전체";
      this.modelStatus="전체";
      this.modelSensor="전체";
      this.modelSerialNm='';
      this.modelMacNm='';
      this.modelIncomeNm='';
    },
    downloadExcel() {
      switch (this.selectOption) {
        case 1:
          this.getTabletExcelDownload("TPE001");
          break;
        case 2:
          this.getTabletExcelDownload("TPE002");
          break;
      }
    },
    hInquiry() {
      alert("ookk");
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
    },
    onChangeStatus(event) {
      this.statusCode = event.target.value;
    },
    onChangeDisorder(event) {
      this.disorderCode = event.target.value;
    },
    onChangeSensor(event) {
      this.sensorCode = event.target.value;
    },
    onChange(event) {
      let optionValue = event.target.value;

      switch (optionValue) {
        case "1":
          this.selectOption=1;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true;  this.isSensor=false;
          this.isCTeblet=true; this.isCGatway=false; this.isCSensor=false;
          this.getTabletData("TPE001");
          break;
        case "2":
          this.selectOption=2;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=false;
          this.isCTeblet=true; this.isCGatway=false; this.isCSensor=false;
          this.getTabletData("TPE002");
          break;
        case "3":
          this.selectOption=3;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=false;
          this.isCTeblet=false; this.isCGatway=true; this.isCSensor=false;
          this.getGatwayData();
          break;
        case "4":
          this.selectOption=4;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=true;
          this.isCTeblet=false; this.isCGatway=false; this.isCSensor=true;
          this.radarData();
          break;
        case "5":
          this.selectOption=5;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=true;
          this.isCTeblet=false; this.isCGatway=false; this.isCSensor=true;
          this.sensorData("TPE003");
          break;
        case "6":
          this.selectOption=6;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=true;
          this.isCTeblet=false; this.isCGatway=false; this.isCSensor=true;
          this.sensorData("TPE001");
          break;
        case "7":
          this.selectOption=7;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=true;
          this.isCTeblet=false; this.isCGatway=false; this.isCSensor=true;
          this.sensorData("TPE002");
          break;
        case "8":
          this.selectOption=8;
          this.isPhone=false; this.isModel=false; this.isSerial=true; this.isMac=true; this.isSensor=true;
          this.isCTeblet=false; this.isCGatway=false; this.isCSensor=true;
          this.sensorData("TPE004");
          break;
      }

    }
  },
  created() {
    this.getOrgmData();
    this.getStatusData();
    this.getDisorderData();
    this.getSensorData();
    this.getTabletData("TPE001");
  },
  data () {
    return {
      isSerial: false, isMac: false, isPhone: true, isModel: true, isSensor: false,
      isCTeblet: true, isCGatway: false, isCSensor: false,
      tabletItems: [], gatwayItems: [], sensorItems: [],
      orgmItems: [], statusItems: [], disorderItems: [], sensorOptionItems: [],
      orgCode: '', statusCode: [], disorderCode: [], sensorCode: [],
      modelOrg: '', modelDisorder: '', modelStatus: '', modelIncomeNm: '', modelPhone: '', modelModel: '', modelSerialNm: '', modelMacNm: '', modelSensor: '',
      selectOption: 1,
      tabletFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'incomeNm', label: '입고명', _classes: 'text-center'},
        {key: 'incomeDate', label: '입고일', _classes: 'text-center'},
        {key: 'phoneNumber', label: '휴대폰번호', _classes: 'text-center'},
        {key: 'provider', label: '통신사', _classes: 'text-center'},
        {key: 'modelNm', label: '모델명', _classes: 'text-center'},
        {key: 'tabletStateNm', label: '상태', _classes: 'text-center'},
        {key: 'recipientNm', label: '설치대상자', _classes: 'text-center'},
        {key: 'log',label: '통신로그',_classes: 'text-center'},
        {key: 'history', label: '상태이력', _classes: 'text-center'},
      ],
      gatwayFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'incomeNm', label: '입고명', _classes: 'text-center'},
        {key: 'incomeDate', label: '입고일', _classes: 'text-center'},
        {key: 'serialNo', label: '시리얼번호', _classes: 'text-center'},
        {key: 'firmwareVersion', label: '펌웨어버전', _classes: 'text-center'},
        {key: 'macAddr', label: '맥주소', _classes: 'text-center'},
        {key: 'gwStateNm', label: '상태', _classes: 'text-center'},
        {key: 'recipientNm', label: '설치대상자', _classes: 'text-center'},
        {key: 'faultYnNm',label: '장애여부',_classes: 'text-center'},
        {key: 'history', label: '설치이력', _classes: 'text-center'},
      ],
      sensorFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'incomeNm', label: '입고명', _classes: 'text-center'},
        {key: 'incomeDtime', label: '입고일', _classes: 'text-center'},
        {key: 'serialNo', label: '시리얼번호', _classes: 'text-center'},
        {key: 'sensorVersion', label: '센서버전', _classes: 'text-center'},
        {key: 'macAddr', label: '맥주소', _classes: 'text-center'},
        {key: 'sensorStatCd', label: '상태', _classes: 'text-center'},
        {key: 'recipientNm', label: '설치대상자', _classes: 'text-center'},
        {key: 'history', label: '상태이력', _classes: 'text-center'},
      ],
    }
  }
}
</script>

<style scoped>
.dataCard {
  border: none;
}
.dataCardHeader {
  border: none;
}
.mHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.cardItem {
  border: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}
.paddingSel {
  padding: 20px;
}
.versionSel {
  padding: 0;
  margin-bottom: 0;
  margin-right: 10px;
}
.middleBtn {
  margin: 0 10px 0 10px;
}
.searchBtn {
  width: 70px;
  right: 115px;
  position: absolute;
  margin-top: 45px;
}
.initBtn {
  width: 70px;
  right: 22px;
  position: absolute;
  margin-top: -1px;
  margin-top: 45px;
}
</style>