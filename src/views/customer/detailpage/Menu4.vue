<template>
    <div>
        <div class="tabcontent">
            <div class="tabcnt01">
                <div class="list_top">
                    <div class="btn_area">
                        <button v-if="this.relationPhoneData.length<1" type="button" class="btn form2" @click="sendParent">추가</button>
                        <button type="button" class="btn form2" @click="modifyRelationPhoneData">수정</button>
                        <button type="button" class="btn form3" @click="deleteRelationPhoneData">삭제</button> 
                    </div>
                </div>
                <div class="list">
                    <table>
                        <colgroup>
                            <col style="width:auto;">
                            <col style="width:10%;">
                            <col style="width:25%;">
                            <col style="width:25%;">
                            <col style="width:33%;">
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col"></th>
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
                                <col style="width:auto;">
                                <col style="width:10%;">
                                <col style="width:25%;">
                                <col style="width:25%;">
                                <col style="width:33%;">
                            </colgroup>
                            <tbody>
                                <tr v-for="(item,index) in relationPhoneData" v-bind:key="index">
                                    <td>
                                        <div class="chk_area">
                                            <input type="radio" name="chk" :id="`chk1_${index}`" v-model="selectIndex" :value="index">
                                            <label :for="`chk1_${index}`" class="chk"><i class="ico_chk"></i></label>
                                        </div>
                                    </td>
                                    <td>{{index+1}}</td>
                                    <td v-if="selectIndex === index">
                                        <div class="input_area">
                                            <input type="text" name="relationNm" :id="`relationNm_${index}`" v-model="item.relationNm" >
                                        </div>
                                    </td>
                                    <td v-else>{{item.relationNm}}</td>
                                    <td>생활관리사</td>
                                    <td v-if="selectIndex === index">
                                        <input type="text" name="relationPhone" :id="`relationPhone_${index}`" v-model="item.relationPhone" >
                                    </td>
                                    <td v-else>{{changeRecipientPhoneno(item.relationPhone)}}</td>
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
            relationPhoneData: null,
            popCheck: false,
            lending : 0,
            msg : '',
            selectIndex: null,
        }
    },
    created(){
        this.getRelationPhoneData();
    },
    methods:{
      async getRelationPhoneData(){
          console.log("menu4")
      //여기
      const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers?typeCd=TPE006`
      await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
          this.relationPhoneData  = res.data.data
        //   .filter(pd =>{
        //       return pd.typeCd === "TPE006"
        //   })
          console.log(this.relationPhoneData)
        }).catch(error => {
            console.log("fail to load")
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

    },
    //동작후 갱신 메소드
    sendMenu4Lending(){
        console.log("lending")
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers?typeCd=TPE006`
        axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
        this.relationPhoneData = res.data.data
        //   = res.data.data.filter(pd =>{
        //       return pd.typeCd === "TPE008"
        //   })
        
        console.log(this.relationPhoneData)
        this.$emit("lending4",this.lending)
        }).catch(error => {
            console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
    },
    sendParent(){
        this.popCheck=true
        this.msg = '생활관리사'
        this.$emit("openPopMsg",this.msg) 
        this.$emit("sendData4",this.relationPhoneData)
        this.$emit("openPop",this.popCheck)
        
    },
    modifyRelationPhoneData(){
        let selectData = this.relationPhoneData[this.selectIndex]
        let selectRegSn = selectData.regSn
        console.log(selectData)
        console.log(selectRegSn)
        const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers/${selectRegSn}/update`
        axios.post(url,selectData, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
        .then(res => {
        console.log(res.data.data)
        alert("성공적으로 수정되었습니다")
        this.sendMenu4Lending()
        }).catch(error => {
            console.log("fail to load")
            this.errorMessage = error.message;
            console.error("There was an error!", error);
        });
        
    },
    deleteRelationPhoneData(){
        if(confirm("정말로 삭제하시겠습니까? ")===true){
            let selectData = this.relationPhoneData[this.selectIndex]
            let selectRegSn = selectData.regSn
            console.log(selectRegSn)
            const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers/${selectRegSn}/delete`
            console.log(url)
            axios.delete(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
            console.log(res.data.data)
            
            this.sendMenu4Lending()
            
            }).catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
            alert("성공적으로 삭제되었습니다")
        }else{
            alert("취소되었습니다")
        }
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