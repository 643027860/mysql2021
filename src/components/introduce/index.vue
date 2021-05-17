<template>
  <div class="my-introduce">
    <div class="content-item clear-float" v-for="(content, index) in contents" :key="index">
      <img v-if="content.img" :src="content.img" alt="image" class="content-item-img float-left">
      <div class="content-item-content float-right" v-for="(cont, index1) in content.contents" :key="index1">
        <h2 class="content-item-h2" v-if="cont.name">{{cont.name}}</h2>
        <p class="content-item-p" v-for="(ct, index2) in cont.content" :key="index2">
          <strong v-if="index2 === 0 && content.name">{{content.name}}，</strong>
          {{ct}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My-introduce',
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
  .my-introduce{
    .content-item{
      vertical-align: text-top;
      /* 正文样式 */
      .content-item-img{
        width: @imgSmall;
        margin: 0.7rem 5%;
      }
      .content-item-content{
        width: 70%;
        margin-bottom: 1rem;
      }
      .content-item-h2{
        margin: 0.8rem 0rem;
        font-size: @fontSizeBig;
        font-weight: bold;
      }
      .content-item-p{
        font-size: @fontSizeMiddle;
        line-height: calc(@fontSizeMiddle * 1.6);
        text-indent: calc(@fontSizeMiddle * 2);
      }
    }
  }
</style>
