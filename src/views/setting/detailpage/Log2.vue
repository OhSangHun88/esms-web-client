<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
                <div class="result_txt">
                    <p>조회결과 : <strong>235</strong>건</p>
                </div>
                <div class="list result" style="display:none;"><!-- 통신로그 선택시 -->
                    <table>
                        <colgroup>
                            <col style="width:auto;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">로그일</th>
                                <th scope="col">출발지</th>
                                <th scope="col">목적지</th>
                                <th scope="col">태블릿아이디</th>
                                <th scope="col">고객아이디</th>
                                <th scope="col">로그</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:auto;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in comLogItems" v-bind:key="index">
                                    <td><a href="#">{{item.logDtime}}</a></td>
                                    <td><a href="#">{{item.logSource}}</a></td>
                                    <td><a href="#">{{item.logTarget}}</a></td>
                                    <td><a href="#">{{item.tabletId}}</a></td>
                                    <td><a href="#">{{item.recipientId}}</a></td>
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
    name: 'Log2',
    props:{
        s_date: String,
        e_date: String
    },
    data(){
      return{
        tabletId: '',recipientId:'',
        isTablet: false, isCustomer: false,
        isComLog: false,
        comLogItems: [],
      }
    },
    created(){
      this.getEquLogData();
    },
    methods:{
      getEquLogData() {
      let uri = this.$store.state.serverApi + "/admin/logs/equipments?startDate="+this.s_date+"&endDate="+this.e_date;;
      if(this.tabletId != '') uri+="&tabletId=" + this.tabletId;
      if(this.recipientId != '') uri+="&recipientId=" + this.recipientId;
      console.log(uri)
      axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(response => {
            this.comLogItems = response.data.data
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          console.log(this.comLogItems)
      },
      manageInquiry() {
      if(this.isLog==true){
        this.getLogData();
      } else {
        this.getEquLogtData();
      }
    },
      initSet() {
      this.getEquLogData();
    },
    }
}
</script>
<style>
</style>