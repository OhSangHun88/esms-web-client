<template>
<div class="container">
  <div class="one_box box_style">
    <div class="result_txt">
      <p>전원연결</p>
    </div>
    <div>
      <canvas ref="doughnutChart" width="1040" height="205"/>
    </div>
  </div>
</div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
    type: 'doughnut',
    data: {
      labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일' ],
      labelsColor: 'white',
      datasets: [{
        label: '# of Votes',
        data: [ 12, 19, 3, 5, 2, 3 ],
        backgroundColor: [ "#A684B7", "#DD7445", "#DE9D11", "#E0D295", "#B1D166", "#78BAA1" ],
        borderColor: "#eee",
        hoverBorderColor: "#eee",
        borderWidth: 3.5,
      }]
    },
    options: {
      plugins: { 
        legend: { 
          display: true, 
          position: "left", 
          labels: { boxWidth: 2, padding: 5, usePointStyle: true, pointStyle: "circle", font: { size: 5 } }, 
          fullSize: true, 
          align: "center" }, 
          tooltip: { boxWidth: 5, bodyFont: { size: 5 } }
    }
  },
  responsive: true, 
  maintainAspectRatio: false, 
  layout: { padding: { top: 2, bottom: 2 } }, 
  elements: { arc: { borderWidth: 2 } }, 
  animation: { duration: 5 } 
})}
</script>

<style scoped>

</style>