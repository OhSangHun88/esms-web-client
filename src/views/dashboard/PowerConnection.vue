<template>
  <div class="box_style box_r" style="height: 270px;">
    <div class="result_txt">
      <p style="float: left; width: 17%; fontSize: 18px; height: 10px; margin-bottom: 20px;">전원연결</p>
      <p style="float: left; width: 73%; fontSize: 18px; height: 10px; margin-bottom: 20px;">통신상태</p>
    </div>
    <div>
      <p style="float: left; width: 17%;">게이트웨이</p>
      <p style="float: left; width: 17%;">응급호출기</p>
      <p style="float: left; width: 17%;">화재감지기</p>
      <p style="float: left; width: 17%;">도어센서</p>
      <p style="float: left; width: 16%;">활동감지센서</p>
      <p style="float: left; width: 16%;">생활안심센서</p>
    </div>
    <div style="float: left; width: 17%;">
      <canvas height="150px" width="200px" ref="doughnutChart1"/>
    </div>
    <div style="float: left; width: 17%;">
      <canvas height="150px" width="200px" ref="doughnutChart2"/>
    </div>
    <div style="float: left; width: 17%;">
      <canvas height="150px" width="200px" ref="doughnutChart3"/>
    </div>
    <div style="float: left; width: 17%;">
      <canvas height="150px" width="200px" ref="doughnutChart4"/>
    </div>
    <div style="float: left; width: 16%;">
      <canvas height="150px" width="200px" ref="doughnutChart5"/>
    </div>
    <div style="float: left; width: 16%;">
      <canvas height="150px" width="200px" ref="doughnutChart6"/>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data:() => ({
    type: 'doughnut',
    data1: {
      labels: ['연결', '차단'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 19, 5 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    data2: {
      labels: ['수신', '미수신', '양호'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 14, 5, 8 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)", "rgba(255, 60, 166, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    data3: {
      labels: ['수신', '미수신', '양호'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 14, 5, 8 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)", "rgba(255, 60, 166, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    data4: {
      labels: ['수신', '미수신', '양호'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 14, 5, 8 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)", "rgba(255, 60, 166, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    data5: {
      labels: ['수신', '미수신', '양호'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 14, 5, 8 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)", "rgba(255, 60, 166, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    data6: {
      labels: ['수신', '미수신', '양호'],
      labelsColor: 'white',
      datasets: [{
        label: '연결',
        data: [ 14, 5, 8 ],
        backgroundColor: [ "rgba(19, 126, 255, 0.8)", "rgba(173, 176, 187, 0.8)", "rgba(255, 60, 166, 0.8)"],
        borderColor: 'rgba(255, 255, 255, 1)',
        hoverBorderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      }]
    },
    options: {
      responsive: false,
      plugins: { 
        legend: { 
          display: true, 
          position: "bottom", 
          labels: { boxWidth: 10, padding: 10, usePointStyle: true, pointStyle: "circle", font: { size: 15 } }, 
          fullSize: false, 
          align: "center" 
          }, 
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
      new Chart(this.$refs.doughnutChart1, {
        type:'doughnut',
        data:this.data1,
        options:this.options
      })
      new Chart(this.$refs.doughnutChart2, {
        type:'doughnut',
        data:this.data2,
        options:this.options
      })
      new Chart(this.$refs.doughnutChart3, {
        type:'doughnut',
        data:this.data3,
        options:this.options
      })
      new Chart(this.$refs.doughnutChart4, {
        type:'doughnut',
        data:this.data4,
        options:this.options
      })
      new Chart(this.$refs.doughnutChart5, {
        type:'doughnut',
        data:this.data5,
        options:this.options
      })
      new Chart(this.$refs.doughnutChart6, {
        type:'doughnut',
        data:this.data6,
        options:this.options
      })
    }
  }
}
</script>

<style scoped>

</style>