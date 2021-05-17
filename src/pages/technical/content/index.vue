<template>
  <div class="technical technical-content">
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
  name: 'technical-content',
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
        name: '前沿技术综述',
        contents: [
          {
            id: 1,
            name: '教材新技术',
            contents: [
              {
                name: '并行数据库系统 - 摘自《数据库系统概论（第3版）》',
                url: 'http://chinadb.ruc.edu.cn/newpaper/3TH_C15.pdf'
              },
              {
                name: '分布式数据库系统 - 摘自《数据库系统概论（第4版）》',
                url: 'http://chinadb.ruc.edu.cn/newpaper/4TH_C14.pdf'
              },
              {
                name: '对象关系数据库系统 - 摘自《数据库系统概论（第4版）》',
                url: 'http://chinadb.ruc.edu.cn/newpaper/4TH_C15.pdf'
              },
              {
                name: 'XML数据库 - 摘自《数据库系统概论（第4版）》',
                url: 'http://chinadb.ruc.edu.cn/newpaper/4TH_C16.pdf'
              }
            ]
          },
          {
            id: 2,
            name: '学报综述',
            contents: [
              {
                name: '云数据管理索引技术研究',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=4688'
              },
              {
                name: '大数据流式计算：关键技术及系统实例',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=4558'
              },
              {
                name: '数据库物理结构优化技术',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=4355'
              },
              {
                name: '云数据库研究',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=4195'
              },
              {
                name: '大数据分析——RDBMS与MapReduce的竞争与共生',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=4091'
              },
              {
                name: '数据库服务——安全与隐私保护',
                url: 'http://www.jos.org.cn/ch/reader/view_abstract.aspx?file_no=3746'
              },
              {
                name: '云数据管理系统中查询技术研究综述',
                url: 'http://cjc.ict.ac.cn/quanwenjiansuo/2013-2/syj.pdf'
              },
              {
                name: '闪存数据库：现状、技术与展望',
                url: 'http://cjc.ict.ac.cn/quanwenjiansuo/2013-8/wjt.pdf'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '前沿技术讲座',
        contents: [
          {
            id: 1,
            name: '在线课程',
            contents: [
              {
                name: '《Introduction to Databases》—— Coursera',
                url: 'https://www.coursera.org/course/db'
              },
              {
                name: '《Introduction to Data Science》—— Coursera',
                url: 'https://www.coursera.org/course/datasci'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '前沿技术文献',
        contents: [
          {
            id: 1,
            name: '存储管理',
            contents: [
              {
                name: 'Aggregates Caching in Columnar In-Memory Database. VLDB 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Aggregates%20Caching%20in%20Columnar%20In-Memory%20Database.%20VLDB%202013.pdf'
              },
              {
                name: 'C-Store A column-oriented DBMS. VLDB 2005.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/C-Store%20A%20column-oriented%20DBMS.%20VLDB%202005.pdf'
              },
              {
                name: 'Column imprints a secondary index structure. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Column%20imprints%20a%20secondary%20index%20structure.%20SIGMOD%202013.pdf'
              },
              {
                name: 'Column-stores vs. row-stores how different are they really. SIGMOD 2008.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Column-stores%20vs.%20row-stores%20how%20different%20are%20they%20really.%20SIGMOD%202008.pdf'
              },
              {
                name: 'CPU and Cache Efficient Management of Memory-Resident Databases. ICDE 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/CPU%20and%20Cache%20Efficient%20Management%20of%20Memory-Resident%20Databases.%20ICDE%202013.pdf'
              },
              {
                name: 'Durable write cache in flash memory SSD for relational and NoSQL databases. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Durable%20write%20cache%20in%20flash%20memory%20SSD%20for%20relational%20and%20NoSQL%20databases.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Fast Column Scans Paged Indices for In-Memory Column Strores. VLDB 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Fast%20Column%20Scans%20Paged%20Indices%20for%20In-Memory%20Column%20Strores.%20VLDB%202013.pdf'
              },
              {
                name: 'H2O a hands-free adaptive store. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/H2O%20a%20hands-free%20adaptive%20store.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Hybrid Storage Management for Database Systems. VLDB2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Hybrid%20Storage%20Management%20for%20Database%20Systems.%20VLDB2013.pdf'
              },
              {
                name: 'HYRISE - A Main Memory Hybrid Storage Engine. VLDB 2011.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Identifying%20Hot%20and%20Cold%20Data%20in%20Main-Memory%20Databases.%20ICDE%202013.pdf'
              },
              {
                name: 'Identifying Hot and Cold Data in Main-Memory Databases. ICDE 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Identifying%20Hot%20and%20Cold%20Data%20in%20Main-Memory%20Databases.%20ICDE%202013.pdf'
              },
              {
                name: 'Modularizing B+-Trees Three-Level B+-Trees Work Fine. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Modularizing%20B+-Trees%20Three-Level%20B+-Trees%20Work%20Fine.%20SIGMOD%202013.pdf'
              },
              {
                name: 'R-Store A Scalable Distributed System for Supporting Real-time Analytics. ICDE 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/R-Store%20A%20Scalable%20Distributed%20System%20for%20Supporting%20Real-time%20Analytics.%20ICDE%202014.pdf'
              },
              {
                name: 'Storage Management in AsterixDB. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Storage%20Management%20in%20AsterixDB.%20VLDB%202014.pdf'
              },
              {
                name: 'The Adaptive Radix Tree ARTful Indexing for Main-Memory Databases. ICDE 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/The%20Adaptive%20Radix%20Tree%20ARTful%20Indexing%20for%20Main-Memory%20Databases.%20ICDE%202013.pdf'
              }
            ]
          },
          {
            id: 2,
            name: '查询处理',
            contents: [
              {
                name: 'Adaptive Query Processing on RAW Data. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Adaptive%20Query%20Processing%20on%20RAW%20Data.%20VLDB%202014.pdf'
              },
              {
                name: 'Concurrent Analytical Query Processing with GPUs. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Concurrent%20Analytical%20Query%20Processing%20with%20GPUs.%20VLDB%202014.pdf'
              },
              {
                name: 'CS2 a new database synopsis for query estimation. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/CS2%20a%20new%20database%20synopsis%20for%20query%20estimation.%20SIGMOD%202013.pdf'
              },
              {
                name: 'Dynamically optimizing queries over large scale data platforms SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Dynamically%20optimizing%20queries%20over%20large%20scale%20data%20platforms%20SIGMOD%202014.pdf'
              },
              {
                name: 'Execution Primitives for Scalable Joins and Aggregations in Map Reduce. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Execution%20Primitives%20for%20Scalable%20Joins%20and%20Aggregations%20in%20Map%20Reduce.%20VLDB%202014.pdf'
              },
              {
                name: 'Exploiting hardware transactional memory in main-memory databases. ICDE 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Exploiting%20hardware%20transactional%20memory%20in%20main-memory%20databases.%20ICDE%202014.pdf'
              },
              {
                name: 'How to stop under-utilization and love multicores. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/How%20to%20stop%20under-utilization%20and%20love%20multicores.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Main-Memory Hash Joins on Multi-Core CPUs Tuning to the Underlying Hardware. ICDE 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Main-Memory%20Hash%20Joins%20on%20Multi-Core%20CPUs%20Tuning%20to%20the%20Underlying%20Hardware.%20ICDE%202013.pdf'
              },
              {
                name: 'Optimizing queries over partitioned tables in MPP systems. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Optimizing%20queries%20over%20partitioned%20tables%20in%20MPP%20systems.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Orca a modular query optimizer architecture for big data. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Orca%20a%20modular%20query%20optimizer%20architecture%20for%20big%20data.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Overlap interval partition join. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Overlap%20interval%20partition%20join.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Parallel IO aware query optimization. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Parallel%20IO%20aware%20query%20optimization.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Performance and resource modeling in highly-concurrent OLTP workloads. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Performance%20and%20resource%20modeling%20in%20highly-concurrent%20OLTP%20workloads.%20SIGMOD%202013.pdf'
              },
              {
                name: 'Plan bouquets query processing without selectivity estimation. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Plan%20bouquets%20query%20processing%20without%20selectivity%20estimation.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Query shredding efficient relational evaluation of queries over nested multisets. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Query%20shredding%20efficient%20relational%20evaluation%20of%20queries%20over%20nested%20multisets.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Revisiting Co-Processing for Hash Joins on the Coupled CPU-GPU Architecture. VLDB 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Revisiting%20Co-Processing%20for%20Hash%20Joins%20on%20the%20Coupled%20CPU-GPU%20Architecture.%20VLDB%202013.pdf'
              },
              {
                name: 'Scalable and Adaptive Online Joins. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Scalable%20and%20Adaptive%20Online%20Joins.%20VLDB%202014.pdf'
              },
              {
                name: 'SSD Bufferpool Extensions for Database Systems. VLDB 2010.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/SSD%20Bufferpool%20Extensions%20for%20Database%20Systems.%20VLDB%202010.pdf'
              },
              {
                name: 'Track Join Distributed Joins with Minimal Network Traffic. SIGMOD 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Track%20Join%20Distributed%20Joins%20with%20Minimal%20Network%20Traffic.%20SIGMOD%202014.pdf'
              },
              {
                name: 'Vectorizing Database Column Scans with Complex Predictes. ICDE 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Vectorizing%20Database%20Column%20Scans%20with%20Complex%20Predictes.%20ICDE%202013.pdf'
              },
              {
                name: 'Write-limited sorts and joins for persistent memory. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Write-limited%20sorts%20and%20joins%20for%20persistent%20memory.%20VLDB%202014.pdf'
              }
            ]
          },
          {
            id: 3,
            name: '数据库恢复',
            contents: [
              {
                name: 'Impact of Disk Corruption on Open-Source DBMS. ICDE 2010.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Impact%20of%20Disk%20Corruption%20on%20Open-Source%20DBMS.%20ICDE%202010.pdf'
              },
              {
                name: 'Scalable Logging through Emerging Non-Volatile Memory. VLDB 2014.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Scalable%20Logging%20through%20Emerging%20Non-Volatile%20Memory.%20VLDB%202014.pdf'
              }
            ]
          },
          {
            id: 4,
            name: '并发控制',
            contents: [
              {
                name: 'A Scalable Lock Manager for Multicores. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/A%20Scalable%20Lock%20Manager%20for%20Multicores.%20SIGMOD%202013.pdf'
              },
              {
                name: 'Controlled Lock Violation. SIGMOD 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Controlled%20Lock%20Violation.%20SIGMOD%202013.pdf'
              },
              {
                name: 'Lightweight Locking for Main Memory Database Systems. VLDB 2013.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Lightweight%20Locking%20for%20Main%20Memory%20Database%20Systems.%20VLDB%202013.pdf'
              },
              {
                name: 'Transactional In-Page Logging for Multiversion Read Consistency and Recovery. ICDE 2011.pdf',
                url: 'http://chinadb.ruc.edu.cn/newpaper/Transactional%20In-Page%20Logging%20for%20Multiversion%20Read%20Consistency%20and%20Recovery.%20ICDE%202011.pdf'
              }
            ]
          },
          {
            id: 5,
            name: '数据思维',
            contents: [
              {
                name: '数据思维应成为计算思维不可或缺的组成部分',
                url: 'http://chinadb.ruc.edu.cn/newpaper/DuXiaoyongdatathinkingshouldbeanindispensablepartofComputationalThinking.pdf'
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
