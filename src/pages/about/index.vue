<template>
  <div class="my-item clear-float">
    <div class="left-menu float-left">
      <Menu :menus="menus"></Menu>
    </div>
    <div class="right-content float-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from '../../components/menu'
export default {
  name: 'about',
  data () {
    return {
      menus: []
    }
  },
  components: {
    Menu
  },
  mounted () {
    this.menus = [
      {
        name: '作者简介',
        link: 'about-author'
      },
      {
        name: '课程简介',
        link: 'about-brief'
      },
      {
        name: '设计团队',
        link: 'about-team'
      }
    ]
  },
  methods: {

  },
  beforeDestroy () {

  }
}
</script>

<style lang="less">

</style>
