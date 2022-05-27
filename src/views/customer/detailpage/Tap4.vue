<template>
    <div >
        <div v-if="!this.pending" style="text-align: center;">
            <img src="../../../assets/images/loading.png"  />
        </div>
        <div v-else class="tabcontent">
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
                            <!-- <button type="button" class="btn on" >기본정보</button>
                            <button type="button" class="btn" >상세정보</button> -->
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
                            <col style="width:17%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">전화번호</th>
                                <th scope="col">통신사</th>
                                <th scope="col">모델</th>
                                <th scope="col">앱버전</th>
                                <th scope="col">OS버전</th>
                                <th scope="col">mac address</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:17%;">
                            </colgroup>
                            <tbody v-if="!this.getCTabletsData">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td>{{changeRecipientPhoneno(this.getCTabletsData.phoneNumber)}}</td>
                                    <td>{{this.getCTabletsData.provider}}</td>
                                    <td>{{this.getCTabletsData.modelNm}}</td>
                                    <td>{{this.getCTabletsData.appVersion}}</td>
                                    <td>{{this.getCTabletsData.osVersion}}</td>
                                    <td>{{this.getCTabletsData.macAddr}}</td>
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
                        <div v-if="!this.getCGatewayData"></div>
                        <div class="toggle_btn" v-else>
                            <button type="button" class="btn on">기본정보</button>
                            <button type="button" class="btn">상세정보</button>
                        </div>
                    </div>
                    <div v-if="!this.getCGatewayData"></div>
                    <div class="btn_area" v-else>
                        <button type="button" class="btn form2" @click="firmwareUpgrade()">펌웨어 업그레이드</button>
                        <button type="button" class="btn form2" @click="cmdA4post()">cmdA4전송</button>
                        <button type="button" class="btn form2">역점검요청</button>
                        <!-- <button type="button" class="btn form2">문열림멘트-ON</button>
                        <button type="button" class="btn form2">자동착신-OFF</button> -->
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
                                    <td>{{!this.getCGatewayData?'':this.getCGatewayData.serialNo}}</td>
                                    <td>{{!this.getCGatewayData?'':this.getCGatewayData.macAddr}}</td>
                                    <td>{{!this.getCGatewayData?'':this.getCGatewayData.firmwareVersion}}</td>
                                    <td>{{!this.getCGatewayData?'':this.getCGatewayData.hardwareVersion}}</td>
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
                        <div v-if="this.getCSensorsData.length === 0"></div>
                        <div class="toggle_btn" v-else>
                            <button type="button" :class="sensorsTap===1? 'btn on':'btn'" @click="sensorsTogle(1)">기본정보</button>
                            <button type="button" :class="sensorsTap===2? 'btn on':'btn'" @click="sensorsTogle(2)" >상세정보</button>
                        </div>
                    </div>
                </div>
                <div class="list" v-if="sensorsTap===1">
                    <table>
                        <colgroup>
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <!-- 센서 상세정보 : 순번, 센서종류, 설치장소, 센서설치버전 시리얼번호, MAC Addr-->
                                <th scope="col">순번</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">센서버전</th>
                                <th scope="col">시리얼번호</th>
                                <th scope="col">MAC Addr</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                            </colgroup>
                            <tbody v-if="!this.getCSensorsData">
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index" @click="getBSensers(index,0)">
                                    <td>{{index+1}}</td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>{{item.sensorVersion}}</td>
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
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <!-- 센서 상세정보 : 순번, 센서명, 센서이전버전, 센서설치버전 입고명, 입고일자, 등록일시 -->
                                <th scope="col">순번</th>
                                <th scope="col">센서명</th>
                                <th scope="col">센서이전버전</th>
                                <th scope="col">센서버전</th>
                                <th scope="col">입고명</th>
                                <th scope="col">등록일시</th>
                                <th scope="col">수정일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-04">
                        <table>
                            <colgroup>
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                            </colgroup>
                            <tbody v-if="!this.getCSensorsData">
                                <tr >
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index" >
                                    <td>{{index+1}}</td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{item.previousVersion}}</td>
                                    <td>{{item.sensorVersion}}</td>
                                    <td>{{item.incomeNm}}</td>
                                    <td>{{item.incomeDtime}}</td>
                                    <td>{{item.regDtime}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===2">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">장비상태 정보</p>
                        <div class="select_area">
                            <input type="text" name="" id="" :value="connectTap===3?'tablet':connectTap===2?'gateway':'sensors'">
                        </div>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">최신정보</button>
                            <button type="button" class="btn" >직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:12%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">통신상태</th>
                                <th scope="col">전원연결상태</th>
                                <th scope="col">점검대상여부</th>
                                <th scope="col">배터리</th>
                                <th scope="col">Keep-Alive</th>
                                <th scope="col">{{connectTap===3?'사용여부':"신호세기"}}</th>
                                <th scope="col">상태측정 일시</th>
                                <th scope="col">서버 등록 일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody ">
                        <table>
                            <colgroup>
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:12%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody v-if="connectTap===2">
                                <tr>
                                    <td>{{!this.getCGatewayData? '':!this.getCGatewayData.gwStateNm? '': this.getCGatewayData.gwStateNm}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.powerLinkYn===undefined||this.getCGatewayData.powerLinkYn===null ? '' : this.getCGatewayData.powerLinkYn===1?'연결':'차단'}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.checkYnCd===null||this.getCGatewayData.checkYnCd===undefined||this.getCGatewayData.checkYnCd===''? '': this.getCGatewayData.checkYnCd===0? '정상':'점검대상'}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.batteryValue}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.keepAliveRcvYn===1?'정상':this.getCGatewayData.keepAliveRcvYn===0?'비정상':'미수신'}}</td>
                                    <td>{{!this.getCGatewayData? '':changeRssi(this.getCGatewayData.rssi)}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.stateMeasureDtime}}</td>
                                    <td>{{!this.getCGatewayData? '':this.getCGatewayData.updDtime}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===3">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">장비상태 정보</p>
                        <div class="select_area">
                            <input type="text" name="" id="" :value="connectTap===3?'tablet':connectTap===2?'gateway':'sensors'">
                        </div>
                        <div class="toggle_btn">
                            <button type="button" :class="beforeToggle===0? 'btn on': 'btn'">최신정보</button>
                            <button type="button" :class="beforeToggle===1? 'btn on': 'btn'" >직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">통신상태</th>
                                <th scope="col">점검대상여부</th>
                                <th scope="col">배터리</th>
                                <th scope="col">Keep-Alive</th>
                                <th scope="col">{{connectTap===3?'사용여부':"신호세기"}}</th>
                                <th scope="col">상태측정 일시</th>
                                <th scope="col">서버 등록 일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody ">
                        <table>
                            <colgroup>
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody v-if="connectTap===3">
                                <tr>
                                    <td>{{!this.getCTabletsData? '': this.getCTabletsData.gwLinkYnNm}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.checkYnCd===null||this.getCTabletsData.checkYnCd===undefined||this.getCTabletsData.checkYnCd===''? '': this.getCTabletsData.checkYnCd===0? '정상':'점검대상'}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.batteryValue}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.keepAliveRcvYn===1?'정상':this.getCTabletsData.keepAliveRcvYn===0?'비정상':'미수신'}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.tabletStateNm}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.stateMeasureDtime}}</td>
                                    <td>{{!this.getCTabletsData? '':this.getCTabletsData.updDtime}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===1">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">장비상태 정보</p>
                        <div class="select_area">
                            <input type="text" name="" id="" :value="connectTap===3?'tablet':connectTap===2?'gateway':'sensors'">
                        </div>
                        <div class="toggle_btn">
                            <button type="button" :class="beforeToggle===0? 'btn on': 'btn'" @click="getNowToggle">최신정보</button>
                            <button type="button" :class="beforeToggle===1? 'btn on': 'btn'"  >직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:14%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">통신상태</th>
                                <th scope="col">점검대상여부</th>
                                <th scope="col">배터리</th>
                                <th scope="col">Keep-Alive</th>
                                <th scope="col">{{connectTap===3?'사용여부':"신호세기"}}</th>
                                <th scope="col">상태측정 일시</th>
                                <th scope="col">서버 등록 일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody ">
                        <table>
                            <colgroup>
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:14%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody v-if="connectTap===1 && beforeToggle===0">
                                <tr>
                                    <td>{{!this.getBSensorsData? '': this.getBSensorsData.sensorStateNm}}</td>
                                    <td>{{!this.getBSensorsData? '':this.getBSensorsData.checkYnCd ===null|| this.getBSensorsData.checkYnCd ===undefined ? '' : this.getBSensorsData.checkYnCd===0?'정상':'점검대상'}}</td>
                                    <td>{{!this.getBSensorsData? '':this.getBSensorsData.batteryValue}}</td>
                                    <td>{{!this.getBSensorsData? '':this.getBSensorsData.keepAliveRcvYn===1?'정상':this.getBSensorsData.keepAliveRcvYn===0?'비정상':'미수신'}}</td>
                                    <td>{{!this.getBSensorsData? '':changeRssi(this.getBSensorsData.rssi)}}</td>
                                    <td>{{!this.getBSensorsData? '':this.getBSensorsData.stateMeasureDtime}}</td>
                                    <td>{{!this.getBSensorsData? '':this.getBSensorsData.updDtime}}</td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td>{{!this.beforeVersionSensorsData.sensorStateNm? '': this.beforeVersionSensorsData.sensorStateNm}}</td>
                                    <td>{{this.beforeVersionSensorsData.checkYnCd ===null|| this.beforeVersionSensorsData.checkYnCd ===undefined ? '' : this.beforeVersionSensorsData.checkYnCd===0?'정상':'점검대상'}}</td>
                                    <td>{{this.beforeVersionSensorsData.batteryValue}}</td>
                                    <td>{{this.beforeVersionSensorsData.keepAliveRcvYn===1?'정상':this.beforeVersionSensorsData.keepAliveRcvYn===0?'비정상':'미수신'}}</td>
                                    <td>{{changeRssi(this.beforeVersionSensorsData.rssi)}}</td>
                                    <td>{{this.beforeVersionSensorsData.stateMeasureDtime}}</td>
                                    <td>{{this.beforeVersionSensorsData.updDtime}}</td>
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
      beforeVersionSensorsData: null,
      beforeVersionGatewayData: null,
      beforeVersionTabletsData: null,
      connectTap: 1,
      sensorsTap: 1,
      tmpIdx: null,
      pending : false,
      beforeToggle: 0,


     }
   },
   created() {
    
    this.getCSensers();
    this.getCGateway();
    this.getCTablets();
    
    console.log("bbbbbbbbbb")
    console.log(this.getCSensorsData)
    
    
    
    //this.getBeforeVersionSensors(this.tmpIdx);
    //this.getBeforeVersionTablets();
    //this.getBeforeVersionGateway();
  },
  methods: {
      delay(){
          this.pending = true
      },
       async getCSensers(){
           this.pending = false;
           let tmpData = null;
        const url  = this.$store.state.serverApi + `/admin/sensors?recipientId=${this.recipientId}&recordCountPerPage=30` 
         await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            tmpData = res.data.data
            this.getCSensorsData = tmpData
            this.getBSensorsData = tmpData[0]
            console.log("aaaaaaaa ")
            console.log(this.getCSensorsData)
            
            

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          this.getCSensorsData = tmpData
          console.log("pending false")
          console.log(this.getCSensorsData)
          console.log("pending true")
          setTimeout(this.delay, 1500)
          
    },
    getBSensers(input,time){
        if(!input) input =0;
        if(!time) time =0;
        if(time===0){
            this.getBSensorsData = this.getCSensorsData[input]
        }else{
            this.getBSensorsData = this.beforeVersionSensorsData[input]
        }
        
        console.log(this.getBSensorsData)
    },
    
     getCGateway(){
         this.pending = false;
        const url  = this.$store.state.serverApi + `/admin/gateways/recipient/${this.recipientId}`
         axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCGatewayData = res.data.data
            console.log("getCGatewayData ")
            console.log(this.getCGatewayData)
            if(this.getCGatewayData.length===0){alert("연결된 게이트웨이가 존재하지 않습니다")}
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          setTimeout(this.delay, 1000)
    },
     getCTablets(){
         this.pending = false;
      const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/tablets`
         axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCTabletsData = res.data.data
            console.log("태블릿")
            console.log(this.getCTabletsData)
            if(this.getCTabletsData.length===0){alert("연결된 태블릿이 존재하지 않습니다")}
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          setTimeout(this.delay, 1000)
    },
    //현재버전 센서 호출
    getNowToggle(){
        this.beforeToggle= 0
    },
    //이전버전 센서 호출
    // async getBeforeVersionSensors(){
    //     console.log("aa")
    //     this.beforeToggle =1
    //     this.tmpIdx = this.getCSensorsData[0];
    //     console.log(this.getBSensorsData.sensorId)
    //   const url  = this.$store.state.serverApi + `/admin/recipients/sensors/statehistory?sensorId=${this.getBSensorsData.sensorId}`
    //     await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //       .then(res => {
    //         this.beforeVersionSensorsData = res.data.data
    //         console.log("이전버전센서")
    //         console.log(this.beforeVersionSensorsData)
    //     })
    //       .catch(error => {
    //           console.log("fail to load")
    //         this.errorMessage = error.message;
    //         console.error("There was an error!", error);
    //     });
    // },
    // async getBeforeVersionTablets(){
    //     this.tmpIdx = this.getCSensorsData[0].sensorId;
    //     const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/tablets/states`
    //         await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //         .then(res => {
    //             this.beforeVersionTabletsData = res.data.data
    //             console.log("이전버전태블릿")
    //             console.log(this.beforeVersionTabletsData)
    //         })
    //         .catch(error => {
    //             console.log("fail to load")
    //             this.errorMessage = error.message;
    //             console.error("There was an error!", error);
    //         });
    // },
    // async getBeforeVersionGateway(){
    //     this.tmpIdx = this.getCSensorsData[0].sensorId;
    //     const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/gateways/states`
    //         await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
    //         .then(res => {
    //             this.beforeVersionGatewayData = res.data.data
    //             console.log("이전버전게이트웨이")
    //             console.log(this.beforeVersionGatewayData)
    //         })
    //         .catch(error => {
    //             console.log("fail to load")
    //             this.errorMessage = error.message;
    //             console.error("There was an error!", error);
    //         });
    // },  
    dataTogle(value){
        switch (value){
          case 1 : this.connectTap=1;break;
          case 2 : this.connectTap=2;break;
          case 3 : this.connectTap=3;break;

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
          case "LOC001" : result="거실"; break;
          case "LOC002" : result="거실2";break;
          case "LOC003" : result="안방"; break;
          case "LOC004" : result="안방2";break;
          case "LOC005" : result="화장실" ;break;
          case "LOC006" : result="화장실2" ;break;
          case "LOC007" : result="현관" ;break;
          case "LOC008" : result="뒷문" ;break;
          case "LOC009" : result="주방" ;break;
          case "LOC010" : result="주방2" ;break;
          case "LOC011" : result="작은방" ;break;
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
			return "미약";
		}else {
			return "나쁨";
		}
    },
    cmdA4post(){
        let url = this.$store.state.serverApi2 +`/app/esms/app/batch/baseUnitSensor.do`
        let data ={
            recipientId:this.recipientId,
            cmd:"cmdA4"
        }
        console.log(data)
        console.log(url)
         axios.post(url, data)
         .then(res => {
             let cmdData
           cmdData = res.data
           if(cmdData.isSuccess === true){
               alert("전송되었습니다")
           }else{
               alert("실패되었습니다")
           }
           console.log(cmdData)
           //if(this.getCTabletsData.length===0){alert("연결된 태블릿이 존재하지 않습니다")}
         })
         .catch(error => {
             console.log("fail to load")
           this.errorMessage = error.message;
           console.error("There was an error!", error);
         });
    },
    firmwareUpgrade(){
        let url  = this.$store.state.serverApi + `/admin/gateways/${this.getCGatewayData.gwId}/firmware-version`
        let gwid = this.getCGatewayData.gwId
        console.log(gwid)
        let data = {
            batteryValue: 60,
            comStateCd: "TAK001",
            equipVersionInfoSeq: 1,
            faultYnCd: 0,
            firmwareVersion: "V0.314",
            gwId: 1,
            gwStateCd: "STE001",
            gwTypeCd: "TPE001",
            hardwareVersion: "V1.000",
            incomeDate: "2020-10-11",
            incomeNm: "세트 #5",
            logLevel: "1",
            macAddr: "024b50fffea98732",
            orgId: "ORG0000042",
            orgNm: "보건복지부",
            powerLinkYn: 1,
            recipientId: 5,
            recipientNm: "홍길동",
            rssi: -10,
            serialNo: "1122334455667788",
            stateMeasureDtime: "2022-04-12 06:24:07",
            stateSendCycle: 14400,
            updDtime: "2022-04-12 06:24:07"
        }
            // axios.patch(url, data, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            // .then(res => {
            //     this.beforeVersionTabletsData = res.data.data
            //     console.log("이전버전태블릿")
            //     console.log(this.beforeVersionTabletsData)
            // })
            // .catch(error => {
            //     console.log("fail to load")
            //     this.errorMessage = error.message;
            //     console.error("There was an error!", error);
            // });
    }
    
    

   },
   
 }
 </script>

<style scoped>
</style>                