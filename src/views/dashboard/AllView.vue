<template>
  <div>
    <div class="modal-mask" v-if="isLoading === true">
    <div class="loading">
      <vue-loading type="spin" color="#365" :size="{ width: '100px', height: '50px'}"></vue-loading>
    </div>
  </div>
  <div class="one_box box_style" style="margin-top : 20px; ">
    <div class="container">
        <button @click="remakeData">난수 생성</button>
        <div class="one_box box_style">
          <div>
            <p>오늘 이벤트 현황</p>
          </div>
          <div>
            <p>응급 이벤트 현황</p>
          </div>
          <div id="chart1">
            <canvas ref="barChart_test"  width="470" height="210"/>
          </div>
        </div>
      </div>
   <CLookUp/>
  </div>
    <CRow >
      <div class="one_box box_style" style="margin-right : 10px; margin-left : 15px;">
        <CChartLine style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-right : 10px; margin-left : 10px;">
        <CEventStatus style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-right : 0px; margin-left : 10px;">
        <CASStatus style="padding : 0px; " />
      </div>
    </CRow>

    <CRow>
      <div class="one_box box_style" style="margin-top : 10px; margin-bottom : 20px; margin-margin-right : 15px; margin-left : 15px;">
        <CBattery style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-top : 10px; margin-bottom : 20px; margin-right : 15px; margin-left : 15px;">
        <CPowerConnect style="padding : 0px; " />
      </div>
    </CRow>
  </div>
</template>

<script>
import CChartLine from './ChartLine.vue'
import CMsocilaWork from './RecentSocialWorker.vue'
import CSocilaWorkManage from './SocilaWorkManage.vue'
import CCustomerManage from './CustomerManage.vue'
import CNotice from './Notice.vue'
import CRecentEmergencyEvent from './RecentEmergencyEvent.vue'
import CLookUp from './LookUp.vue'
import { VueLoading } from 'vue-loading-template';
import CEventStatus from './EventStatus.vue'
import CASStatus from './ASStatus.vue'
import CBattery from './Battery.vue'
import CPowerConnect from './PowerConnection.vue'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'AllView',
  components: {
    CChartLine,
    CMsocilaWork,
    CSocilaWorkManage,
    CCustomerManage,
    CNotice,
    CRecentEmergencyEvent,
    CLookUp,
    VueLoading,
    CEventStatus,
    CASStatus,
    CBattery,
    CPowerConnect,
  },
  props: {
      isLoading: Boolean,
    },
  data: () => ({
    chartData: null,
    chartOptions: null,
    changingData: [ 12, 19, 7, 5, 8, 13, 7 ],
    chartImage: null,
  }),
  mounted(){
    this.createDate();
  },
  methods: {
    remakeData(){

      this.chartImage.destroy();
      this.changingData=[]
      for(let i = 0;i<7;i++){
        let j =  Math.floor(Math.random()*10);
        this.changingData.push(j)
      }
      this.chartData.datasets[0].data = this.changingData
      console.log(this.changingData)
      console.log(this.chartData.datasets[0].data)
      this.chartRedraw();
    },
    createDate(){

      let data = {
        labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
        fontColor: "white",
        datasets: [{
          label: '화재',
          data: this.changingData,
          maxBarThickness: 10,    
          backgroundColor: [
            "rgba(17, 135, 183, 0.8)",
          ],  
        },{
        label: '응급',
        data:[10, 12, 11, 10, 10, 15, 9],
        maxBarThickness: 10,  
        backgroundColor: [
          'rgba(17, 183, 135, 1)',
        ],
      },]
      }
      let options = {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins:{
          legend: {
            display: true,
            fontColor: "#959dad",
            position: 'top',
            align: 'end',
            labels: {
              fontColor: 'rgba(255, 255, 255, 1)',
              boxWidth: 8,
              usePointStyle: true
            },
          },
        }
      }
      this.chartData = data
      this.chartOptions = options
      this.chartRedraw();
    },
     chartRedraw(){
       
      this.chartImage =  new Chart(this.$refs.barChart_test, {
        type:'bar',
        data:this.chartData,
        options:this.chartOptions
      })
       //if(this.chartImage){
         
       //}
      
      this.chartImage.update();

    },


  }
}
</script>

<style scoped>
.modal-mask {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>