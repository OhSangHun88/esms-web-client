<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <div class="container type-02">
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">장비관리</span>
            </div>
            <div class="box_search_wrap add_btn box_style" @keypress.enter='manageInquiry'>
                <div class="table_wrap">
                    <table>
                        <colgroup>
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%">
                            <col style="width:15%;">
                            <col style="width:9%;" v-if="equipList === 'sensor'">
                            <col style="width:10%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                        </colgroup>
                        <thead>
                            <th scope="row">시/도</th>
                            <th scope="row">시/군/구</th>
                            <th scope="row">관리기관</th>
                            <th scope="row">장비구분</th>
                            <th scope="row" v-if="equipList === 'sensor'">센서타입</th>
                            <th scope="row">상태구분</th>
                            <th scope="row">MAC Address</th>
                            <th scope="row">대상자명</th>
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
                                    <select v-model="selectedOrgItems" >
                                      <option v-for="(orgm, index) in orgmItems" :value="orgm.value" v-bind:key="index">{{orgm.label}}</option>
                                    </select>
                                </td>
                                <td>
                                  <div class="btn_area" >
                                    <button type="button" style="width:40%" @click="eList(1)" :class="equipList === 'gateway'? 'btn on' :'btn'">게이트웨이</button>
                                    <button type="button" style="width:28%" @click="eList(2)" :class="equipList === 'tablet'? 'btn on' :'btn'">테블릿</button>
                                    <button type="button" style="width:32%" @click="eList(3)" :class="equipList === 'sensor'? 'btn on' :'btn'">센서</button>
                                  </div>
                                </td>
                                <td v-if="equipList === 'sensor'">
                                    <select v-model="selectedTypeItems">
                                      <option v-for="(sensor, index) in sensorItems" :value="sensor.value" v-bind:key="index">{{sensor.label}}</option>
                                    </select>
                                </td>
                                <td>
                                  <select v-model="selectedStatedItems">
                                    <option v-for="(check, index) in StatedItems" :value="check.value" v-bind:key="index">{{check.label}}</option>
                                  </select>
                                </td>
                                <td>
                                    <input type="text" value="" v-model="selectedMacAddress">
                                </td>
                                <td>
                                    <input type="text" value="" v-model="selectedRecipientNm">
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
                            <col style="width:3%;">
                            <col style="width:12%;">
                            <col style="width:4%;">
                            <col style="width:4%;">
                            <col style="width:auto;">
                            <col style="width:10%;">
                            <col style="width:4%;">
                            <col style="width:8%;">
                            <col style="width:5%;">
                            <col style="width:5%;" v-if="equipList === 'sensor'">
                            <col style="width:8%;">
                            <col style="width:8%;">
                            <col style="width:5%;">
                            <col style="width:10%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">관리기관</th>
                                <th scope="col">대상자명</th>
                                <th scope="col">나이</th>
                                <th scope="col">주소</th>
                                <th scope="col">대상자 전화번호</th>
                                <th scope="col">응급요원명</th>
                                <th scope="col">응급요원 전화번호</th>
                                <th scope="col">장비구분</th>
                                <th scope="col" v-if="equipList === 'sensor'">센서타입</th>
                                <th scope="col">Serial NO</th>
                                <th scope="col">MAC Address</th>
                                <th scope="col">상태구분</th>
                                <th scope="col">등록일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:3%;"> <!--순번-->
                                <col style="width:12%;"> <!--순번-->
                                <col style="width:4%;"> <!--대상자명-->
                                <col style="width:4%;"> <!--나이-->
                                <col style="width:auto;"> <!--주소-->
                                <col style="width:10%;"> <!--대상자 전화번호-->
                                <col style="width:4%;"> <!--응급관리요원-->
                                <col style="width:8%;"> <!--응급관리요원 전화번호-->
                                <col style="width:5%;"> <!--장비구분-->
                                <col style="width:5%;" v-if="equipList === 'sensor'"> <!--센서타입-->
                                <col style="width:8%;"> <!---시리얼번호-->
                                <col style="width:8%;"> <!---MAC Address-->
                                <col style="width:5%;"> <!--상태구분-->
                                <col style="width:10%;"> <!--등록일시-->
                            </colgroup>
                            <tbody v-if="equipList === 'gateway'">
                                <tr v-for="(item,index) in recipientItems" v-bind:key="index">
                                  <td>{{index+1}}</td> <!--순번-->
                                  <td>{{item.orgNm}}</td> <!--순번-->
                                  <td>{{item.recipientNm}}</td> <!--대상자명-->
                                  <td>{{makeAge(item.birthday)? makeAge(item.birthday): ''}}</td> <!--나이-->
                                  <td>{{item.addr}}</td> <!--주소-->
                                  <td>{{changeRecipientPhoneno(item.recipientPhoneno)}}</td> <!--대상자 전화번호-->
                                  <td>{{item.relationNm}}</td> <!--응급관리요원-->
                                  <td>{{changeRecipientPhoneno(item.relationPhone)}}</td> <!--응급관리요원 전화번호-->
                                  <td>{{item.equipTypeName}}</td> <!--장비구분-->
                                  <td>{{item.serialNo}}</td> <!--시리얼번호-->
                                  <td>{{item.macAddr}}</td> <!--MAC Address-->
                                  <td>{{item.stateNm}}</td> <!--상태구분-->
                                  <td>{{item.regDtime}}</td> <!--등록일시-->
                                </tr>
                            </tbody>
                            <tbody v-if="equipList === 'tablet'">
                                <tr v-for="(item,index) in recipientItems" v-bind:key="index">
                                  <td>{{index+1}}</td> <!--순번-->
                                  <td>{{item.orgNm}}</td> <!--순번-->
                                  <td>{{item.recipientNm}}</td> <!--대상자명-->
                                  <td>{{makeAge(item.birthday)? makeAge(item.birthday): ''}}</td> <!--나이-->
                                  <td>{{item.addr}}</td> <!--주소-->
                                  <td>{{changeRecipientPhoneno(item.recipientPhoneno)}}</td> <!--대상자 전화번호-->
                                  <td>{{item.relationNm}}</td> <!--응급관리요원-->
                                  <td>{{changeRecipientPhoneno(item.relationPhone)}}</td> <!--응급관리요원 전화번호-->
                                  <td>{{item.equipTypeName}}</td> <!--장비구분-->
                                  <td>{{item.serialNo}}</td> <!--시리얼번호-->
                                  <td>{{item.macAddr}}</td> <!--MAC Address-->
                                  <td>{{item.stateNm}}</td> <!--상태구분-->
                                  <td>{{item.regDtime}}</td> <!--등록일시-->
                                </tr>
                            </tbody>
                            <tbody v-if="equipList === 'sensor'">
                                <tr v-for="(item,index) in recipientItems" v-bind:key="index">
                                  <td>{{index+1}}</td> <!--순번-->
                                  <td>{{item.orgNm}}</td> <!--순번-->
                                  <td>{{item.recipientNm}}</td> <!--대상자명-->
                                  <td>{{makeAge(item.birthday)? makeAge(item.birthday): ''}}</td> <!--나이-->
                                  <td>{{item.addr}}</td> <!--주소-->
                                  <td>{{changeRecipientPhoneno(item.recipientPhoneno)}}</td> <!--대상자 전화번호-->
                                  <td>{{item.relationNm}}</td> <!--응급관리요원-->
                                  <td>{{changeRecipientPhoneno(item.relationPhone)}}</td> <!--응급관리요원 전화번호-->
                                  <td>SENSOR</td> <!--장비구분-->
                                  <td>{{item.equipTypeName}}</td> <!--센서타입-->
                                  <td>{{item.serialNo}}</td> <!--시리얼번호-->
                                  <td>{{item.macAddr}}</td> <!--MAC Address-->
                                  <td>{{item.stateNm}}</td> <!--상태구분-->
                                  <td>{{item.regDtime}}</td> <!--등록일시-->
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
        sidoItems:[], sggItems:[], orgmItems:[], typeItems:[], recipientItems:[],copyRecipientItems:[],
        orgSido:'', orgSgg:'', orgCode:'',
        cBirthday:'', cAddr: '', NCount:0,
        selectedTypeItems:'', selectedStatedItems:'',
        selectedSidoItems:'', selectedSggItems:'', selectedOrgItems:'', selectedRecipientNm: '', selectedMacAddress: '',
        equipList: 'gateway',
        sensorItems:[], StatedItems: [],
        errorpopup1: false, errorpopup2: false,
      }
    },
    created() {
    this.getSidoData();
    this.getSggData();
    this.getOrgmData();
    this.getTypeData();
    this.getsensorData();
    this.getcheckTypeData(1);
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

    // 센서 타입
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
      let addrCode = '';
      if(this.selectedSidoItems != '' && this.selectedSggItems == ''){
        addrCode = this.sidoCd.substring(0, 2);
      }else if(this.selectedSggItems != ''){
        addrCode = this.sggCd.substring(0, 5);
      }else{
        addrCode = '';
      }
      if(this.equipList == 'gateway' ){
        uri = this.$store.state.serverApi 
        +"/admin/equipment/gateway-searchlist?&orgId="+this.selectedOrgItems
        +"&recipientNm="+this.selectedRecipientNm
        +"&addrCd="+addrCode
        +"&macAddr="+this.selectedMacAddress
        +"&stateCd="+this.selectedStatedItems
      }else if(this.equipList == 'tablet'){
        uri = this.$store.state.serverApi 
        +"/admin/equipment/tablet-searchlist?&orgId="+this.selectedOrgItems
        +"&recipientNm="+this.selectedRecipientNm
        +"&addrCd="+addrCode
        +"&macAddr="+this.selectedMacAddress
        +"&stateCd="+this.selectedStatedItems
      }else{
        uri = this.$store.state.serverApi 
        +"/admin/equipment/sensor-searchlist?&orgId="+this.selectedOrgItems
        +"&recipientNm="+this.selectedRecipientNm
        +"&addrCd="+addrCode
        +"&macAddr="+this.selectedMacAddress
        +"&sensorTypeCd="+this.selectedTypeItems
        +"&stateCd="+this.selectedStatedItems
      }
      console.log(uri)
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.recipientItems = response.data.data
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
    makeAge(birthDay){
      let tmp1 = this.$moment(birthDay).format('YYYY')
      let tmp2 = this.$moment()
      return tmp2.diff(tmp1, 'years');
    },
     manageInquiry() {
        this.getRecipientData();
    },
    getsensorData() {
    axios.get(this.$store.state.serverApi +"/admin/codes?cmmnCdGroup=SENSOR.TYPECD", {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.sensorItems=[];
            this.sensorItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.sensorItems.push({
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
    getcheckTypeData(value) {
      let uri = ''
      if(value === 1){
        uri = this.$store.state.serverApi + "/admin/codes?cmmnCdGroup=GATEWAY.STATECD";
      }else if(value === 2){
        uri = this.$store.state.serverApi + "/admin/codes?cmmnCdGroup=TABLET.STATECD";
      }else{
        uri = this.$store.state.serverApi + "/admin/codes?cmmnCdGroup=SENSOR.STATECD";
      }
      axios.get(uri, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            this.StatedItems=[];
            this.StatedItems.push({label: '전체', value: ''});
            for(let i=0; i<response.data.data.length; i++) {
              this.StatedItems.push({
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
    eList(value){
      switch (value){
          case 1 : this.equipList="gateway"; break;
          case 2 : this.equipList="tablet"; break;
          case 3 : this.equipList="sensor"; break;
      }
      this.getcheckTypeData(value);
    },
    },
}
</script>
<style>
</style>