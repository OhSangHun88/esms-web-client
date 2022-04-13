<template>
    <div class="wrap">
      <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>이벤트 리포트</span>
                <i class="ico_nav"></i>
                <span class="on">응급 알람</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:14.6%;">
                            <col style="width:14.6%;">
                            <col style="width:14.6%">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:8%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">대상자 이름</th>
                            <th scope="row">구분</th>
                            <th scope="row">상태</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select v-model="selectedSidoItems" @change="onChangeSgg($event)">
                                        <option v-for="(sido, index) in sidoItems" :value="sido.value" v-bind:key="index">{{sido.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedSggItems" @change="onChangeOrg($event)">
                                      <option v-for="(sgg, index) in sggItems" :value="sgg.value" v-bind:key="index">{{sgg.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedOrgItems">
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value="홍길동">
                                </td>
                                <td>
                                    <select v-model="selectedTypeItems">
                                      <option v-for="(type, index) in typeItems" :value="type.value" v-bind:key="index">{{type.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedStateItems">
                                      <option v-for="(state, index) in stateItems" :value="state.value" v-bind:key="index">{{state.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date" v-model="s_date"/>
                                            <span class="tilde">~</span>
                                            <input type="date" v-model="e_date"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                </div>
            </div>
            <div class="one_box box_style">
                <div class="result_txt">
                    <p>조회결과 : <strong class="num">{{!this.NCount? 0 : this.NCount}}</strong>건</p>
                </div>
                <div class="list result">
                    <table>
                        <colgroup>
                            <col style="width:6%;">
                            <col style="width:7%;">
                            <col style="width:7%;">
                            <col style="width:22%;">
                            <col style="width:11%;">
                            <col style="width:7%;">
                            <col style="width:7%;">
                            <col style="width:11%;">
                            <col style="width:11%;">
                            
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">이름</th>
                                <th scope="col">나이</th>
                                <th scope="col">주소</th>
                                <th scope="col">대상자 전화번호</th>
                                <th scope="col">구분</th>
                                <th scope="col">상태</th>
                                <th scope="col">발생일시</th>
                                <th scope="col">종료일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                            <col style="width:6%;">
                            <col style="width:7%;">
                            <col style="width:7%;">
                            <col style="width:22%;">
                            <col style="width:11%;">
                            <col style="width:7%;">
                            <col style="width:7%;">
                            <col style="width:11%;">
                            <col style="width:11%;">
                            
                            </colgroup>
                            <tbody >
                                <tr v-for="(item,index) in recipientItems" v-bind:key="index">
                                    <td><a href="#">{{index+1}}</a></td>
                                    <td><a href="#">{{item.recipientNm}}</a></td>
                                    <td><a href="#">{{makeAge(item.birthday) }}</a></td>
                                    <!--<td><a href="#" style="float:left">{{item.addr}}</a></td> -->
                                    <td><a href="#" >{{item.addr}}</a></td> 
                                    <td><a href="#">{{changeRecipientPhoneno(item.recipientPhoneno)}}</a></td>
                                    <td><a href="#">{{item.typeNm}}</a></td>
                                    <td><a href="#">{{item.signalStateNm}}</a></td>
                                    <td><a href="#">{{item.occurDtime}}</a></td>
                                    <td><a href="#">{{item.closeDtime}}</a></td>
                                    
                                </tr>                                
                              </tbody>
                            <!--  
                              <tbody v-else>
                                    데이터가 없습니다
                              </tbody>
                            -->
                        </table>
                    </div>
                </div>
                <div class="pagination mt0">
					<a href="#" class="front">첫 페이지</a>
					<a href="#" class="prev">이전 페이지</a>
					<a href="#" class="on">1</a>
					<a href="#">2</a>
					<a href="#">3</a>
					<a href="#">4</a>
					<a href="#">5</a>
					<a href="#">6</a>
					<a href="#">7</a>
					<a href="#">8</a>
					<a href="#">9</a>
					<a href="#">10</a>
					<a href="#" class="next">다음 페이지</a>
					<a href="#" class="back">마지막 페이지</a>
				</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
</style>

<script>
import axios from "axios";
import moment from "moment";
import HeaderComp from "../pages/HeaderComp.vue";

export default {
    name: 'UserListComponent',
    components :{
      HeaderComp
    },
    data() {
      return{
        orgNm:'',orgId:'', sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
        partCode: '', statusCode: '', modelName: '',
        sidoItems:[], sggItems:[], orgmItems:[], typeItems:[], number:[], stateItems:[], recipientItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'', selectedTypeItems:'', selectedStateItems:'',
        cBirthday:'', cAddr: '', NCount : 0,
      }
    },
    created() {
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.getTypeData();
    this.getStateData();
    this.getRecipientData();
    this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.cBirthday=moment().format('YYYY-MM-DD');
    },
    
    methods:{
    // 시/도 목록
    getSidoData() {
      let url =this.$store.state.serverApi + "/admin/address/sido"
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
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
    let url =this.$store.state.serverApi + "/admin/address/sgg";
    if(this.sidoCd != ''){
        url += "?sidoCd="+this.sidoCd;
    }else{
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
    }
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
    },

    // 관리 기관 목록
    getOrgmData() {
     let url =this.$store.state.serverApi + "/admin/organizations";
        if(this.sggCd != ''){
           let sggCode = this.sggCd.substring(0, 5);
           console.log(">> sggCode["+sggCode+"]");
            url += "?sggCd="+sggCode;
        }else{
            this.orgmItems=[];
            this.orgmItems.push({label: '전체', value: ''});
            return ; 
        }
       axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            const tempArr = [];
            this.orgmItems=[];
            for(let i=0; i<response.data.data.length; i++) {
              console.log("orgNm["+response.data.data[i].orgNm+"]");
              tempArr.push({
                label: response.data.data[i].orgNm,
                value: response.data.data[i].orgId,
              });
            } 
            console.log(">> tempArr["+tempArr+"]")
            this.orgmItems=tempArr;
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

    //구분 목록
    getTypeData() {
    axios.get(this.$store.state.serverApi +"/admin/codes?cmmnCdGroup=ALARM.TYPECD", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.typeItems=[];
            this.typeItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.typeItems.push({
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

    //상태 목록
    getStateData() {
    axios.get(this.$store.state.serverApi +"/admin/codes?cmmnCdGroup=ALARM.STATECD", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.stateItems=[];
            this.stateItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
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
    

    getRecipientData() {
      let uri = '';

      if(this.orgId == '' && this.partCode == '' && this.statusCode == '' && this.modelName == '') {
        uri = this.$store.state.serverApi + "/admin/emergencys?pageIndex=1&recordCountPerPage=100";
      } else {
        uri = this.$store.state.serverApi + "/admin/emergencys?pageIndex=1&recordCountPerPage=100";

        var fIdx = uri.indexOf("&", 0);
        var uriArray = uri.split('');
        uriArray.splice(fIdx, 1);
        uri = uriArray.join('');
      }
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            //const sidoCount = !this.selectedSidoItems? '' : new RegExp(this.selectedSidoItems, 'gi');
            //const sggCount = !this.selectedSggItems? '' : new RegExp(this.selectedSggItems, 'gi');
            const orgCount = !this.selectedOrgItems? '' : new RegExp(this.selectedOrgItems, 'gi');
            const typeCount = !this.selectedTypeItems? '' : new RegExp(this.selectedTypeItems, 'gi');
            const stateCount = !this.selectedStateItems? '' : new RegExp(this.selectedStateItems, 'gi');

            let resData = response.data.data
            if(resData){
              this.recipientItems = resData.filter((cd=>{
                return cd.orgId.match(orgCount) && cd.typeCd.match(typeCount) && cd.signalStateCd.match(stateCount)
              }))
              this.NCount =this.recipientItems.length
              console.log(uri)
            }
            else 
              this.recipientItems= []
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    changeRecipientPhoneno(phone){
      if(phone){
        let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        return changeNumber
      }else{
        return ''
      }
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
    },
    onChangeOrg(event) {
      this.sggCd = event.target.value
      this.orgSgg = event.target.value
      this.getOrgmData()
    },
    onChangePart(event) {
      this.partCode = event.target.value;
    },
    onChangeStatus(event) {
      this.statusCode = event.target.value;
    },
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
    manageInquiry() {
        this.getRecipientData();
    },
  },
}
</script>
<style>
</style>