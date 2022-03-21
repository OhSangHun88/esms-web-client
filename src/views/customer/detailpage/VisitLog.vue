<template>
  <div>
    <CCard class="cardLine">
      <CCardHeader class="cardItem">
        <CInput type="date" v-model="s_date" />
        <CInput type="date" v-model="e_date" class="middleBtn" />
        <CButton block color="primary" class="inquery" v-on:click="manageInquiry">조회</CButton>
        <CButton block variant="outline" color="primary" class="visitBtn">방문일자등록</CButton>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="tableItems"
            :fields="tableFields"
            head-color="light"
            sorting />
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "VisitLog",
  data () {
    return {
      s_date: '', e_date: '',
      tableItems: [],
      tableFields: [
        {key: 'userId', label: '이름', _classes: 'text-center'},
        {key: 'recipientId', label: '직책', _classes: 'text-center'},
        {key: 'visitDtime', label: '방문일', _classes: 'text-center'},
        {key: 'closeDtime', label: '완료일', _classes: 'text-center'},
        {key: 'typeNm', label: '방문구분', _classes: 'text-center'},
        {key: 'typeCd', label: '방문상태', _classes: 'text-center'},
        {key: 'visitDetails', label: '방문내용', _classes: 'text-left'},
      ],
      togglePress: false
    }
  },
  methods: {
    getVisitHistorysData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/visit-historys";
      uri += "?visitStartDate=" + this.s_date;
      uri += "&visitEndDate=" + this.e_date;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                userId: res.data.data[i].userId,
                recipientId: res.data.data[i].recipientId,
                visitDtime: res.data.data[i].visitDtime,
                closeDtime: res.data.data[i].closeDtime,
                typeNm: res.data.data[i].typeNm,
                typeCd: res.data.data[i].typeCd,
                visitDetails: res.data.data[i].visitDetails,
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      this.getVisitHistorysData();
    },
  },
  created() {
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getVisitHistorysData();
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
.btn-block + .btn-block {
  margin-top: 0;
}
.visitBtn {
  width: 160px;
  height: 37px;
  right: 14px;
  position: absolute;
}
.inquery {
  width: 70px;
  height: 37px;
}
.middleBtn {
  margin: 0 10px 0 10px;
}
</style>