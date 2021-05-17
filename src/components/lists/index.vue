<template>
  <div class="my-list">
    <ul class="my-list-ul">
      <li class="my-list-li" v-for="(item, index) in contents" :key="index">
        <a class="my-list-li-link" target="_blank" :href="item.url">{{item.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'My-list',
  props: {
    contents: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/mutations";
  .my-list{
    .my-list-ul{
      margin: 1rem 0;
      .my-list-li{
        font-size: @fontSizeMiddle;
        line-height: calc(@fontSizeMiddle * 2);
        .my-list-li-link{
          text-decoration: none;
          color: @fontColor;
          &:visited{
            color: @fontColor;
          }
          &:hover{
            color: @baseColor;
          }
        }
      }
    }
  }
</style>
