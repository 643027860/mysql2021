<template>
  <div class="my-nav-menu">
    <el-menu :default-active="topMenuId" class="el-menu-demo" mode="horizontal">
      <el-menu-item class="no-select" v-for="(menu, index) in menus" :key="index" :index="menu.link" @click="go(menu.link)">{{menu.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Nav-menus',
  computed: {
    ...mapState(['topMenuId', 'menus'])
  },
  methods: {
    // 跳转路由
    go (name) {
      if (this.$route.name !== name) {
        this.$router.push({name})
      }
    }
  }
}
</script>

<style lang="less">
  @import "../../../assets/css/mutations";
  .my-nav-menu{
    @height: 2.5rem; // 高度
    .el-menu{
      margin: -6px 0 0;
      .el-menu-item{
        padding: 0 11px;
        height: @height;
        color: @fontColor!important;
        line-height: @height;
        &.is-active{
          color: @active-color!important;
        }
      }
    }
  }
</style>
