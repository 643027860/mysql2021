<template>
  <div class="animation animation-content">
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
  name: 'animation-content',
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
        id: 2,
        name: '第二章',
        contents: [
          {
            id: 1,
            name: 'ALPHA',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/2_ALPHA_(new).mp4'
          }
        ]
      },
      {
        id: 3,
        name: '第三章',
        contents: [
          {
            id: 1,
            name: 'EXISTS子查询',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/3_EXISTS_(new).mp4'
          },
          {
            id: 2,
            name: 'GROUP BY子句',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/3_GROUPBY_(new).mp4'
          },
          {
            id: 3,
            name: 'B+树的增删改',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/3_BTree_(new).mp4'
          }
        ]
      },
      {
        id: 5,
        name: '第五章',
        contents: [
          {
            id: 1,
            name: '参照完整性',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/5_Referential_(new).mp4'
          }
        ]
      },
      {
        id: 6,
        name: '第六章',
        contents: [
          {
            id: 1,
            name: '求闭包',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/6_Closure_(new).mp4'
          },
          {
            id: 2,
            name: '无损连接性',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/6_Lossless_(new).mp4'
          },
          {
            id: 3,
            name: '最小覆盖',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/6_Minimum_(new).mp4'
          }
        ]
      },
      {
        id: 7,
        name: '第七章',
        contents: [
          {
            id: 1,
            name: 'E-R图（1）',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/7_E-R(1)_(new).mp4'
          },
          {
            id: 2,
            name: 'E-R图（2）',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/7_E-R(2)_(new).mp4'
          },
          {
            id: 3,
            name: 'E-R图（3）',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/7_E-R(3)_(new).mp4'
          },
          {
            id: 4,
            name: 'E-R图转关系',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/7_E-RtoRelation_(new).mp4'
          }
        ]
      },
      {
        id: 9,
        name: '第九章',
        contents: [
          {
            id: 1,
            name: '查询树的启发式优化',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/9_QueryTreeOptimization_(new).mp4'
          },
          {
            id: 2,
            name: '连接操作的实现(1)——嵌套循环',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/9_Join(1)--NestedLoop_(new).mp4'
          },
          {
            id: 3,
            name: '连接操作的实现(2)——排序合并',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/9_Join(2)--SortMerge_(new).mp4'
          },
          {
            id: 4,
            name: '连接操作的实现(3)——散列连接',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/9_Join(3)--HashJoin_(new).mp4'
          },
          {
            id: 5,
            name: '连接操作的实现(4)——索引连接',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/9_Join(4)--IndexJoin_(new).mp4'
          }
        ]
      },
      {
        id: 10,
        name: '第十章',
        contents: [
          {
            id: 1,
            name: '介质故障及其恢复',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/10_1_(new).mp4'
          },
          {
            id: 2,
            name: '具有检查点的恢复技术',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/10_2_(new).mp4'
          },
          {
            id: 3,
            name: '事务故障及其恢复',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/10_3_(new).mp4'
          },
          {
            id: 4,
            name: '系统故障及其恢复',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/10_4_(new).mp4'
          }
        ]
      },
      {
        id: 11,
        name: '第十一章',
        contents: [
          {
            id: 1,
            name: '并发操作带来的数据不一致性',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/11_1_(new).mp4'
          },
          {
            id: 2,
            name: '冲突可串行化',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/11_2_(new).mp4'
          },
          {
            id: 3,
            name: '两段锁协议',
            url: 'http://chinadb.ruc.edu.cn/Public/animation/11_3_(new).mp4'
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
  .outline-content{
    .content-main{
      .content-item{
        margin-bottom: 0rem!important;
      }
    }
  }
</style>
