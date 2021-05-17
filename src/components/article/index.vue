<template>
  <div class="my-article">
    <div class="content-item clear-float" v-for="(content, index) in contents" :key="index">
      <h2 class="content-item-h2" v-if="content.name">{{content.name}}</h2>
      <p class="content-item-p" v-for="(cont, index1) in content.content" :key="index1">
        {{cont}}
      </p>
      <div v-if="content.imgs && content.imgs.length > 0">
        <div class="content-item-img-div" v-for="(img, index2) in content.imgs" :key="index2">
          <p class="content-item-img-p" v-if="img.imgTitle">{{img.imgTitle}}</p>
          <img class="content-item-img-img" :src="img.imgUrl" :alt="img.imgTitle">
          <p class="content-item-img-tip" v-if="img.imgTip">{{img.imgTip}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My-article',
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
  .my-article{
    .content-item{
      vertical-align: text-top;
      /* 正文样式 */
      /* 内容分点标题 */
      .content-item-h2{
        margin: 0.8rem 0rem;
        font-size: @fontSizeBig;
        font-weight: bold;
      }
      /* 普通内容 */
      .content-item-p{
        margin: 0.3rem 0;
        font-size: @fontSizeMiddle;
        line-height: calc(@fontSizeMiddle * 1.6);
        text-indent: calc(@fontSizeMiddle * 2);
      }
      /* 正文图片样式 */
      .content-item-img-div{
        text-align: center;
        /* 图片文字说明，备注文字说明 */
        .content-item-img-p,.content-item-img-tip{
          margin: 0.5rem 0;
          font-size: @fontSizeSmall;
          line-height: calc(@fontSizeSmall * 1.6);
        }
        /* 图片 */
        .content-item-img-img{
          width: @imgBig;
        }
      }
    }
  }
</style>
