<template>
  <div id="app">
    <div class="container">
      <Nav></Nav>
      <router-view class="content"/>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Menus from './data/menus'
import Nav from './components/nav'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  methods: {
    ...mapActions(['handleSlideMenus', 'handleMenus', 'choiceTopMenuId', 'choiceSlideMenuId'])
  },
  watch: {
    // 监听路由参数变化
    '$route': function () {
      var {path} = this.$route
      path = path.slice(1).split('/') || []
      var slideMenus = Menus.find(item => item.link === path[0]).children || []
      // 更新菜单栏数据
      this.handleMenus(Menus)
      this.handleSlideMenus(slideMenus)
      this.choiceTopMenuId(path[0])
      this.choiceSlideMenuId(path.join('-'))
    }
  }
}
</script>

<style lang="less">
  @import "./assets/css/base";
  @import './assets/css/transition';
  @import "./assets/css/mutations";
  @import './assets/css/item';
  #app{
    min-height: 100vh;
    min-width: @pwidth;;
    background: url("./assets/img/bg.png") no-repeat;
    background-size: cover;
    .container{
      width: @pwidth;
      margin: auto;
      .content{
        min-height: calc(100vh - 6rem - 2.5rem - 3rem);
      }
    }
  }
</style>
