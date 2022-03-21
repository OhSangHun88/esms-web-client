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
import CChartLine from './dashboard/ChartLine.vue'
import CMsocilaWork from './dashboard/RecentSocialWorker.vue'
import CSocilaWorkManage from './dashboard/SocilaWorkManage.vue'
import CCustomerManage from './dashboard/CustomerManage.vue'
import CNotice from './dashboard/Notice.vue'
import CRecentEmergencyEvent from './dashboard/RecentEmergencyEvent.vue'



export default {
  name: 'WidgetsDropdown',
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

