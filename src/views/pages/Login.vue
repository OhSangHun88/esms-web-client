<template>
  <div class="login_wrap">
    <div class="lgin_box">
      <h1 class="logo">아이오비</h1>
      <p class="login_title"><em>응급안전안심서비스</em>에 오신것을 환영합니다.</p>
      <div class="input_area">
        <input type="text" v-model="userId" placeholder="아이디를 입력해주세요." class="input_id" @keypress.enter='login'>
        <input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." class="input_pw" @keypress.enter='login'>
      </div>
      <div class="btn_area">
        <button type="button" class="lgBtn" v-on:click="login">로그인</button>
      </div>
    </div>
      <!-- <CRow class="justify-content-center" style="width: 100%;">
        <CCol md="8">
          <CCardGroup>

          </CCardGroup>
        </CCol>
        <CCol md="4">
          <div class="fgroup">
            <h5 class="tText"><strong>로그인</strong></h5>
            <CInput
                v-model="userId"
                placeholder="아이디"
                class="reInput"
            >
            </CInput>
            <CInput
                v-model="password"
                placeholder="비밀번호"
                type="password"
                class="reInput"
            >
            </CInput>
            <CRow>
              <CCol col="12" class="text-left">
                <CButton color="primary" class="lgBtn" v-on:click="login">Login</CButton>
              </CCol>
            </CRow>
            <CRow>
              <CCol col="6" class="text-left">
                <CButton color="link" class="linkText" style="margin-left: 121px;">회원가입 ></CButton>
              </CCol>
              <CCol col="6" class="text-right">
                <CButton color="link" class="linkText" style="margin-top: 15px;" @click="findIdPass = true">아이디/비밀번호 찾기 ></CButton>
              </CCol>
            </CRow>
          </div>
        </CCol>
      </CRow>

    <CModal
        class="mCustomer"
        :show.sync="findIdPass"
    >
      <div>
        <CContainer fluid>
          <CCard class="mx-8 mb-0 cardModal" >
            <CCardBody class="p-6">
              <CRow>
                <CCol class="col-md-6" style="border-right: 1px solid  #cadbd5;">
                  <CRow style="height: 40px;">
                    <CCol style="text-align: center;"><span style="font-size: 16px;font-weight: bold;">아이디 찾기</span></CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*이름</CCol>
                    <CCol class="col-md-9">
                      <CInput class="modalInput"></CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*휴대폰    &nbsp;&nbsp;번호</CCol>
                    <CCol class="col-md-9">
                      <div class="customInput">
                        <CInput
                            class="cusInput"
                            v-model="idPhoneNum"
                        />
                        <div class="Rectangle" @click="getIdCode">
                          <span>{{timerCountId}}{{secId}}</span>
                        </div>
                      </div>

                    </CCol>
                  </CRow>
                  <CRow style="height: 38px;">
                    <CCol class="col-md-3"></CCol>
                    <CCol class="col-md-9"><span style="color: #5d66ff;font-size: 12px;">"-"를 제외하고 등록된 휴대전화번호 입력</span></CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*인증번호</CCol>
                    <CCol class="modalInput">
                      <CInput
                          placeholder="인증번호 6자리"
                      >

                      </CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol class="col-md-12">
                      <CButton color="primary" style="width: 335px;height: 40px;" v-on:click="idConfirmBt">아이디 확인</CButton>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol class="col-md-6">
                  <CRow style="height: 40px;">
                    <CCol style="text-align: center;">
                      <span style="font-size: 16px;font-weight: bold;">비밀번호 찾기</span>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*이름</CCol>
                    <CCol class="col-md-9">
                      <CInput class="modalInput"></CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*휴대폰    &nbsp;&nbsp;번호</CCol>
                    <CCol class="col-md-9">
                      <div class="customInput">
                        <CInput class="cusInput" />
                        <div class="Rectangle" @click="getPassCode">
                          <span>{{timerCountPass}}{{secPass}}</span>
                        </div>
                      </div>

                    </CCol>
                  </CRow>
                  <CRow style="height: 38px;">
                    <CCol class="col-md-3"></CCol>
                    <CCol class="col-md-9"><span style="color: #5d66ff;font-size: 12px;">"-"를 제외하고 등록된 휴대전화번호 입력</span></CCol>
                  </CRow>
                  <CRow>
                    <CCol class="colText col-md-3" style="margin-top: 8px;">*인증번호</CCol>
                    <CCol class="modalInput">
                      <CInput
                          placeholder="인증번호 6자리"
                      >

                      </CInput>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol class="col-md-12">
                      <CButton color="primary" style="width: 335px;height: 40px;" v-on:click="passConfirmBt">임시 비밀번호 확인</CButton>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </CModal> -->
  </div>
