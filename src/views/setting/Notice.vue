<template>
  <div>
    <CCard style="background-color: rgb(247 248 248);margin-top: 45px;border: none;">
      <CCardBody>
        <div role="group" class="form-check form-check-inline">
          <div>
            <label class="labelRadio">
              <input name="tabnotice" type="radio" @change="onChange($event)" class="form-control customRadio" checked="checked" value="1">고객(사용자)
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabnotice" type="radio" @change="onChange($event)" class="form-control customRadio"  value="2">응급요원
            </label>
          </div>
        </div>
        <div class="cardItem">
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              label="제목"
              v-model="txt_title"
          />
          <CInput
              type="text"
              style="width: 300px"
              class="paddingSel"
              label="내용"
              v-model="txt_details"
          /> 
          <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">검색</CButton>
          <CButton block variant="outline" color="primary" class="initBtn"  v-on:click="initSet">초기화</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCard class="dataCard">
      <CCardHeader class="dataCardHeader">
        <div class="mHeader">
          <CButton block variant="outline" color="primary" style="width: 120px;"  @click="regsternotice()">공지사항 등록</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            v-model="tableItems.item"
            :items="tableItems"
            :fields="tableFields"
            head-color="light"
            sorting >
          <td slot="change" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="getNotice(item.noticeId)">수정</CButton>
          </td>
          <td slot="delete" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="deleteNotice(item.noticeId)">삭제</CButton>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>

    <CModal
        class="mCustomer"
        title="공지사항"
        :show.sync="noticesRegster"
    >
      <div>
        <CContainer fluid>
          <CCard class="mx-8 mb-0 cardModal" >
            <CCardBody class="p-6">
              <CSelect
                  label="관리기관"
                  :options="orgmItems"
                  @change="onChangeOrg($event)"
                  :value.sync="modelOrg"
              />
              <CInput
                  type="text"
                  v-model="modelTitle"
                  label="제목"
              />
              <CTextarea
                  type="text"
                  v-model="modelContent"
                  label="방문내용"
              />
              <div style="display: flex;justify-content: flex-end;">
                <CButton color="primary" v-on:click="regNotice" v-show="regBt">저장</CButton>
                <CButton color="primary" v-on:click="updateNotice" v-show="updateBt">수정</CButton>
              </div>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </CModal>

  </div>


</template>

<script>
import axios from "axios";

