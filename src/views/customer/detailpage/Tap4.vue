<template>
    <div >
        <div class="tabcontent">
            <div class="toggle_btn2" style="margin-top : -25px">
                <button type="button" :class="connectTap===3?'btn on':'btn'" @click="dataTogle(3)" style="font-size: 16px;">태블릿</button>
                <button type="button" :class="connectTap===2?'btn on':'btn'" @click="dataTogle(2)" style="font-size: 16px;">게이트웨이</button>
                <button type="button" :class="connectTap===1?'btn on':'btn'" @click="dataTogle(1)" style="font-size: 16px;">센서</button>
            </div>
            <div class="tablist" v-if="connectTap===3">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">Tablet PC</p>
                        <div class="toggle_btn">
                            <button type="button" class="btn on" >기본정보</button>
                            <button type="button" class="btn" >상세정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">전화번호</th>
                                <th scope="col">통신사</th>
                                <th scope="col">모델</th>
                                <th scope="col">통신상태</th>
                                <th scope="col">배터리</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>{{changeRecipientPhoneno(this.getCTabletsData.phoneNumber)}}</td>
                                    <td>{{this.getCTabletsData.provider}}</td>
                                    <td>{{this.getCTabletsData.modelNm}}</td>
                                    <td>{{this.getCTabletsData.gwLinkYnNm}}</td>
                                    <td>{{this.getCTabletsData.batteryValue}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
            <div class="tablist" v-if="connectTap===2">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">게이트웨이</p>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">기본정보</button>
                            <button type="button" class="btn">상세정보</button>
                        </div>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn">업그레이드</button>
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
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">시리얼번호(S/N)</th>
                                <th scope="col">맥 어드레스</th>
                                <th scope="col">FW버전 (설치/회신)</th>
                                <th scope="col">HW버전 (설치/회신)</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr >
                                    <td>{{this.getCGatewayData.serialNo}}</td>
                                    <td>{{this.getCGatewayData.macAddr}}</td>
                                    <td>{{this.getCGatewayData.firmwareVersion}}</td>
                                    <td>{{this.getCGatewayData.hardwareVersion}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===1">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서</p>
                        <div class="toggle_btn">
                            <button type="button" :class="sensorsTap===1? 'btn on':'btn'" @click="sensorsTogle(1)">기본정보</button>
                            <button type="button" :class="sensorsTap===2? 'btn on':'btn'" @click="sensorsTogle(2)" >상세정보</button>
                        </div>
                    </div>
                </div>
                <div class="list" v-if="sensorsTap===1">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">시리얼번호</th>
                                <th scope="col">MAC Addr</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index" @click="getBSensers(index)">
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>{{item.serialNo}}</td>
                                    <td>{{item.macAddr}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="list" v-if="sensorsTap===2">
                    <table>
                        <colgroup>
                            <col style="width:33%;">
                            <col style="width:33%;">
                            <col style="width:33%;">
                            <!-- <col style="width:20%;">
                            <col style="width:20%;"> -->
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">sensorId</th>
                                <th scope="col">게이트웨이 전송주기(초)</th>
                                <th scope="col">센서 감지주기(초)</th>
                                
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:33%;">
                                <col style="width:33%;">
                                <col style="width:33%;">
                                <!-- <col style="width:20%;">
                                <col style="width:20%;"> -->
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index" @click="getBSensers(index)">
                                    <td>{{item.sensorId}}</td>
                                    <td>{{item.gwSendCycle}}</td>
                                    <td>{{item.sensorDetectCycle}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">장비상태 정보</p>
                        <div class="select_area">
                            <input type="text" name="" id="" :value="connectTap===3?'tablet':connectTap===2?'gateway':'sensors'">
                        </div>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">최신정보</button>
                            <button type="button" class="btn">직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">통신상태</th>
                                <th scope="col">장애여부</th>
                                <th scope="col">배터리</th>
                                <th scope="col">Keep-Alive</th>
                                <th scope="col">{{connectTap===3?'사용여부':"신호세기"}}</th>
                                <th scope="col">서버 보고 일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody ">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody v-if="connectTap===3">
                                <tr>
                                    <td>{{!this.getCTabletsData.gwLinkYnNm? '': this.getCTabletsData.gwLinkYnNm}}</td>
                                    <td>{{!this.getCTabletsData.faultYnNm? '': this.getCTabletsData.faultYnNm}}</td>
                                    <td>{{this.getCTabletsData.batteryValue}}</td>
                                    <td>수신</td>
                                    <td>{{this.getCTabletsData.tabletStateNm}}</td>
                                    <td>{{this.getCTabletsData.tabletRptDtime}}</td>
                                </tr>
                            </tbody>
                            <tbody v-if="connectTap===2">
                                <tr>
                                    <td>수신</td>
                                    <td>{{this.getCGatewayData.faultYnNm}}</td>
                                    <td>{{this.getCGatewayData.batteryValue}}</td>
                                    <td>수신</td>
                                    <td>{{changeRssi(this.getCGatewayData.rssi)}}</td>
                                    <td>{{this.getCGatewayData.incomeDtime}}</td>
                                </tr>
                            </tbody>
                            <tbody v-if="connectTap===1">
                                <tr>
                                    <td>수신</td>
                                    <td>{{!this.getBSensorsData.faultYnNm? '' : this.getBSensorsData.faultYnNm}}</td>
                                    <td>{{this.getBSensorsData.batteryValue}}</td>
                                    <td>수신</td>
                                    <td>{{changeRssi(this.getBSensorsData.rssi)}}</td>
                                    <td>{{this.getBSensorsData.incomeDtime}}</td>
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
   name: "Tap4",
   props:{
     recipientId: String
   },
   data () {
     return {
      getCSensorsData: null,
      getCGatewayData: null,
      getCTabletsData: null,
      getBSensorsData: null,
      
      
      connectTap: 1,
      sensorsTap: 1,

     }
   },
  methods: {
      async getCSensers(){
      const url  = this.$store.state.serverApi + `/admin/sensors?recipientId=${this.recipientId}&recordCountPerPage=30`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCSensorsData = res.data.data
            console.log("sensors ")
            console.log(this.getCSensorsData)
            this.getBSensorsData = this.getCSensorsData[0]
            
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getBSensers(input){
        
        this.getBSensorsData = this.getCSensorsData[input]
        console.log(this.getBSensorsData)
    },


    async getCGateway(){
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/gateways`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCGatewayData = res.data.data
            console.log("getCGatewayData ")
            console.log(this.getCGatewayData)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    async getCTablets(){
      const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/tablets`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCTabletsData = res.data.data
            console.log("태블릿")
            console.log(this.getCTabletsData)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    dataTogle(value){
        switch (value){
          case 1 : this.connectTap=1 ;break;
          case 2 : this.connectTap=2 ;break;
          case 3 : this.connectTap=3 ;break;

      }
    },
    sensorsTogle(value){
        switch (value){
          case 1 : this.sensorsTap=1 ;break;
          case 2 : this.sensorsTap=2 ;break;

      }
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
          case "LOC009" : result="주방1" ;break;
          case "LOC010" : result="주방2" ;break;
          case "LOC011" : result="작은방1" ;break;
          case "LOC012" : result="작은방2" ;break;
      }
        return result
    },
    changeRecipientPhoneno(phone){
        if(phone){
        let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        return changeNumber
        }else{
        return ''
        }
    
    },
    changeRssi(input){
        if(input <=0 && input >= -80) {
			return "양호";
		}else if( input <-80  && input >= -99) {
			return "보통";
		}else {
			return "미수신";
		}
    }
    
    

   },
   created() {
    this.getCSensers();
    this.getCGateway();
    this.getCTablets();
  }
 }
 </script>

<style scoped>
</style>                