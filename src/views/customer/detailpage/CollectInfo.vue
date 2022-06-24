<template>
  <div>
    <CCard class="cardLine">
      <CCardHeader class="cardItem">
<!--        <CSelect-->
<!--            :options="['온도', '습도', '조도']"-->
<!--            placeholder="환경정보"-->
<!--        />-->
<!--        <CSelect-->
<!--            :options="['호흡', '심박']"-->
<!--            class="middleBtn"-->
<!--            placeholder="바이오정보"-->
<!--        />-->
<!--        <CSelect-->
<!--            :options="['', '', '']"-->
<!--            class="middleBtn"-->
<!--            placeholder="활동감지(R) 정보"-->
<!--        />-->
<!--        <CSelect-->
<!--            :options="['', '', '']"-->
<!--            class="middleBtn"-->
<!--            placeholder="활동감지(P) 정보"-->
<!--        />-->
<!--        <CSelect-->
<!--            :options="['', '', '']"-->
<!--            placeholder="도어감지 정보"-->
<!--        />-->
        <CInput type="date" v-model="s_date" style="position: absolute;right: 280px;"/>
        <CInput type="date" v-model="e_date" style="position: absolute;right: 95px;"/>
        <CButton block color="primary" style="position: absolute;right: 14px;width: 70px;" v-on:click="manageInquiry">조회</CButton>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="tableItems"
            :fields="tableFields"
            head-color="light"
            sorting
        >

        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "CollectInfo",
  data () {
    return {
      s_date: '', e_date: '',
      tableItems: [],
      tableFields: [
        {key: 'sensorLocNm', label: '설치장소', _classes: 'text-center'},
        {key: 'measureDtime', label: '측정일시', _classes: 'text-center'},
        {key: 'sensorRptDtime', label: '서버보고일시', _classes: 'text-center'},
        {key: 'template', label: '온도', _classes: 'text-center'},
        {key: 'humidity', label: '습도', _classes: 'text-center'},
        {key: 'light', label: '조도', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getMeasuresData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/sensors/measures";
        uri += "?measureStartDate=" + this.s_date;
        uri += "&measureEndDate=" + this.e_date;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                sensorLocNm: res.data.data[i].sensorLocNm,
                measureDtime: res.data.data[i].measureDtime,
                sensorRptDtime: res.data.data[i].sensorRptDtime,
                template: '',
                humidity: '',
                light: '',
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      this.getMeasuresData();
      alert("성공적으로 조회 되었습니다.")
    },
  },
  created() {
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getMeasuresData();
  }
}
</script>

<style scoped>
.cardLine{
  border: 0;
  border-radius: 0;
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