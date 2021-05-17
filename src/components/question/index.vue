<template>
  <div class="my-question">
    <div class="content-item" v-for="(content, index) in contents" :key="index">
      <div class="content-item-content">
        <h5 class="content-item-h5">{{index + 1 + '. ' + content.name}}</h5>
        <ul class="content-item-ul" v-if="content.choices && content.choices.length > 0">
          <li class="content-item-li" v-for="(choice, index1) in content.choices" :key="index1">
            <el-radio v-model="content.choice" :label="choice">{{choice}}</el-radio>
          </li>
        </ul>
        <div class="content-item-answer" :style="{'display': content.show ? 'inline-block' : 'none'}">正确答案：{{content.answer}}</div>
      </div>
      <div class="content-item-show">
        <el-button type="primary" size="mini" @click="content.show = !content.show">{{content.show ? '隐藏答案' : '显示答案'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My-question',
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
  .my-question{
    /* 内容模板 */
    .content-item{
      margin: 1rem 0;
      border-top: 1px solid rgb(200,200,200);
      vertical-align: text-top;
      /* 正文样式 */
      .content-item-content{
        line-height: 1.2rem;
        /* 内容分点标题 */
        .content-item-h5{
          margin: 1rem 0 0.5rem;
          font-size: @fontSizeMiddle;
          font-weight: bold;
        }
        /* 答案样式 */
        .content-item-answer{
          display: inline-block;
          padding: 0 0.5rem;
          background-color: @baseColor;
          color: #fff;
          font-size: 0.75rem;
          transition: 0.3s;
        }
        /* 选项 ul li */
        .content-item-ul{
          margin: 0.5rem 0;
          .content-item-li{
            display: block;
            font-size: @fontSizeMiddle;
            list-style-type: upper-alpha;
          }
        }
      }
      /* 是否显示答案按钮 */
      .content-item-show{
        margin: 0.5rem 0;
        text-align: left;
      }
    }
  }
</style>
