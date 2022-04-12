<template>
  <div class="box_col3 box_style" style="margin-left:20px">
    <p>응급 이벤트 현황</p>    
   <div>
      <canvas class="statistics-charts-line" ref="BarChart" width="470" height="275" ></canvas>
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
    FireData: [ 12, 19, 7, 5, 8, 13, 7 ],
    EmData: [10, 12, 11, 10, 10, 15, 9],
    SafeData:[5, 12, 10, 7, 7, 8, 17],
  }),
  
  mounted(){
    this.createData();
  },
  methods:{
    created() {
      getDataFromLookUp();
    },
    getDataFromLookUp(){
      console.log("test")
      eventBus.$on("LookUp", (ChartItems) => {console.log(ChartItems);});     
    },
  
    remakeData(){
      this.chartImage.destroy();
      this.FireData=this.ChartItems[1]
      this.chartData.datasets[0].data = this.ChartItems
      //console.log(this.FireData)
      console.log(this.chartData.datasets[0].data)
      this.chartRedraw();
    },
    chartRedraw(){  
      this.chartImage = new Chart(this.$refs.BarChart, {
        type:'bar',
        data:this.chartData,
        options:this.chartOptions
      })
      this.chartImage.update();
    },
    
    createChartDateTime(){
      if(this.chartData){
        let tmp = this.chartData.datasets[0].data.length
        let nowDate = moment().add(1,'days').format('MM-DD');
        let tmpArr = []
        for(let i=tmp ; i>0; i--){
          tmpArr.push(moment(nowDate).subtract(1*i, 'days').format('MM-DD'))
        }
        this.chartData.labels = tmpArr
      }
    },
    createData(){
      let data =  {
      labels: [],
      labelsColor: 'rgba(17, 183, 1, 1)',
      datasets: [
        {
        label: '화재',
        data: this.FireData,
        maxBarThickness: 10,    
        backgroundColor: ["rgba(19, 126, 255, 0.8)",]
        },
        {
        label: '응급',
        data: this.EmData,
        maxBarThickness: 10,  
        backgroundColor: ['rgba(17, 183, 135, 1)',],
      },
      {
        label:'119',
        data: this.SafeData,
        maxBarThickness: 10,  
        backgroundColor: ["rgba(255, 60, 166, 0.8)",],
      }]
      }
      let options={
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins:{
        legend: {
		      display: true,
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
    this.createChartDateTime()
    this.chartRedraw();
    }

  }
}
</script>

<style scoped>

</style>