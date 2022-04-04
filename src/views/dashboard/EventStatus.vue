<template>
<div class="container">
  <div class="one_box box_style">
    <div class="result_txt">
      <p>오늘 이벤트 현황</p>
    </div>
    <div>
      <p>응급 이벤트 현황</p>
    </div>
    <div>
      <canvas ref="barChart" width="470" height="210"/>
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
        data: [ 12, 19, 7, 5, 8, 13, 7 ],        
        backgroundColor: [
            "rgba(17, 135, 183, 0.8)",
          ],
          borderColor: [
            "rgba(17, 135, 183, 0.8)",
          ],
          color: [
            "rgba(0,0,255,1)",
          ],
        borderWidth: 3.5,
      },{
      data:[10, 12, 11, 10, 10, 15, 9],
      backgroundColor: [
            'rgba(17, 183, 135, 1)',
          ],
          borderColor: [
            'rgba(17, 183, 135, 1)',
          ],
        borderWidth: 3.5,
      },{
      data:[1, 12, 2, 7, 3, 8, 17],
      backgroundColor: [
            "rgba(183, 17, 135, 0.8)",
          ],
          borderColor: [
            "rgba(183, 17, 153, 0.8)",
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