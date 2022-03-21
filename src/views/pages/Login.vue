<template>
  <div class="c-app flex-row align-items-center lgbg">

      <CRow class="justify-content-center" style="width: 100%;">
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
    </CModal>
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
      findIdPass: false
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
.customInput {
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-color: #5d66ff;
  border-radius: 3px;
  height: 37px;
  width: 242px;
  cursor: pointer;
}
.cusInput .form-control{
  border: none;
  width: 140px;
}
.Rectangle {
  width: 102px;
  margin: 3px;
  border-radius: 2px;
  background-color: #e7eaff;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cardModal {
  border: none;
}
.mCustomer .modal-dialog{
  max-width: 800px;
}
.lgbg {
  height: 100vh;
  background-image: url("../../assets/images/bg.jpg");
  background-repeat : no-repeat;
  background-size : cover;
}
.fgroup {
  position: absolute;
  margin-top: -95px;
}
.reInput .form-control  {
  height: 49px;
  width: 328px;
  border-color: #5d66ff;
  border-radius: 3px;
  margin-left: 132px;
  margin-top: -10px;
}
.modalInput .form-control{
  border-color: #5d66ff;
  border-radius: 3px;
  height: 37px;
}
.form-group {
  margin-bottom: 1.4rem;
}
.colText{
  margin-top: 8px;
  padding-left: 13px;
  padding-right: 13px;
}

.tText {
  margin-left: 132px;
  margin-top: -34px;
  margin-bottom: 40px;
}
.lgBtn {
  margin-left: 131px;
  width: 327px;
  height: 45px;
}
.linkText {
  font-size: 12px;
  margin-top: 14px;
}
.modal-title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
</style>

