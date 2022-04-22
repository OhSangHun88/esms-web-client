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
                            <col style="width:10%;">
                            <col style="width:15%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead class="thead htype-01">
                            <tr>
                                <th scope="col">순번</th>
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
                                <col style="width:10%;">
                                <col style="width:15%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr  v-for="(item,index) in sensorsData" v-bind:key="index">
                                    <td>{{index+1}}</td>
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
      envData:[{text: '환경 정보', value:''},{text: '온도', value: 2},{text: '조도', value: 3},{text: '습도', value: 4}, ],
      bioData:[{text: '바이오 정보', value: ''},{text: '심장박동', value: 6},{text: '호흡', value: 7},{text: '활동량', value: 8}, ],
      actPData:[{text: '활동감지기{P) 정보', value: ''},{text: '전체', value: 9},{text: '화장실', value: 10},{text: '안방', value: 11}, ],
      doorData:[{text: '도어감지기 정보', value: ''},{text: '전체', value: 12},{text: '현관', value: 13},{text: '뒷문', value: 14}, ],
      selectedValue : null,
      sensorsTmp1Data: [],
      sensorsTmp2Data: [],
      sensorsTmp3Data: [],
      //{text: '전체', value: 1},{text: '전체', value: 5},
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
        
    },

    async getSensorsData(input,input2,input3,input4){

        

        let code = input ? input : input2 ? input2 : input3 ? input3 :  input4 
        //드롭다운 코드화 및 값 설정
        switch (code){
          case 1 : this.selectedValue = 'all'; break;
          case 2 : this.selectedValue = 'TPE006'; break;
          case 3 : this.selectedValue = 'TPE008'; break;
          case 4 : this.selectedValue = 'TPE007'; break;
        }
        
        //드롭다운 코드화 및 라벨 설정
        switch (code){
          case 2 : this.labelText="온도"; this.codeText=" °C"; break;
          case 3 : this.labelText="조도"; this.codeText=" lx"; break;
          case 4 : this.labelText="습도"; this.codeText=" %"; break;
          case 6 : this.labelText="심장박동"; this.codeText=" 회"; break;
          case 7 : this.labelText="호흡"; this.codeText=" 회"; break;
          case 8 : this.labelText="활동량"; this.codeText=" "; break;
          case 10 : this.labelText="횟수"; this.codeText=" 회"; break;
          case 11 : this.labelText="횟수"; this.codeText=" 회"; break;
          case 13 : this.labelText="횟수"; this.codeText=" 회"; break;
          case 14 : this.labelText="횟수"; this.codeText=" 회"; break;
          
      }
        
        //TPE011
        //&sensorLocCd=${code2}
        let url=''
        if(this.selectedValue==="TPE012"){
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/actmeasures?sensorTypeCd=${this.selectedValue}&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
        }else{
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=${this.selectedValue}&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
        }
        console.log(code)    
        //const url  = `/admin/recipients/${this.recipientId}/sensors`
        if(code !== 1 &&code !== 5 &&code !== 9 &&code !== 12){
            await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                let tmpData = []
                let tmp = []
                this.sensorsData = []
                let lengthTmp = []
                lengthTmp = res.data
                console.log(lengthTmp)

                if(this.selectedValue==="TPE006"||this.selectedValue==="TPE007"||this.selectedValue==="TPE008"){
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
                }else if(this.selectedValue==="TPE005"||this.selectedValue==="TPE011"){
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
                }else if(this.selectedValue==="TPE012"){
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
                }else if(this.selectedValue==="TPE002"){
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
                }else if(this.selectedValue==="TPE004"){
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
        }else if (code === 1 ){
            //TPE 006
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=TPE006&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
            await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                let tmpData = []
                let tmp = []
                this.sensorsTmp1Data= []
                let lengthTmp = []
                lengthTmp = res.data
                
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsTmp1Data.push({
                            sensorId: tmpData.sensorId,
                            sensorTypeCd: tmpData.sensorTypeCd,
                            measureValue1: tmp[j] + ' °C',
                            testYn: tmpData.testYn,
                            sensorLocCd: tmpData.sensorLocCd,
                            measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                            regDtime : tmpData.regDtime,
                        })
                    
                    }
                }
                console.log(this.sensorsTmp1Data)
            })
            .catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
            //TPE 008
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=TPE008&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
            await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                let tmpData = []
                let tmp = []
                this.sensorsTmp2Data= []
                let lengthTmp = []
                lengthTmp = res.data
                
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsTmp2Data.push({
                            sensorId: tmpData.sensorId,
                            sensorTypeCd: tmpData.sensorTypeCd,
                            measureValue2: tmp[j] + ' lx',
                            testYn: tmpData.testYn,
                            sensorLocCd: tmpData.sensorLocCd,
                            measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                            regDtime : tmpData.regDtime,
                        })
                    
                    }
                }
                console.log(this.sensorsTmp2Data)
            })
            .catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
            //TPE 007
            url = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/measures?sensorTypeCd=TPE007&measureStartDate=${this.measureStartDate}&measureEndDate=${this.measureEndDate}`
            await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
                let tmpData = []
                let tmp = []
                this.sensorsTmp3Data= []
                let lengthTmp = []
                lengthTmp = res.data
                
                for(let i=0; i <lengthTmp.totalCount ;i++ ){
                    tmpData = res.data.data[i]
                    tmp = res.data.data[i].measureValue.split(',')
                    for(let j=0; j <tmp.length ;j++ ){
                        this.sensorsTmp3Data.push({
                            sensorId: tmpData.sensorId,
                            sensorTypeCd: tmpData.sensorTypeCd,
                            measureValue3: tmp[j] + ' %',
                            testYn: tmpData.testYn,
                            sensorLocCd: tmpData.sensorLocCd,
                            measureDtime: moment(tmpData.measureDtime).subtract( 10*j, 'm').format('YYYY-MM-DD HH:mm:ss'),
                            regDtime : tmpData.regDtime,
                        })
                    
                    }
                }
                console.log(this.sensorsTmp3Data)
            })
            .catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
            let tmpArr = [...this.sensorsTmp1Data,...this.sensorsTmp2Data,...this.sensorsTmp3Data]
            let tmpArr2 = []
            tmpArr.forEach(element => {
               tmpArr2.push({
                   measureDtime: element.measureDtime,
                   measureValue1: 0,
                   measureValue2: 0,
                   measureValue3: 0,
                   regDtime: element.regDtime,
                   sensorLocCd: element.sensorLocCd,
                   }) 
            });
            
            let setObj = new Set(tmpArr2)
            let setArr = [...setObj]
            console.log("setArr")
            console.log(setArr)
            setArr.forEach(item=>{
                for(let i = 0 ; i<this.sensorsTmp1Data.length ; i++ ){
                    if(item.measureDtime ===this.sensorsTmp1Data[i].measureDtime){
                        item.measureValue1 = this.sensorsTmp1Data[i].measureValue1
                    }
                }
                for(let j = 0 ; j<this.sensorsTmp2Data.length ; j++ ){
                    if(item.measureDtime ===this.sensorsTmp2Data[j].measureDtime){
                        item.measureValue2 = this.sensorsTmp1Data[j].measureValue2
                    }
                }
                for(let k = 0 ; k<this.sensorsTmp3Data.length ; k++ ){
                    if(item.measureDtime ===this.sensorsTmp3Data[k].measureDtime){
                        item.measureValue3 = this.sensorsTmp1Data[k].measureValue3
                    }
                }

            })
            
            
            tmpArr2.from(new Set(tmpArr))
            console.log(tmpArr2)
        }
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
          case "LOC001" : result="거실"; break;
          case "LOC002" : result="거실2" ;break;
          case "LOC003" : result="안방"; break;
          case "LOC004" : result="안방2" ;break;
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
    makeTime(){
        //measureStartDate, measureEndDate
    },
    

   },
   created() {
       
    this.getSensorsData(2,'','','');
  }
 }
 </script>

<style scoped>


 </style>