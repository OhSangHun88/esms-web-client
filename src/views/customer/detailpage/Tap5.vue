<template>
    <div>
        <div class="tabcontent">
            <div class="tablist_wrap">
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">활동 미감지</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <table>
                            <colgroup>
                                <col style="width:50%;">
                                <col style="width:50%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">설정 값(분)</th>
                                    <th scope="col">설정 값(분)</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:50%;">
                                    <col style="width:50%;">
                                </colgroup>
                                <tbody>
                                    <tr class="m_input">
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="30">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="120">
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="tablist">
                    <div class="list_top">
                        <div class="title_area">
                            <p class="tit">게이트웨이 상태 전송</p>
                        </div>
                        <div class="btn_area">
                            <button type="button" class="btn form2">저장</button>
                        </div>
                    </div>
                    <div class="list">
                        <table>
                            <colgroup>
                                <col style="width:50%;">
                                <col style="width:50%;">
                            </colgroup>
                            <thead>
                                <tr>
                                    <th scope="col">설정 값(분)</th>
                                    <th scope="col">설정 값(분)</th>
                                </tr>
                            </thead>
                        </table>
                        <div class="tbody">
                            <table>
                                <colgroup>
                                    <col style="width:50%;">
                                    <col style="width:50%;">
                                </colgroup>
                                <tbody>
                                    <tr class="m_input">
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="30">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="input_area">
                                                <input type="text" name="" id="" value="120">
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tablist">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 감지 주기 및 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:24%;">
                            <col style="width:24%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">감지 주기(초)</th>
                                <th scope="col">센서 전송주기(초)</th>
                                <th scope="col">G/W 전송주기(초)</th>                                                    
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:24%;">
                                <col style="width:24%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="radio1" id="radio1_1" >
                                            <label for="radio1_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>2</td>
                                    <td>
                                        <div class="input_area">
                                            <input type="text" name="" id="" :value="item.svrSendCycle">초
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input_area">
                                            <input type="text" name="" id="" :value="item.gwSendCycle">초
                                        </div>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist type-02">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서 상태값 전송 주기</p>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn form2">저장</button>
                    </div>
                </div>
                <div class="list bd_btm">
                    <table>
                        <colgroup>
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:13%;">
                            <col style="width:24%;">
                            <col style="width:24%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">선택</th>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">감지 주기(초)</th>
                                <th scope="col">센서 전송주기(배수)</th>
                                <th scope="col">G/W 전송주기(배수)</th>                                                    
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:13%;">
                                <col style="width:24%;">
                                <col style="width:24%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in getCSensorsData" v-bind:key="index">
                                    <td>
                                        <div class="chk_area radio">
                                            <input type="radio" name="radio2" id="radio2_1" checked>
                                            <label for="radio2_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>{{item.sensorTypeNm}}</td>
                                    <td>{{locationCode(item.sensorLocCd)}}</td>
                                    <td>2</td>
                                    <td>
                                        <div class="input_area">
                                            <input type="text" name="" id="" :value="item.stateSvrSendCycle">초
                                        </div>
                                    </td>
                                    <td>
                                        <div class="input_area">
                                            <input type="text" name="" id="" :value="item.stateGwSendCycle">초
                                        </div>
                                    </td>
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
//import moment from "moment";

 export default {
   name: "Tap5",
   props:{
     recipientId: String
   },
   data () {
     return {
      getCSensorsData: null,
      


     }
   },
  methods: {
      async getCSensers(){
      const url  = `/admin/sensors?recipientId=${this.recipientId}&recordCountPerPage=30`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCSensorsData = res.data.data
            console.log("sensors ")
            console.log(this.getCSensorsData)
            
            
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
          

    },

    
    locationCode(input){
        let result=''
        switch (input){
          case "LOC001" : result="거실1"; break;
          case "LOC002" : result="거실2" ;break;
          case "LOC003" : result="안방1"; break;
          case "LOC004" : result="안방2" ;break;
          case "LOC005" : result="화장실1" ;break;
          case "LOC006" : result="화장실2" ;break;
          case "LOC007" : result="현관1" ;break;
          case "LOC008" : result="현관2" ;break;
          case "LOC009" : result="주방1" ;break;
          case "LOC010" : result="주방2" ;break;
          case "LOC011" : result="작은방1" ;break;
          case "LOC012" : result="작은방2" ;break;
      }
        return result
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
    this.getCSensers();
  }
 }
 </script>

<style scoped>
</style>                                
            