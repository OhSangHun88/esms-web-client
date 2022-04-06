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

export default {
  data:() => ({ 
    data: {
      labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
      labelsColor: 'white',
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
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      },
      plugins:{
        legend: {
		      display: false
		    },
      }
    }
  }),
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
    }
  }
}
</script>

<style scoped>

</style>