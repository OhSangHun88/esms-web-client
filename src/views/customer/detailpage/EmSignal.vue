<template>
  <div>
    <CCard class="cardLine">
      <CCardHeader class="cardItem">
        <CInput type="date" v-model="s_date"/>
        <CInput type="date" v-model="e_date" class="middleBtn"/>
        <CButton block color="primary" class="inquery" v-on:click="manageInquiry">조회</CButton>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="tableItems"
            :fields="tableFields"
            head-color="light"
            sorting
        />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "EmSignal",
  data () {
    return {
      s_date: '', e_date: '',
      tableItems: [],
      tableFields: [
        {key: 'typeNm', label: '구분', _classes: 'text-center'},
        {key: 'signalStateNm', label: '상태', _classes: 'text-center'},
        {key: 'testYn', label: '테스트모드', _classes: 'text-center'},
        {key: 'occurDtime', label: '발생일시', _classes: 'text-center'},
        {key: 'closeDtime', label: '해제일시', _classes: 'text-center'},
        {key: 'rcvDtime', label: '보고일시', _classes: 'text-center'},
        {key: 'actionDetails', label: '조취내용', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getEmergencysData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/emergencys";
      uri += "?occurStartDate=" + this.s_date;
      uri += "&occurEndDate=" + this.e_date;

      //alert(uri);
      //alert(sessionStorage.getItem("token"));

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            //alert(res.data.data.length);
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                typeNm: res.data.data[i].typeNm,
                signalStateNm: res.data.data[i].signalStateNm,
                testYn: res.data.data[i].testYn,
                occurDtime: res.data.data[i].occurDtime,
                closeDtime: res.data.data[i].closeDtime,
                rcvDtime: res.data.data[i].rcvDtime,
                actionDetails: res.data.data[i].actionDetails,
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      this.getEmergencysData();
    },
  },
  created() {
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getEmergencysData();
  }
}
</script>

<style scoped>
.cardLine{
  border: 0;
}
.cardItem {
  border: 0;
  display: flex;
  justify-content: flex-start;
}
.form-group {
  margin: 0;
}
.inquery {
  width: 70px;
  height: 37px;
}
.middleBtn {
  margin: 0 10px 0 10px;
}
</style>