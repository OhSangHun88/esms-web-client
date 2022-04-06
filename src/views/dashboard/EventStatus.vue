<template>

  <div class="box_col3 box_style" style="width:150px;">
    <div>
      <p>오늘 이벤트 현황</p>
    </div>
    <div>
      <p>응급 이벤트 현황</p>
    </div>
    <div>
      <canvas ref="barChart" width="470" height="237"/>
    </div>
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  data: () => ({
    chartData: null,
    chartOptions: null,
    FchangingData: [ 12, 19, 7, 5, 8, 13, 7 ],
    EchangingData: [10, 12, 11, 10, 10, 15, 9],
    AchangingData: [5, 12, 10, 7, 7, 8, 17],
    chartImage: null,
  }),
mounted(){
    this.createDate();
  },
  methods: {
    remakeData(){
      this.chartImage.destroy();
      this.FchangingData=[]
      this.EchangingData=[]
      this.AchangingData=[]
      for(let i = 0;i<7;i++){
        let j =  Math.floor(Math.random()*10);
        this.FchangingData.push(j)
      }
      this.chartData.datasets[0].data = this.FchangingData
      this.chartData.datasets[0].data = this.EchangingData
      this.chartData.datasets[0].data = this.AchangingData
      console.log(this.FchangingData)
      console.log(this.chartData.datasets[0].data)
      this.chartRedraw();
    },
    createDate(){
      let data = {
        labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
        fontColor: "white",
        datasets: [{
        label: '화재',
        data: this.FchangingData,
        maxBarThickness: 10,    
        backgroundColor: [
          "rgba(17, 135, 183, 0.8)",
        ],
        },{
        label: '응급',
        data: this.EchangingData,
        maxBarThickness: 10,  
        backgroundColor: [
          'rgba(17, 183, 135, 1)',
        ],
        },{
        label: '119',
        data: this.AchangingData,
        maxBarThickness: 10,  
        backgroundColor: [
          'rgba(183, 17, 135, 0.8)',
        ],
      },]
      }
      let options = {
        scales: {
          y: {
            beginAtZero: true
          }
        },
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
        }
      }
      this.chartData = data
      this.chartOptions = options
      this.chartRedraw();
    },
     chartRedraw(){  
      this.chartImage = new Chart(this.$refs.barChart, {
        type:'bar',
        data:this.chartData,
        options:this.chartOptions
      })
      this.chartImage.update();
    },
  }










  /*
  data:() => ({
    type: 'bar',
    data: {
      labels: [ '3월 1일', '3월 2일', '3월 3일', '3월 4일', '3월 5일', '3월 6일', '3월 7일' ],
      fontColor: "white",
      datasets: [{
        label: '화재',
        data: [ 12, 19, 7, 5, 8, 13, 7 ],
        maxBarThickness: 10,    
        backgroundColor: [
          "rgba(17, 135, 183, 0.8)",
        ],  
      },{
        label: '응급',
        data:[10, 12, 11, 10, 10, 15, 9],
        maxBarThickness: 10,  
        backgroundColor: [
          'rgba(17, 183, 135, 1)',
        ],
      },{
        label:'119',
        data:[5, 12, 10, 7, 7, 8, 17],
        maxBarThickness: 10,  
        backgroundColor: [
          "rgba(183, 17, 135, 0.8)",
        ],
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
  }*/
}
</script>

<style scoped>

</style>