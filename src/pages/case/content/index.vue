<template>
  <div class="case case-content">
    <h1 class="content-title">{{name}}</h1>
    <div class="content-main" v-if="contents.url">
      <Video :videoUrl="contents.url"></Video>
    </div>
    <div class="content-main" v-else>
      <p class="content-empty">
        暂无数据...
      </p>
    </div>
  </div>
</template>

<script>
import Video from '../../../components/video'
export default {
  name: 'case-content',
  data () {
    return {
      id: 0,
      name: '',
      datas: [],
      contents: {}
    }
  },
  components: {
    Video
  },
  mounted () {
    this.datas = [
      {
        id: 1,
        name: '高校活动信息',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 高校活动信息查询系统@RUC',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/chen_no1.mp4'
          }
        ]
      },
      {
        id: 2,
        name: '演出事务管理',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 演出事务管理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/chen_no2.mp4'
          }
        ]
      },
      {
        id: 3,
        name: '兼职助手',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - JobHelper兼职助手',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/wang_no1.mp4'
          }
        ]
      },
      {
        id: 4,
        name: '周末活动管理',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 周末活动管理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/wang_no2.mp4'
          }
        ]
      },
      {
        id: 5,
        name: '教室管理',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 教室管理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/classroom.mp4'
          }
        ]
      },
      {
        id: 6,
        name: '宿舍管理',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 宿舍管理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/dormitory.mp4'
          }
        ]
      },
      {
        id: 7,
        name: '点菜管理',
        contents: [
          {
            id: 0,
            name: '学生优秀大作业 - 点菜管理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/systemdisplay/mp4/order.mp4'
          }
        ]
      }
    ]
    this.getData()
  },
  methods: {
    // 根据路由参数更新组件内容
    getData () {
      var {id} = this.$route.params
      // 没有子级菜单，则默认子级 id 为 0，以兼容有子级菜单
      if (id.indexOf('.') === -1) {
        id += '.0'
      }
      id = id.split('.')
      // 找父级数据
      var data = this.datas.find(item => item.id === id[0] * 1) || {}
      // 找子级数据
      var contents = data.contents.find(item => item.id === id[1] * 1) || {}
      // 有子级名则显示子级名，否则显示父级名
      if (contents.name) {
        this.name = contents.name
      } else {
        this.name = data.name || ''
      }
      this.contents = contents
    }
  },
  watch: {
    // 监听路由参数变化
    '$route': function () {
      this.getData()
    }
  }
}
</script>

<style lang="less">

</style>
