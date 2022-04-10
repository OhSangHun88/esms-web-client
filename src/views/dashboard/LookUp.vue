<template>
  <div>
      <div class="box_wrap" style="height: 134px;">
          <div class="box_search_wrap box_style type_db">
            <table>
              <colgroup>
                <col style="width:16%;">
                <col style="width:16%;">
                <col style="width:26%;">
                <col style="width:auto;">
              </colgroup>
              <thead>
                <th scope="row">시/도</th>
                <th scope="row">시/군/구</th>
                <th scope="row">관리기관</th>
                <th scope="row"></th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select @change="onChangeSgg($event)">
                      <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                    </select> 
                  </td>
                  <td>
                    <select @change="onChangeOrg($event)">
                      <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                    </select>
                  </td>
                  <td>
                    <select>
                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                    </select>
                  </td>
                  <td>
                    <div class="date_warp">
                      <div class="customerBts" style="justify-content: flex-start;">
                        <input type="date" v-model="s_date"/>
                        <span class="tilde">~</span>
                        <input type="date" v-model="e_date"/>
                        <button type="button" class="btn">조회</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="top_info box_style">
            <i class="ico_info_1"></i>
              <div class="txt_area">
                <p class="tit">총 설치 가구수</p>
                <strong class="num">{{!this.setCount? 0 : this.setCount}}</strong>
              </div>
          </div>
          <div class="top_info type-l box_style">
            <div class="top_half">
              <i class="ico_info_2"></i>
                <div class="txt_area">
                  <p class="tit">응급관리요원</p>
                  <strong class="num">{{!this.setEMCount? 0 : this.setEMCount}}</strong>
                </div>  
            </div>
            <div class="top_half">
              <i class="ico_info_3"></i>
                <div class="txt_area">
                  <p class="tit">생활관리사</p>
                  <strong class="num">{{!this.setLMCount? 0 : this.setLMCount}}</strong>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "LookUp",
  data () {
    return {
      modelSido:'', modelSgg:'', modelOrg:'', orgNm:'', orgId:'', sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
      sidoItems:[], sggItems:[], orgmItems:[], totalItems:[],
      isSido:true, isSgg:true, isOrg:true,
      orgSido:'', orgSgg:'', orgCode:'',
      setCount: 0, setEMCount: 0, setLMCount: 0,
    }
  },
  methods:{
    // 시/도 목록
    getSidoData() {
    axios.get("/admin/address/sido", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.sidoItems=[];
            this.sidoItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.sidoItems.push({
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

    // 시/군/구 목록
    getSggData() {
    let url = "/admin/address/sgg";
    if(this.sidoCd != ''){
        url += "?sidoCd="+this.sidoCd;
    }else{
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
    }
    console.log(this.sidoCd)
    console.log(url)

    axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            const tempArr = [];
            this.sggItems=[];
            //this.sggItems.push({label: '전체', value: ''});
            tempArr.push({label: '전체', value: ''});
            /*
            for(let i=0; i<response.data.data.length; i++) {
              this.sggItems.push({
                label: response.data.data[i].sgg,
                value: response.data.data[i].sggCd,
                value2: response.data.data[i].sidoCd
              });
            } 
            */
            for(let i=0; i<response.data.data.length; i++) {
              tempArr.push({
                label: response.data.data[i].sgg,
                value: response.data.data[i].sggCd,
                value2: response.data.data[i].sidoCd
              });
            } 
            this.sggItems = tempArr.filter(cd=>{
                return cd.value2 === this.sidoCd
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          console.log()
    },

    // 관리 기관 목록
     getOrgmData() {
    let url = "/admin/organizations";
        if(this.sggCd != ''){
            url += "?sggCd="+this.sggCd;
        }else{
            this.orgmItems=[];
            this.orgmItems.push({label: '전체', value: ''});
            return ; 
        }
        console.log(this.sggCd)
        console.log(url)
    
       axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            const tempArr = [];
            this.orgmItems=[];
            //this.orgmItems.push({label: '전체', value: ''});
            tempArr.push({label: '전체', value: ''});
            /*
            for(let i=0; i<response.data.data.length; i++) {
              this.orgmItems.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId
              });
            } 
            */ 
           
            for(let i=0; i<response.data.data.length; i++) {
              tempArr.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId,
                value2: response.data.data[i].addrCd
              });
            }
           
            this.orgmItems = tempArr.filter(cd=>{
            return cd.value2 === this.sggCd
            });
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          console.log(this.orgmItems)
    },
    onChangeSido(event){
      console.log("====onChangeSido($event) execution")
      this.getSggData()
      this.orgSido = event.target.value;
    },
    onChangeSgg(event){
      this.orgSgg = event.target.value;
      this.sidoCd = event.target.value
      this.getSggData()
      console.log("====onChangeSgg($event) execution")
      console.log("========================================")
    },
    onChangeOrg(event) {
      this.orgCode = event.target.value;
      this.sggCd = event.target.value
      this.getOrgmData()
      console.log("====onChangeOrg($event) execution")
    },

    initSet() {
      this.modelSido="전체";
      this.modelSgg="전체";
      this.modelOrg="전체";
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
    },

    manageInquiry() {
      if(this.selOption == '1') {
        this.getUserData();
      } else {
        this.getOrganizationsData();
      }
    },
    getTotalCount(){
      let url = "/admin/organizations/stat/total?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            let totalCData = response.data.data
            let totalCArrToString = ''
            totalCArrToString = totalCData.filter(cd=>{
            return cd.typeCd ==="1"
            })
            this.setCount =totalCArrToString[0].typeCnt
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getEMCount(){
      let url = "/admin/organizations/stat/total?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            let EMCData = response.data.data
            let EMCArrToString = ''
            EMCArrToString = EMCData.filter(cd=>{
            return cd.typeCd ==="2"
            })
            this.setEMCount =EMCArrToString[0].typeCnt
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },getLMCount(){
      let url = "/admin/organizations/stat/total?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            let LMCData = response.data.data
            let LMCArrToString = ''
            LMCArrToString = LMCData.filter(cd=>{
            return cd.typeCd ==="3"
            })
            this.setLMCount =LMCArrToString[0].typeCnt
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    }
  },
  created(){
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getTotalCount();
    this.getEMCount();
    this.getLMCount();
  }
}
</script>

<style>
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
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
  margin-bottom: 0;
}
.addCustomer .modal-dialog{
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
.searchBtn {
  width: 70px;
  right: 115px;
  position: absolute;
  margin-top: 10px;
}
.initBtn {
  width: 70px;
  right: 22px;
  position: absolute;
  margin-top: -1px;
  margin-top: 45px;
}
</style>