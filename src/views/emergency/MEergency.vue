<template>
  <div>
    <CCard>
      <CForm class="opt_select">
        <CSelect
            class="paddingSel"
            style="width: 300px"
            label="기관관리"
            :options="orgmItems"
            @change="onChangeOrg($event)"
            :value.sync="modelOrg"
        />
        <CSelect
            class="paddingSel"
            style="width: 150px"
            label="상태"
            :options="statusItems"
            @change="onChangeStatus($event)"
            :value.sync="modelStatus"
        />
        <CInput
            type="text"
            style="width: 200px"
            v-model="uName"
            class="paddingSel"
            label="이름"
        />

        <CButton block color="primary" style="width: 70px;margin-top: 9px;margin-right: 9px;" v-on:click="manageInquiry">검색</CButton>
        <CButton block variant="outline" color="primary" style="width: 70px;margin-top: 9px;" v-on:click="initSet">초기화</CButton>
      </CForm>
    </CCard>
    <br>
    <CCard>
      <CCardHeader>
        <slot name="header">
          조회결과 2건
        </slot>
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

export default {
  name: "MEergency",
  methods: {
    getOrgmData() {
      axios.get(this.$store.state.serverApi + "/organizations/all", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.orgmItems = [];
            this.orgmItems.push({label: '전체', value: ''});
            for (let i = 0; i < response.data.data.length; i++) {
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
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=EMPLOY.STATECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
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
      let uri = this.$store.state.serverApi + "/managers?userTypeCd=TPE005";
      if(this.orgCode != '') uri += "&orgId=";
      if(this.statusCode != '') uri += "&employStateCd=";
      if(this.uName != '') uri += "&userNm=";


      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
              .then(response => {
                this.tableItems = [];
                for(let i=0; i<response.data.data.length; i++) {
                  this.tableItems.push({
                    orgNm:response.data.data[i].orgNm,
                    userNm:response.data.data[i].userNm,
                    sex:response.data.data[i].sex,
                    birthday:response.data.data[i].birthday,
                    mobileNumber:response.data.data[i].mobileNumber,
                    email:response.data.data[i].email,
                    chargeRegion:response.data.data[i].chargeRegion,
                    employStateNm:response.data.data[i].employStateNm,
                    joinDate:response.data.data[i].joinDate,
                    resignDate:response.data.data[i].resignDate,
                  })
                }
              })
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
      alert(this.orgCode);
    },
    onChangeStatus(event) {
      this.statusCode = event.target.value;
    },
    manageInquiry() {
      this.getDisorderData();
      alert("성공적으로 조회 되었습니다.")
    },
    initSet() {
      this.uName ='';
      this.modelOrg="전체";
      this.modelStatus="전체";
    }
  },
  data () {
    return {
      orgmItems:[], statusItems:[],
      modelOrg: '', modelStatus: '', orgCode:'', statusCode: '', uName: '',
      tableItems: [],
      tableFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'userNm', label: '이름', _classes: 'text-center'},
        {key: 'sex', label: '성별', _classes: 'text-center'},
        {key: 'birthday', label: '생년월일', _classes: 'text-center'},
        {key: 'mobileNumber', label: '핸드폰번호', _classes: 'text-center'},
        {key: 'email', label: '이메일', _classes: 'text-center'},
        {key: 'chargeRegion', label: '담당지역', _classes: 'text-center'},
        {key: 'employStateNm', label: '상태', _classes: 'text-center'},
        {key: 'joinDate', label: '입사일', _classes: 'text-center'},
        {key: 'resignDate', label: '퇴사일', _classes: 'text-center'},
      ],
    }
  },
  created() {
    this.getOrgmData();
    this.getStatusData();
    this.getDisorderData();
  }
}
</script>

<style scoped>
.tdBorder table td {
  border-top: 0px;
  border-bottom: 1px solid;
  border-bottom-color: #d8dbe0;
}
.table-clear td {
  border: 1px;
}
.header-del {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.opt_select {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.paddingSel {
  padding: 20px;
}
.cardModal {
  border: none;
}
.mCustomer .modal-dialog{
  max-width: 650px;
}
.emailBtn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3px;
}
.modal-footer {
  display: none;
}
.btn-block + .btn-block {
  margin-top: 0;
}
</style>