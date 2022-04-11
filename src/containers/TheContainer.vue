<template>
  <div>
    
      
      <div class="c-body">
        <main class="c-main">
          
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          
        </main>
      </div>
    
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
