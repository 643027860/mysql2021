<template>
  <div class="home">
    <div class="content-main" v-if="contents.length > 0">
      <h1 class="content-title">{{name}}</h1>
      <Introduce :contents="contents"></Introduce>
    </div>
    <div class="content-main" v-else>
      <p class="content-empty">
        暂无数据...
      </p>
    </div>
  </div>
</template>

<script>
import Introduce from '../../components/introduce'
export default {
  name: 'home',
  components: {
    Introduce
  },
  data () {
    return {
      name: '课程介绍',
      datas: [],
      contents: []
    }
  },
  mounted () {
    this.datas = [
      {
        name: '',
        img: 'http://chinadb.ruc.edu.cn/Public/img/cover.png',
        contents: [
          {
            name: '',
            content: '《数据库原理及应用》是计算机科学与技术专业学生的专业必修课程。 本课程以数据库系统的基本原理和使用方法作为主要的研究对象，研究如何存储、使用和管理数据，介绍数据库的基本理论、 数据库的组织和结构，SQL Server数据库管理系统的基本操作和程序设计的思想方法，理解和掌握关系数据库的规范化理论以及数据库设计的全过程。本课程使学生具备数据库系统的设计、管理和维护的能力。\n' +
              '\n' +
              '该课程在理论教学和实验环节上都具有丰富的积累，形成了以数据库系统原理基础知识为核心的比较完整的课程体系。该体系主要包括课堂教学、实验教学、课程设计/综合训练几大部分，覆盖了不同专业不同类别的教学层次， 在教学中既重视基础知识的核心作用，又兼顾前沿学术动态的介绍；既强化本课程的讲解，又注意与相关技术的联系；既注重理论教学的重要性，又强化实践技能的培养。'
          }
        ]
      }
    ]
    this.getData()
  },
  methods: {
    getData () {
      var contents = this.datas || []
      // 处理文字换行
      if (contents.length) {
        contents.map(item => {
          // 判断是否已经转换过格式，未转换类型为 string ，转换过类型为 object
          if (item.contents.length) {
            item.contents.map(item1 => {
              if (typeof item1.content === 'string') {
                item1.content = item1.content.split('\n').filter(item2 => item2 !== '')
              }
            })
          }
        })
      }
      this.contents = contents || []
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/css/mutations";
  .home{
    padding: 1rem 0;
    /* 大标题样式 */
    .content-title{
      position: relative;
      margin: 0 0 1rem ;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      &:before,&:after{
        position: absolute;
        top: 50%;
        content: '';
        background: #494949;
        width: 10%;
        height: 2px;
      }
      &:before{
        left: 25%;
      }
      &:after{
        right: 25%;
      }
    }
    /* 正文样式 */
    .content-main{
      padding: 1.5rem;
      background-color: @bgColor;
      vertical-align: top;
      .content-item-p{
        font-size: @fontSizeBig!important;
        line-height: calc(@fontSizeBig * 1.6)!important;
        text-indent: calc(@fontSizeBig * 2)!important;
      }
    }
  }
</style>
