<template>
  <div>
    <HeaderComp v-if="loginCheck != null"></HeaderComp>
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
      console.log(this.$store.state.userId)
      return this.$store.state.userId
    }
  },
  
}
</script>

<style lang="scss">
  // Import Main styles for this application
  @import 'assets/scss/style';

  
</style>
