<template>
    <div>
        <div class="tabcontent">
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
            <div id="tab02" class="tabcnt01">
                <div class="list_top">
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date" v-model="occurStartDate"/>
                            <span class="tilde">~</span>
                            <input type="date" v-model="occurEndDate" :max="this.$moment().format('YYYY-MM-DD')"/>
                            <button type="button" class="btn" @click="manageInquiry()">조회</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:auto;">
                            <col style="width:auto;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">순번</th>
                                <th scope="col">응급구분</th>
                                <th scope="col">상태</th>
                                <th scope="col">테스트구분</th>
                                <th scope="col">신호발생일시</th>
                                <th scope="col">발생보고일시</th>
                                <th scope="col">신호종료일시</th>
                                <th scope="col">종료보고일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-01">
                        <table>
                            <colgroup>
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in emergencys" v-bind:key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{item.typeNm}}</td>
                                    <td>{{item.signalStateNm}}</td>
                                    <td>{{!item.testYn ? '실제상황':'테스트'}}</td> 
                                    <td>{{item.occurDtime}}</td>
                                    <td>{{item.rcvDtime}}</td>
                                    <td v-if="item.signalStateCd !== 'STE001'">{{item.closeDtime}}</td>
                                    <td v-else></td>
                                    <td v-if="item.signalStateCd !== 'STE001'">{{item.updDtime}}</td>
                                    <td v-else></td>
                                </tr>   
                                
                            </tbody>
                        </table>
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
    </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
 export default {
   name: "Tap2",
   props:{
     recipientId: String
   },
   data () {
     return {
      emergencys: null,
      occurStartDate:moment().subtract(7,'days').format('YYYY-MM-DD'),
      occurEndDate: moment().format('YYYY-MM-DD'),
      searchCheck1:1,searchCheck2:0,
      errorpopup1: false, errorpopup2: false,
     }
   },
  methods: {
    manageInquiry() {
        if(this.occurStartDate > this.occurEndDate){
        this.errorpopup1 = true
      }/*else if(this.occurEndDate > moment(this.occurStartDate).add(6, 'days').format('YYYY-MM-DD')){
        this.errorpopup2 = true
      }*/else{
        this.searchCheck2 = 1
        this.getEmergencysData()
      }
        
    },
    async getEmergencysData(){
        const url  = this.$store.state.serverApi + `/admin/emergencys?recipientId=${this.recipientId}&pageIndex=1&recordCountPerPage=100&occurStartDate=${this.occurStartDate}&occurEndDate=${this.occurEndDate}`
        
        console.log("emergencys is ")
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.emergencys = res.data.data
            console.log(this.emergencys)
            if(this.searchCheck1 === 1){
                this.searchCheck1 = 0
            }
            if(this.emergencys.length !== 0 && this.searchCheck1 === 0 && this.searchCheck2 === 1){
                alert("성공적으로 조회 되었습니다.")
                this.searchCheck2 = 0
            }else if(this.emergencys.length === 0 && this.searchCheck1 === 0 && this.searchCheck2 === 1){
                alert("조회 결과가 존재하지 않습니다.")
                this.searchCheck2 = 0
            }
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          
    },
    

   },
   created() {
    this.getEmergencysData();
  }
 }
 </script>

<style scoped>


 </style>
                
            