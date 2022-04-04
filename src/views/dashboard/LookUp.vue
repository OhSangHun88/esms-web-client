<template>
  <div>
    <div class="container">
      <div class="box_search_wrap add_btn box_style">
          <div class="table_wrap">
            <table>
                  <colgroup>
                      <col style="width:23.18%;">
                      <col style="width:23.18%;">
                      <col style="width:23.18%;">
                      <col style="width:13.18%;">
                      <col style="width:13.18%;">
                  </colgroup>
                  <thead>
                      <th scope="row">시/도</th>
                      <th scope="row">시/군/구</th>
                      <th scope="row">관리기관</th>
                      
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <select @change="onChangeSgg($event)">
                                <option v-for="sido in sidoItems" :value.sync="sido.value">{{sido.label}}</option>
                              </select> 
                          </td>
                          <td>
                              <select @change="onChangeOrg($event)">
                                <option v-for="sgg in sggItems" :value="sgg.value">{{sgg.label}}</option>
                              </select>
                          </td>
                          <td>
                              <select>
                                <option v-for="orgm in orgmItems" :value="orgm.value">{{orgm.label}}</option>
                              </select>
                          </td>
                          <td>
                            <input type="date" v-model="s_date" ></input>
                          </td>
                          <td>
                            <input type="date" v-model="e_date" ></input>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="btn_area">
              <button type="button" class="btn">조회</button>
          </div>
      </div>
          <!-- 
          <CSelect
              class="paddingSel"
              style="width: 300px"
              label="시/도"
              @change="onChangeSido($event)"
              :options="sidoItems"
              :value.sync="sidoCd"
              v-show="isSido"
          />
          <!--:value.sync="modelSido"
          <CSelect
              class="paddingSel"
              style="width: 300px"
              label="시/군/구"
              @change="getOrgmData()"
              :options="sggItems"
              :value.sync="sggCd"
              v-show="isSgg"
          />
          <CSelect
              class="paddingSel"
              style="width: 300px"
              label="관리기관"
              @change="onChangeOrg($event)"
              :options="orgmItems"
              :value.sync="orgId"
              v-show="isOrg"
          />
          <CInput
              type="date"
              label="시작일"
              v-model="s_date"
              class="paddingSel"
          />
          <CInput
              type="date"
              label="마감일"
              :value.sync="e_date"
              class="paddingSel"
          />
          <CButton block color="primary" class="searchBtn" v-on:click="manageInquiry">조회</CButton> 
          -->
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
      sidoItems:[], sggItems:[], orgmItems:[],
      isSido:true, isSgg:true, isOrg:true,
      orgSido:'', orgSgg:'', orgCode:'',
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
    async getOrgmData() {
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
    
      await axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
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
      this.s_date=moment().format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
    },

    manageInquiry() {
      if(this.selOption == '1') {
        this.getUserData();
      } else {
        this.getOrganizationsData();
      }
    },
  },
  created(){
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.s_date=moment().format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
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