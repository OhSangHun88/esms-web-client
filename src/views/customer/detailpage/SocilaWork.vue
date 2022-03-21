<template>
  <div>
    <CCard class="cardLine">
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

export default {
  name: "EmPerson",
  data () {
    return {
      tableItems: [],
      tableFields: [
        {key: 'orgm', label: '관리기관', _classes: 'text-center'},
        {key: 'managerNm', label: '이름', _classes: 'text-center'},
        {key: 'sex', label: '성별', _classes: 'text-center'},
        {key: 'birthday', label: '생년월일', _classes: 'text-center'},
        {key: 'phoneNumber', label: '핸드폰번호', _classes: 'text-center'},
        {key: 'eMail', label: '이메일', _classes: 'text-center'},
        {key: 'chargeRegion', label: '담당지역', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getManagerData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/managers?userTypeCd=TPE004";

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                orgm : sessionStorage.getItem("orgm"),
                managerNm: res.data.data[i].recipientId,
                sex: res.data.data[i].sex,
                birthday: res.data.data[i].birthday,
                phoneNumber: res.data.data[i].phoneNumber,
                eMail: res.data.data[i].eMail,
                chargeRegion: res.data.data[i].chargeRegion,
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    }
  },
  created() {
    this.getManagerData();
  }
}
</script>

<style scoped>
.cardLine{
  border: 0;
}
</style>
