<template>
    <div>
        <div class="tabcontent">
            <div class="toggle_btn">
                <button type="button" class="btn on" @click="dataTogle(3)" >태블릿</button>
                <button type="button" class="btn" @click="dataTogle(2)">게이트웨이</button>
                <button type="button" class="btn" @click="dataTogle(1)">센서</button>
            </div>
            <div class="tablist" v-if="connectTap===3">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">Tablet PC</p>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">남</button>
                            <button type="button" class="btn">여</button>
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
                                <th scope="col">전화번호</th>
                                <th scope="col">통신사</th>
                                <th scope="col">모델</th>
                                <th scope="col">통신상태</th>
                                <th scope="col">배터리</th>
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
                                <tr>
                                    <td>010-1234-1234</td>
                                    <td>KT</td>
                                    <td>SM-t225N</td>
                                    <td>양호</td>
                                    <td>양호(100%)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===2">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">게이트웨이</p>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">기본정보</button>
                            <button type="button" class="btn">상세정보</button>
                        </div>
                    </div>
                    <div class="btn_area">
                        <button type="button" class="btn">업그레이드</button>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">시리얼번호(S/N)</th>
                                <th scope="col">맥 어드레스</th>
                                <th scope="col">FW버전 (설치/회신)</th>
                                <th scope="col">HW버전 (설치/회신)</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr >
                                    <td>{{this.getCGatewayData.serialNo}}</td>
                                    <td>{{this.getCGatewayData.macAddr}}</td>
                                    <td>{{this.getCGatewayData.firmwareVersion}}</td>
                                    <td>{{this.getCGatewayData.hardwareVersion}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist" v-if="connectTap===1">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">센서</p>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">최신정보</button>
                            <button type="button" class="btn">직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">센서종류</th>
                                <th scope="col">설치장소</th>
                                <th scope="col">시리얼번호</th>
                                <th scope="col">MAC Addr</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>gd23234474157445544</td>
                                    <td>215148814748754215487a</td>
                                    <td>215148814748754215487a</td>
                                    <td>215148814748754215487a</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="tablist">
                <div class="list_top">
                    <div class="title_area">
                        <p class="tit">장비상태 정보</p>
                        <div class="select_area">
                            <select name="" id="">
                                <option value="">Tablet PC</option>
                            </select>
                        </div>
                        <div class="toggle_btn">
                            <button type="button" class="btn on">최신정보</button>
                            <button type="button" class="btn">직전정보</button>
                        </div>
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:16%;">
                            <col style="width:auto;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">통신상태</th>
                                <th scope="col">장애여부</th>
                                <th scope="col">배터리</th>
                                <th scope="col">Keep-Alive</th>
                                <th scope="col">신호세기</th>
                                <th scope="col">서버 보고 일시</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:16%;">
                                <col style="width:auto;">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>미수신</td>
                                    <td>장애</td>
                                    <td>양호(100%)</td>
                                    <td>미수신</td>
                                    <td>양호(100%)</td>
                                    <td>2021-03-04 16:49:03</td>
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
      getCSensersData: null,
      getCGatewayData: null,
      getCTabletsData: null,
      connectTap: 1,

     }
   },
  methods: {
    async getCGateway(){
        const url  = `/admin/recipients/${this.recipientId}/gateways`
        
        console.log("emergencys is ")
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCGatewayData = res.data.data
            console.log("getCGatewayData ")
            console.log(this.getCGatewayData)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },
    dataTogle(value){
        switch (value){
          case 1 : this.connectTap=1 ;break;
          case 2 : this.connectTap=2 ;break;
          case 3 : this.connectTap=3 ;break;

      }
    },
    getSensersData(){
      
    },
    async getCTablets(){
      const url  = `/admin/recipients/${this.recipientId}/tablets`
        
        
        await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
          .then(res => {
            this.getCTabletsData = res.data.data
            console.log("tablets ")
            console.log(this.getCTabletsData)
          })
          .catch(error => {
              console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
          });
    },

   },
   created() {
    this.getCGateway();
    this.getCTablets()
  }
 }
 </script>

<style scoped>
                
            