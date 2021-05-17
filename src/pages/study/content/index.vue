<template>
  <div class="study study-content">
    <h1 class="content-title">{{name}}</h1>
    <div class="content-main" v-if="contents.length">
      <List :contents="contents"></List>
    </div>
    <div class="content-main" v-else>
      <p class="content-empty">
        暂无数据...
      </p>
    </div>
  </div>
</template>

<script>
import List from '../../../components/lists'
export default {
  name: 'study-content',
  components: {
    List
  },
  data () {
    return {
      id: 0,
      datas: [],
      name: '',
      contents: []
    }
  },
  mounted () {
    this.datas = [
      {
        id: 1,
        name: '分享课件（第五版）',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: '第1章 绪论',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC1%E7%AB%A0%20%E7%BB%AA%E8%AE%BA--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第2章 关系数据库',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC2%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（1）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL%EF%BC%881%EF%BC%89--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（2）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL%EF%BC%882%EF%BC%89--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（3）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL%EF%BC%883%EF%BC%89--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第4章 数据库安全性',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC4%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E5%85%A8%E6%80%A7--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第5章 数据库完整性',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC5%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%8C%E6%95%B4%E6%80%A7--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第6章 关系数据理论',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC6%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E7%90%86%E8%AE%BA--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第7章 数据库设计（1）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC7%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%EF%BC%881%EF%BC%89--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第7章 数据库设计（2）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC7%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1%EF%BC%882%EF%BC%89--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第8章 数据库编程',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC8%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%96%E7%A8%8B--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第9章 关系查询处理和查询优化',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC9%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%9F%A5%E8%AF%A2%E5%A4%84%E7%90%86%E5%92%8C%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第10章 数据库恢复技术',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC10%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E6%81%A2%E5%A4%8D%E6%8A%80%E6%9C%AF--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              },
              {
                name: '第11章 并发控制',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/20150105%E7%AC%AC5%E7%89%88PPT%20%E7%AC%AC11%E7%AB%A0%20%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6--%E6%8F%90%E4%BA%A4%E7%89%88.pdf'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '分享课件（第四版）',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: '第1章 绪论',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC1%E7%AB%A0%20%E7%BB%AA%E8%AE%BA.pdf'
              },
              {
                name: '第2章 关系数据库（1）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC2%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93(1).pdf'
              },
              {
                name: '第2章 关系数据库（2）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC2%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93(2).pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（1）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL(1).pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（2）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL(2).pdf'
              },
              {
                name: '第3章 关系数据库标准语言SQL（3）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC3%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A0%87%E5%87%86%E8%AF%AD%E8%A8%80SQL(3).pdf'
              },
              {
                name: '第4章 数据库安全性',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC4%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%89%E5%85%A8%E6%80%A7.pdf'
              },
              {
                name: '第5章 数据库完整性',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC5%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AE%8C%E6%95%B4%E6%80%A7.pdf'
              },
              {
                name: '第6章 关系数据理论',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC6%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E7%90%86%E8%AE%BA.pdf'
              },
              {
                name: '第7章 数据库设计（1）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC7%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1(1).pdf'
              },
              {
                name: '第7章 数据库设计（2）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC7%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1(2).pdf'
              },
              {
                name: '第7章 数据库设计（3）',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC7%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AE%BE%E8%AE%A1(3).pdf'
              },
              {
                name: '第8章 数据库编程',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC8%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E7%BC%96%E7%A8%8B.pdf'
              },
              {
                name: '第9章 关系查询处理和查询优化',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC9%E7%AB%A0%20%E5%85%B3%E7%B3%BB%E6%9F%A5%E8%AF%A2%E5%A4%84%E7%90%86%E5%92%8C%E6%9F%A5%E8%AF%A2%E4%BC%98%E5%8C%96.pdf'
              },
              {
                name: '第10章 数据库恢复技术',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC10%E7%AB%A0%20%E6%95%B0%E6%8D%AE%E5%BA%93%E6%81%A2%E5%A4%8D%E6%8A%80%E6%9C%AF.pdf'
              },
              {
                name: '第11章 并发控制',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E7%AC%AC11%E7%AB%A0%20%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.pdf'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '课件压缩包',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: ' 数据库系统概论第5版课件PDF版本',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/5/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%AE%BA%E7%AC%AC5%E7%89%88PDF%E7%89%88%E6%9C%AC.rar'
              },
              {
                name: '数据库系统概论第4版课件PDF版本',
                url: 'http://chinadb.ruc.edu.cn/Public/ppt/4/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E6%A6%82%E8%AE%BA%E7%AC%AC4%E7%89%88PDF%E7%89%88%E6%9C%AC.rar'
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: '主要教材',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: '《数据库系统概论（第5版）》',
                url: 'http://chinadb.ruc.edu.cn/second/url/2'
              },
              {
                name: '《数据库系统概论（第5版）学习指导与习题解析》',
                url: 'http://chinadb.ruc.edu.cn/second/url/9'
              },
              {
                name: '《数据库系统概论（第4版）》',
                url: 'http://chinadb.ruc.edu.cn/second/url/4'
              },
              {
                name: '《数据库系统概论（第4版）学习指导与习题解析》',
                url: 'http://chinadb.ruc.edu.cn/second/url/3'
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: '参考书目',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: '《Database System Concepts,Sixth Edition》',
                url: 'http://chinadb.ruc.edu.cn/second/url/1'
              },
              {
                name: '《数据库系统基础教程（第3版）》',
                url: 'http://chinadb.ruc.edu.cn/second/url/8'
              },
              {
                name: '《内存数据管理（第2版）》',
                url: 'http://chinadb.ruc.edu.cn/second/url/5'
              },
              {
                name: '《云计算与分布式系统》',
                url: 'http://chinadb.ruc.edu.cn/second/url/6'
              },
              {
                name: '《大数据时代》',
                url: 'http://chinadb.ruc.edu.cn/second/url/7'
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: '推荐网站',
        contents: [
          {
            id: 0,
            contents: [
              {
                name: '中国人民大学信息学院',
                url: 'http://info.ruc.edu.cn/'
              },
              {
                name: '中国计算机学会数据库专业委员会',
                url: 'http://tc.ccf.org.cn/tcdb/'
              },
              {
                name: '计算机世界',
                url: 'http://www.computerworld.com/'
              },
              {
                name: 'ACM SIGMOD',
                url: 'http://www.sigmod.org/'
              },
              {
                name: '清华大学计算机学院',
                url: 'http://www.cs.tsinghua.edu.cn/'
              },
              {
                name: '北京大学信息科学技术学院',
                url: 'http://eecs.pku.edu.cn/'
              },
              {
                name: '北京人大金仓信息技术股份有限公司',
                url: 'http://www.kingbase.com.cn/'
              }
            ]
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
      this.contents = contents.contents || []
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
