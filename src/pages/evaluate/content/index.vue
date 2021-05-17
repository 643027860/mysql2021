<template>
  <div class="evaluate evaluate-content">
    <h1 class="content-title">{{name}}</h1>
    <div class="content-main" v-if="contents.length > 0">
      <Article :contents="contents"></Article>
    </div>
    <div class="content-main" v-else>
      <p class="content-empty">
        暂无数据...
      </p>
    </div>
  </div>
</template>

<script>
import Article from '../../../components/article'
export default {
  name: 'evaluate-content',
  components: {
    Article
  },
  data () {
    return {
      id: 0,
      name: '',
      datas: [],
      contents: []
    }
  },
  mounted () {
    this.datas = [
      {
        id: 1,
        name: '第五版出版',
        contents: [
          {
            id: 0,
            name: '王珊教授《数据库系统概论》第5版出版',
            contents: [
              {
                name: '',
                content: '由我院王珊教授编著的《数据库系统概论》第5版于2014年9月由“高等教育出版社”正式出版。该教材是我国第一部系统讲授数据库原理、技术和方法的大学计算机专业本科教材，自1983年起由高等教育出版社出版了第1版以来，历经30余年的锤炼，至今已出版了5个版本，累计发行超200多万册。在几十所重点大学和普通大学作为本科生专业课教材使用，并被翻译成藏文和繁体字在我国西藏和台湾地区发行，对培养计算机专业人才做出了重要的贡献。',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/cover.png',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '',
                content: '在9月19日的中国计算机学会数据库专业委员会会议上，高等教育出版社举行了向数据库专委委员捐书的仪式。高教出版社计算机分社张龙社长对该书给予了高度评价，他说：《数据库系统概论》被公认是一本优秀的经典教材，具有优秀教材的全部特质。第一，该书出自名师之手，王珊教授是国家级的教学名师。第二，教材获得了各种奖励，如第一版曾获国家级优秀教材奖（1987），第三版获全国普通高等学校优秀教材一等奖（2002年）。第三，有一个优秀的教学团队，并获得有关课程的奖项，包括2004年获北京市精品课程，2005年获国家级精品课程等。最后一点，也是最重要的，这本教材每年的销量都在15万册左右，这个数字超过了大学本科计算机专业每年招收的学生人数。\n' +
                  '\n' +
                  '王珊教授在致辞中首先对为本书出版作出贡献的所有相关的人表示感谢，她特别解释了在作者中仍然保留四年前已经离开我们的萨师煊教授名字的用意，就是要用这种方式对萨师煊教授为我国数据库事业作出的开创性贡献表示敬意，同时也是对萨老师最好的纪念。王珊老师还向全体数据库专委委员提出建议，结合大数据的技术发展，认真研讨如何在数据库的教学中融入相关内容。',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/photo.jpg',
                    imgTip: '左起： 中国计算机学会数据库专委会主任周立柱教授，王珊教授，高等教育出版社计算机分社社长张龙先生）'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '出版社证明与推荐',
        contents: [
          {
            id: 0,
            name: '出版社证明与推荐',
            contents: [
              {
                name: '1.高等教育出版社推荐《数据系统概论》申报“十二五”普通高等教育本科国家级规划教材',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/promotion1.jpg',
                    imgTip: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '校外专家评价',
        contents: [
          {
            id: 0,
            name: '校外专家评价',
            contents: [
              {
                name: '1.哈尔滨工业大学李建中教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/new_lijianzhong1.jpg',
                    imgTip: ''
                  },
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/new_lijianzhong2.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '2.北京大学杨冬青教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/new_yangdongqing.png',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '3.华东师范大学周傲英教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/new_zhouaoying.jpg',
                    imgTip: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: '校内专家评价',
        contents: [
          {
            id: 0,
            name: '校内专家评价',
            contents: [
              {
                name: '1.中国人民大学信息学院陈红教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/chenhong1.jpg',
                    imgTip: ''
                  },
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/chenhong2.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '2.中国人民大学信息学院李翠平教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/licuiping.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '3.中国人民大学信息学院许洁萍副教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/xujieping.jpg',
                    imgTip: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: '教师评价',
        contents: [
          {
            id: 0,
            name: '教师评价',
            contents: [
              {
                name: '1.北京师范大学栾华博士评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher1_1.jpg',
                    imgTip: ''
                  },
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher1_2.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '2.厦门大学赖永炫博士评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher2.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '3.大连海事大学副教授评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher3_1.jpg',
                    imgTip: ''
                  },
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher3_2.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '4.天津大学张坤龙博士评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher4.png',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '5.山东大学彭朝晖评价',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/teacher5.jpg',
                    imgTip: ''
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: '学生评价',
        contents: [
          {
            id: 0,
            name: '学生评价',
            contents: [
              {
                name: '1. 刘虹同学对《数据库系统概论》课程的学习感想：',
                content: '这本书的结构十分清晰，一共有基础篇、设计与应用开发篇、系统篇和新技术篇四个部分，教材中还给出了本科生和研究生学习内容的建议，而且不仅仅可以用作教材，同时也适用于DBA和数据库应用系统设计开发人员。\n' +
                  '\n' +
                  '绪论这一章将数据库的基本概念引入，对数据库管理进展情况作了介绍，使我们对数据库及相关内容有了一个大体的认识，为接下来的学习做了一个很好的铺垫。 设计与应用开发篇先介绍了关系理论，其内容为数据库设计提供了理论上的指南，因此非常有必要在具体学习数据库设计之前先学习了解。设计与应用开发篇先介绍了关系理论，其内容为数据库设计提供了理论上的指南，因此非常有必要在具体学习数据库设计之前先学习了解。这本课本还对数据库的新技术和新进展进行介绍，作为自学内容，可以使我们开阔眼界，了解数据库发展的新内容。\n' +
                  '\n' +
                  '这本《数据库系统概论》将我们带入数据库学习的大门，进而深入学习，其内容丰富详细，实例丰富，并且配有实验，使我们充分学习的同时培养了动手的能力，是学习数据库必不可少的一本教材和参考。',
                imgs: []
              },
              {
                name: '2. 薛盛博同学对《数据库系统概论》课程的学习感想：',
                content: '本书内容丰富理论水平高，不但包容了数据库学科几十年下来的历史积淀，也融合了最新的研究成果。\n' +
                  '\n' +
                  '本书主要由基础篇，设计与应用开发篇，系统篇和新技术篇四大组成部分，内容安排详略得当。学完本书，不但对关系数据库以及SQL语言有了很好的掌握，也熟悉了数据库的设计和编程方法。本书对数据库的高层管理机制也做了一些介绍，比如数据库的并发控制、备份恢复、安全性完整性等机制，为我们今后更深入的学习奠定了清晰的理论基础，也促进了我们对整个数据库系统的认识。本书在后几章更是介绍了如对象关系数据库，XML数据库等新内容，让我们了解到了当今的发展趋势。每节后都有对应的练习题，和该章节讲述的概念相辅相成，看得出是老师精心策划的。\n' +
                  '\n' +
                  '数据库是一门具有一定难度的课程，学好并不容易，更不要说深刻的理解和掌握。《数据库系统概论》课程可以说为我们开了一个很好的头，今后还有更多，更长的路要走。感谢为了这本教材和这门课程付出想勤劳动的老师和助教，愿《数据库系统概论》能延续它的精彩，再今后的日子里，为祖国的计算机事业培养更多杰出人才！',
                imgs: []
              },
              {
                name: '3. 肖克同学对《数据库系统概论》课程的学习感想：',
                content: '学习数据库系统概论这门课是在大二下学期，作为中国人民大学信息学院的金品课程，第一次接触让我不知不觉产生一种尊敬，而后拿到了《数据库系统概论》这本教材，进行了短短一个学期的学习，总的感觉可以说是受益匪浅，意犹未尽啊。\n' +
                  '\n' +
                  '这是我们数据库的启蒙教材，我相信授课老师在给我们选择教材的时候一定也是谨慎而行。这本教材已经经过了好几次的改版，技术在不断地翻新，教材内容也紧跟渐渐完善，从知识面来说，它不可能涵盖数据库领域的所有知识，但是作为概论来讲，我认为已经可以称为典型教材了。因为它没有给我过分艰深的感觉，整个学习过程都很绵和，所掌握的知识却都是最核心的地方。\n' +
                  '\n' +
                  '从这本教材的组织结构上来说，我认为也是比较循序渐进的。首先，它将整本书的知识分成了本科生必读与选读两部分，在我们日常的学习过程中给予很大的便利。我们在学习必读部分过程中，肯定是需要知识扩展的，选读部分给我们一个很好的知识蓝图，我们可以从中选择自己的兴趣点进行深入。\n' +
                  '\n' +
                  '很感谢为这本教材呕心沥血的老师们，也很感谢信息学院给我们提供的优越环境。希望这本教材与这门课程继续延续辉煌！',
                imgs: []
              },
              {
                name: '4. 李芙蓉同学对《数据库系统概论》课程的学习感想：',
                content: '本书章节脉络清晰，内容由浅入深，从基础概念、设计开发、系统和新技术4个角度全面介绍了讲述了数据库的相关知识。\n' +
                  '\n' +
                  '书中的概念定义准确，例子形象生动，所选例题全面且有代表性，能够步步深入地引导学生学习。令我印象最为深刻的是本书第一章对数据模型和数据库系统结构的讲解，从较高的层次对数据库基本理论做了介绍，既有助于初学者从宏观上认识数据库系统，又能让有一定基础的人对数据库理论有更为准确而深入的理解。\n' +
                  '\n' +
                  '书中安排的实验涉及了DBMS的应用、安全、开发等各个方面，能够让学生在实践中较为全面地掌握数据库相关技术，与课堂学习相得益彰。\n' +
                  '\n' +
                  '总之，本书从整体到细节、深入浅出、全面详实地对整个数据库系统知识体系进行了介绍，不愧为学习这门课的首选教材。',
                imgs: []
              }
            ]
          }
        ]
      },
      {
        id: 7,
        name: '获奖证书',
        contents: [
          {
            id: 0,
            name: '出版社证明与推荐',
            contents: [
              {
                name: '1.萨师煊、王珊教授 2002年教育部优秀教材一等奖',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/disanban.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '2.萨师煊、王珊教授 1988年国家教委优秀教材奖',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/88.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '3.王珊教授与中国人民大学数据与知识工程研究所 硕果累累（1）',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/shuoguo1.jpg',
                    imgTip: ''
                  }
                ]
              },
              {
                name: '4.王珊教授与中国人民大学数据与知识工程研究所 硕果累累（2）',
                content: '',
                imgs: [
                  {
                    imgTitle: '',
                    imgUrl: 'http://chinadb.ruc.edu.cn/Public/img/shuoguo2.jpg',
                    imgTip: ''
                  }
                ]
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
      contents = contents.contents || []
      // 处理文字换行
      if (contents.length) {
        contents.map(item => {
          // 判断是否已经转换过格式，未转换类型为 string ，转换过类型为 object
          if (typeof item.content === 'string') {
            item.content = item.content.split('\n').filter(item1 => item1 !== '')
          }
        })
      }
      this.contents = contents || []
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
