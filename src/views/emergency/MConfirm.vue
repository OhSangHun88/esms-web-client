<template>
  <div>
    <CCard>
      <CForm class="opt_select">
        <CSelect
            class="paddingSel"
            style="width: 200px"
            label="광역"
            :options="wideItems"
            @change="onChangeWide($event)"
            :value.sync="modelWide"
        />
        <CSelect
            class="paddingSel"
            style="width: 200px"
            label="시군구"
            :options="sggItems"
            @change="onChangeSgg($event)"
            :value.sync="modelSgg"
        />
        <CSelect
            class="paddingSel"
            style="width: 250px"
            label="수행기관"
            :options="orgItems"
            @change="onChangeOrg($event)"
            :value.sync="modelOrg"
        />
        <CSelect
            class="paddingSel"
            style="width: 250px"
            label="승인상태"
            :options="stateItems"
            @change="onChangeState($event)"
            :value.sync="modelState"
        />
        <CSelect
            class="paddingSel"
            style="width: 250px"
            label="사용자구분"
            :options="userItems"
            @change="onChangeUser($event)"
            :value.sync="modelUser"
        />
        <CInput
            type="text"
            style="width: 200px"
            class="paddingSel"
            label="이름"
            v-model="uName"
        />

        <CButton block color="primary" style="width: 70px;margin-top: 9px;margin-right: 9px;" v-on:click="manageInquiry">조회</CButton>
      </CForm>
    </CCard>
    <br>
    <CCard class="cardLine">
      <CCardHeader class="cardItem">
        <div class="customerBts" style="justify-content: flex-end;">
          <CButton block color="primary" style="width: 90px;" v-on:click="confirmBt">승인</CButton>
          <CButton block color="primary" style="width: 90px;margin:0 7px 0 7px;" v-on:click="confirmCancelBt">승인거절</CButton>
          <CButton block variant="outline" color="primary" style="width: 70px;" v-on:click="deleteBt">삭제</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="approvalItems"
            :fields="approvalFields"
            head-color="light"
            sorting
        >
          <td slot="avatar" style="width: 20px;border: none;" slot-scope="{item}">
            <c-input-checkbox v-on:change="onCheckVal(item.userId, $event)"></c-input-checkbox>
          </td>

        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MConfirm",
  data () {
    return {
      wideItems: [], modelWide: '', wideCode: '',
      sggItems: [], modelSgg: '', sggCode: '',
      orgItems: [], modelOrg: '', orgCode: '',
      stateItems: [], modelState: '', stateCode: '',
      userItems: [], modelUser: '', userCode: '',
      approvalItems: [], uName: '',
      approvalFields: [
        {key: 'avatar', label: '', _classes: 'text-center'},
        {key: 'joinDate', label: '신청일자', _classes: 'text-center'},
        {key: 'userTypeNm', label: '사용자구분', _classes: 'text-center'},
        {key: 'userNm', label: '사용자명', _classes: 'text-center'},
        {key: 'userId', label: 'ID', _classes: 'text-center'},
        {key: 'mobileNumber', label: '휴대전화', _classes: 'text-center'},
        {key: 'chargeRegion', label: '광역', _classes: 'text-center'},
        {key: 'orgNm', label: '수행기관', _classes: 'text-center'},
        {key: 'useYn', label: '승인상태', _classes: 'text-center'},
        {key: 'approver', label: '승인자', _classes: 'text-center'},
        {key: 'approvedDtime', label: '승인일자', _classes: 'text-center'},
      ],
    }
  },
  methods: {
    getWideData() {
      axios.get(this.$store.state.serverApi + "/address/sido", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
              .then(response => {
                this.wideItems = [];
                this.wideItems.push({label: '전체', value: ''});
                for (let i = 0; i < response.data.data.length; i++) {
                  this.wideItems.push({
                    label: response.data.data[i].sido,
                    value: response.data.data[i].sidoCd
                  });
                }
              })
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
    },
    getSggData(sidoCd) {
      if(sidoCd != '') {
        axios.get(this.$store.state.serverApi + "/address/sgg?sidoCd=" + sidoCd, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
                .then(response => {
                  this.sggItems = [];
                  this.sggItems.push({label: '전체', value: ''});
                  for (let i = 0; i < response.data.data.length; i++) {
                    this.sggItems.push({
                      label: response.data.data[i].sgg,
                      value: response.data.data[i].sggCd
                    });
                  }
                })
                .catch(error => {
                  this.errorMessage = error.message;
                  console.error("There was an error!", error);
                });
      } else {
        this.sggItems = [];
        this.modelSgg="전체";
      }
    },
    getOrgData() {
      axios.get(this.$store.state.serverApi + "/organizations/all\n", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
              .then(response => {
                this.orgItems = [];
                this.orgItems.push({label: '전체', value: ''});
                for (let i = 0; i < response.data.data.length; i++) {
                  this.orgItems.push({
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
    getStateData() {
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=APPROVED.STATECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.stateItems = [];
            this.stateItems.push({label: '전체', value: ''});
            for (let i = 0; i < response.data.data.length; i++) {
              this.stateItems.push({
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
    getUserData() {
      axios.get(this.$store.state.serverApi + "/codes?cmmnCdGroup=USER.TYPECD", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.userItems = [];
            this.userItems.push({label: '전체', value: ''});
            for (let i = 0; i < response.data.data.length; i++) {
              if(response.data.data[i].cmmnCd == 'TPE004' || response.data.data[i].cmmnCd == 'TPE005') {
                this.userItems.push({
                  label: response.data.data[i].cmmnCdNm,
                  value: response.data.data[i].cmmnCd
                });
              }
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getApprovalData() {
      let uri = this.$store.state.serverApi + "/managers/approval-management?1=1";

      if(this.orgCode != '') uri += "&orgId=" + this.orgCode;
      if(this.stateCode != '') uri += "&approvalStateCd=" + this.stateCode;
      if(this.wideCode != '') uri += "&sidoCd=" + this.wideCode;
      if(this.sggCode != '') uri += "&sggCd=" + this.sggCode;
      if(this.uName != '') uri += "&userNm=" + this.sggCode;

      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.approvalItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.approvalItems.push({
                joinDate:response.data.data[i].joinDate,
                userTypeNm:response.data.data[i].userTypeNm,
                userNm:response.data.data[i].userNm,
                userId:response.data.data[i].userId,
                mobileNumber:response.data.data[i].mobileNumber,
                chargeRegion:response.data.data[i].chargeRegion,
                orgNm:response.data.data[i].orgNm,
                useYn:response.data.data[i].useYn,
                approver:response.data.data[i].approver,
                approvedDtime:response.data.data[i].approvedDtime,
              })
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    onChangeWide(event) {
      this.wideCode = event.target.value;
      this.getSggData(this.wideCode);
    },
    onChangeSgg(event) {
      this.sggCode = event.target.value;
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
    },
    onChangeState(event) {
      this.stateCode = event.target.value;
    },
    onChangeUser(event) {
      this.userCode = event.target.value;
    },
    onCheckVal(id, event){
      if(event.target.checked) {
        alert(id);
      } else {
        alert("id");
      }
    },
    confirmBt(){
      axios.patch(this.$store.state.serverApi + "/managers/approve", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
              if(response.data == true) {
                this.getApprovalData();
              }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    confirmCancelBt(){
      axios.patch(this.$store.state.serverApi + "/managers/approve-cancel", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            if(response.data == true) {
              this.getApprovalData();
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    deleteBt(){
      axios.delete(this.$store.state.serverApi + "/managers/id", {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            if(response.data == true) {
              this.getApprovalData();
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    manageInquiry() {
      this.getApprovalData();
    }
  },
  created() {
    this.getWideData();
    this.getOrgData();
    this.getStateData();
    this.getUserData();
    this.getApprovalData();
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