<template>
  <CHeader fixed with-subheader light>
    <CHeaderBrand class="mx-auto d-lg-none" to="/">

    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <img src="../assets/images/t_logo.png" style="margin-left: 25px;"/>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <TheHeaderDropdownAccnt/>admin님
    </CHeaderNav>
    <CSubheader class="px-3" style="display: none;">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
