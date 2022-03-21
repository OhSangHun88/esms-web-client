<template>
  <div>
    <CCard class="cardLine">
      <CCardHeader  class="cardItem">
        <CButton block color="primary" class="inquery" @click="addRecipients = true">추가</CButton>
      </CCardHeader>
      <CCardBody style="padding: 0;">
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

    <CModal
        class="addCustomer"
        title="응급요원 추가"
        :show.sync="addRecipients"
    >
      <CContainer>
        <CCard class="cardModal" >
          <CCardBody class="cbody">
            <CRow>
              <CCol md="12">
                <CRow>
                  <CCol md="6">이름</CCol>
                  <CCol md="6">생년월일</CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <CInput type="text" v-model="cName" />
                  </CCol>
                  <CCol>
                    <CInput type="date" v-model="mbirthday" />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="12">
                <CRow>
                  <CCol md="4">휴대폰번호</CCol>
                  <CCol md="3">성별</CCol>
                  <CCol md="5">이메일</CCol>
                </CRow>
                <CRow>
                  <CCol md="4"><CInput type="text" v-model="cPhone" /></CCol>
                  <CCol md="3">
                    <CSelect
                        :options="sexItems"
                        :value.sync="cSex"
                        @change="onChangeSex($event)"
                    /></CCol>
                  <CCol md="5"><CInput type="text" v-model="cSocial"  /></CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="12">
                <CRow>
                  <CCol md="8">관리기관</CCol>
                  <CCol md="4">담당지역</CCol>
                </CRow>
                <CRow>
                  <CCol md="8"><CInput type="text" v-model="cAddr" /></CCol>
                  <CCol md="4"><CInput type="text" v-model="cDetail" /></CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="12">
                <CRow>
                  <CCol md="3">상태</CCol>
                  <CCol md="5">입사일</CCol>
                  <CCol md="4">퇴사일</CCol>
                </CRow>
                <CRow>
                  <CCol md="3"><CInput type="text" v-model="cAddr" /></CCol>
                  <CCol md="5"><CInput type="date" v-model="cDetail" /></CCol>
                  <CCol md="4"><CInput type="text" v-model="cDetail" /></CCol>
                </CRow>
              </CCol>
            </CRow>
            <CRow>
              <CCol md="6">
                <CButton block color="primary" @click="customAdd">추가</CButton>
              </CCol>
              <CCol md="6">
                <CButton block variant="outline" @click="customCancel" color="primary">취소</CButton>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CContainer>
    </CModal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmPerson",
  data () {
    return {
      tableItems: [],
      cName: '', mbirthday: '', cPhone: '', cSocial: '', cAddr: '', cDetail: '', sexItems: [], cSex: '',
      tableFields: [
        {key: 'orgm', label: '관리기관', _classes: 'text-center'},
        {key: 'managerNm', label: '이름', _classes: 'text-center'},
        {key: 'sex', label: '성별', _classes: 'text-center'},
        {key: 'birthday', label: '생년월일', _classes: 'text-center'},
        {key: 'phoneNumber', label: '핸드폰번호', _classes: 'text-center'},
        {key: 'eMail', label: '이메일', _classes: 'text-center'},
        {key: 'chargeRegion', label: '담당지역', _classes: 'text-center'},
      ],
      addRecipients: false,
    }
  },
  methods: {
    getManagerData() {
      let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid") + "/managers?userTypeCd=TPE005";

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
    },
    customAdd() {

    },
    customCancel() {

    },
    onChangeSex(event) {

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
  border-radius: 0;
}
.cardItem {
  border: 0;
  display: flex;
  justify-content: flex-end;
}
.inquery {
  width: 70px;
  height: 37px;
}
.addCustomer .modal-dialog{
  max-width: 650px;
}
.cardModal {
  border: none;
  margin-bottom: 0;
}
</style>
