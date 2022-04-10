<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
                <div class="result_txt">
                    <p>조회결과 : <strong>235</strong>건</p>
                </div>
                <div class="list result"><!-- 로그 선택시 -->
                    <table>
                        <colgroup>
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">로그일</th>
                                <th scope="col">아이디</th>
                                <th scope="col">구분</th>
                                <th scope="col">IP</th>
                                <th scope="col">내용</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in logItems" v-bind:key="index">
                                    <td><a href="#">{{item.logDtime}}</a></td>
                                    <td><a href="#">{{item.userId}}</a></td>
                                    <td><a href="#">{{item.applicationNm}}</a></td>
                                    <td><a href="#">{{item.accessIp}}</a></td>
                                    <td><a href="#">{{item.logDetails}}</a></td>
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
</template>
<style lang="scss">
@import '../../../assets/scss/common.css';
@import '../../../assets/scss/sub.css';
</style>
<script>
import axios from "axios";

export default {
    name: 'Log1',
    props:{
        s_date: String,
        e_date: String
    },
    data(){
      return{
        
        tabletId: '',
        isTablet: false, isCustomer: false,
        isLog: true,
        logItems: [], 
      }
    },
    created(){
      this.getLogData();
    },
    methods:{
      getLogData() {
      let uri = this.$store.state.serverApi + "/admin/logs/servers?startDate="+this.s_date+"&endDate="+this.e_date;;
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.logItems = response.data.data
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
          this.isLog=true; this.isComLog=false;
          this.isTablet=false; this.isCustomer=false;
          this.getLogData();
          break;
        case "2":
          this.isLog=false; this.isComLog=true;
          this.isTablet=true; this.isCustomer=true;
          this.getEquLogtData();
          break;
      }
    },
      manageInquiry() {
      if(this.isLog==true){
        this.getLogData();
      } else {
        this.getEquLogtData();
      }
    },
      initSet() { 
      this.getLogData();
      this.getEquLogData();
    },
    }
}
</script>
<style>
</style>