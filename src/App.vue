<template>
  <div>
    <div v-if="loginCheck != null">
      <HeaderComp ></HeaderComp>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComp from "./views/pages/HeaderComp.vue";
export default {
  name: 'App',
  components:{
    HeaderComp
  },
  data: () => ({
    userId: null,
  }),
  computed: {
    loginCheck(){
      //let loginVal = sessionStorage.getItem("userId")
      console.log("mainState is ")
      console.log(this.$store.state.userId)
       if( this.$store.state.userId == null || this.$store.state.userId == undefined ){
         this.$router.push({ name: 'Home' });
       }
      //   console.log("aa")
      //   this.$store.state.userId = sessionStorage.getItem("userId")
        return this.$store.state.userId
      // }else if(loginVal == 'null' ){
      //   console.log("bb")
      //   return null
      // }  
    }
  },
  
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';

  
</style>
