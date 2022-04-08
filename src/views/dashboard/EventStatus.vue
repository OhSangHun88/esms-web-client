<template>
  <div class="box_col3 box_style" style="margin-left:20px">
    <p>응급 이벤트 현황</p>    
   <div>
      <canvas class="statistics-charts-line" ref="lineChart" width="470" height="275"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import moment from "moment";
export default {
  data:() => ({ 
    chartDays:[],
    data: {},
    options: {}
  }),
  created(){
    this.createData()
    this.createChartDateTime()
  },
  mounted(){
    this.createChart()
  },
  methods:{
    createChart(){
      new Chart(
        this.$refs.lineChart,{
        type:'bar',
        data:this.data,
        options:this.options
      })
    },
    createChartDateTime(){
      if(this.data){
        let tmp = this.data.datasets[0].data.length
        let nowDate = moment().add(1,'days').format('MM-DD');
        let tmpArr = []
        for(let i=tmp ; i>0; i--){
          console.log(i)
          tmpArr.push(moment(nowDate).subtract(1*i, 'days').format('MM-DD'))
        }
        this.data.labels = tmpArr
      }
    },
    createData(){
      this.data =  {
      labels: [],
      labelsColor: 'rgba(17, 183, 1, 1)',
      datasets: [
        {
        label: '화재',
        data: [ 12, 19, 7, 5, 8, 13, 7 ],
        maxBarThickness: 10,    
        backgroundColor: ["rgba(17, 135, 183, 0.8)",]
        },
        {
        label: '응급',
        data:[10, 12, 11, 10, 10, 15, 9],
        maxBarThickness: 10,  
        backgroundColor: ['rgba(17, 183, 135, 1)',],
      },
      {
        label:'119',
        data:[5, 12, 10, 7, 7, 8, 17],
        maxBarThickness: 10,  
        backgroundColor: ["rgba(183, 17, 135, 0.8)",],
      }]
      }
    this.options={
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins:{
        legend: {
		      display: false,
		    },
      }
    }
    }

  }
}
</script>

<style scoped>

</style>