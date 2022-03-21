<template>
  <div>
    <div class="menuTitle">
      <slot name="header">
        <strong style="font-size: large;">대쉬보드</strong>
      </slot>
    </div>
    <CRow>
      <CCol sm="6" lg="5">
        <CChartLine/>
      </CCol>
      <CCol sm="6" lg="3">
        <CMsocilaWork/>
      </CCol>
      <CCol sm="6" lg="4">
        <CSocilaWorkManage/>
      </CCol>
    </CRow>

    <CRow>
      <CCol sm="6" lg="5">
        <CCustomerManage/>
      </CCol>
      <CCol sm="6" lg="3">
        <CRecentEmergencyEvent/>
      </CCol>
      <CCol sm="6" lg="4">
        <CNotice/>
      </CCol>
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

export default {
  name: 'AllView',
  components: {
    CChartLine,
    CMsocilaWork,
    CSocilaWorkManage,
    CCustomerManage,
    CNotice,
    CRecentEmergencyEvent
  },
  methods: {

  }
}
</script>

