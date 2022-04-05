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
      labels: [ '게이트웨이', '응급호출기', '화재감지기', '도어센서', '활동감지센서', '생활안심센서'],
      datasets: [{
        label: '충만',
        maxBarThickness: 12,  
        data: [ 12, 19, 11, 13, 12, 15],
        backgroundColor: [
          "rgba(17, 135, 183, 0.8)",
          ],
      },{
        label: '부족',
        maxBarThickness: 12,
        data: [ 8, 12, 10, 17, 7, 10],
        backgroundColor: [
          'rgba(17, 183, 135, 1)',
          ],
      },{
        label: '교체',
        maxBarThickness: 12,
        data: [ 16, 17, 13, 14, 9, 13],
        backgroundColor: [
          "rgba(183, 17, 135, 0.8)",
          ],
      }]
    },
    options: {
      scales: [{
        y: {
          beginAtZero: true,
          ticks: {
            fontFamily: "noto-fonts",
            fontColor: '#a5a5a5'
          }
        }
      }],
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
      },
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