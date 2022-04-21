<template>
    <div style="margin-top : -20px">
        <div class="tabcontent">
            <div class="tablist_wrap">
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">활동 미감지</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                </colgroup>
                                <tbody>
                                    <tr class="m_input">
                                        <td >설정 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="30">
                                            </div>
                                        </td>
                                        <td >변경 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="120">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">게이트웨이 상태 전송</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2" @click="sendCGateway">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                    <col style="width:25%;">
                                </colgroup>
                                <tbody>
                                    <tr class="m_input">
                                        <td >설정 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="gatewaySendTime" id="" :value="getCGatewayData.stateSendCycle">
                                            </div>
                                        </td>
                                        <td >변경 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="setGatewayStateSendCycle" id="" v-model="setGatewayStateSendCycle">
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tablist" style="margin-top : -5px">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 감지 주기 및 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2" @click="saveSensorsDetectData">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:24%;">
                            <col style="width:24%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">감지 주기(초)</th>
                                <th scope="col">G/W 전송주기(초)</th>
                                <th scope="col">서버 전송주기(초)</th>               
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-03">
                        <table>
                            <colgroup>
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:24%;">
                                <col style="width:24%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">
                                        <div class="chk_area radio">
                                            <input type="radio" name="sensorsDetect" :id="`radio1_${index}`" v-model="sensorsDetect" :value="index" >
                                            <label :for="`radio1_${index}`" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td v-else></td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <!-- {{getCSensorsData[sensorsDetect]}} 이렇게 뽑아서 쓰면 된단말 -->
                                    <td> {{locationCode(item.sensorLocCd)}}</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">{{item.sensorDetectCycle}}</td>
                                    <td v-else>실시간</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">{{item.gwSendCycle}}</td>
                                    <td v-else>실시간</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">
                                        <div class="input_area">
                                            <input type="text" name=""  v-model="item.svrSendCycle">초
                                        </div>
                                    </td>
                                    <td v-else>실시간</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist type-02">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 상태값 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2" @click="saveSensorsStateData">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:15%;">
                            <col style="width:26%;">
                            <col style="width:26%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">G/W 전송주기(시간)</th>
                                <th scope="col">서버 전송주기(시간)</th>                                                
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody htype-03">
                        <table>
                            <colgroup>
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:15%;">
                                <col style="width:26%;">
                                <col style="width:26%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="sensorsState" :id="`radio2_${index}`" v-model="sensorsState" :value="index" >
                                            <label :for="`radio2_${index}`" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td >
                                        <div class="input_area">
                                            <input type="text" name="" id="" v-model="item.stateGwSendCycle">시간
                                        </div>
                                    </td>
                                    <td >
                                        <div class="input_area">
                                            <input type="text" name="" id="" v-model="item.stateSvrSendCycle">시간
                                        </div>
                                    </td>
                                    
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
//import moment from "moment";

 export default {
   name: "Tap5",
   props:{
     recipientId: String
   },
   data () {
     return {
      getCSensorsData: null,
      sensorsDetect:null,
      newGwSendCycle: null,
      getCGatewayData: null,
      setGatewayStateSendCycle: 120,
      sensorsState: null,

     }
   },
  methods: {
    updateInput: function(event) {
        this.$emit('input', event.target.value);
        console.log(event.target.value)
        console.log(this)
    },

      async getCSensers(){
        const url  = this.$store.state.serverApi + `/admin/sensors?recipientId=${this.recipientId}&recordCountPerPage=30`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let tmpData = res.data.data
            console.log(tmpData)
            tmpData.forEach(element =>{
                element.stateGwSendCycle = element.stateGwSendCycle/3600
                element.stateSvrSendCycle = element.stateSvrSendCycle/3600
            })
            this.getCSensorsData = tmpData
            console.log("sensors ")
            console.log(this.getCSensorsData)

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          

    },
    getCGateway(){
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/gateways`
        
        
        axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let tmpData= res.data.data
            tmpData.stateSendCycle = tmpData.stateSendCycle/60
            this.getCGatewayData = tmpData
            
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
    saveSensorsDetectData(){
        console.log(this.sensorsDetect)
        console.log(this.getCSensorsData[this.sensorsDetect])
        let saveSensorsDetectData = this.getCSensorsData[this.sensorsDetect]
        let sensorsId= this.getCSensorsData[this.sensorsDetect].sensorId
        const url  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/svr-send-cycle`

        axios.patch(url,saveSensorsDetectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

    saveSensorsStateData(){
        //stateGwSendCycle, stateSvrSendCycle
        console.log(this.sensorsState)
        console.log(this.getCSensorsData[this.sensorsState])
        let saveSensorsStateData = this.getCSensorsData[this.sensorsState]
        saveSensorsStateData.stateGwSendCycle = saveSensorsStateData.stateGwSendCycle*3600
        saveSensorsStateData.stateSvrSendCycle = saveSensorsStateData.stateSvrSendCycle*3600
        let saveSensorsDetectData = saveSensorsStateData
        let sensorsId= this.getCSensorsData[this.sensorsState].sensorId
        const url  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/svr-send-cycle`

        axios.patch(url,saveSensorsDetectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    sendCGateway(){
        console.log(this.getCGatewayData)
        let sensorsId = this.getCGatewayData.sensorsId
        let newGatewayData = this.getCGatewayData
        newGatewayData.stateSendCycle = this.setGatewayStateSendCycle*60
        const url  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/gw-send-cycle`
        // /sensors/{sensorId}/gw-send-cycle
        axios.patch(url,newGatewayData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    }

   },
   created() {
    this.getCSensers();
    this.getCGateway();
  }
 }
 </script>

<style scoped>
</style>                                
            