export default {
  name: "Notice",
  methods: {
    getOrgmData() {
      axios.get("/admin/organizations/all", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.orgmItems=[];
            this.orgmItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.orgmItems.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId
              });
            }
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.log()
            console.error("There was an error!", error);
          });
    },
    getData(typeCd) {
      let url = "/admin/notices?typeCd=" + typeCd;
      if(this.txt_title != '') {
        url += "&title="+this.txt_title;
      }
      if(this.txt_details != '') {
        url += "&details="+this.txt_details;
      }
      axios.get(url, {headers: { "Authorization": sessionStorage.getItem("token") }})
      .then(response => {
        this.tableItems = [];
        for(let i=0; i<response.data.data.length; i++) {
          this.tableItems.push({
            noticeId:response.data.data[i].noticeId,
            orgNm:response.data.data[i].orgNm,
            title:response.data.data[i].title,
            regDtime:response.data.data[i].regDtime,
            change:'',
            delete:''
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
      this.selOptionName = this.orgmItems.find(item => this.orgCode == item.value).label;
    },
    manageInquiry() {
      if(this.selOption == 1) {
        this.getData('TPE001');
      } else {
        this.getData('TPE002');
      }
    },
    deleteNotice(nId) {
      let returnValue = confirm('정말 삭제하시겠습니까?');
      if(returnValue) {
        let url = "/admin/notices/" + nId;

        axios.delete(url, {
          headers: { "Authorization": sessionStorage.getItem("token") }})
        .then(response => {
          if(response.data.totalCount == 0) {
            alert("삭제가 성과적으로 되었습니다.");
            if(this.selOption == 1) {
              this.getData('TPE001');
            } else {
              this.getData('TPE002');
            }
          } else {
            alert("삭제가 실패 되었습니다.");
          }
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
      }
    },
    getNotice(nId) {
      this.selectnId = nId;
      let url = "/admin/notices/" + nId;
      axios.get(url, {
        headers: { "Authorization": sessionStorage.getItem("token") }})
        .then(response => {
          this.modelTitle = response.data.data.title;
          this.modelContent = response.data.data.details;
          let orgId = response.data.data.orgId;
          this.orgCode = orgId;
          this.modelOrg = this.orgmItems.find(item => orgId == item.value).value;
          this.selOptionName = this.orgmItems.find(item => this.orgCode == item.value).label;
          this.regBt = false;
          this.updateBt = true;
          this.noticesRegster = true;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    regsternotice() {
      this.regBt = true;
      this.updateBt = false;
      this.noticesRegster = true;
    },
    regNotice() {
      if(this.orgCode == '') {
        alert('관리기관을 선택하여 주세요.');
        return;
      }
      if(this.modelTitle == '') {
        alert('제목을 입력하여 주세요.');
        return;
      }
      if(this.modelContent == '') {
        alert('방문내용을 입력하여 주세요.');
        return;
      }
      let bodyFormData = new FormData();
      bodyFormData.append('orgId', this.orgCode);
      bodyFormData.append('orgNm', this.selOptionName);
      if(this.selOption == 1) {
        bodyFormData.append('typeCd', 'TPE001');
      } else {
        bodyFormData.append('typeCd', 'TPE002');
      }
      bodyFormData.append('title', this.modelTitle);
      bodyFormData.append('details', this.modelContent);

      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': sessionStorage.getItem("token")
      }
      let self = this;
      axios({
        method: "post",
        url: '/admin/notices',
        data: bodyFormData,
        headers: headers,
      })
      .then(function (response) {
        if(response.data.totalCount > 0){
          if(self.selOption == 1) {
            self.getData('TPE001');
          } else {
            self.getData('TPE002');
          }
          self.noticesRegster=false;
        }
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    },
    updateNotice() {
      if(this.orgCode == '') {
        alert('관리기관을 선택하여 주세요.');
        return;
      }
      if(this.modelTitle == '') {
        alert('제목을 입력하여 주세요.');
        return;
      }
      if(this.modelContent == '') {
        alert('방문내용을 입력하여 주세요.');
        return;
      }
      let bodyFormData = new FormData();
      bodyFormData.append('orgId', this.orgCode);
      bodyFormData.append('orgNm', this.selOptionName);
      if(this.selOption == 1) {
        bodyFormData.append('typeCd', 'TPE001');
      } else {
        bodyFormData.append('typeCd', 'TPE002');
      }
      bodyFormData.append('title', this.modelTitle);
      bodyFormData.append('details', this.modelContent);

      const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': sessionStorage.getItem("token")
      }
      let self = this;
      axios({
        method: "post",
        url: '/admin/notices/' + this.selectnId,
        data: bodyFormData,
        headers: headers,
      })
      .then(function (response) {
        if(response.data.totalCount > 0){
          alert("성과적으로 수정 되었습니다.")
          if(self.selOption == 1) {
            self.getData('TPE001');
          } else {
            self.getData('TPE002');
          }
          self.noticesRegster=false;
        } else {
          alert("수정이 실패 되었습니다.")
        }
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    },
    initSet() {
      this.txt_title = '';
      this.txt_details = '';
    },
    onChange(event) {
      let optionText = event.target.value;
      if(optionText == 1) {
        this.selOption = 1;
        this.getData('TPE001');
      } else {
        this.selOption = 2;
        this.getData('TPE002');
      }
    }
  },
  created() {
    this.getOrgmData();
    this.getData('TPE001');
  },
  data () {
    return {
      tableItems: [], orgmItems:[],
      txt_title: '', modelTitle: '', modelContent: '', selectnId: '', selOptionName: '',
      txt_details: '', orgCode: '', modelOrg: '', selOption: '1',
      noticesRegster: false, regBt: true, updateBt:false,
      tableFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'title', label: '제목', _classes: 'text-center'},
        {key: 'regDtime', label: '등록일자', _classes: 'text-center'},
        {key: 'change',label: '',_classes: 'text-center'},
        {key: 'delete', label: '', _classes: 'text-center'},
      ],
      noticesFields: [
        {key: 'status', lalbel: '상태', _classes: 'text-center'},
        {key: 'code', lalbel: '코드', _classes: 'text-center'},
        {key: 'error', lalbel: '에러', _classes: 'text-center'},
        {key: 'message', lalbel: '메시지', _classes: 'text-center'},
        {key: 'errors', lalbel: '에러들', _classes: 'text-center'},
      ],
    }
  }
}
</script>

<style scoped>
.cardModal {
  border: none;
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
.dataCard {
  border: none;
}
.dataCardHeader {
  border: none;
}
.mHeader {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.cardItem {
  border: 0;
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
}


.middleBtn {
  margin: 0 10px 0 10px;
}
</style>