<template>
    <div>
        <div class="tabcontent">
            <div class="tabcnt01">
                <div class="list_top">
                    <div class="btn_area">
                        <button type="button" class="btn form2" @click="sendParent">추가</button>
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
                    <div class="tbody htype-02">
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
                                    <td v-if="selectIndex === index">
                                        <div class="input_area">
                                            <input type="text" name="relationCdNm" :id="`relationCdNm_${index}`" v-model="item.relationCdNm" >
                                        </div>
                                    </td>
                                    <td v-else>{{item.relationCdNm}}</td>
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
    name: "Menu3",
    //말벗
    props:{
        recipientId: String,
        menu3Refresh: Number
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
        //부모 컴포넌트에 데이터 전송
        sendParent(){
            this.popCheck=true
            this.msg = '말벗'
            this.$emit("openPopMsg",this.msg) 
            this.$emit("sendData3",this.relationPhoneData)
            this.$emit("openPop",this.popCheck)
            
        },
        //동작후 갱신 메소드
        sendMenu3Lending(){
            console.log("lending")
            const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers?typeCd=TPE008`
                axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
                .then(res => {
                this.relationPhoneData = res.data.data
                //   = res.data.data.filter(pd =>{
                //       return pd.typeCd === "TPE008"
                //   })
                
                console.log(this.relationPhoneData)
                this.$emit("lending3",this.lending)
                }).catch(error => {
                    console.log("fail to load")
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
            
             
        },
        //전화번호 양식화
        changeRecipientPhoneno(phone){
            if(phone){
                let changeNumber = phone.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
                return changeNumber
            }else{
                return ''
            }

        },
        //초기 호출 메소드
        async getRelationPhoneData(){
            console.log("menu3")
        //여기
            console.log("this.menu3Refresh",this.$props.menu3Refresh)
            if(this.$props.menu3Refresh===1){
                const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers?typeCd=TPE008`
                await axios.get(url, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
                .then(res => {
                this.relationPhoneData = res.data.data
                //   = res.data.data.filter(pd =>{
                //       return pd.typeCd === "TPE008"
                //   })
                //this.sendMenu3Lending()
                console.log(this.relationPhoneData)
                }).catch(error => {
                    console.log("fail to load")
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
            }
        },
        //말벗 삭제
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
                
                this.sendMenu3Lending()
                
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
        modifyRelationPhoneData(){
            
            let selectData = this.relationPhoneData[this.selectIndex]
            let selectRegSn = selectData.regSn
            const url  = this.$store.state.serverApi + `/admin/recipients/${this.recipientId}/phoneNumbers/${selectRegSn}/update`
            
            axios.post(url,selectData, {headers: {"Authorization": "Bearer " + sessionStorage.getItem("token")}})
            .then(res => {
            console.log(res.data.data)
            
            alert("성공적으로 수정되었습니다")
            this.sendMenu3Lending()
            
            }).catch(error => {
                console.log("fail to load")
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
            
        },


    }
}
</script>