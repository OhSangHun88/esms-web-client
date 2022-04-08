<template>
    <div>
        <div class="tabcontent">
            <div id="tab01" class="tabcnt01" style="display:block;">
                <div class="list_top">
                    <i class="search_ico"></i>
                    <div class="fillter_wrap">
                        <div class="select_area">
                            <select name="code1" id="code1" v-model="code1" @change="getSensorsData(code1,code2)">
                                <option value="">환경정보</option>
                                <option value="">전체</option>
                                <option value="TPE006">온도</option>
                                <option value="TPE008">조도</option>
                                <option value="TPE007">습도</option>
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code1" id="code2" v-model="code1" @change="getSensorsData(code1,code2)">
                                <option value="">바이탈 정보</option>
                                <option value="">전체</option>
                                <option value="TPE005">심장박동</option>
                                <option value="TPE011">호흡</option>
                                <option value="TPE012">활동량</option>
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code3" id="code3" v-model="code2">
                                <option value="">활동감지기(P)정보</option>
                                <option value="">전체</option>
                                <option value="">화장실</option>
                                <option value="">거실</option>                                                    
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code4" id="code4" v-model="code2">
                                <option value="">도어감지기 정보</option>
                                <option value="">전체</option>
                                <option value="">뒷문</option>
                                <option value="">대문</option>
                            </select>
                        </div>
                    </div>
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date" v-model="measureStartDate" @change="getSensorsData(code1)" />
                            <span class="tilde">~</span>
                            <input type="date" v-model="measureEndDate" @change="getSensorsData(code1)"/>
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
                                <th scope="col">설치장소</th>
                                <th scope="col">측정일시</th>
                                <th scope="col">보고일시</th>
                                <th scope="col">{{
                                    code1==="TPE006"? '온도' :
                                    code1==="TPE008"? '조도' :
                                    code1==="TPE007"? '습도' :
                                    code1==="TPE005"? '심장박동' :
                                    code1==="TPE011"? '호흡' :
                                    code1==="TPE012"? '활동량' : '온도'
                                    }}
                                </th>
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
                                    <td>{{item.measureDtime}}</td>
                                    <td>{{item.regDtime}}</td>
                                    <td>{{item.measureValue}}</td>
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
import moment from "moment";

 export default {
   name: "Tap1",
   props:{
     recipientId: String
   },
   data () {
     return {
      sensorsData: [],
      code1: '',
      code2: '',
      measureStartDate:moment().subtract(7,'days').format('YYYY-MM-DD'),
      measureEndDate: moment().format('YYYY-MM-DD'),


     }
   },
  methods: {
    async getSensorsData(input,input2){
        if(!input){
            input = 'TPE006'
        }
        
        //TPE011
        //${input}
        const url  = `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=${input}&sensorLocCd=${input2}&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
        //const url  = `/admin/recipients/${this.recipientId}/sensors`
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let tmpData = []
            let tmp = []
            this.sensorsData = []
            let lengthTmp = []
            lengthTmp = res.data

             if(input==="TPE006"||input==="TPE007"||input==="TPE008"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j],
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
              }else if(input==="TPE005"||input==="TPE011"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j],
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
            }else if(input==="TPE012"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j],
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
            }
            
            console.log("sensorsData is ")
            console.log(this.sensorsData)

          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getfilteringData(){
        const url  = `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=TPE006&measureStartDate=2022-03-30&measureEndDate=2022-04-04`
        //const url  = `/admin/recipients/${this.recipientId}/sensors`
        
        axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.sensorsData = res.data.data
            
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
          case "LOC009" : result="주방1" ;break;
          case "LOC010" : result="주방2" ;break;
          case "LOC011" : result="작은방1" ;break;
          case "LOC012" : result="작은방2" ;break;
      }
        return result
    },
    makeTime(){
        //measureStartDate, measureEndDate
    },
    

   },
   created() {
       
    this.getSensorsData('TPE006');
  }
 }
 </script>

<style scoped>


 </style>