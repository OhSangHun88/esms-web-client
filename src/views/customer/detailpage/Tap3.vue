<template>
    <div>
        <div class="tabcontent">
            <div id="tab03" class="tabcnt01">
                <div class="list_top">
                    <div class="date_warp">
                        <div class="customerBts" style="justify-content: flex-start;">
                            <input type="date" v-model="this.callStartDate"/>
                            <span class="tilde">~</span>
                            <input type="date" v-model="this.callEndDate"/>
                            <button type="button" class="btn">조회</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                            <col style="width:20%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">통화구분</th>
                                <th scope="col">전화번호</th>
                                <th scope="col">통화시작</th>
                                <th scope="col">통화종료</th>
                                <th scope="col">통화시시간</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                                <col style="width:20%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in call_historys" v-bind:key="index">
                                    <td>{{item.callTypeNm}}</td>
                                    <td>{{changeRecipientPhoneno(item.phoneNumber)}}</td>
                                    <td>{{item.startTime}}</td>
                                    <td>{{item.endTime}}</td>
                                    <td>{{item.callDuration}} 초</td>
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
import moment from "moment";
 export default {
   name: "Tap3",
   props:{
     recipientId: String
   },
   data () {
     return {
      call_historys: null,
      callStartDate: moment().subtract(7,'days').format('YYYY-MM-DD'),
      callEndDate: moment().format('YYYY-MM-DD'),
     }
   },
  methods: {
    async getCall_historysData(){


        const url  = `/admin/recipients/${this.recipientId}/call-historys?pageIndex=1&recordCountPerPage=100&callStartDate=${this.callStartDate}&callEndDate=${this.callEndDate}`
        
        console.log("call_historys is ")
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.call_historys = res.data.data
            console.log("aa ")
            console.log(this.call_historys)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    changeRecipientPhoneno(phone){
      if(phone){
        let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
        return changeNumber
      }else{
        return ''
      }
      
    },
    

   },
   created() {
    this.getCall_historysData();
  }
 }
</script>

                
            