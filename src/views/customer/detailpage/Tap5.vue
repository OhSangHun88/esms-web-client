<template>
    <div style="margin-top : -20px">
        <div class="tabcontent">
            <div class="tablist_wrap">
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">활동 미감지</p>
                        </div>
                        <div v-if="this.getCSensorsData.length === 0"></div>
                        <div v-else class="btn_area" >
                            <button type="button" class="btn form2" @click="sendActiveUnsensingCycle">저장</button>
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
                                                <input type="text" name="activeUnsensingCycle" id="activeUnsensingCycle" :value="!this.resBodyData.activeUnsensingCycle?0:this.resBodyData.activeUnsensingCycle">
                                            </div>
                                        </td>
                                        <td >변경 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="setactiveUnsensingCycle" id="setactiveUnsensingCycle" v-model="setactiveUnsensingCycle">
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
                        <div v-if="this.getCSensorsData.length === 0"></div>
                        <div v-else class="btn_area">
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
                                                <input type="text" name="gatewaySendTime" id="gatewaySendTime" :value="!this.getCGatewayData? 0: this.getCGatewayData.stateSendCycle">
                                            </div>
                                        </td>
                                        <td >변경 값(분)</td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="setGatewayStateSendCycle" id="setGatewayStateSendCycle" v-model="setGatewayStateSendCycle">
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
                    <div v-if="this.getCSensorsData.length === 0"></div>
                    <div v-else class="btn_area">
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
                                <th scope="col">서버 전송주기(분)</th>               
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
                            <tbody v-if="!getCSensorsData">
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
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">
                                        <div class="chk_area radio">
                                            <input type="radio" name="sensorsDetect" :id="`radio1_${index}`" v-model="sensorsDetect" :value="index" @click="check(index)">
                                            <label :for="`radio1_${index}`" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td v-else></td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <!-- {{getCSensorsData[sensorsDetect]}} 이렇게 뽑아서 쓰면 된단말 -->
                                    <td> {{locationCode(item.sensorLocCd)}}</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">{{item.sensorDetectCycle}}</td>
                                    <td v-else>실시간</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">
                                        <div class="input_area" v-if="sensorsDetect===index">
                                            <input type="text" name="" v-model="gwSendCycle">초
                                        </div>
                                        <div v-else>{{item.gwSendCycle}}</div>
                                    </td>
                                    <td v-else>실시간</td>
                                    <td v-if="item.sensorTypeCd !=='TPE001' && item.sensorTypeCd !=='TPE003'&& item.sensorTypeCd !=='TPE004'&& item.sensorTypeCd !=='TPE009'&& item.sensorTypeCd !=='TPE010' ">
                                        <div class="input_area" v-if="sensorsDetect===index">
                                            <input type="text" name=""  v-model="svrSendCycle">분
                                        </div>
                                        <div v-else>{{item.svrSendCycle}}</div>
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
                    <div v-if="this.getCSensorsData.length === 0"></div>
                    <div v-else class="btn_area" >
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
                                <th scope="col">G/W 전송주기(분)</th>
                                <th scope="col">서버 전송주기(분)</th>                                                
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
                            <tbody v-if="!getCSensorsData">
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
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="sensorsState" :id="`radio2_${index}`" v-model="sensorsState" :value="index" @click="check(index)">
                                            <label :for="`radio2_${index}`" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td >
                                        <div class="input_area" v-if="sensorsState === index">
                                            <input type="text" :name="`stateGwSendCycle_${index}`" :id="`stateGwSendCycle_${index}`" v-model="item.stateGwSendCycle"
                                            >분
                                            <!-- oninput="this.value = this.value.replace(/[^1-4.]/g, '').replace(/(\..*)\./g, '$1');" -->
                                        </div>
                                        <div v-else>{{item.stateGwSendCycle}}</div>
                                    </td>
                                    <td >
                                        <div class="input_area" v-if="sensorsState === index">
                                            <input type="text" :name="`stateSvrSendCycle_${index}`" :id="`stateSvrSendCycle_${index}`" v-model="item.stateSvrSendCycle"
                                             >분
                                        </div>
                                        <div v-else>{{item.stateSvrSendCycle}}</div>
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
      setGatewayStateSendCycle: 60,
      sensorsState: null,
      resBodyData: null,
      setactiveUnsensingCycle:60,
      svrsendCheck : '', statesvrsendCheck:'',
      gwsendCheck : '', stategwsendCheck:'',
      resCheck1:'', stateresCheck1:'',
      resCheck2:'', stateresCheck2:'',
      radioCheck:'',
      formatG : '', formatS : '',
      gwSendCycle: '', svrSendCycle:'',
     }
   },
   created() {
    this.getCSensers();
    this.getCGateway();
    this.getRecipientInfo();
  },
  methods: {
    limNum: function(event) {
        this.$emit('input', event.target.value);
        
        
    },
    
    msChange(code,input){
        let result = 0
        switch (code){
          case 1 : result=Math.ceil(input/60); break;
          case 2 : result=Math.ceil(input/3600) ;break;
        }
        return result
    },
    locationCode(input){
        let result=''
        switch (input){
          case "LOC001" : result="거실"; break;
          case "LOC002" : result="거실2" ;break;
          case "LOC003" : result="안방"; break;
          case "LOC004" : result="안방2" ;break;
          case "LOC005" : result="화장실" ;break;
          case "LOC006" : result="화장실2" ;break;
          case "LOC007" : result="현관" ;break;
          case "LOC008" : result="현관2" ;break;
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
    //getRecipient value
    getRecipientInfo() {
        //let uri = this.$store.state.serverApi + "/recipients/" + sessionStorage.getItem("recipid");
        let uri = this.$store.state.serverApi + "/admin/recipients/" + this.recipientId
        console.log(uri)
        axios.get(uri, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                this.resBodyData = res.data.data
                console.log("resbodyData is ");
                console.log(this.resBodyData)
                
            })
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
        },
    //getsenser value
    async getCSensers(){
        console.log(this.getCSensorsData)
    const url  = this.$store.state.serverApi + `/admin/sensors?recipientId=${this.recipientId}&recordCountPerPage=30`
    await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
        let tmpData = res.data.data
        console.log(tmpData)
        // tmpData.forEach(element =>{
        //     element.stateGwSendCycle = Math.ceil(element.stateGwSendCycle/3600)
        //     element.stateSvrSendCycle = Math.ceil(element.stateSvrSendCycle/3600)
        // })
        this.getCSensorsData = tmpData
        this.gwSendCycle = this.getCSensorsData.gwSendCycle
        console.log("sensors ")
        console.log(this.getCSensorsData)

        })
        .catch(error => {
            console.log("fail to load")
        this.errorMessage = error.message;
        console.error("There was an error!", error);
        });
          

    },
    //getGateWay value
    getCGateway(){
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/gateways`
        axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let tmpData= res.data.data
            
            this.getCGatewayData = tmpData
            
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    //활동 미감지
    sendActiveUnsensingCycle(){
        console.log(this.recipientId)
        console.log(this.newActiveUnsensingCycle)
        let newActiveUnsensingCycle = this.resBodyData
        newActiveUnsensingCycle.activeUnsensingCycle = this.setactiveUnsensingCycle//*60
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/active-unsensing-cycle`
        // /sensors/{sensorId}/gw-send-cycle
        axios.patch(url,newActiveUnsensingCycle,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)
            if(resData){
                alert("저장이 완료되었습니다.")
            }
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    //게이트웨이 상태전송
    sendCGateway(){
        console.log(this.getCGatewayData)
        let sensorsId = this.getCGatewayData.gwId
        let newGatewayData = this.getCGatewayData
        newGatewayData.stateSendCycle = this.setGatewayStateSendCycle
        const url  = this.$store.state.serverApi + `/admin/gateways/${sensorsId}/state-send-cycle`
        // /sensors/{sensorId}/gw-send-cycle
        axios.patch(url,newGatewayData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            if(resData){
                alert("저장이 완료되었습니다.")
            }
            
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });


   },
   check(index){
    // this.sensorsDetect = this.getCSensorsData[index].
    console.log(this.getCSensorsData[index])
    this.gwSendCycle = this.getCSensorsData[index].gwSendCycle
    this.svrSendCycle = this.getCSensorsData[index].svrSendCycle
    this.svrsendCheck = this.getCSensorsData[index].svrSendCycle
    this.gwsendCheck = this.getCSensorsData[index].gwSendCycle
    this.statesvrsendCheck = this.getCSensorsData[index].stateSvrSendCycle
    this.stateGwsendCheck = this.getCSensorsData[index].stateGwSendCycle
    this.radioCheck = this.getCSensorsData[index].macAddr
    if(this.radioCheck === this.getCSensorsData[index].macAddr){
        this.sensorsDetect = ''
        this.radioCheck = ''
    }
   },
   //센서 감지 전송주기
    async saveSensorsDetectData(){
        if(this.sensorsDetect===null || this.sensorsDetect===undefined){
            alert('변경하시고자 하는 센서 종류를 선택해주세요')
            return false;
        }
        //svrSendCycle, gwSendCycle
        console.log(this.getCSensorsData[this.sensorsDetect])
        let sensorsDetectData = this.getCSensorsData[this.sensorsDetect]
        let sensorsId= this.getCSensorsData[this.sensorsDetect].sensorId
        //sensorsDetectData.svrSendCycle = 
        
        
        if(this.gwSendCycle !=60 && this.gwSendCycle !=120 && this.gwSendCycle !=180 && this.gwSendCycle !=240){
            alert('60,120,180,240 중 값을 입력해 주세요')
            console.log("sensorsStateData.stateGwSendCycle")
            console.log(sensorsDetectData.gwSendCycle)
            this.gwSendCycle = this.gwsendCheck
            return false;
        }

        if(this.svrSendCycle !=60 && this.svrSendCycle !=120 && this.svrSendCycle !=180 && this.svrSendCycle !=240){
            alert('60,120,180,240 중 값을 입력해 주세요')
            this.svrSendCycle = this.svrsendCheck
            return false;

        }
        const urlS  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/svr-send-cycle`
        const urlG  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/gw-send-cycle`
        
        if(this.svrsendCheck != sensorsDetectData.svrSendCycle){
            console.log("this 111 ok")
        await axios.patch(urlS,sensorsDetectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            this.resCheck1 = resData
            console.log(this.resCheck1)
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)
            // if(resData){
            //     alert("저장이 완료되었습니다.")
            // }

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
         }
        if(this.gwsendCheck != sensorsDetectData.gwSendCycle){
            console.log("this 222 ok")
        await axios.patch(urlG,sensorsDetectData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            this.resCheck2 = resData
            // this.getCSensorsData = res.data.data
            // console.log("sensors ")
            // console.log(this.getCSensorsData)
            // if(resData){
            //     alert("저장이 완료되었습니다.")
            // }

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
        }
        console.log(this.resCheck1)
        console.log(this.resCheck2)
        if(this.resCheck1 === true && !this.resCheck2){
            alert("저장이 완료되었습니다.")
            this.sensorsDetect = ''
            this.getCSensers()
        }
        if(!this.resCheck1 && this.resCheck2 === true){
            alert("저장이 완료되었습니다.")
            this.sensorsDetect = ''
            this.getCSensers()
        }
        if(this.resCheck1 && this.resCheck2){
            alert("저장이 완료되었습니다.")
            this.sensorsDetect = ''
            this.getCSensers()
        }

    },
    //센서 상태값 전송주기
    saveSensorsStateData(){
        //stateGwSendCycle, stateSvrSendCycle
        console.log(this.sensorsState)

        if(this.sensorsState===null || this.sensorsState===undefined){
            alert('변경하시고자 하는 센서 종류를 선택해주세요')
            return false;
        }
        console.log(this.getCSensorsData[this.sensorsState])
        let sensorsStateData = this.getCSensorsData[this.sensorsState]
        sensorsStateData.stateGwSendCycle = sensorsStateData.stateGwSendCycle
        sensorsStateData.stateSvrSendCycle = sensorsStateData.stateSvrSendCycle

        if(sensorsStateData.stateGwSendCycle !=60 && sensorsStateData.stateGwSendCycle !=120 && sensorsStateData.stateGwSendCycle !=180 && sensorsStateData.stateGwSendCycle !=240){
            alert('60,120,180,240 중 값을 입력해 주세요')
            console.log("sensorsStateData.stateGwSendCycle")
            console.log(sensorsStateData.stateGwSendCycle)
            this.getCSensorsData[this.sensorsState].stateGwSendCycle = 60
            return false;
        }

        if(sensorsStateData.stateSvrSendCycle !=60 && sensorsStateData.stateSvrSendCycle !=120 && sensorsStateData.stateSvrSendCycle !=180 && sensorsStateData.stateSvrSendCycle !=240){
            alert('60,120,180,240 중 값을 입력해 주세요')
            this.getCSensorsData[this.sensorsState].stateSvrSendCycle = 60
            return false;
        }


        let sensorsData = sensorsStateData
        let sensorsId= this.getCSensorsData[this.sensorsState].sensorId
        const urlS  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/state-svr-send-cycle`
        const urlG  = this.$store.state.serverApi + `/admin/sensors/${sensorsId}/svr-send-cycle`

        axios.patch(urlS,sensorsData,{headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let resData = res.data.data
            console.log(resData)
            if(resData){
                console.log("this ok")
                alert("저장이 완료되었습니다.")
                this.sensorsState = ''
            }
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

   },

}
 </script>

<style scoped>
</style> 