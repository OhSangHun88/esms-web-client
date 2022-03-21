<template>
  <CCard>
    <CCardBody>
      <CRow>
        <CCol sm="5">
          <strong>응급안전서비스 고객 이용률</strong>
          <div class="small text-muted">최근 한달간 사회복지가 관리를 받은 고객수</div>
          <br>
          <div class="small text-muted">받은 고객수</div>
          <div class="small text-muted"><strong>15,234</strong>총 20,000명중 89.5% 이용</div>
        </CCol>
        <CCol sm="7" class="d-none d-md-block">
          <div class="small text-muted">고객수 사회복지자수</div>
        </CCol>
      </CRow>
      <MainChartExample style="height:205px;margin-top:40px;"/>
    </CCardBody>

  </CCard>
</template>

<script>
import MainChartExample from '../charts/MainChartExample'

export default {
  name: "ChartLine",
  components: {
    MainChartExample
  }
}
</script>

<style scoped>

</style>