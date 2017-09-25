<template>
  <div class="page">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        transitionName: 'slide-left'
    }
  },
  watch: {
      '$route' (to, from) {
          const toDepth = to.path.split('/').length
          const fromDepth = from.path.split('/').length
          this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
  },
  mounted:function () {
  }
}
</script>
<style>
  .page,html,body{
    height: 100%;
  }
</style>

