<template>
    <div class="wrap">
        <HeaderComp></HeaderComp>
        <!-- <HeaderComp2></HeaderComp2> -->
        <div class="container type-02">
            <LookUp/>
          <div class="box_wrap">
            <ChartLine/>
            <EventStatus/>
            <ASStatus/>
          </div>
          <div class="box_wrap">
            <Battery/>
            <PowerConnection/>
          </div>
        </div>
  </div>
</template>
<style lang="scss">
@import '../../assets/scss/common.css';
@import '../../assets/scss/sub.css';

</style>
<script>

//검색창
import LookUp from './LookUp.vue'
//장비가동율
import ChartLine from './ChartLine.vue'
//AS 현황
import ASStatus from './ASStatus.vue'
//이벤트현황
import EventStatus from './EventStatus.vue'
//배터리상태
import Battery from './Battery.vue'
//전원연결
import PowerConnection from './PowerConnection.vue'
//메뉴
import HeaderComp from "../pages/HeaderComp.vue";


export default {
    name: 'UserDataComponent',

    data() {
    return {
        taptoggle:1,
        }
    },
    components : {
      LookUp,
      ChartLine,
      ASStatus,
      EventStatus,
      Battery,
      PowerConnection,
      HeaderComp
    },
    props: {
    
    },
    methods:{

    }
}
</script>
<style>

</style>