<template>
    <div>
        <div class="tabcontent">
            <div id="tab01" class="tabcnt01" style="display:block;">
                <div class="list_top">
                    <i class="search_ico"></i>
                    <div class="fillter_wrap">
                        <div class="select_area">
                            <select name="code1" id="code1" ref="code1" v-model="code1" @change="filterChange(1)">
                                <option v-for="(items, index ) in envData" v-bind:value="items.value" v-bind:key="index"> 
                                    {{ items.text }}
                                </option>
                                
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code2" id="code2" ref="code2" v-model="code2" @change="filterChange(2)">
                                <option v-for="(items, index ) in bioData" v-bind:value="items.value" v-bind:key="index"> 
                                    {{ items.text }}
                                </option>
                                <!-- <option value="">바이오 정보</option>
                                <option value="">전체</option>
                                <option value="TPE005">심장박동</option>
                                <option value="TPE011">호흡</option>
                                <option value="TPE012">활동량</option> -->
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code3" id="code3" ref="code3" v-model="code3" @change="filterChange(3)">
                                <option v-for="(items, index ) in actPData" v-bind:value="items.value" v-bind:key="index"> 
                                    {{ items.text }}
                                </option>
                                <!-- <option value="">활동감지기(P)정보</option>
                                <option value="">전체</option>
                                <option value="TPE002">화장실</option>
                                <option value="TPE002">안방</option>                                               -->
                            </select>
                        </div>
                        <div class="select_area">
                            <select name="code4" id="code4" ref="code4" v-model="code4" @change="filterChange(4)">
                                <option v-for="(items, index ) in doorData" v-bind:value="items.value" v-bind:key="index"> 
                                    {{ items.text }}
                                </option>
                                <!-- <option value="">도어감지기 정보</option>
                                <option value="">전체</option>
                                <option value="TPE004">뒷문</option>
                                <option value="TPE004">대문</option> -->
                            </select>
                        </div>
                    </div>
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date" v-model="measureStartDate"  />
                            <span class="tilde">~</span>
                            <input type="date" v-model="measureEndDate" />
                            <button type="button" class="btn" @click="getSensorsData(code1,code2,code3,code4)">조회</button>
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
                                <!-- <th scope="col">{{
                                    code1==="TPE006"? '온도' :
                                    code1==="TPE008"? '조도' :
                                    code1==="TPE007"? '습도' :
                                    code1==="TPE005"? '심장박동' :
                                    code1==="TPE011"? '호흡' :
                                    code1==="TPE012"? '활동량' : '온도'
                                    }}</th> -->
                                <th scope="col">{{this.labelText}}</th>
                            </tr>
                        </thead>
                    </table>
                    
                    <div class="tbody htype-05">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr  v-for="(item,index) in sensorsData" v-bind:key="index">
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>{{item.measureDtime}}</td>
                                    <td>{{item.regDtime}}</td>
                                    <td>{{item.measureValue}}</td>
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
   name: "Tap1",
   props:{
     recipientId: String
   },
   data () {
     return {
      sensorsData: [],
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      measureStartDate:moment().subtract(7,'days').format('YYYY-MM-DD'),
      measureEndDate: moment().format('YYYY-MM-DD'),
      labelText:'정보',
      codeText:'°C',
      envData:[{text: '환경 정보', value:''},{text: '전체', value: 'all'},{text: '온도', value: 'TPE006'},{text: '조도', value: 'TPE008'},{text: '습도', value: 'TPE007'}, ],
      bioData:[{text: '바이오 정보', value: ''},{text: '전체', value: 'all'},{text: '심장박동', value: 'TPE005'},{text: '호흡', value: 'TPE011'},{text: '활동량', value: 'TPE012'}, ],
      actPData:[{text: '활동감지기{P) 정보', value: ''},{text: '전체', value: 'all'},{text: '화장실', value: 'TPE002'},{text: '안방', value: 'TPE002'}, ],
      doorData:[{text: '도어감지기 정보', value: ''},{text: '전체', value: 'all'},{text: '뒷문', value: 'TPE004'},{text: '대문', value: 'TPE004'}, ],
     }
   },
  methods: {
    filterChange(input){
        switch (input){
          case 1 : this.code2='';this.code3='';this.code4=''; break;
          case 2 : this.code1='';this.code3='';this.code4=''; break;
          case 3 : this.code1='';this.code2='';this.code4=''; break;
          case 4 : this.code1='';this.code2='';this.code3=''; break;
        }
        // if(this.code1){
        //     this.code2='';
        //     this.code3='';
        //     this.code4='';
        // }
        // if(this.code2){
        //     this.code1='';
        //     this.code3='';
        //     this.code4='';
        // }
        // if(this.code3){
        //     this.code1='';
        //     this.code2='';
        //     this.code4='';
        // }
        // if(this.code4){
        //     this.code1='';
        //     this.code2='';
        //     this.code3='';
        // }
    },

    async getSensorsData(input,input2,input3,input4){

        console.log(input,input2,input3,input4)

        let code = input ? input : input2 ? input2 : input3 ? input3 :  input4 
        
        switch (code){
          case "TPE006" : this.labelText="온도"; this.codeText=" °C"; break;
          case "TPE008" : this.labelText="조도"; this.codeText=" lx"; break;
          case "TPE007" : this.labelText="습도"; this.codeText=" %"; break;
          case "TPE005" : this.labelText="심장박동"; this.codeText=" 회"; break;
          case "TPE011" : this.labelText="호흡"; this.codeText=" 회"; break;
          case "TPE012" : this.labelText="활동량"; this.codeText=" "; break;
          case "TPE002" : this.labelText="횟수"; this.codeText=" 회"; break;
          case "TPE004" : this.labelText="횟수"; this.codeText=" 회"; break;
          
      }
        
        //TPE011
        //&sensorLocCd=${code2}
        let url
        if(code==="TPE012"){
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/actmeasures?sensorTypeCd=${code}&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
        }else{
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=${code}&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
        }
            
        //const url  = `/admin/recipients/${this.recipientId}/sensors`
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            let tmpData = []
            let tmp = []
            this.sensorsData = []
            let lengthTmp = []
            lengthTmp = res.data
            console.log(lengthTmp)

             if(code==="TPE006"||code==="TPE007"||code==="TPE008"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j] + this.codeText,
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
              }else if(code==="TPE005"||code==="TPE011"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j] + this.codeText,
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
            }else if(code==="TPE012"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j] + this.codeText,
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
            }else if(code==="TPE002"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j] + this.codeText,
                        testYn: tmpData.testYn,
                        sensorLocCd: tmpData.sensorLocCd,
                        measureDtime: moment(tmpData.measureDtime).subtract( j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                        regDtime : tmpData.regDtime,
                    })
                    
                    }
                    
                }
            }else if(code==="TPE004"){
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsData.push({
                        sensorId: tmpData.sensorId,
                        sensorTypeCd: tmpData.sensorTypeCd,
                        measureValue: tmp[j] + this.codeText,
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