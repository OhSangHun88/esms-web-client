<template>
    <div>
        <div class="tabcontent">
            <div id="tab02" class="tabcnt01">
                <div class="list_top">
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date"/>
                            <span class="tilde">~</span>
                            <input type="date"/>
                            <button type="button" class="btn">조회</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:10%;">
                            <col style="width:auto;">
                            <col style="width:auto;">
                            <col style="width:auto;">
                            <col style="width:10%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">구분</th>
                                <th scope="col">상태</th>
                                <th scope="col">테스트모드</th>
                                <th scope="col">발생일시</th>
                                <th scope="col">해제일시</th>
                                <th scope="col">보고일시</th>
                                <th scope="col">조치내용</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:10%;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                                <col style="width:auto;">
                                <col style="width:10%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in emergencys" v-bind:key="index">
                                    <td>{{item.signalStateNm}}</td>
                                    <td>{{item.typeNm}}</td>
                                    <td>{{!item.testYn ? '테스트':'실제상황'}}</td> 
                                    <td>{{item.occurDtime}}</td>
                                    <td>2021-03-04 16:49:03</td>
                                    <td>{{item.rcvDtime}}</td>
                                    <td>조치내용</td>
                                </tr>   
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

 export default {
   name: "Tap2",
   props:{
     recipientId: String
   },
   data () {
     return {
      emergencys: null,

     }
   },
  methods: {
    async getEmergencysData(){


        const url  = `/admin/recipients/${this.recipientId}/emergencys?pageIndex=1&recordCountPerPage=100`
        
        console.log("emergencys is ")
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.emergencys = res.data.data
            console.log("aa ")
            console.log(this.emergencys)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    

   },
   created() {
    this.getEmergencysData();
  }
 }
 </script>

<style scoped>


 </style>
                
            