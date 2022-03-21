<template>
  <div>
    <CCard style="background-color: rgb(247 248 248);margin-top: 45px;border: none;">
      <CCardBody>
        <div role="group" class="form-check form-check-inline">
          <div>
            <label class="labelRadio">
              <input name="tablog" type="radio" @change="onChange($event)" class="form-control customRadio" checked="checked" value="1">로그
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tablog" type="radio" @change="onChange($event)" class="form-control customRadio"  value="2">통신로그
            </label>
          </div>
        </div>
        <div class="cardItem">
          <CInput
              type="date"
              label="시작일"
              v-model="s_date"
              class="paddingSel"
          />
          <CInput
              type="date"
              label="마감일"
              :value.sync="e_date"
              class="paddingSel"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="tabletId"
              v-show="isTablet"
              label="테블릿아이디"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="recipientId"
              v-show="isCustomer"
              label="고객아이디"
          />
          <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">검색</CButton>
          <CButton block variant="outline" color="primary" class="initBtn"  v-on:click="initSet">초기화</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CDataTable
        class="mb-0 table-clear thBorder tdBorder thText"
        hover
        :items="logItems"
        :fields="logFields"
        head-color="light"
        v-show="isLog"
        sorting />

    <CDataTable
        class="mb-0 table-clear thBorder tdBorder thText"
        hover
        :items="comLogItems"
        :fields="comLogFields"
        head-color="light"
        v-show="isComLog"
        sorting />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ManageLog",
  data () {
    return {
      logItems: [], comLogItems: [],
      tabletId: '', recipientId: '', s_date: '', e_date: '',
      isTablet: false, isCustomer: false,
      isLog: true, isComLog: false,
      logFields: [
        {key: 'logDtime', label: '로그일', _classes: 'text-center'},
        {key: 'userId', label: '아이디', _classes: 'text-center'},
        {key: 'applicationNm', label: '구분', _classes: 'text-center'},
        {key: 'accessIp', label: 'IP', _classes: 'text-center'},
        {key: 'logDetails', label: '내용', _classes: 'text-center'},
      ],
      comLogFields: [
        {key: 'logDtime', label: '로그일', _classes: 'text-center'},
        {key: 'logSource', label: '출발지', _classes: 'text-center'},
        {key: 'logTarget', label: '목적지', _classes: 'text-center'},
        {key: 'tabletId', label: '테블릿아이디', _classes: 'text-center'},
        {key: 'recipientId', label: '고객아이디', _classes: 'text-center'},
        {key: 'logDetails', label: '로그', _classes: 'text-center'},
      ],
    }
  },
  methods:{
    onChange(event) {
      let optionValue = event.target.value;
      switch (optionValue) {
        case "1":
          this.isLog=true; this.isComLog=false;
          this.isTablet=false; this.isCustomer=false;
          this.getLogtData();
          break;
        case "2":
          this.isLog=false; this.isComLog=true;
          this.isTablet=true; this.isCustomer=true;
          this.getEquLogtData();
          break;
      }
    },
    getLogtData() {
      let uri = this.$store.state.serverApi + "/logs/servers?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.logItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.logItems.push({
                seq:response.data.data[i].seq,
                logDtime:response.data.data[i].logDtime,
                userId:response.data.data[i].userId,
                applicationNm:response.data.data[i].applicationNm,
                accessIp:response.data.data[i].accessIp,
                logDetails:response.data.data[i].logDetails
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getEquLogtData() {
      let uri=this.$store.state.serverApi + "/logs/equipments?startDate="+this.s_date+"&endDate="+this.e_date;
      if(this.tabletId != '') uri+="&tabletId=" + this.tabletId;
      if(this.recipientId != '') uri+="&tabletId=" + this.recipientId;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.comLogItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.comLogItems.push({
                seq:response.data.data[i].seq,
                logDtime:response.data.data[i].logDtime,
                logSource:response.data.data[i].logSource,
                logTarget:response.data.data[i].logTarget,
                tabletId:response.data.data[i].tabletId,
                recipientId:response.data.data[i].recipientId,
                logDetails:response.data.data[i].logDetails
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      if(this.isLog==true){
        this.getLogtData();
      } else {
        this.getEquLogtData();
      }
    },
    initSet() {
      this.s_date=moment().format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
      this.tabletId='';
      this.recipientId='';
    }
  },
  created() {
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getLogtData();
  },
}
</script>

<style scoped>

.cardItem {
  border: 0;
  display: flex;
  justify-content: flex-start;
}
.paddingSel {
  padding: 20px;
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