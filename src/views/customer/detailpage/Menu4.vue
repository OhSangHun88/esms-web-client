<template>
    <div>
        <div class="tabcontent">
            <div class="tabcnt01">
                <div class="list_top">
                    <div class="btn_area">
                        <!--<button type="button" class="btn form2">추가</button>
                        <button type="button" class="btn form2">수정</button>
                        <button type="button" class="btn form3">삭제</button>-->
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:10%;">
                            <col style="width:28%;">
                            <col style="width:28%;">
                            <col style="width:33%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <!-- <th scope="col">관리기관</th> -->
                                <th scope="col">순번</th>
                                <th scope="col">이름</th>
                                <th scope="col">관계</th>
                                <th scope="col">핸드폰번호</th>
                            </tr>
                        </thead>
                    </table>
                    <div class="tbody">
                        <table>
                            <colgroup>
                                <col style="width:10%;">
                                <col style="width:28%;">
                                <col style="width:28%;">
                                <col style="width:33%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in relationPhoneData" v-bind:key="index">
                                    <!-- <td>
                                        <div class="chk_area">
                                            <input type="checkbox" name="chk2" id="chk2_1" checked>
                                            <label for="chk2_1" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td> -->
                                    <td>{{index+1}}</td>
                                    <td>{{item.relationNm}}</td>
                                    <td>생활관리사</td>
                                    <td>{{changeRecipientPhoneno(item.relationPhone)}}</td>
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
    name: "Menu4",
    //생활관리사
    props:{
        recipientId: String
    },
    data () {
        return {
            relationPhoneData: null
        }
    },
    created(){
        this.getRelationPhoneData();
    },
    methods:{
      async getRelationPhoneData(){
          console.log("menu4")
      //여기
      const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers`
      await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
          this.relationPhoneData  = res.data.data.filter(pd =>{
              return pd.typeCd === "TPE006"
          })
          console.log(this.relationPhoneData)
        }).catch(error => {
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
  }
}
</script>