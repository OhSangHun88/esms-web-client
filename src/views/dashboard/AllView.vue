<template>
  <div>
    <div class="modal-mask" v-if="isLoading === true">
    <div class="loading">
      <vue-loading type="spin" color="#365" :size="{ width: '100px', height: '50px'}"></vue-loading>
    </div>
  </div>
  <div class="one_box box_style" style="margin-top : 20px; ">
   <CLookUp/>
  </div>
    <CRow >
      <div class="one_box box_style" style="margin-right : 10px; margin-left : 15px;">
        <CChartLine style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-right : 10px; margin-left : 10px;">
        <CEventStatus style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-right : 0px; margin-left : 10px;">
        <CASStatus style="padding : 0px; " />
      </div>
    </CRow>

    <CRow>
      <div class="one_box box_style" style="margin-top : 10px; margin-bottom : 20px; margin-margin-right : 15px; margin-left : 15px;">
        <CBattery style="padding : 0px; " />
      </div>
      <div class="one_box box_style" style="margin-top : 10px; margin-bottom : 20px; margin-right : 15px; margin-left : 15px;">
        <CPowerConnect style="padding : 0px; " />
      </div>
    </CRow>
  </div>
</template>

<script>
import CChartLine from './ChartLine.vue'
import CMsocilaWork from './RecentSocialWorker.vue'
import CSocilaWorkManage from './SocilaWorkManage.vue'
import CCustomerManage from './CustomerManage.vue'
import CNotice from './Notice.vue'
import CRecentEmergencyEvent from './RecentEmergencyEvent.vue'
import CLookUp from './LookUp.vue'
import { VueLoading } from 'vue-loading-template';
import CEventStatus from './EventStatus.vue'
import CASStatus from './ASStatus.vue'
import CBattery from './Battery.vue'
import CPowerConnect from './PowerConnection.vue'


export default {
  name: 'AllView',
  components: {
    CChartLine,
    CMsocilaWork,
    CSocilaWorkManage,
    CCustomerManage,
    CNotice,
    CRecentEmergencyEvent,
    CLookUp,
    VueLoading,
    CEventStatus,
    CASStatus,
    CBattery,
    CPowerConnect,
  },
  props: {
      isLoading: Boolean,
    },
  methods: {

  }
}
</script>

<style scoped>
.modal-mask {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>