</template>

<script>
import axios from "axios";

let router;
export default {
  name: 'Login',
  data() {
    return {
      userId:'',
      password:'',
      idPhoneNum: '',
      timerEnabled: false,
      timerCountId: '인증번호 받기',
      secId: '',
      idReceive: false,
      timerCountPass: '인증번호 받기',
      secPass: '',
      passReceive: false,
      findIdPass: false,
      getUserId: '',
    }
  },
  mounted: function () {
    console.log(this);
    router = this.$router;
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {

        }, 1000);
      }
    },
    timerCountId: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCountId--;
            if(this.timerCountId == 0) {
              this.timerCountId = '인증번호 받기';
              this.secId = '';
              this.idReceive = false;
            }
          }, 1000);
        } else {
          this.timerCountId = '인증번호 받기';
          this.secId = '';
          this.idReceive = false;
        }
      },
      immediate: true
    },
    timerCountPass: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCountPass--;
            if(this.timerCountPass == 0) {
              this.timerCountPass = '인증번호 받기';
              this.secPass = '';
              this.passReceive = false;
            }
          }, 1000);
        } else {
          this.timerCountPass = '인증번호 받기';
          this.secPass = '';
          this.passReceive = false;
        }
      },
      immediate: true
    }

  },
  methods: {
   
    async login () {
      let url = this.$store.state.serverApi + this.$store.state.moduleName + '/auths/login';
      let data = { userId : this.userId, password : this.password };
     await axios.post(url, data)
      .then(function (res) {
        console.log("==== res: ", res);
        
        if(res.data.token ==null) {
          alert('등록된 사용자가 아니거나 비밀번호가 맞지 않습니다.');
          return false;
        }else {
          console.log(res.data.userId)
          //this.getUserId = res.data.userId
          console.log("==== res.data.token: ", res.data.token);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("userId", res.data.userId);
           
          console.log(sessionStorage.getItem("token"));
          console.log(sessionStorage.getItem("userId"));
          
          
        }
        
      })
      .catch(function (err) {
        console.log(err.message);
        alert(err.message);
      });
        console.log("test")
        console.log(this.$store.state.serverApi )
        //this.$store.commit('set', ['userId',this.getUserId] )
        this.$store.state.userId = sessionStorage.getItem("userId")
        console.log(this.$store.state.userId)
        console.log("End")
        router.push({ path: '../dashboard/allView' });
    },

/*    
    login () {
      let uri = this.$store.state.serverApi + this.$store.state.moduleName + '/auths/login';
      let data = { userId : this.userId, password : this.password };
      data = "userId="+this.userId+ "&password=" + this.password;
      axios.post(uri, data, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        }
      })
      .then(function (res) {
        console.log("==== res: ", res);
        if(res.status==200) {
          console.log("==== res.data.token: ", res.data.token);
          sessionStorage.setItem("token", res.data.token);
          console.log(sessionStorage.getItem("token"));
          router.push({ path: '../dashboard/allView' });
        }
        else {
          alert('등록된 사용자가 아니거나 비밀번호가 맞지 않습니다.');
        }
      })
      .catch(function (err) {
        console.log(err.message);
        alert(err.message);
      });
    },
  */
/*
    login () {
      let data = { userId : this.userId, password : this.password };
      axios.post(this.$store.state.serverApi + '/auths/login', data)
        .then(function (res) {
          sessionStorage.setItem("token", res.data.token);
          console.log(sessionStorage.getItem("token"));
          router.push({ path: '../dashboard/allView' });
        })
        .catch(function (err) {
          console.log(err.message);
          alert(err.message);
        });
    },
*/
    getIdCode(){
      if(!this.idReceive) {
        this.idReceive = true;
        this.timerCountId = 60;
        this.secId = "(s)";
        this.timerEnabled = true;
      }
    },
    getPassCode() {
      if(!this.passReceive) {
        this.passReceive = true;
        this.timerCountPass = 60;
        this.secPass = "(s)";
        this.timerEnabled = true;
      }
    },
    idConfirmBt() {
      this.timerEnabled = false;
      this.timerCountId = '인증번호 받기';
      this.secId = '';
      this.idReceive = false;
      this.findIdPass = false;
    },
    passConfirmBt() {
      this.timerEnabled = false;
      this.timerCountPass = '인증번호 받기';
      this.secPass = '';
      this.passReceive = false;
      this.findIdPass = false;
    },

  }
}
</script>
<style>
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';
</style>

