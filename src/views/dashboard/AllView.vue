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
import LookUp from './LookUp.vue'
import ChartLine from './ChartLine.vue'
import ASStatus from './ASStatus.vue'
import EventStatus from './EventStatus.vue'
import Battery from './Battery.vue'
import PowerConnection from './PowerConnection.vue'


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
    },
    props: {
    
    },
    methods:{

    }
}
</script>
<style>

</style>