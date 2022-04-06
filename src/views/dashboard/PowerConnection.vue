<template>
  <div class="box_style box_r" style="height: 242px;">
    <div class="result_txt">
      <p>전원연결</p>
    </div>
    <div>
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
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 3.5,
      }]
    },
    options: {
      plugins: { 
        legend: { 
          display: true, 
          position: "left", 
          labels: { boxWidth: 2, padding: 5, usePointStyle: true, pointStyle: "circle", font: { size: 5 } }, 
          fullSize: false, 
          align: "center" }, 
          tooltip: { boxWidth: 5, bodyFont: { size: 5 } }
    }
  },
  responsive: true, 
  maintainAspectRatio: true, 
  layout: { 
    padding: { 
      top: 2, 
      bottom: 2 
      } 
    }, 
  elements: { 
    arc: { 
      borderWidth: 2 
      } 
    }, 
  animation: { 
    duration: 5 
  } 
}),
mounted(){
    this.createChart()
  },
  methods:{
    createChart(){
      new Chart(this.$refs.doughnutChart, {
        type:'doughnut',
        data:this.data,
        options:this.options
      })

    }
  }
}
</script>

<style scoped>

</style>