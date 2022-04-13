<template>

  <div class="box_l chart box_style">
    <div class="result_txt">
      <p>배터리 상태</p>
    </div>
    <div>
      <canvas ref="barChart"/>
    </div>
  </div>

</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import moment from "moment";
import { eventBus } from "@/main.js";

export default {
  data:() => ({
    chartData: null,
    chartOptions: null,
    chartImage: null,
    FullData: [ 12, 19, 7, 5, 8, 13],
    LackData: [10, 12, 11, 10, 10, 15],
    ChangeData:[5, 12, 10, 7, 7, 8],
    comChartItems:[],
    newFullArr:[],
    newLackArr:[],
    newChangeArr:[],
    s_date: null,
  }),
  mounted(){
    this.createData();
    this.getDataFromLookUp();
  },
  methods:{
    createData(){
      let data = {
        type: 'bar',
        labels: [ '게이트웨이', '응급호출기', '화재감지기', '도어센서', '활동감지센서', '생활안심센서'],
        datasets: [{
        label: '충만',
        maxBarThickness: 12,  
        data: this.FullData,
        backgroundColor: [
          "rgba(19, 126, 255, 0.8)",
          ],
      },{
        label: '부족',
        maxBarThickness: 12,
        data: this.LackData,
        backgroundColor: [
          'rgba(17, 183, 135, 1)',
          ],
      },{
        label: '교체',
        maxBarThickness: 12,
        data: this.ChangeData,
        backgroundColor: [
          "rgba(255, 60, 166, 0.8)",
          ],
      }]
      }
      let options={
        scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            fontColor: '#a5a5a5'
          }
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
        tooltip: { boxWidth: 10, bodyFont: { size: 15 } }
      }
      }
      this.chartData = data
      this.chartOptions = options
      this.chartRedraw();
    },
    chartRedraw(){
      this.chartImage = new Chart(this.$refs.barChart, {
        type:'bar',
        data:this.chartData,
        options:this.chartOptions
      })
      this.chartImage.update();
    },
    getDataFromLookUp(){
      eventBus.$on("BtLookUp", (BtChartItems, s_date) => 
      {
          this.s_date = s_date
          if(BtChartItems != ''){
          this.comChartItems = BtChartItems
          
          let tmpArr1 = []
          let tmpArr2 = []
          let tmpArr3 = []
          this.newFullArr = []
          this.newLackArr = []
          this.newChangeArr = []

          for(let i=0; i<6; i++){
            tmpArr1.push({
              sensorTypeCd: "TPE00"+i,
              statName: null,
              statCnt: 0,
            })
          }
          for(let i=0; i<6; i++){
            tmpArr2.push({
              sensorTypeCd: "TPE00"+i,
              statName: null,
              statCnt: 0,
            })
          }
          for(let i=0; i<6; i++){
            tmpArr3.push({
              sensorTypeCd: "TPE00"+i,
              statName: null,
              statCnt: 0,
            })
          }
        
          for(let i=0; i<7; i++){
            if(this.comChartItems[i].statName==="충만"){
              let tmpidx = tmpArr1.findIndex(idx=>{
                return idx.sensorTypeCd == this.comChartItems[i].sensorTypeCd
              })
              tmpArr1[tmpidx].statName = this.comChartItems[i].statName
              tmpArr1[tmpidx].statCnt = this.comChartItems[i].statCnt
            }
            if(this.comChartItems[i].statName==="부족"){
              let tmpidx = tmpArr2.findIndex(idx=>{
                return idx.sensorTypeCd == this.comChartItems[i].sensorTypeCd
              })
              tmpArr2[tmpidx].statName = this.comChartItems[i].statName
              tmpArr2[tmpidx].statCnt = this.comChartItems[i].statCnt
            }
            if(this.comChartItems[i].statName==="교체"){
              let tmpidx = tmpArr3.findIndex(idx=>{
                return idx.sensorTypeCd == this.comChartItems[i].sensorTypeCd
              })
              tmpArr3[tmpidx].statName = this.comChartItems[i].statName
              tmpArr3[tmpidx].statCnt = this.comChartItems[i].statCnt
            }
          }
          for(let i=0; i<6; i++){
            this.newFullArr.push(tmpArr1[i].statCnt)
            this.newLackArr.push(tmpArr2[i].statCnt)
            this.newChangeArr.push(tmpArr3[i].statCnt)
          }

          this.remakeData();
        }
      });
    },
    remakeData(){
      this.chartImage.destroy();  
      this.FullData = this.newFullArr
      this.LackData = this.newLackArr
      this.ChangeData = this.newChangeArr
      this.chartData.datasets[0].data = this.FullData
      this.chartData.datasets[1].data = this.LackData
      this.chartData.datasets[2].data = this.ChangeData
      this.chartRedraw();
    },
  }
}
</script>

<style scoped>

</style>