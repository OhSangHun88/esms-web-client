<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    v-model="userId"
                    placeholder="Username"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" v-on:click="login">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
let routers;
export default {
  name: 'Login',
  data() {
    return {
      userId:'',
      password:''
    }
  },
  mounted: function () {
    console.log(this);
    routers = this.$router;
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
        if(res.data.isUser) {
          // console.log("==== res.data.token: ", res.data.token);
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
  }
}
</script>
