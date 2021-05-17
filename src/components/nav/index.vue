<template>
  <div class="my-nav">
    <div class="nav-title no-select">
      <img src="../../assets/img/logo.png" alt="" class="title-logo">
      精品课程
    </div>
    <img src="../../assets/img/logo-title.jpg" alt="logo">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './menu'
export default {
  name: 'Nav',
  components: {
    Menu
  }
}
</script>

<style lang="less">
  @import "../../assets/css/mutations";
  .my-nav{
    @height: 6rem;
    position: relative;
    // 顶部 logo
    .nav-title{
      position: absolute;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 20px;
      color: white;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 4px;
      .title-logo{
        height: 40px;
        width: 200px;
      }
    }
    img{
      width: @pwidth;
      height: @height;
      line-height: @height;
    }
  }
</style>
