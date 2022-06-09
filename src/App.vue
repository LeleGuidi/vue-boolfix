<template>
  <div id="app">
    <BaseHeader/>
    <BaseMain/>
  </div>
</template>

<script>
import BaseHeader from '../src/components/blocks/BaseHeader.vue'
import BaseMain from '../src/components/blocks/BaseMain.vue'

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain
  }
}
</script>

<style lang="scss">
@import '../src/assets/global.scss'
</style>
