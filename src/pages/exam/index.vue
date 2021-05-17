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
  name: 'exam',
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
        name: '客观题',
        link: 'exam-objectives',
        children: [
          {
            id: 1,
            name: '第一章',
            link: 'exam-objectives'
          },
          {
            id: 2,
            name: '第二章',
            link: 'exam-objectives'
          },
          {
            id: 3,
            name: '第三章',
            link: 'exam-objectives'
          },
          {
            id: 5,
            name: '第五章',
            link: 'exam-objectives'
          },
          {
            id: 6,
            name: '第六章',
            link: 'exam-objectives'
          },
          {
            id: 7,
            name: '第七章',
            link: 'exam-objectives'
          },
          {
            id: 8,
            name: '第八章',
            link: 'exam-objectives'
          },
          {
            id: 9,
            name: '第九章',
            link: 'exam-objectives'
          },
          {
            id: 10,
            name: '第十章',
            link: 'exam-objectives'
          }
        ]
      },
      {
        name: '主观题',
        link: 'exam-subjectivity',
        children: [
          {
            id: 1,
            name: '第一章',
            link: 'exam-subjectivity'
          },
          {
            id: 2,
            name: '第二章',
            link: 'exam-subjectivity'
          },
          {
            id: 3,
            name: '第三章',
            link: 'exam-subjectivity'
          },
          {
            id: 4,
            name: '第四章',
            link: 'exam-subjectivity'
          },
          {
            id: 5,
            name: '第五章',
            link: 'exam-subjectivity'
          },
          {
            id: 6,
            name: '第六章',
            link: 'exam-subjectivity'
          },
          {
            id: 7,
            name: '第七章',
            link: 'exam-subjectivity'
          },
          {
            id: 8,
            name: '第八章',
            link: 'exam-subjectivity'
          },
          {
            id: 9,
            name: '第九章',
            link: 'exam-subjectivity'
          },
          {
            id: 10,
            name: '第十章',
            link: 'exam-subjectivity'
          },
          {
            id: 11,
            name: '第十一章',
            link: 'exam-subjectivity'
          },
          {
            id: 12,
            name: '第十二章',
            link: 'exam-subjectivity'
          },
          {
            id: 13,
            name: '第十三章',
            link: 'exam-subjectivity'
          },
          {
            id: 14,
            name: '第十四章',
            link: 'exam-subjectivity'
          },
          {
            id: 15,
            name: '第十五章',
            link: 'exam-subjectivity'
          }
        ]
      },
      {
        name: '模拟考试',
        link: 'exam-test',
        children: [
          {
            id: 1,
            name: '第一套',
            link: 'exam-test'
          },
          {
            id: 2,
            name: '第二套',
            link: 'exam-test'
          }
        ]
      }
    ]
  }
}
</script>

<style lang="less">

</style>
