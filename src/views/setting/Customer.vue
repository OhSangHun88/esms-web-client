<template>
  <div>
    <CCard style="background-color: rgb(247 248 248);margin-top: 45px;border: none;">
      <CCardBody>
        <div role="group" class="form-check form-check-inline">
          <div>
            <label class="labelRadio">
              <input name="tabuser" type="radio" @change="onChange($event)" class="form-control customRadio" checked="checked" value="1">사용자
            </label>
          </div>
          <div>
            <label class="labelRadio">
              <input name="tabuser" type="radio" @change="onChange($event)" class="form-control customRadio"  value="2">관리기관
            </label>
          </div>
        </div>
        <div class="cardItem">
          <CSelect
              class="paddingSel"
              style="width: 300px"
              label="관리기관"
              @change="onChangeOrg($event)"
              :options="orgmItems"
              :value.sync="modelOrg"
              v-show="isOrg"
          />
          <CSelect
              class="paddingSel"
              style="width: 160px"
              label="구분"
              @change="onChangeParts($event)"
              :options="partsItems"
              :value.sync="modelParts"
          />
          <CSelect
              class="paddingSel"
              style="width: 160px"
              label="상태"
              @change="onChangeStatus($event)"
              :options="statusItems"
              :value.sync="modelStatus"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="cusNm"
              v-show="isCusNm"
              label="이름"
          />
          <CInput
              type="text"
              style="width: 200px"
              class="paddingSel"
              v-model="orgNm"
              v-show="isOrgNm"
              label="기관이름"
          />
          <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">검색</CButton>
          <CButton block variant="outline" color="primary" class="initBtn"  v-on:click="initSet">초기화</CButton>
        </div>
      </CCardBody>
    </CCard>
    <CCard class="dataCard">
      <CCardHeader class="dataCardHeader">
        <div class="mHeader">
          <CButton block variant="outline" color="primary" style="width: 120px;margin-right: 10px;"  v-on:click="downloadExcel">엑셀다운로드</CButton>
          <CButton block variant="outline" color="primary" style="width: 120px;margin-top: -2px;margin-right: 10px;" v-show="userShow">사용자등록</CButton>
          <CButton block variant="outline" color="primary" style="width: 120px;margin-top: -2px;" v-show="orgShow">관리기관등록</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="userItems"
            :fields="userFields"
            head-color="light"
            v-show="isTableUser"
            sorting >
          <td slot="change" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="getUser(item.userId)">수정</CButton>
          </td>
          <td slot="delete" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="deleteUser(item.userId)">삭제</CButton>
          </td>
        </CDataTable>

        <CDataTable
            class="mb-0 table-clear thBorder tdBorder thText"
            hover
            :items="organiItems"
            :fields="organiFields"
            head-color="light"
            v-show="isTableOrgani"
            sorting >
          <td slot="change" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="getParts(item.orgId)">수정</CButton>
          </td>
          <td slot="delete" style="text-align: center;width: 90px;" slot-scope="{item}">
            <CButton color="info" variant="outline" v-on:click="deleteParts(item.orgId)">삭제</CButton>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Customer",
  data () {
    return {
      modelOrg:'', modelParts:'', modelStatus:'', orgNm:'', cusNm:'', selOption: '1',
      orgmItems:[], partsItems:[], statusItems:[],
      userItems:[], organiItems: [],
      isCusNm:true, isOrgNm:false, isOrg:true, isTableUser:true, isTableOrgani:false, userShow: true, orgShow: false,
      orgCode:'', orgParts:'', orgStatus:'',
      userFields: [
        {key: 'orgNm', label: '관리기관', _classes: 'text-center'},
        {key: 'userTypeNm', label: '구분', _classes: 'text-center'},
        {key: 'userNm', label: '이름', _classes: 'text-center'},
        {key: 'userTypeCd', label: '아이디', _classes: 'text-center'},
        {key: 'phoneNumber', label: '휴대폰번호', _classes: 'text-center'},
        {key: 'employStateNm', label: '상태', _classes: 'text-center'},
        {key: 'email', label: '이메일', _classes: 'text-center'},
        {key: 'change', label: '', _classes: 'text-center'},
        {key: 'delete',label: '',_classes: 'text-center'},
      ],
      organiFields: [
        {key: 'typeCd', label: '구분', _classes: 'text-center'},
        {key: 'orgNm', label: '기관이름', _classes: 'text-center'},
        {key: 'chargeRegionCd', label: '담당지역', _classes: 'text-center'},
        {key: 'addrDetail', label: '주소', _classes: 'text-center'},
        {key: 'phoneNumber', label: '전화번호', _classes: 'text-center'},
        {key: 'useYn', label: '상태', _classes: 'text-center'},
        {key: 'change', label: '', _classes: 'text-center'},
        {key: 'delete',label: '',_classes: 'text-center'},
      ],
    }
  },
  methods:{
    downloadExcel() {
      let uri
      if(this.selOption == '1') {
        uri = "/admin/tablets/excel/download";
      } else {
        uri = "/admin/tablets/excel/download";
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}});
    },
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
            console.error("There was an error!", error);
          });
    },
    getStatusData() {
      axios.get("/admin/codes?cmmnCdGroup=EMPLOY.STATECD", {headers: {"Authorization": sessionStorage.getItem("token")}})
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
    getPartsData() {
      let uri = '';
      if(this.selOption == '1') {
        uri = "/admin/codes?cmmnCdGroup=USER.TYPECD";
      } else {
        uri = "/admin/codes?cmmnCdGroup=ORGANIZATION.TYPECD";
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.partsItems=[];
            this.partsItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.partsItems.push({
                label: response.data.data[i].cmmnCdNm,
                value: response.data.data[i].cmmnCd
              });
            }
            console.log("===click");
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getUserData() {
      let uri = "/admin/users?1=1";
      if(this.orgCode != '') {
        uri += "&orgId="+this.orgCode;
      }
      if(this.orgParts != '') {
        uri += "&userTypeCd="+this.orgParts;
      }
      if(this.orgStatus != '') {
        uri += "&employStateCd="+this.orgStatus;
      }
      if(this.cusNm != '') {
        uri += "&userNm="+this.cusNm;
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.userItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.userItems.push({
                userId:response.data.data[i].userId,
                orgNm:response.data.data[i].orgNm,
                userTypeNm:response.data.data[i].userTypeNm,
                userNm:response.data.data[i].userNm,
                userTypeCd:response.data.data[i].userTypeCd,
                phoneNumber:response.data.data[i].phoneNumber,
                employStateNm:response.data.data[i].employStateNm,
                email:response.data.data[i].email,
                change:'',
                delete:''
              })
            }
            console.log("===search")
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getOrganizationsData() {
      let uri = "/admin/organizations?1=1";
      if(this.orgCode != '') {
        uri += "&orgId="+this.orgCode;
      }
      if(this.orgParts != '') {
        uri += "&userTypeCd="+this.orgParts;
      }
      if(this.orgStatus != '') {
        uri += "&employStateCd="+this.orgStatus;
      }
      if(this.cusNm != '') {
        uri += "&userNm="+this.cusNm;
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.organiItems = [];
            for(let i=0; i<response.data.data.length; i++) {
              this.organiItems.push({
                orgId:response.data.data[i].orgId,
                typeCd:response.data.data[i].orgNm,
                orgNm:response.data.data[i].userTypeNm,
                chargeRegionCd:response.data.data[i].userNm,
                addrDetail:response.data.data[i].addr + response.data.data[i].addrDetail,
                phoneNumber:response.data.data[i].phoneNumber,
                useYn:response.data.data[i].email,
                change:'',
                delete:''
              })
            }
            console.log("===search")
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    deleteUser(userId) {
      let returnValue = confirm('정말 삭제하시겠습니까?');
      if(returnValue) {
        const headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': sessionStorage.getItem("token")
        }

        axios.delete("/admin/users", {
          headers: headers,
          data: {
            userId: userId
          }
        });

        this.getUserData();
      }
    },
    getUser(userId) {
      //this.selectnId = nId;
      let url = "/admin/users/" + userId;
      axios.get(url, {
        headers: { "Authorization": sessionStorage.getItem("token") }})
              .then(response => {
                // this.modelTitle = response.data.data.title;
                // this.modelContent = response.data.data.details;
                // let orgId = response.data.data.orgId;
                // this.orgCode = orgId;
                // this.modelOrg = this.orgmItems.find(item => orgId == item.value).value;
                // this.selOptionName = this.orgmItems.find(item => this.orgCode == item.value).label;
                // this.regBt = false;
                // this.updateBt = true;
                // this.noticesRegster = true;
              })
              .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
              });
    },
    deleteParts(orgId) {
      let returnValue = confirm('정말 삭제하시겠습니까?');
      if(returnValue) {
        const headers = {
          'Content-Type': 'multipart/form-data',
          'Authorization': sessionStorage.getItem("token")
        }

        axios.delete("/admin/organizations", {
          headers: headers,
          data: {
            orgId: orgId
          }
        });

        this.getOrganizationsData();
      }
    },
    getParts(orgId) {
      //this.selectnId = nId;
      let url = "/admin/organizations/" + orgId;
      axios.get(url, {
      headers: { "Authorization": sessionStorage.getItem("token") }})
      .then(response => {
        // this.modelTitle = response.data.data.title;
        // this.modelContent = response.data.data.details;
        // let orgId = response.data.data.orgId;
        // this.orgCode = orgId;
        // this.modelOrg = this.orgmItems.find(item => orgId == item.value).value;
        // this.selOptionName = this.orgmItems.find(item => this.orgCode == item.value).label;
        // this.regBt = false;
        // this.updateBt = true;
        // this.noticesRegster = true;
      })
      .catch(error => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
    },
    onChange(event) {
      let optionValue = event.target.value;
      switch (optionValue) {
        case "1":
          this.isOrg=true;this.isCusNm=true;this.isOrgNm=false;this.isTableUser=true;this.isTableOrgani=false;this.selOption='1';this.userShow=true;this.orgShow=false;
          this.getPartsData();
          this.getUserData();
          break;
        case "2":
          this.isOrg=false;this.isCusNm=false;this.isOrgNm=true;this.isTableUser=false;this.isTableOrgani=true;this.selOption='2';this.userShow=false;this.orgShow=true;
          this.getPartsData();
          this.getOrganizationsData();
          break;
      }
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
    },
    onChangeParts(event) {
      this.orgParts = event.target.value;
    },
    onChangeStatus(event) {
      this.orgStatus = event.target.value;
    },
    manageInquiry() {
      if(this.selOption == '1') {
        this.getUserData();
      } else {
        this.getOrganizationsData();
      }
    },
    initSet() {
      this.modelOrg="전체";
      this.modelParts="전체";
      this.modelStatus="전체";
      this.cusNm='';
      this.orgNm='';
    }
  },
  created(){
    this.getOrgmData();
    this.getStatusData();
    this.getPartsData();
    this.getUserData();
    this.getOrganizationsData();
  }
}
</script>

<style scoped>
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
}
.paddingSel {
  padding: 20px;
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
</style>