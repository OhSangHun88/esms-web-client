<template>
    <div>
        <div class="tabcontent">
            <div id="tab01" class="tabcnt01" style="display:block;">
                <div class="list_top">
                    <i class="search_ico"></i>
                    <div class="fillter_wrap">
                        <div class="select_area">
                            <select name="" id="">
                                <option value="">환경정보</option>
                                <option value="">전체</option>
                                <option value="">온도</option>
                                <option value="">조도</option>
                                <option value="">습도</option>
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="" id="">
                                <option value="">바이탈 정보</option>
                                <option value="">전체</option>
                                <option value="">심장박동</option>
                                <option value="">호흡</option>
                                <option value="">활동량</option>
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="" id="">
                                <option value="">활동감지기(P)정보</option>
                                <option value="">전체</option>
                                <option value="">화장실</option>
                                <option value="">작은방</option>                                                    
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="" id="">
                                <option value="">도어감지기 정보</option>
                                <option value="">전체</option>
                                <option value="">뒷문</option>
                                <option value="">대문</option>
                            </select>
                        </div>
                    </div>
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date"/>
                            <span class="tilde">~</span>
                            <input type="date"/>
                            <button type="button" class="btn">조회</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">{{recipientId}}설치장소</th>
                                <th scope="col">측정일시</th>
                                <th scope="col">보고일시</th>
                                <th scope="col">조도</th>
                            </tr>
                        </thead>
                    </table>
                    
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in sensorsData" v-bind:key="index">
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>2021-03-04 16:49:03</td>
                                    <td>2021-03-04 16:49:03</td>
                                    <td>506 lx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</template>
<script>
import axios from "axios";

 export default {
   name: "Tap1",
   props:{
     recipientId: String
   },
   data () {
     return {
      sensorsData: null,

     }
   },
  methods: {
    async getSensorsData(){
        const url  = `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=TPE006&measureStartDate=2022-03-30&measureEndDate=2022-04-04`
        
        console.log("sensorsData is ")
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.sensorsData = res.data.data
            console.log("aa ")
            console.log(this.sensorsData)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    locationCode(input){
        let result=''
        switch (input){
          case "LOC001" : result="거실1"; break;
          case "LOC002" : result="거실2" ;break;
          case "LOC003" : result="안방1"; break;
          case "LOC004" : result="안방2" ;break;
          case "LOC005" : result="화장실1" ;break;
          case "LOC006" : result="화장실2" ;break;
          case "LOC007" : result="현관1" ;break;
          case "LOC008" : result="현관2" ;break;
          case "LOC009" : result="부엌1" ;break;
          case "LOC010" : result="부엌2" ;break;
          case "LOC011" : result="작은방1" ;break;
          case "LOC012" : result="작은방2" ;break;
      }
        return result
    }

   },
   created() {
    this.getSensorsData();
  }
 }
 </script>

<style scoped>


 </style>