<template>
  <div class="box_col3 box_style" style="margin-left:20px">
    <p>장비가동률</p>    
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
        type:'line',
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
        type: 'bar',
        data: [ 12, 19, 3, 5, 2, 3, 7 ],
        backgroundColor:'rgba(17, 183, 135, 1)',
        maxBarThickness: 30,
        },{
        label: '# of Votes',
        type: 'line',
        data: [ 12, 19, 3, 5, 2, 3, 7 ],
        borderColor:'rgba(17, 183, 135, 0.8)',
        borderWidth: 3.5,
        tension: 0.5,
        fill: true,
        backgroundColor: 'rgba(17, 183, 135, 0.2)',
        animation: {
          //easeInOutBack 
          //easeInOutElastic
          //easeInOutExpo
          //easeInOutSine
          //easeInOutQuart         
          easing: 'easeInOutQuart'
        }
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