<template>
  <div class="my-item clear-float">
    <div class="left-menu float-left">
      <Menu></Menu>
    </div>
    <div class="right-content float-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/menu'
export default {
  name: 'evaluate',
  components: {
    Menu
  }
}
</script>

<style lang="less">

</style>
