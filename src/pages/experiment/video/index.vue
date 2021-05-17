<template>
  <div class="experiment experiment-video">
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
  name: 'experiment-video',
  data () {
    return {
      id: 0,
      name: '',
      datas: [],
      contents: []
    }
  },
  components: {
    Video
  },
  mounted () {
    this.datas = [
      {
        id: 2,
        name: '第一章',
        contents: [
          {
            id: 1,
            name: 'Windows 7 64 位安装Kingbase V7',
            url: 'http://chinadb.ruc.edu.cn/Public/video/kingbaseinstall/Win_64.mp4'
          },
          {
            id: 2,
            name: 'Windows 7 32 位安装Kingbase V7',
            url: 'http://chinadb.ruc.edu.cn/Public/video/kingbaseinstall/Win_32.mp4'
          },
          {
            id: 3,
            name: 'RHEL/Centos 6 64位安装Kingbase V7',
            url: 'http://chinadb.ruc.edu.cn/Public/video/kingbaseinstall/Linux_64.mp4'
          }
        ]
      },
      {
        id: 2,
        name: '第二章',
        contents: [
          {
            id: 1,
            name: '2.1 关系数据结构及形式化定义',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/2.1.mp4'
          },
          {
            id: 2,
            name: '2.2 关系操作',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/2.2.mp4'
          },
          {
            id: 3,
            name: '2.3 关系的完整性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/2.3.mp4'
          },
          {
            id: 4,
            name: '2.4 关系代数',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/2.4.mp4'
          },
          {
            id: 5,
            name: '2.5 关系演算',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/2.5.mp4'
          }
        ]
      },
      {
        id: 3,
        name: '第三章',
        contents: [
          {
            id: 1,
            name: '3.1 SQL概述',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.1.mp4'
          },
          {
            id: 2,
            name: '3.2 数据定义',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.2.mp4'
          },
          {
            id: 3,
            name: '3.3 数据查询（1）',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.3(1).mp4'
          },
          {
            id: 4,
            name: '3.3 数据查询（2）',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.3(2).mp4'
          },
          {
            id: 5,
            name: '3.4 数据更新',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.4.mp4'
          },
          {
            id: 6,
            name: '3.5 视图',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/3.5.mp4'
          }
        ]
      },
      {
        id: 4,
        name: '第四章',
        contents: [
          {
            id: 1,
            name: '4.1 计算机安全性概述',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/4.1.mp4'
          },
          {
            id: 2,
            name: '4.2 数据库安全性控制',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/4.2.mp4'
          },
          {
            id: 3,
            name: '4.3 视图机制',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/4.3.mp4'
          },
          {
            id: 4,
            name: '4.4 审计、数据加密以及统计数据安全性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/4.4.mp4'
          }
        ]
      },
      {
        id: 5,
        name: '第五章',
        contents: [
          {
            id: 1,
            name: '5.1 实体完整性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.1.mp4'
          },
          {
            id: 2,
            name: '5.2 参照完整性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.2.mp4'
          },
          {
            id: 3,
            name: '5.3 用户定义的完整性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.3.mp4'
          },
          {
            id: 4,
            name: '5.4 完整性约束命名子句',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.4.mp4'
          },
          {
            id: 5,
            name: '5.5 域中的完整性限制',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.5.mp4'
          },
          {
            id: 6,
            name: '5.6 触发器',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/5.6.mp4'
          }
        ]
      },
      {
        id: 6,
        name: '第六章',
        contents: [
          {
            id: 1,
            name: '6.1 问题的提出',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/6.1.mp4'
          },
          {
            id: 2,
            name: '6.2 规范化',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/6.2.mp4'
          },
          {
            id: 3,
            name: '6.3 数据依赖的公理系统',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/6.3.mp4'
          },
          {
            id: 4,
            name: '6.4 模式的分解',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/6.4.mp4'
          }
        ]
      },
      {
        id: 7,
        name: '第七章',
        contents: [
          {
            id: 1,
            name: '7.1 数据库设计概述',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/7.1.mp4'
          },
          {
            id: 2,
            name: '7.2 需求分析',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/7.2.mp4'
          },
          {
            id: 3,
            name: '7.3 概念结构设计',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/7.3.mp4'
          },
          {
            id: 4,
            name: '7.4 逻辑结构设计',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/7.4.mp4'
          },
          {
            id: 5,
            name: '7.5 数据库的物理设计',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/7.5.mp4'
          }
        ]
      },
      {
        id: 8,
        name: '第八章',
        contents: [
          {
            id: 1,
            name: '8.1 嵌入式SQL',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/8.1.mp4'
          },
          {
            id: 2,
            name: '8.2 存储过程',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/8.2.mp4'
          },
          {
            id: 3,
            name: '8.3 ODBC编程',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/8.3.mp4'
          }
        ]
      },
      {
        id: 9,
        name: '第九章',
        contents: [
          {
            id: 1,
            name: '9.1 关系数据库系统的查询处理',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/9.1.mp4'
          },
          {
            id: 2,
            name: '9.2 关系数据库系统的查询优化',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/9.2.mp4'
          },
          {
            id: 3,
            name: '9.3 代数优化',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/9.3.mp4'
          },
          {
            id: 4,
            name: '9.4 物理优化',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/9.4.mp4'
          }
        ]
      },
      {
        id: 10,
        name: '第十章',
        contents: [
          {
            id: 1,
            name: '10.1 事务和数据库恢复概述',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/10.1.mp4'
          },
          {
            id: 2,
            name: '10.2 故障种类和恢复实现技术',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/10.2.mp4'
          },
          {
            id: 3,
            name: '10.3 恢复策略',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/10.3.mp4'
          },
          {
            id: 4,
            name: '10.4 具有检查点的恢复技术和数据库镜像',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/10.4.mp4'
          }
        ]
      },
      {
        id: 11,
        name: '第十一章',
        contents: [
          {
            id: 1,
            name: '11.1 并发控制概述',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/11.1.mp4'
          },
          {
            id: 2,
            name: '11.2 封锁',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/11.2.mp4'
          },
          {
            id: 3,
            name: '11.3 活锁和死锁',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/11.3.mp4'
          },
          {
            id: 4,
            name: '11.4 并发调度的可串行性',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/11.4.mp4'
          },
          {
            id: 5,
            name: '11.5 两段锁协议和封锁的粒度',
            url: 'http://chinadb.ruc.edu.cn/Public/video/course/11.5.mp4'
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
