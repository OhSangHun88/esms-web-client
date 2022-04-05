<template>
  <div class="box_col3 box_style">
    <p>장비가동률</p>    
   <div>
      <canvas class="statistics-charts-line" ref="lineChart" width="470" height="300"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
    type: 'line',
    data: {
      labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
      labelsColor: 'white',
      datasets: [{
        label: '# of Votes',
        data: [ 12, 19, 3, 5, 2, 3, 7 ],
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderColor:'rgba(17, 183, 135, 1)',
        borderWidth: 3.5,
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
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
      new Chart(this.$refs.lineChart, {
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