<template>
  <div>
    <div class="menuTitle">
      <slot name="header">
        <strong style="font-size: large;">설정</strong>
      </slot>
    </div>
    <CCard>
      <CCardHeader>
        <div class="mdmBt">
          <CButton block color="primary" style="width: 90px;">MDM연결</CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CTabs>
          <CTab title="장비관리" active >
            <CManageDevice/>
          </CTab>
          <CTab title="사용자관리" >
            <CCustomer/>
          </CTab>
          <CTab title="로그관리" >
            <CManageLog/>
          </CTab>
          <CTab title="공지사항" >
            <CNotice/>
          </CTab>
        </CTabs>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
import CManageLog  from "./detailpage/ManageLog";
import CCustomer  from "./detailpage/Customer";
import CManageDevice  from "./detailpage/ManageDevice";
import CNotice  from "./detailpage/Notice";

export default {
  name: "AllView",
  components: {
    CManageLog,
    CCustomer,
    CManageDevice,
    CNotice
  },
}
</script>

<style scoped>
.paddingSel {
  padding: 20px;
}
.mdmBt {
  position: absolute;
  right: 20px;
  top: 20px;
}
.card-header {
  border: none;
  padding: 0;
}
</style>