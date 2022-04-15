<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>이벤트 리포트</span>
                <i class="ico_nav"></i>
                <span class="on">장비 장애</span>
            </div>
            <div class="box_search_wrap add_btn box_style">
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">장비구분</th>
                            <th scope="row">대상자 이름 입력</th>
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
                                    <select v-model="selectedOrgItems"><!--장비 구문 : equiptype, 장애 구분 : recipientId-->
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <select v-model="selectedTypeItems">
                                      <option v-for="(type, index) in typeItems"  v-bind:key="index">{{type.label}}</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" value="홍길동">
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
                            <col style="width:9%;">
                            <col style="width:9%;">
                            <col style="width:auto;">
                            <col style="width:10%;">
                            <col style="width:14%;">
                            <col style="width:17%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">이름</th>
                                <th scope="col">나이</th>
                                <th scope="col">주소</th>
                                <th scope="col">대상자 전화번호</th>
                                <th scope="col">장비구분</th>
                                <th scope="col">발생일자</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:6%;">
                                <col style="width:9%;">
                                <col style="width:9%;">
                                <col style="width:auto;">
                                <col style="width:10%;">
                                <col style="width:14%;">
                                <col style="width:17%;">
                            </colgroup>
                            <tbody >
                                <tr v-for="(item,index) in recipientItems" v-bind:key="index">
                                    <td><a href="#">{{index+1}}</a></td>
                                    <td><a href="#">{{item.recipientNm}}</a></td>
                                    <td><a href="#">{{makeAge(item.birthday) }}</a></td>
                                    <td><a href="#" >{{item.addr}}</a></td>
                                    <td><a href="#">{{changeRecipientPhoneno(item.recipientPhoneno)}}</a></td>
                                    <td><a href="#">{{item.equipTypeNm}}</a></td>
                                    <td><a href="#">{{item.updDtime}}</a></td>
                                </tr>
                            </tbody>
               
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
    name: 'EquipmentFailure',
    components :{
      HeaderComp
    },
    data() {
      return{
        orgNm:'',orgId:'', sido:'', sidoCd:'', sgg:'', sggCd:'', s_date: '', e_date: '',
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'',
        partCode: '', statusCode: '', modelName: '',
        sidoItems:[], sggItems:[], orgmItems:[], typeItems:[], recipientItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
        cBirthday:'', cAddr: '', NCount:0,
        selectedTypeItems:'',
      }
    },
    created() {
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.getTypeData();
    this.getRecipientData();
    this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.cBirthday=moment().format('YYYY-MM-DD');
    },
    
    methods:{
    // 시/도 목록
    getSidoData() {
    axios.get(this.$store.state.serverApi + "/admin/address/sido", {headers: {"Authorization": sessionStorage.getItem("token")}})
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
        this.selectedSggItems = ''
        this.sggItems=[];
        this.sggItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tempArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          for(let i=0; i<response.data.data.length; i++) {
            tempArr.push({
              label: response.data.data[i].sgg,
              value: response.data.data[i].sggCd,
              value2: response.data.data[i].sidoCd
            });
          } 
          let tmpResult = tempArr.filter(cd=>{
            return cd.value2 === this.sidoCd
          });
          
          this.sggItems = [...tmpResult2,...tmpResult]
          console.log(this.sggItems )
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
        url += "?sggCd="+sggCode;
      }else{
        this.selectedOrgItems = ''
        this.orgmItems=[];
        this.orgmItems.push({label: '전체', value: ''});
        return ; 
      }
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
        .then(response => {
          const tmpArr = [{label: '전체', value: ''}];
          let tmpResult2 = [{label: '전체', value: ''}];
          this.orgmItems=[];
          for(let i=0; i<response.data.data.length; i++) {
            tmpArr.push({
              label: response.data.data[i].orgNm,
              value: response.data.data[i].orgId,
            });
          } 
          let tmpResult = tmpArr
          this.orgmItems = [...tmpResult2,...tmpResult]
        this.orgmItems=tmpArr;
        })
        .catch(error => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },

    // 장비구분
    getTypeData() {
    axios.get(this.$store.state.serverApi +"/admin/codes?cmmnCdGroup=SENSOR.TYPECD", {headers: {"Authorization": sessionStorage.getItem("token")}})
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
    getRecipientData() {
      let uri = '';
      if(this.orgCode == '' && this.partCode == '' && this.statusCode == '' && this.modelName == '') {
        uri = this.$store.state.serverApi + "/admin/emergencys/equipment-faults?pageIndex=1&recordCountPerPage=100";
      } else {
        uri = this.$store.state.serverApi + "/admin/emergencys/equipment-faults?pageIndex=1&recordCountPerPage=100";
        if(this.orgCode != '') uri += "&orgId=" + this.orgCode;
        if(this.partCode != '') uri += "&typeCd=" + this.partCode;
        if(this.statusCode != '') uri += "&stateCd=" + this.statusCode;
        if(this.modelName != '') uri += "&recipientNm=" + this.modelName;

        var fIdx = uri.indexOf("&", 0);
        var uriArray = uri.split('');
        uriArray.splice(fIdx, 1);
        uri = uriArray.join('');
      }
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            let resData = response.data.data
            const typeCount = !this.selectedTypeItems? '' : new RegExp(this.selectedTypeItems, 'gi');

            this.recipientItems= resData.filter((cd=>{
              return cd.equipTypeCd.match(typeCount) 
            }))
            this.NCount =this.recipientItems.length
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
      this.sidoCd = event.target.value
      this.getSggData()
      this.sggCd = ''
      this.getOrgmData()
    },

    onChangeOrg(event) {
      this.sggCd = event.target.value
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