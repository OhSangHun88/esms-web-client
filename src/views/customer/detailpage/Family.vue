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
        >

          <td slot="chk" style="width: 20px;border: none;" slot-scope="{item}">
            <c-input-checkbox v-on:click="onCheckVal(item.recipientId)"></c-input-checkbox>
          </td>

        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Family",
  data () {
    return {
      partItems:['아들', '딸', '부', '모', '손녀', '손자', '외손녀', '외손자', '배우자', '친구', '응급요원', '사회복지사'],
      tableItems: [],
      tableFields: [
        {key: 'chk', label: '', _classes: 'text-center'},
        {key: 'regSn', label: '번호', _classes: 'text-center'},
        {key: 'relationNm', label: '이름', _classes: 'text-center'},
        {key: 'relationName', label: '관계', _classes: 'text-center'},
        {key: 'relationPhone', label: '핸드폰번호', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getFamilyData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/phoneNumbers";

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.tableItems = [];
            for(let i=0; i<res.data.data.length; i++) {
              this.tableItems.push({
                recipientId: res.data.data[i].recipientId,
                regSn: res.data.data[i].regSn,
                relationNm: res.data.data[i].relationNm,
                relationName: res.data.data[i].relationName,
                relationPhone: res.data.data[i].relationPhone,
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    }
  },
  onCheckVal(id){
    alert(id);
  },
  created() {
    this.getFamilyData();
  }
}
</script>

<style scoped>
.cardLine{
  border: 0;
}
</style>