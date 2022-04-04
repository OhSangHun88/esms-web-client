<template>
<div class="container">
  <div class="one_box box_style">
    <div class="result_txt">
      <p>배터리</p>
    </div>
    <div>
      <canvas ref="barChart" width="450" height="210"/>
    </div>
  </div>
</div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
    type: 'bar',
    data: {
      labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
      labelsColor: 'white',
      datasets: [{
        label: '# of Votes',
        data: [ 12, 19, 3, 5, 2, 3, 7 ],
        backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 159, 64, 1)",
          ],
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
      new Chart(this.$refs.barChart, {
        type:'bar',
        data:this.data,
        options:this.options
      })

    }
  }
}
</script>

<style scoped>

</style>