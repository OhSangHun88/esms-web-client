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
            reportMeasureData:null
        }
    },
    created(){
        this.getMeasuresData();
    },
    methods:{
      async getMeasuresData(){
          console.log("menu1")
      //여기
      const url  = `/admin/recipients/${this.recipientId}/sensors/lastmeasures`
      await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
          let lastMeasures = res.data.data
          //this.reportMeasureData => 선언 처리 수정
          this.reportMeasureData = {
            TPE005: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE005"}).measureValue.split(',').slice(-1)[0],//심박
            TPE011: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE011"}).measureValue.split(',').slice(-1)[0],//호흡
            TPE006: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE006"}).measureValue.split(',').slice(-1)[0],//온도
            TPE008: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE008"}).measureValue.split(',').slice(-1)[0],//조도
            TPE007: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE007"}).measureValue.split(',').slice(-1)[0],//습도
            TPE012: !lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE012"}) ? 0: lastMeasures.find(lm=>{return lm.sensorTypeCd === "TPE012"}).measureValue.split(',').slice(-1)[0],//활동량
          }
        }).catch(error => {
            console.log("fail to load")
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

    },
  }
}


</script>
