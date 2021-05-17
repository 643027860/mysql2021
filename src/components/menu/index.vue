<template>
  <div class="my-menu">
    <el-col :span="24">
      <el-menu
        :unique-opened="true"
        :default-active="slideMenuId"
        class="el-menu-vertical-demo"
        background-color="#FBFBFB"
        text-color="#323232"
        active-text-color="#0A96FB"
      >
        <div v-for="(menu, index) in slideMenus" :key="index">
          <el-submenu v-if="menu.children && menu.children.length > 0" :index="menu.link + index" class="no-select">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item-group v-for="(child, index1) in menu.children" :key="index1">
              <el-menu-item :index="(child.id !== undefined) ? child.link + '-' + child.id : child.link" class="no-select" @click="go(child)" >{{child.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else :index="(menu.id !== undefined) ? menu.link + '-' + menu.id : menu.link" class="no-select" @click="go(menu)">
            <i class="el-icon-menu"></i>
            <span slot="title">{{menu.name}}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Menu',
  computed: {
    ...mapState(['slideMenuId', 'slideMenus'])
  },
  methods: {
    // 跳转路由
    go (menu) {
      var {link, id} = menu
      // 获取原本组件路径及参数
      var index = this.$route.path.lastIndexOf('/') + 1
      var oldId = this.$route.path.slice(index, this.$route.path.length) * 1
      if (id !== undefined && (id * 1 !== oldId || this.$route.name !== link)) {
        var path = link.split('-').join('/')
        // 跳转赋值新参数的组件
        this.$router.push({path: '/' + path + '/' + id})
      } else if (this.$route.name !== link) {
        this.$router.push({name: link})
      }
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/mutations";
  .my-menu{
    @height: 2.5rem; // 父级菜单高度
    @sub-height: 2.5rem; // 子级菜单高度
    @active-bg-color: #409EFF; // 激活背景色
    .el-menu{
      // 单级菜单样式
      .el-menu-item{
        padding: 0 0.5rem;
        height: @height;
        color: @fontColor!important;
        line-height: @height;
        &.is-active{
          color: white!important;
          background-color: @active-bg-color!important;
        }
      }
      // 多级菜单样式
      .el-menu-item-group{
        .el-menu-item-group__title{
          display: none;
        }
        .el-menu-item{
          display: flex;
          align-items: center;
          padding: 0 0.5rem 0 1.5rem!important;
          height: @sub-height;
          line-height: calc(@sub-height / 2);
          white-space: normal;
        }
      }
    }
  }
</style>
