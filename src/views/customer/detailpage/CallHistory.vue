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
            class="mb-0 table-clear thBorder"
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
  name: "CallHistory",
  data () {
    return {
      s_date: '', e_date: '',
      tableItems: [],
      tableFields: [
        {key: 'callTypeNm', label: '통화구분', _classes: 'text-center'},
        {key: 'phoneNumber', label: '전화번호', _classes: 'text-center'},
        {key: 'startTime', label: '통화시작', _classes: 'text-center'},
        {key: 'endTime', label: '통화종료', _classes: 'text-center'},
        {key: 'callDuration', label: '통화시간', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getCallHistorysData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/call-historys";
      uri += "?callStartDate=" + this.s_date;
      uri += "&callEndDate=" + this.e_date;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                callTypeNm: res.data.data[i].callTypeNm,
                phoneNumber: res.data.data[i].phoneNumber,
                startTime: res.data.data[i].startTime,
                endTime: res.data.data[i].endTime,
                callDuration: res.data.data[i].callDuration,
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      this.getCallHistorysData();
      alert("성공적으로 조회 되었습니다.")
    },
  },
  created() {
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getCallHistorysData();
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