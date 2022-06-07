<template>
    <div class="wrap">
        <!--<HeaderComp></HeaderComp>-->
        <div class="container type-02">
          <div id="" class="popupLayer" v-if="errorpopup1 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup1 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">조회 종료일자가 시작일자보다 빠릅니다<br/>일자를 다시 선택하여 주십시요</p>
                    </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup1 = false">확인</button>
                    </div>
                </div>
            </div>
            <div id="" class="popupLayer" v-if="errorpopup2 == true">
                <div class="popup_wrap type-02">
                    <div class="title_wrap">
                        <div class="title">경고</div>
                        <button type="button" class="btn_close" @click="errorpopup2 = false">닫기</button>
                    </div>
                    <div class="popup_cnt">
                        <p class="alert_txt">일주일단위로 조회 가능합니다<br/>일자를 다시 선택하여 주십시요</p>
                   </div>
                    <div class="popbtn_area type-02">
                        <button type="button" class="btn form2" @click="errorpopup2 = false">확인</button>
                    </div>
                </div>
            </div>
            <div class="list_title_wrap">
                <span>시스템관리</span>
                <i class="ico_nav"></i>
                <span class="on">로그 관리</span>
            </div>
            <div class="box_search_wrap add_btn box_style" @keypress.enter='manageInquiry'>
                <div class="table_wrap type-02">
                    <table>
                        <colgroup>
                            <col style="width:48.5%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:23.5%">
                        </colgroup>
                        <thead>
                            <th scope="row">로그구분</th>
                            <th scope="row">태블릿 아이디</th>
                            <th scope="row">고객 아이디</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="btn_area log">
                                        <button type="button" @click="log(1)" @change="onChange($event)" class="btn" value="1" :class="logtoggle===1?'btn on':'btn'" >서버로그</button>
                                        <button type="button" @click="log(2)" @change="onChange($event)" class="btn" value="2" :class="logtoggle===2?'btn on':'btn'">장비로그</button>
                                    </div>
                                </td>
                                <td>
                                    <input type="text" value="" v-model="selectedtabletId">
                                </td>
                                <td>
                                    <input type="text" value="" v-model="selectedrecipientId">
                                </td>
                                <td>
                                    <div class="date_warp">
                                        <div class="customerBts" style="justify-content: flex-start;">
                                            <input type="date" v-model="s_date"/>
                                            <span class="tilde">~</span>
                                            <input type="date" v-model="e_date" :max="this.$moment().format('YYYY-MM-DD')"/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="btn_area">
                    <button type="button" class="btn" v-on:click="manageInquiry">조회</button>
                    <button type="button" class="btn form2" v-on:click="initSet">초기화</button>
                </div>
            </div>
            <div class="one_box box_style">
                <div class="list result"><!-- 로그 선택시 -->
                    <log1 :NCount="this.NCount" :logItems="this.logItems" v-if="this.logtoggle===1"></log1>
                    <log2 :ENCount="this.ENCount" :comLogItems="this.comLogItems" v-if="this.logtoggle===2"></log2>
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
import log1 from "./detailpage/Log1.vue";
import log2 from "./detailpage/Log2.vue";

export default {
    name: 'ManageLog',
    components : {
        HeaderComp,
        log1,
        log2,
    },
    data(){
      return{
        tabletId: '', recipientId: '', s_date: '', e_date: '', ls_date:'', le_date:'',
        isTablet: false, isCustomer: false,
        isLog: true, isComLog: false,
        logItems: [], comLogItems: [],
        logtoggle: 1, selectedtabletId: '', selectedrecipientId: '',
        NCount:0, ENCount:0,
        errorpopup1: false, errorpopup2: false, 
      }
    },
    created(){
      this.getLogData();
      this.getEquLogData();
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
      
    },
    methods:{
      getLogData() {
      let uri = this.$store.state.serverApi + "/admin/logs/servers?pageIndex=1&recordCountPerPage=100"
      +"&startDate="+this.s_date
      +"&endDate="+this.e_date;;
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.logItems = response.data.data
            this.NCount =this.logItems.length
          })          
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
      },
      getEquLogData() {
      let uri = this.$store.state.serverApi+"/admin/logs/equipments?pageIndex=1&recordCountPerPage=100"
      +"&startDate="+this.s_date
      +"&endDate="+this.e_date
      +"&recipientId=" + this.selectedrecipientId
      +"&tabletId=" + this.selectedtabletId;

        axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.comLogItems = response.data.data
            this.ENCount =this.comLogItems.length
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
          this.logtoggle=1
          this.isLog=true; this.isComLog=false;
          this.isTablet=false; this.isCustomer=false;
          this.getLogData();
          break;
        case "2":
          this.logtoggle=2
          this.isLog=false; this.isComLog=true;
          this.isTablet=true; this.isCustomer=true;
          this.getEquLogData();
          break;
      }
    },
      manageInquiry() {
      if(this.s_date > this.e_date){
        this.errorpopup1 = true
      }/*else if(this.e_date > moment(this.s_date).add(6, 'days').format('YYYY-MM-DD')){
        this.errorpopup2 = true
      }*/else{
      if(this.logtoggle===1){
        this.getLogData();
      } else {
        this.getEquLogData();
      }
      }
    },
      initSet() {
      this.s_date=moment().subtract(6, 'days').format('YYYY-MM-DD');
      this.e_date=moment().format('YYYY-MM-DD');
      if(this.logtoggle===1){
      this.getLogData();
      }else {
      this.getEquLogData();
      }
    },
    log(value){
      switch (value){
          case 1 : this.logtoggle=1 ;break;
          case 2 : this.logtoggle=2 ;break;
      }
    },
    }
}
</script>
<style>
</style>