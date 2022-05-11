<template>
    <div>
        <div class="tabcontent now">
            <div class="tabcnt01">
                <ul>
                    <li>
                        <i class="ico01"></i>
                        <div class="txt">
                            <strong>{{this.reportMeasureData.TPE005}}</strong>
                            <p>심장박동</p>
                        </div>
                    </li>
                    <li>
                        <i class="ico02"></i>
                        <div class="txt">
                            <strong>{{this.reportMeasureData.TPE011}}</strong>
                            <p>호흡</p>
                        </div>
                    </li>
                    <li>
                        <i class="ico03"></i>
                        <div class="txt">
                            <strong>{{this.reportMeasureData.TPE012}}</strong>
                            <p>활동량</p>
                        </div>
                    </li>
                </ul>
            </div>    
        </div>
        <div class="box_style2 box_col">
            <ul class="info_list">
                <li>
                    <i class="ico01"></i>
                    <div class="txt">
                        <strong>{{this.reportMeasureData.TPE007}}</strong>
                        <p>습도</p>
                    </div>
                </li> 
                <li>
                    <i class="ico02"></i>
                    <div class="txt">
                        <strong>{{this.reportMeasureData.TPE006}}</strong>
                        <p>온도</p>
                    </div>
                </li> 
                <li>
                    <i class="ico03"></i>
                    <div class="txt">
                        <strong>{{this.reportMeasureData.TPE008}}</strong>
                        <p>조도</p>
                    </div>
                </li> 
                <li>
                    <i class="ico04"></i>
                    <div class="txt">
                        <strong>연결</strong>
                        <p>전원연결</p>
                    </div>
                </li> 
                <li>
                    <i class="ico05"></i>
                    <div class="txt">
                        <strong>{{!this.reportMeasureData.TPE012? "미감지": "감지"}}</strong>
                        <p>활동감지</p>
                    </div>
                </li> 
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "Menu1",
    props:{
        recipientId: String
    },
    data () {
        return {
            reportMeasureData:{
                TPE005:0,
                TPE011:0,
                TPE006:0,
                TPE008:0,
                TPE007:0,
                TPE012:0,
            }
        }
    },
    created(){
        this.getMeasuresData();
    },
    methods:{
      async getMeasuresData(){
        
      //여기
        const url  =  this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/sensors/lastmeasures`
        let lastMeasures
        this.reportMeasureData = { TPE005: 0,TPE011: 0,TPE006: 0,TPE008: 0,TPE007: 0,TPE012: 0 } 
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
            lastMeasures = res.data.data
            console.log("lastMeasures")    
            console.log(lastMeasures)
            //this.reportMeasureData => 선언 처리 수정
            if(!lastMeasures){
              this.reportMeasureData = { TPE005: 0,TPE011: 0,TPE006: 0,TPE008: 0,TPE007: 0,TPE012: 0 } 
            }else{
                for(let i = 0 ; i<6 ; i++){
                   if( !lastMeasures[i]){
                        continue;
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE006"){
                        this.reportMeasureData.TPE006 = lastMeasures[i].measureValue
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE007"){
                        this.reportMeasureData.TPE007 = lastMeasures[i].measureValue
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE008"){
                        this.reportMeasureData.TPE008 = lastMeasures[i].measureValue
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE005"){
                        this.reportMeasureData.TPE005 = lastMeasures[i].measureValue
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE011"){
                        this.reportMeasureData.TPE011 = lastMeasures[i].measureValue
                    }else if(lastMeasures[i].sensorTypeCd ==="TPE012"){
                        this.reportMeasureData.TPE012 = lastMeasures[i].measureValue
                    }
                }
                /*this.reportMeasureData = {
                    TPE005: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE005" : 0}).measureValue,//.split(',').slice(-1)[0],//심박
                    TPE011: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE011" : 0}).measureValue,//.split(',').slice(-1)[0],//호흡
                    TPE006: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE006" : 0}).measureValue,//.split(',').slice(-1)[0],//온도
                    TPE008: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE008" : 0}).measureValue,//.split(',').slice(-1)[0],//조도
                    TPE007: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE007" : 0}).measureValue,//.split(',').slice(-1)[0],//습도
                    TPE012: !lastMeasures ? 0: lastMeasures.find(lm=>{return lm? lm.sensorTypeCd === "TPE012" : 0}).measureValue,//.split(',').slice(-1)[0],//활동량
                }*/
            }
            console.log(this.reportMeasureData)
        }).catch(error => {
            console.log("fail to load")
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
        console.log("last")
        console.log(lastMeasures)
        
        //setInterval(this.getMeasuresData, 300000)
    },
  }
}


</script>
