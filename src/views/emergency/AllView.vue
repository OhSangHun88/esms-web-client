<template>
  <div>
    <div class="menuTitle">
      <slot name="header">
        <strong style="font-size: large;">관리자 설정</strong>
      </slot>
    </div>

    <CTabs>
      <CTab title="응급관리요청" active >
        <CMEergency/>
      </CTab>
      <CTab title="사회복지사" >
        <CMSocial/>
      </CTab>
      <CTab title="승인관리" >
        <CMConfirm/>
      </CTab>
    </CTabs>


  </div>

</template>

<script>
import CMEergency from "./MEergency";
import CMSocial from "./MSocial";
import CMConfirm from "./MConfirm";

export default {
  name: "AllView",
  components: {
    CMEergency,
    CMSocial,
    CMConfirm
  },
  methods: {
    changeTabTo (tab) {
      this.activeTabIndex = tab
      this.$emit('update:activeTab', tab)
    }
  }
}
</script>
<style>

</style>