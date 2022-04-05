<template>

  <div class="box_col3 box_style">
    <div>
      <colgroup>
        <col style="width:2%; margin-left:15px;" >
        <col style="width:1.5%;">
        <col style="width:1.5%;">
        <col style="width:1%;">
      </colgroup>
      <thead>
      <tr>
        <th>구분</th>
        <th>A/S 요청</th>
        <th>A/S 접수</th>
        <th>A/S 완료</th>
      </tr>
      <br>
      </thead>
      <div class="tbody">
        <colgroup>
         <col style="width:2%;" >
         <col style="width:1.5%;">
         <col style="width:1.5%;">
         <col style="width:1%;">
        </colgroup>
        <tbody>
          <tr>
            <th scope="col">게이트웨이</th>
            <th scope="col">{{this.gwrqCount}}</th>
            <th scope="col">{{this.gwrcCount}}</th>
            <th scope="col">{{this.gwcpCount}}</th>
          </tr>
          <br>
          <tr>
            <th scope="col">응급호출기</th>
            <th scope="col">{{this.emrqCount}}</th>
            <th scope="col">{{this.emrcCount}}</th>
            <th scope="col">{{this.emcpCount}}</th>
          </tr>
          <br>
          <tr>
            <th scope="col">활동감지기</th>
            <th scope="col">{{this.acrqCount}}</th>
            <th scope="col">{{this.acrcCount}}</th>
            <th scope="col">{{this.accpCount}}</th>
          </tr>
          <br>
          <tr>
            <th scope="col">화재감지기</th>
            <th scope="col">{{this.firqCount}}</th>
            <th scope="col">{{this.fircCount}}</th>
            <th scope="col">{{this.ficpCount}}</th>
          </tr>
          <br>
          <tr>
            <th scope="col">출입문센서</th>
            <th scope="col">{{this.dorqCount}}</th>
            <th scope="col">{{this.dorcCount}}</th>
            <th scope="col">{{this.docpCount}}</th>
          </tr>
          <br>
          <tr>
            <th scope="col">생활정보센서</th>
            <th scope="col">{{this.lirqCount}}</th>
            <th scope="col">{{this.lircCount}}</th>
            <th scope="col">{{this.licpCount}}</th>
          </tr>
        </tbody>
        </div>
    </div>
    <div>
      <canvas width="470" height="1">
      </canvas>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return{
      gwrqCount: 0, gwrcCount: 0, gwcpCount: 0,
      emrqCount: 0, emrcCount: 0, emcpCount: 0,
      acrqCount: 0, acrcCount: 0, accpCount: 0,
      firqCount: 0, fircCount: 0, ficpCount: 0,
      dorqCount: 0, dorcCount: 0, docpCount: 0,
      lirqCount: 0, lircCount: 0, licpCount: 0,
    }
  },
  methods:{
    // 게이트웨이 AS 요청,접수,완료
    getGwCount(){
      let url = "/admin/organizations/stat/as?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            let gwrqData = response.data.data
            let gwrqCArrToString = ''
            let fgwrqCArrToString = ''

            let gwrcData = response.data.data
            let gwrcCArrToString = ''
            let fgwrcCArrToString = ''

            let gwcpData = response.data.data
            let gwcpCArrToString = ''
            let fgwcpCArrToString = ''

            gwrqCArrToString = gwrqData.filter(cd=>{
            return cd.typeCd ==="TPE000"
            })
            fgwrqCArrToString = gwrqCArrToString.filter(cd=>{
              return cd.stateCd === "STE001"
            })
            this.gwrqCount =fgwrqCArrToString[0].typeCnt
            !this.gwrqCount? 0 : this.gwrqCount
            


            gwrcCArrToString = gwrcData.filter(cd=>{
            return cd.typeCd ==="TPE000"
            })
            fgwrcCArrToString = gwrcCArrToString.filter(cd=>{
              return cd.stateCd === "STE002"
            })
            !this.gwrcCount? 0 : this.gwrcCount= fgwrcCArrToString[0].typeCnt
            
            console.log(this.gwrcCount)

            gwcpCArrToString = gwcpData.filter(cd=>{
            return cd.typeCd ==="TPE000"
            })
            fgwcpCArrToString = gwcpCArrToString.filter(cd=>{
              return cd.stateCd === "STE003"
            })
            this.gwcpCount =fgwcpCArrToString[0].typeCnt
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    getEmCount(){
      let url = "/admin/organizations/stat/as?startDate="+this.s_date+"&endDate="+this.e_date;
      axios.get(url, {headers: {"Authorization": sessionStorage.getItem("token")}})
          .then(response => {
            let emrqData = response.data.data
            let emrqCArrToString = ''
            let femrqCArrToString = ''

            let emrcData = response.data.data
            let emrcCArrToString = ''
            let femrcCArrToString = ''

            let emcpData = response.data.data
            let emcpCArrToString = ''
            let femcpCArrToString = ''

            emrqCArrToString = emrqData.filter(cd=>{
            return cd.typeCd ==="TPE001"
            })
            femrqCArrToString = emrqCArrToString.filter(cd=>{
              return cd.stateCd === "STE001"
            })
            !this.emrqCount? 0 : this.emrqCount =femrqCArrToString[0].typeCnt


            emrcCArrToString = emrcData.filter(cd=>{
            return cd.typeCd ==="TPE001"
            })
            femrcCArrToString = emrcCArrToString.filter(cd=>{
              return cd.stateCd === "STE002"
            })
            !this.emrcCount? 0 : this.emrcCount =femrcCArrToString[0].typeCnt


            emcpCArrToString = emcpData.filter(cd=>{
            return cd.typeCd ==="TPE001"
            })
            femcpCArrToString = emcpCArrToString.filter(cd=>{
              return cd.stateCd === "STE003"
            })
            !this.emrqCount? 0 : this.emrqCount =femcpCArrToString[0].typeCnt
          })
          .catch(error => {
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
  },
  created(){
    this.s_date=moment().subtract(999, 'days').format('YYYY-MM-DD');
    this.e_date=moment().format('YYYY-MM-DD');
    this.getGwCount();
    this.getEmCount();
  }
}
</script>

<style scoped>

</style>