<template>
  <div class="exam exam-content">
    <h1 class="content-title">{{name}}</h1>
    <div class="content-main" v-if="contents.length > 0">
      <Question :contents="contents"></Question>
    </div>
    <div class="content-main" v-else>
      <p class="content-empty">
        暂无数据...
      </p>
    </div>
  </div>
</template>

<script>
import Question from '../../../components/question'
export default {
  name: 'experiment-content',
  components: {
    Question
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
        name: '客观题',
        contents: [
          {
            id: 1,
            name: '第一章 绪论',
            contents: [
              {
                show: false,
                name: '用户或应用程序看到的那部分局部逻辑结构和特征的描述是（ ）模式。',
                choices: [
                  'A. 模式',
                  'B. 物理模式',
                  'C. 子模式',
                  'D. 内模式'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '数据库系统是采用了数据库技术的计算机系统，数据库系统由数据库、数据库管理系统、应用系统和（ ） 。',
                choices: [
                  'A. 系统分析员',
                  'B. 程序员',
                  'C. 数据库管理员',
                  'D. 操作员'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '数据库（DB），数据库系统（DBS）和数据库管理系统（DBMS）之间的关系是（ ）。',
                choices: [
                  'A. DBS包括DB和DBMS',
                  'B. DBMS包括DB和DBS',
                  'C. DB包括DBS和DBMS',
                  'D. DBS就是DB，也就是DBMS'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下面列出的数据库管理技术发展的三个阶段中，没有专门的软件对数据进行管理的是（ ）。 I．人工管理阶段 II．文件系统阶段 III．数据库阶段',
                choices: [
                  'A. I 和 II',
                  'B. 只有 II',
                  'C. II 和 III',
                  'D. 只有 I'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '下列四项中，不属于数据库系统特点的是（ ） 。',
                choices: [
                  'A. 数据共享',
                  'B. 数据完整性',
                  'C. 数据冗余度高',
                  'D. 数据独立性高'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '数据库系统的数据独立性体现在（ ） 。',
                choices: [
                  'A. 不会因为数据的变化而影响到应用程序',
                  'B. 不会因为数据存储结构与数据逻辑结构的变化而影响应用程序',
                  'C. 不会因为存储策略的变化而影响存储结构',
                  'D. 不会因为某些存储结构的变化而影响其他的存储结构'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '描述数据库全体数据的全局逻辑结构和特性的是（ ） 。',
                choices: [
                  'A. 模式',
                  'B. 内模式',
                  'C. 外模式',
                  'D. 物理模式'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '要保证数据库的数据独立性，需要修改的是（ ） 。',
                choices: [
                  'A. 模式与外模式',
                  'B. 模式与内模式',
                  'C. 三级模式之间的两层映射',
                  'D. 三层模式'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '要保证数据库的逻辑数据独立性，需要修改的是（ ） 。',
                choices: [
                  'A. 模式与外模式之间的映射',
                  'B. 模式与内模式之间的映射',
                  'C. 模式',
                  'D. 三级模式'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下述（ ）不是DBA数据库管理员的职责 。',
                choices: [
                  'A. 完整性约束说明',
                  'B. 定义数据库模式',
                  'C. 数据库安全',
                  'D. 数据库管理系统设计'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '概念模型是现实世界的第一层抽象，这一类模型中最著名的模型是（ ） 。',
                choices: [
                  'A. 层次模型',
                  'B. 关系模型',
                  'C. 网状模型',
                  'D. 实体-关系模型'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '区分不同实体的依据是（ ） 。',
                choices: [
                  'A. 名称',
                  'B. 属性',
                  'C. 对象',
                  'D. 概念'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '关系数据模型是目前最重要的一种数据模型，它的三个要素分别是（ ）。',
                choices: [
                  'A. 实体完整性、参照完整性、用户自定义完整性',
                  'B. 数据结构、关系操作、完整性约束',
                  'C. 数据增加、数据修改、数据查询',
                  'D. 外模式、模式、内模式'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: ' 在（ ）中一个结点可以有多个双亲，结点之间可以有多种联系。',
                choices: [
                  'A. 网状模型',
                  'B. 关系模型',
                  'C. 层次模型',
                  'D. 以上都有'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: ' （ ）的存取路径对用户透明，从而具有更高的数据独立性、更好的安全保密性，也简化了程序员的工作和数据库开发建立的工作。',
                choices: [
                  'A. 网状模型',
                  'B. 关系模型',
                  'C. 层次模型',
                  'D. 以上都有'
                ],
                answer: 'B'
              }
            ]
          },
          {
            id: 2,
            name: '第二章 关系数据库',
            contents: [
              {
                show: false,
                name: '一个关系只有一个（ ） 。',
                choices: [
                  'A. 候选码',
                  'B. 外码',
                  'C. 超码',
                  'D. 主码'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '关系模型中，一个码是（ ）。',
                choices: [
                  'A. 可以由多个任意属性组成',
                  'B. 至多由一个属性组成',
                  'C. 由一个或多个属性组成，其值能够惟一标识关系中一个元组',
                  'D. 以上都不是'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '现有如下关系： 患者（患者编号，患者姓名，性别，出生日期，所在单位） 医疗（患者编号，医生编号，医生姓名，诊断日期，诊断结果） 其中，医疗关系中的外码是（ ）。',
                choices: [
                  'A. 患者编号',
                  'B. 患者姓名',
                  'C. 患者编号和患者姓名',
                  'D. 医生编号和患者编号'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '关系代数运算是以（ ）为基础的运算 。',
                choices: [
                  'A. 关系运算',
                  'B. 谓词演算',
                  'C. 集合运算',
                  'D. 代数运算'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '关系数据库管理系统应能实现的专门关系运算包括（ ）。',
                choices: [
                  'A. 排序、索引、统计',
                  'B. 选择、投影、连接',
                  'C. 关联、更新、排序',
                  'D. 显示、打印、制表'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '五种基本关系代数运算是（ ）。',
                choices: [
                  'A. ∪ － × σ π',
                  'B. ∪ － σ π',
                  'C. ∪ ∩ × σ π',
                  'D. ∪ ∩ σ π'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '关系数据库中的投影操作是指从关系中（ ） 。',
                choices: [
                  'A. 抽出特定记录',
                  'B. 抽出特定字段',
                  'C. 建立相应的影像',
                  'D. 建立相应的图形'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '从一个数据库文件中取出满足某个条件的所有记录形成一个新的数据库文件的操作是（ ）操作 。',
                choices: [
                  'A. 投影',
                  'B. 连接',
                  'C. 选择',
                  'D. 复制'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '关系代数中的连接操作是由（ ）操作组合而成 。',
                choices: [
                  'A. 选择和投影',
                  'B. 选择和笛卡尔积',
                  'C. 投影、选择、笛卡尔积',
                  'D. 投影和笛卡尔积'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '一般情况下，当对关系R和S进行自然连接时，要求R和S含有一个或者多个共有的（ ） 。',
                choices: [
                  'A. 记录',
                  'B. 行',
                  'C. 属性',
                  'D. 元组'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '假设有关系R和S，关系代数表达式R－（R－S）表示的是（ ）。',
                choices: [
                  'A. R∩S',
                  'B. R∪S',
                  'C. R－S',
                  'D. R×S'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下面的选项不是关系数据库基本特征的是（ ）。',
                choices: [
                  'A. 不同的列应有不同的数据类型',
                  'B. 不同的列应有不同的列名',
                  'C. 与行的次序无关',
                  'D. 与列的次序无关'
                ],
                answer: 'A'
              }
            ]
          },
          {
            id: 3,
            name: '第三章 关系数据库标准语言SQL',
            contents: [
              {
                show: false,
                name: 'SQL语言是（ ）的语言，容易学习 。',
                choices: [
                  'A. 过程化',
                  'B. 非过程化',
                  'C. 格式化',
                  'D. 导航式'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '在视图上不能完成的操作是（ ） 。',
                choices: [
                  'A. 更新视图',
                  'B. 查询',
                  'C. 在视图上定义新的表',
                  'D. 在视图上定义新的视图'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: 'SQL语言集数据查询、数据操纵、数据定义和数据控制功能于一体，其中，CREATE、DROP、ALTER语句是实现哪种功能（ ）。',
                choices: [
                  'A. 数据查询',
                  'B. 数据操纵',
                  'C. 数据定义',
                  'D. 数据控制'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: 'SQL语言中，删除一个视图的命令是（ ）。',
                choices: [
                  'A. DELETE',
                  'B. DROP',
                  'C. CLEAR',
                  'D. REMOVE'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '在SQL语言中的视图VIEW是数据库的（ ） 。',
                choices: [
                  'A. 外模式',
                  'B. 模式',
                  'C. 内模式',
                  'D. 存储模式'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下列的SQL语句中，（ ）不是数据定义语句。',
                choices: [
                  'A. CREATE TABLE',
                  'B. DROP VIEW',
                  'C. CREATE VIEW',
                  'D. GRANT'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '若要撤销数据库中已经存在的表S，可用（ ）。',
                choices: [
                  'A. DELETE TABLE S',
                  'B. DELETE S',
                  'C. DROP TABLE S',
                  'D. DROP S'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '若要在基本表S中增加一列CN（课程名），可用（ ）。',
                choices: [
                  'A. ADD TABLE S（CN CHAR（８））',
                  'B. ADD TABLE S ALTER（CN CHAR（８））',
                  'C. ALTER TABLE S ADD（CN CHAR（８））',
                  'D. ALTER TABLE S （ADD CN CHAR（８））'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '学生关系模式 S（ S＃，Sname，Sex，Age），S的属性分别表示学生的学号、姓名、性别、年龄。要在表S中删除一个属性“年龄”，可选用的SQL语句是（ ）。',
                choices: [
                  'A. DELETE Age from S',
                  'B. ALTER TABLE S DROP Age',
                  'C. UPDATE S Age',
                  'D. ALTER TABLE S ‘Age’'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '有关系S（S＃，SNAME，SAGE），C（C＃，CNAME），SC（S＃，C＃，GRADE）。其中S＃是学生号，SNAME是学生姓名，SAGE是学生年龄， C＃是课程号，CNAME是课程名称。要查询选修“ACCESS”课的年龄不小于20的全体学生姓名的SQL语句是 SELECT SNAME FROM S，C，SC WHERE子句。 这里的WHERE子句的内容是（ ）。',
                choices: [
                  'A. S.S# = SC.S# and C.C# = SC.C# and SAGE>=20 and CNAME=‘ACCESS’',
                  'B. S.S# = SC.S# and C.C# = SC.C# and SAGE in>=20 and CNAME in ‘ACCESS’',
                  'C. SAGE in>=20 and CNAME in ‘ACCESS’',
                  'D. SAGE>=20 and CNAME=’ ACCESS’'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '设关系数据库中一个表S的结构为S（SN，CN，grade），其中SN为学生名，CN为课程名，二者均为字符型；grade为成绩，数值型，取值范围0－100。若要把“张二的化学成绩80分”插入S中，则可用（ ）。',
                choices: [
                  'A. ADD INTO S VALUES（’张二’，’化学’，’80’）',
                  'B. INSERT INTO S VALUES（’张二’，’化学’，’80’）',
                  'C. ADD INTO S VALUES（’张二’，’化学’，80）',
                  'D. INSERT INTO S VALUES（’张二’，’化学’，80）'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '设关系数据库中一个表S的结构为：S（SN，CN，grade），其中SN为学生名，CN为课程名，二者均为字符型；grade为成绩，数值型，取值范围0－100。若要更正王二的化学成绩为85分，则可用（ ） 。',
                choices: [
                  'A. UPDATE S SET grade＝85 WHERE SN＝’王二’ AND CN＝’化学’',
                  'B. UPDATE S SET grade＝’85’ WHERE SN＝’王二’ AND CN＝’化学’',
                  'C. UPDATE grade＝85 WHERE SN＝’王二’ AND CN＝’化学’',
                  'D. UPDATE grade＝’85’ WHERE SN＝’王二’ AND CN＝’化学’'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '在SQL语言中，子查询是（ ） 。',
                choices: [
                  'A. 返回单表中数据子集的查询语言',
                  'B. 选取多表中字段子集的查询语句',
                  'C. 选取单表中字段子集的查询语句',
                  'D. 嵌入到另一个查询语句之中的查询语句'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '有关系S（S＃，SNAME，SEX），C（C＃，CNAME），SC（S＃，C＃，GRADE）。其中S＃是学生号，SNAME是学生姓名，SEX是性别， C＃是课程号，CNAME是课程名称。要查询选修“数据库”课的全体男生姓名的SQL语句是SELECT SNAME FROM S，C，SC WHERE子句。这里的WHERE子句的内容是（ ）。',
                choices: [
                  'A. S.S# = SC.S# and C.C# = SC.C# and SEX=’男’ and CNAME=’数据库’',
                  'B. S.S# = SC.S# and C.C# = SC.C# and SEX in’男’and CNAME in’数据库’',
                  'C. SEX ’男’ and CNAME ’ 数据库’',
                  'D. S.SEX=’男’ and CNAME=’ 数据库’'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '若用如下的SQL语句创建了一个表SC： CREATE TABLE SC （S# CHAR（6） NOT NULL，C# CHAR（3） NOT NULL，SCORE INTEGER，NOTE CHAR（20））；向SC表插入如下行时，（ ）行可以被插入 。',
                choices: [
                  'A. （’201009’，’111’，60，必修）',
                  'B. （’200823’，’101’，NULL，NULL）',
                  'C. （NULL，’103’，80，’选修’）',
                  'D. （’201132’，NULL，86，’ ’）'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '假设学生关系S（S＃，SNAME，SEX），课程关系C（C＃，CNAME），学生选课关系SC（S＃，C＃，GRADE）。要查询选修“Computer”课的男生姓名，将涉及到关系（ ）。',
                choices: [
                  'A. S',
                  'B. S，SC',
                  'C. C，SC',
                  'D. S，C，SC'
                ],
                answer: 'D'
              }
            ]
          },
          {
            id: 5,
            name: '第五章 关系数据理论',
            contents: [
              {
                show: false,
                name: '规范化理论是关系数据库进行逻辑设计的理论依据，根据这个理论，关系数据库中的关系必须满足：每 一个属性都是（ ）。',
                choices: [
                  'A. 长度不变的',
                  'B. 不可分解的',
                  'C. 互相关联的',
                  'D. 互不相关的'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '已知关系模式R（A，B，C，D，E）及其上的函数依赖集合F＝{A→D，B→C ，E→A }，该关系模式 的候选码是（ ）。',
                choices: [
                  'A. AB',
                  'B. BE',
                  'C. CD',
                  'D. DE'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '关系模式中，满足2NF的模式（ ）。',
                choices: [
                  'A. 可能是1NF',
                  'B. 必定是1NF',
                  'C. 必定是3NF',
                  'D. 必定是BCNF'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '关系模式R中的属性全是主属性，则R的最高范式必定是（ ）。',
                choices: [
                  'A. 1NF',
                  'B. 2NF',
                  'C. 3NF',
                  'D. BCNF'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '消除了部分函数依赖的1NF的关系模式，必定是（ ）。',
                choices: [
                  'A. 1NF',
                  'B. 2NF',
                  'C. 3NF',
                  'D. BCNF'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '关系模式的候选码可以有1个或多个，而主码有（ ）。',
                choices: [
                  'A. 多个',
                  'B. 0个',
                  'C. 1个',
                  'D. 1个或多个'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '候选码的属性可以有（ ）。',
                choices: [
                  'A. 多个',
                  'B. 0个',
                  'C. 1个',
                  'D. 1个或多个'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '设U是所有属性的集合，X、Y、Z都是U的子集，且Z＝U－X－Y。下面关于多值依赖的叙述中，不 正确的是（ ）。',
                choices: [
                  'A. 若X→→Y，则X→→Z',
                  'B. 若X→Y，则X→→Y',
                  'C. 若X→→Y，且Y′∈Y，则X→→Y′',
                  'D. 若Z＝Φ，则X→→Y'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '关系数据库规范化是为了解决关系数据库中（ ）的问题而引入的。',
                choices: [
                  'A. 提高查询速度',
                  'B. 插入、删除异常和数据冗余',
                  'C. 保证数据的安全性和完整性'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '学生表（id，name，sex，age，depart_id，depart_name），存在的函数依赖是id→{name，sex，age，depart_id}； dept_id→dept_name，其满足（ ）。',
                choices: [
                  'A. 1NF',
                  'B. 2NF',
                  'C. 3NF',
                  'D. BCNF'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '设有关系模式R（S，D，M），其函数依赖集：F＝{S→D，D→M}，则关系模式R的规范化程度最高 达到（ ）。',
                choices: [
                  'A. 1NF',
                  'B. 2NF',
                  'C. 3NF',
                  'D. BCNF'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '设有关系模式R（A，B，C，D），其数据依赖集：F＝{（A，B）→C，C→D}，则关系模式R的规范化程度最高达到（ ）。',
                choices: [
                  'A. 1NF',
                  'B. 2NF',
                  'C. 3NF',
                  'D. BCNF'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: 'X→Y，当下列哪一条成立时，称为平凡的函数依赖（ ）。',
                choices: [
                  'A. X ∈Y',
                  'B. Y∈X',
                  'C. X∩Y＝Φ',
                  'D. X∩Y≠Φ'
                ],
                answer: 'B'
              }
            ]
          },
          {
            id: 6,
            name: '第六章 数据库设计',
            contents: [
              {
                show: false,
                name: '数据库设计的概念设计阶段，表示概念结构的常用方法和描述工具是（ ）。',
                choices: [
                  'A. 层次分析法和层次结构图',
                  'B. 数据流程分析法和数据流程图',
                  'C. 实体联系方法',
                  'D. 结构分析法和模块结构图'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '在关系数据库设计中，设计关系模式是数据库设计中（ ）阶段的任务 。',
                choices: [
                  'A. 逻辑设计阶段',
                  'B. 概念设计阶段',
                  'C. 物理设计阶段',
                  'D. 需求分析阶段'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '如何构造出一个合适的数据逻辑结构是（ ）主要解决的问题 。',
                choices: [
                  'A. 物理结构设计',
                  'B. 数据字典',
                  'C. 逻辑结构设计',
                  'D. 关系数据库查询'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '概念结构设计是整个数据库设计的关键，它通过对用户需求进行综合、归纳与抽象，形成一个独立于具体DBMS的（ ）。',
                choices: [
                  'A. 数据模型',
                  'B. 概念模型',
                  'C. 层次模型',
                  'D. 关系模型'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '数据库设计中，确定数据库存储结构，即确定关系、索引、聚簇、日志、备份等数据的存储安排和存储结构，这是数据库设计的（ ）。',
                choices: [
                  'A. 需求分析阶段',
                  'B. 逻辑设计阶段',
                  'C. 概念设计阶段',
                  'D. 物理设计阶段'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '数据库物理设计完成后，进入数据库实施阶段，下述工作中，（ ）一般不属于实施阶段的工作。',
                choices: [
                  'A. 建立库结构',
                  'B. 系统调试',
                  'C. 加载数据',
                  'D. 扩充功能'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '数据库设计可划分为六个阶段，每个阶段都有自己的设计内容，“为哪些关系，在哪些属性上建什么样的索引”这一设计内容应该属于（ ）设计阶段。',
                choices: [
                  'A. 概念设计',
                  'B. 逻辑设计',
                  'C. 物理设计',
                  'D. 全局设计'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '在关系数据库设计中，设计关系模式是数据库设计中（ ）阶段的任务。',
                choices: [
                  'A. 逻辑设计阶段',
                  'B. 概念设计阶段',
                  'C. 物理设计阶段',
                  'D. 需求分析阶段'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '在关系数据库设计中，对关系进行规范化处理，使关系达到一定的范式，例如达到3NF，这是（ ）阶段的任务。',
                choices: [
                  'A. 需求分析阶段',
                  'B. 概念设计阶段',
                  'C. 物理设计阶段',
                  'D. 逻辑设计阶段'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '概念模型是现实世界的第一层抽象，这一类最著名的模型是（ ） 。',
                choices: [
                  'A. 层次模型',
                  'B. 关系模型',
                  'C. 网状模型',
                  'D. 实体-关系模型'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '对实体和实体之间的联系采用同样的数据结构表达的数据模型为（ ） 。',
                choices: [
                  'A. 网状模型',
                  'B. 关系模型',
                  'C. 层次模型',
                  'D. 非关系模型'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '在概念模型中的客观存在并可相互区别的事物称（ ） 。',
                choices: [
                  'A. 实体',
                  'B. 元组',
                  'C. 属性',
                  'D. 节点'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '区分不同实体的依据是（ ） 。',
                choices: [
                  'A. 名称',
                  'B. 属性',
                  'C. 对象',
                  'D. 概念'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '公司有多个部门和多名职员，每个职员只能属于一个部门，一个部门可以有多名职员，从职员到部门的联系类形是（ ） 。',
                choices: [
                  'A. 多对多',
                  'B. 一对一',
                  'C. 一对多'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '关系数据库中，实现实体之间的联系是通过关系与关系之间的（ ） 。',
                choices: [
                  'A. 公共索引',
                  'B. 公共存储',
                  'C. 公共元组',
                  'D. 公共属性'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '数据流程图是用于数据库设计中（ ）阶段的工具。',
                choices: [
                  'A. 概要设计',
                  'B. 可行性分析',
                  'C. 程序编码',
                  'D. 需求分析'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '在数据库设计中，将ER图转换成关系数据模型的过程属于（ ）。',
                choices: [
                  'A. 需求分析阶段',
                  'B. 逻辑设计阶段',
                  'C. 概念设计阶段',
                  'D. 物理设计阶段'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '子模式DDL是用来描述（ ）。',
                choices: [
                  'A. 数据库的总体逻辑结构',
                  'B. 数据库的局部逻辑结构',
                  'C. 数据库的物理存储结构',
                  'D. 数据库的概念结构'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '关系数据库的规范化理论主要解决的问题是（ ）。',
                choices: [
                  'A. 如何构造合适的数据逻辑结构',
                  'B. 如何构造合适的数据物理结构',
                  'C. 如何构造合适的应用程序界面',
                  'D. 如何控制不同用户的数据操作权限'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '数据库设计可划分为六个阶段，每个阶段都有自己的设计内容，“为哪些关系在哪些属性上建什么样的索引”这一设计内容应该属于（ ）设计阶段。',
                choices: [
                  'A. 概念设计',
                  'B. 逻辑设计',
                  'C. 物理设计',
                  'D. 全局设计'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '数据库物理设计完成后，进入数据库实施阶段，下述工作中，（ ）一般不属于实施阶段的工作。',
                choices: [
                  'A. 建立库结构',
                  'B. 系统调试',
                  'C. 加载数据',
                  'D. 扩充功能'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '从ER图导出关系模型时，如果实体间的联系是M：N的，下列说法中正确的是（ ）。',
                choices: [
                  'A. 将N方码和联系的属性纳入M方的属性中',
                  'B. 将M方码和联系的属性纳入N方的属性中',
                  'C. 增加一个关系表示联系，其中纳入M方和N方的码',
                  'D. 在M方属性和N方属性中均增加一个表示级别的属性'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '在ER模型中，如果有3个不同的实体型，3个M：N联系，根据ER模型转换为关系模型的规则，转换为关系的数目是（ ）。',
                choices: [
                  'A. 4',
                  'B. 5',
                  'C. 6',
                  'D. 7'
                ],
                answer: 'C'
              }
            ]
          },
          {
            id: 7,
            name: '第七章 数据库恢复技术',
            contents: [
              {
                show: false,
                name: '一个事务的执行，要么全部完成，要么全部不做，一个事务中对数据库的所有操作都是一个不可分割的操作序列的属性是（ ） 。',
                choices: [
                  'A. 原子性',
                  'B. 一致性',
                  'C. 独立性',
                  'D. 持久性'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '表示两个或多个事务可以同时运行而不互相影响的是（ ）。',
                choices: [
                  'A. 原子性',
                  'B. 一致性',
                  'C. 独立性',
                  'D. 持久性'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '事务的持续性是指（ ）',
                choices: [
                  'A. 事务中包括的所有操作要么都做，要么都不做',
                  'B. 事务一旦提交，对数据库的改变是永久的',
                  'C. 一个事务内部的操作对并发的其他事务是隔离的',
                  'D. 事务必须使数据库从一个一致性状态变到另一个一致性状态'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: 'SQL语言中的COMMIT语句的主要作用是（ ）。',
                choices: [
                  'A. 结束程序',
                  'B. 返回系统',
                  'C. 提交事务',
                  'D. 存储数据'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: 'SQL语言中用（ ）语句实现事务的回滚',
                choices: [
                  'A. CREATE TABLE',
                  'B. ROLLBACK',
                  'C. GRANT和REVOKE',
                  'D. COMMIT'
                ],
                answer: 'B'
              },
              {
                show: false,
                name: '若系统在运行过程中，由于某种硬件故障，使存储在外存上的数据部分损失或全部损失，这种情况称为（ ）。',
                choices: [
                  'A. 介质故障',
                  'B. 运行故障',
                  'C. 系统故障',
                  'D. 事务故障'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '在DBMS中实现事务持久性的子系统是（ ）。',
                choices: [
                  'A. 安全管理子系统',
                  'B. 完整性管理子系统',
                  'C. 并发控制子系统',
                  'D. 恢复管理子系统'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '后援副本的作用是（ ）。',
                choices: [
                  'A. 保障安全性',
                  'B. 一致性控制',
                  'C. 故障后的恢复',
                  'D. 数据的转储'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '事务日志用于保存（ ）。',
                choices: [
                  'A. 程序运行过程',
                  'B. 程序的执行结果',
                  'C. 对数据的更新操作',
                  'D. 对数据的查询操作'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '数据库恢复的基础是利用转储的冗余数据。这些转储的冗余数据包括（ ）。',
                choices: [
                  'A. 数据字典、应用程序、数据库后备副本',
                  'B. 数据字典、应用程序、审计档案',
                  'C. 日志文件、数据库后备副本',
                  'D. 数据字典、应用程序、日志文件'
                ],
                answer: 'C'
              }
            ]
          },
          {
            id: 8,
            name: '第八章 并发控制',
            contents: [
              {
                show: false,
                name: '解决并发操作带来的数据不一致问题普遍采用（ ）技术。',
                choices: [
                  'A. 封锁',
                  'B. 存取控制',
                  'C. 恢复',
                  'D. 协商'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下列不属于并发操作带来的问题是（ ）。',
                choices: [
                  'A. 丢失修改',
                  'B. 不可重复读',
                  'C. 死锁',
                  'D. 脏读'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: 'DBMS普遍采用（ ）方法来保证调度的正确性 。',
                choices: [
                  'A. 索引',
                  'B. 授权',
                  'C. 封锁',
                  'D. 日志'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: ' 事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放，这是（ ） 。',
                choices: [
                  'A. 一级封锁协议',
                  'B. 二级封锁协议',
                  'C. 三级封锁协议',
                  'D. 零级封锁协议'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '如果事务T获得了数据项Q上的排他锁，则T对Q（ ） 。',
                choices: [
                  'A. 只能读不能写',
                  'B. 只能写不能读',
                  'C. 既可读又可写',
                  'D. 不能读也不能写'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '设事务T1和T2，对数据库中的数据A进行操作，可能有如下几种情况，请问哪一种不会发生冲突操作（ ） 。',
                choices: [
                  'A. T1正在写A，T2要读A',
                  'B. T1正在写A，T2也要写A',
                  'C. T1正在读A，T2要写A',
                  'D. T1正在读A，T2也要读A'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '如果有两个事务，同时对数据库中同一数据进行操作，不会引起冲突的操作是（ ） 。',
                choices: [
                  'A. 一个是DELETE，一个是SELECT',
                  'B. 一个是SELECT，一个是DELETE',
                  'C. 两个都是UPDATE',
                  'D. 两个都是SELECT'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '',
                choices: [
                  'A. ',
                  'B. ',
                  'C. ',
                  'D. '
                ],
                answer: ''
              },
              {
                show: false,
                name: '',
                choices: [
                  'A. ',
                  'B. ',
                  'C. ',
                  'D. '
                ],
                answer: ''
              },
              {
                show: false,
                name: '',
                choices: [
                  'A. ',
                  'B. ',
                  'C. ',
                  'D. '
                ],
                answer: ''
              },
              {
                show: false,
                name: '',
                choices: [
                  'A. ',
                  'B. ',
                  'C. ',
                  'D. '
                ],
                answer: ''
              },
              {
                show: false,
                name: '',
                choices: [
                  'A. ',
                  'B. ',
                  'C. ',
                  'D. '
                ],
                answer: ''
              }
            ]
          },
          {
            id: 9,
            name: '第九章 数据库安全性',
            contents: [
              {
                show: false,
                name: '以下（ ）不属于实现数据库系统安全性的主要技术和方法。',
                choices: [
                  'A. 存取控制技术',
                  'B. 视图技术',
                  'C. 审计技术',
                  'D. 出入机房登记和加防盗门'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: 'SQL中的视图机制提高了数据库系统的（ ）。',
                choices: [
                  'A. 完整性',
                  'B. 并发控制',
                  'C. 隔离性',
                  'D. 安全性'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: 'SQL语言的GRANT和REVOKE语句主要是用来维护数据库的（ ）。',
                choices: [
                  'A. 完整性',
                  'B. 可靠性',
                  'C. 安全性',
                  'D. 一致性'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '在数据库的安全性控制中，授权的数据对象的（ ），授权子系统就越灵活。',
                choices: [
                  'A. 范围越小',
                  'B. 约束越细致',
                  'C. 范围越大',
                  'D. 约束范围大'
                ],
                answer: 'A'
              }
            ]
          },
          {
            id: 10,
            name: '第十章 数据库完整性',
            contents: [
              {
                show: false,
                name: '找出下面SQL命令中的数据控制命令（ ）。',
                choices: [
                  'A. GRANT',
                  'B. COMMIT',
                  'C. UPDATE',
                  'D. SELECT'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下述SQL命令中，允许用户定义新关系时，引用其他关系的主码作为外码的是（ ）。',
                choices: [
                  'A. INSERT',
                  'B. DELETE',
                  'C. REFERENCES',
                  'D. SELECT'
                ],
                answer: 'C'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: '主观题',
        contents: [
          {
            id: 1,
            name: '第一章 绪论',
            contents: [
              {
                show: false,
                name: '试述数据、数据库、数据库系统、数据库管理系统的概念。',
                answer: '数据： 描述事物的符号记录称为数据。数据的种类有文字、图形、图象、声音、正文等等。数据与其语义是不可分的。 *解析： 在现代计算机系统中数据的概念是广义的。早期的计算机系统主要用于科学计算，处理的数据是整数、实数、浮点数等传统数学中的数据等。现在计算机能存储和处理的对象十分广泛，表示这些对象的 数据也越来越复杂。 数据与其语义是不可分的。500这个数字可以表示一件物品的价格是500元，也可以表示一个学术会议参加的人数有500人。还可以表示一袋奶粉重500克。 数据库： 数据库是长期储存在计算机内、有组织的、可共享的数据集合。数据库中的数据按一定的数据模型组织、描述和储存，具有较小的冗余度、较高的数据独立性和易扩展性，并可为各种用户共享。 *解析： 简单地讲，数据数据库数据具有永久储存、有组织和可共享三个特点。 数据模型是数据库的核心概念。每个数据库中数据的都是按照某一种数据模型来组织的。 数据库系统： 数据库系统（DBS）是指在计算机系统中引入数据库后的系统构成。数据库系统由数据库、数据库管理系统（及其开发工具）、应用系统、数据库管理员构成。 *解析： 数据库系统和数据库是两个概念。数据库系统是一个人-机系统，数据库是数据库系统的一个组成部分。但是在日常工作中人们常常把把数据库系统简称为数据库。希望读者能够从人们讲话或文章的上下文中区分“数据库系统”和“数据库”。 不要引起混淆。 数据库管理系统： 数据库管理系统(DBMS)是位于用户与操作系统之间的一层数据管理软件。用于科学地组织和存储数据、高效地获取和维护数据。DBMS主要功能包括数据定义功能、数据操纵功能、数据库的运行管理功能、数据库的建立和维护功能。 *解析： DBMS是一个大型复杂的软件系统。是计算机中的基础软件。目前，专门研制DBMS的厂商及其研制的DBMS产品很多。著名的有美国IBM公司的DB2关系数据库管理系统、IMS层次数据库管理系统；美国ORACLE公司的ORACLE关系数据库管理系统；SYBASE公司的SYBASE关系数据库管理系统；美国微软公司的SQL SERVER关系数据库管理系统等等。'
              },
              {
                show: false,
                name: '使用数据库系统有什么好处？',
                answer: '使用数据库系统的好处是由数据库管理系统的特点或优点决定的。 使用数据库系统的好处很多，例如可以大大提高应用开发的效率，方便用户的使用，减轻数据库系统管理人员维护的负担等。 为什么有这些好处，可以结合第5题来回答。 使用数据库系统可以大大提高应用开发的效率。因为在数据库系统中应用程序不必考虑数据的定义、存储和数据存取的具体路径，这些工作都由DBMS来完成。用一个通俗的比喻，使用了DBMS就如有了一个好参谋好助手，许多具体的技术工作都由这个助手来完成。开发人员就可以专注于应用逻辑的设计而不必为管理数据的许许多多复杂的细节操心。 还有，当应用逻辑改变，数据的逻辑结构需要改变时，由于数据库系统提供了数据与程序之间的独立性。数据逻辑结构的改变是DBA的责任，开发人员不必修改应用程序，或者只需要修改很少的应用程序。从而既简化了应用程序的编制，又大大减少了应用程序的维护和修改。 使用数据库系统可以减轻数据库系统管理人员维护系统的负担。因为DBMS在数据库建立、运用和维护时对数据库进行统一的管理和控制，包括数据的完整性、安全性，多用户并发控制，故障恢复等等都由DBMS执行。 总之，使用数据库系统的优点是很多的，既便于数据的集中管理，控制数据冗余，可以提高数据的利用率和一致性，又有利于应用程序的开发和维护。读者可以在自己今后的工作中结合具体应用，认真加以体会和总结。'
              },
              {
                show: false,
                name: '试述文件系统与数据库系统的区别和联系。',
                answer: '文件系统与数据库系统的区别： 文件系统面向某一应用程序，共享性差、冗余度大，独立性差，纪录内有结构、整体无结构，应用程序自己控制。 数据库系统面向现实世界，共享性高、冗余度小，具有高度的物理独立性和一定的逻辑独立性，整体结构化，用数据模型描述，由数据库管理系统提供数据安全性、完整性、并发控制和恢复能力。 读者可以参考《概论》书中表1.1 中的有关内容。 文件系统与数据库系统的联系是： 文件系统与数据库系统都是计算机系统中管理数据的软件。 *解析： 文件系统是操作系统的重要组成部分，而DBMS是独立于操作系统的软件。但是DBMS是在操作系统的基础上实现的。数据库中数据的组织和存储是通过操作系统中文件系统来实现的。 读者可以参考书中第十一章《数据库管理系统》。或者说，读者进一步学习数据库管理系统实现的有关课程（第十一章只是DBMS实现技术的概述）后可以对本题有深入的理解和全面的解答。因为DBMS的实现与操作系统中的文件系统是紧密相关的。例如，数据库实现的基础是文件，对数据库的任何操作最终要转化为对文件的操作。所以在DBMS实现中数据库物理组织的基本问题是如何利用或如何选择操作系统提供的基本的文件组织方法。这里我们就不具体展开了。'
              },
              {
                show: false,
                name: '举出适合用文件系统而不是数据库系统的例子；再举出适合用数据库系统的应用例子。',
                answer: '•适用于文件系统而不是数据库系统的应用例子 数据的备份，软件或应用程序使用过程中的临时数据存储一般使用文件比较合适。 早期功能比较简单、比较固定的应用系统也适合用文件系统。 •适用于数据库系统而非文件系统的应用例子 目前，几乎所有企业或部门的信息系统都以数据库系统为基础，都使用数据库。如一个工厂的管理信息系统（其中会包括许多子系统，如库存管理系统、物资采购系统、作业调度系统、设备管理系统、人事管理系统等等），还比如学校的学生管理系统，人事管理系统，图书馆的图书管理系统等等都适合用数据库系统。'
              },
              {
                show: false,
                name: '试述数据库系统的特点。',
                answer: '数据库系统的主要特点有： 一、数据结构化 数据库系统实现整体数据的结构化，这是数据库的主要特征之一，也是数据库系统与文件系统的本质区别。 *解析：注意这里“整体”两个字。在数据库系统中，数据不再针对某一个应用，而是面向全组织，具有整体的结构化。不仅数据是结构化的，而且数据的存取单位即一次可以存取数据的大小也很灵活。可以小到某一个数据项（如一个学生的姓名），大到一组记录（成千上万个学生记录）。而在文件系统中，数据的存取单位只有一个：记录。如一个学生的完整记录。 二、数据的共享性高，冗余度低，易扩充 数据库的数据不再面向某个应用而是面向整个系统，因此可以被多个用户、多个应用、用多种不同的语言共享使用。由于数据面向整个系统，是有结构的数据，不仅可以被多个应用共享使用，而且容易增加新的应用，这就使得数据库系统弹性大，易于扩充。 *解析： 数据共享可以大大减少数据冗余，节约存储空间，同时还能够避免数据之间的不相容性与不一致性。 所谓“数据面向某个应用”是指数据结构是针对某个应用设计的，只被这个应用程序或应用系统使用。可以说数据是某个应用的“私有资源”。 所谓“弹性大”是指系统容易扩充也容易收缩，即应用增加或减少时不必修改整个数据库的结构，或者只要做很少的修改。 我们可以取整体数据的各种子集用于不同的应用系统，当应用需求改变或增加时，只要重新选取不同的子集或加上一部分数据便可以满足新的需求。 三、数据独立性高 数据独立性包括数据的物理独立性和数据的逻辑独立性。 数据库管理系统的模式结构和二级映象功能保证了数据库中的数据具有很高的物理独立性和逻辑独立性。 *解析： 所谓“独立性”即相互不依赖。数据独立性是指数据和程序相互不依赖。即数据的逻辑结构或物理结构改变了，程序不会跟着改变。数据与程序的独立，把数据的定义从程序中分离出去，加上数据的存取又由DBMS负责，简化了应用程序的编制，大大减少了应用程序的维护和修改。 四、数据由DBMS统一管理和控制 数据库的共享是并发的共享，即多个用户可以同时存取数据库中的数据甚至可以同时存取数据库中同一个数据。为此，DBMS必须提供统一的数据控制功能，包括数据的安全性保护，数据的完整性检查，并发控制和数据库恢复。 *解析： DBMS数据控制功能包括四个方面： 数据的安全性保护：保护数据以防止不合法的使用造成的数据的泄密和破坏； 数据的完整性检查：将数据控制在有效的范围内或保证数据之间满足一定的关系； 并发控制：对多用户的并发操作加以控制和协调，保证并发操作的正确性； 数据库恢复：当计算机系统发生硬件故障、软件故障，或者由于操作员的失误以及故意的破坏影响数据库中数据的正确性，甚至造成数据库部分或全部数据的丢失时，能将数据库从错误状态恢复到某一已知的正确状态（亦称为完整状态或一致状态）。 下面我们可以得到“什么是数据库”的一个定义： 数据库是长期存储在计算机内有组织的大量的共享的数据集合。它可以供各种用户共享，具有最小冗余度和较高的数据独立性。DBMS在数据库建立、运用和维护时对数据库进行统一控制，以保证数据的完整性、安全性，并在多用户同时使用数据库时进行并发控制，在发生故障后对系统进行恢复。 数据库系统的出现使信息系统从以加工数据的程序为中心转向围绕共享的数据库为中心的新阶段。'
              },
              {
                show: false,
                name: '数据库管理系统的主要功能有哪些？',
                answer: ' ① 数据库定义功能； ② 数据存取功能； ③ 数据库运行管理； ④ 数据库的建立和维护功能。'
              },
              {
                show: false,
                name: '定义并解释以下术语：DDL、DML',
                answer: 'DDL：数据定义语言。用来定义数据库模式、外模式、内模式的语言。 DML：数据操纵语言。用来对数据库中的数据进行查询、插入、删除和修改的语句。'
              },
              {
                show: false,
                name: '什么叫数据与程序的物理独立性？什么叫数据与程序的逻辑独立性？ 为什么数据库系统具有数据与程序的独立性？',
                answer: '数据与程序的逻辑独立性：当模式改变时（例如增加新的关系、新的属性、改变属性的数据类型等），由数据库管理员对各个外模式／模式的映象作相应改变，可以使外模式保持不变。应用程序是依据数据的外模式编写的，从而应用程序不必修改，保证了数据与程序的逻辑独立性，简称数据的逻辑独立性。 数据与程序的物理独立性：当数据库的存储结构改变了，由数据库管理员对模式／内模式映象作相应改变，可以使模式保持不变，从而应用程序也不必改变。保证了数据与程序的物理独立性，简称数据的物理独立性。 数据库管理系统在三级模式之间提供的两层映象保证了数据库系统中的数据能够具有较高的逻辑独立性和物理独立性。'
              },
              {
                show: false,
                name: '试述数据库系统的组成。',
                answer: '数据库系统一般由数据库、数据库管理系统（及其开发工具）、应用系统、数据库管理员和用户构成。'
              },
              {
                show: false,
                name: '试述数据模型的概念、数据模型的作用和数据模型的三个要素。',
                answer: '数据模型是数据库中用来对现实世界进行抽象的工具，是数据库中用于提供信息表示和操作手段的形式构架。 一般地讲，数据模型是严格定义的概念的集合。这些概念精确地描述系统的静态特性、动态特性和完整性约束条件。因此数据模型通常由数据结构、数据操作和完整性约束三部分组成。 ① 数据结构：是所研究的对象类型的集合，是对系统的静态特性的描述。 ② 数据操作：是指对数据库中各种对象（型）的实例（值）允许进行的操作的集合，包括操作及有关的操作规则，是对系统动态特性的描述。 ③ 数据的约束条件：是完整性规则的集合，完整性规则是给定的数据模型中数据及其联系所具有的制约和依存规则，用以限定符合数据模型的数据库状态以及状态的变化，以保证数据的正确、有效、相容。 *解析： 数据模型是数据库系统中最重要的概念之一。同学们必须通过《概论》的学习真正掌握 数据模型的概念和作用。 数据模型是数据库系统的基础。任何一个DBMS都以某一个数据模型为基础，或者说支持某一个数据模型。 数据库系统中模型有不同的层次。根据模型应用的不同目的，可以将模型分成两类或说两个层次：一是概念模型，是按用户的观点来对数据和信息建模，用于信息世界的建模，强调语义表达能力，概念简单清晰；另一是数据模型，是按计算机系统的观点对数据建模，用于机器世界，人们可以用它定义、操纵数据库中的数据。一般需要有严格的形式化定义和一组严格定义了语法和语义的语言，并有一些规定和限制，便于在机器上实现。'
              },
              {
                show: false,
                name: '试述概念模型的作用。',
                answer: '概念模型实际上是现实世界到机器世界的一个中间层次。概念模型用于信息世界的建模，是现实世界到信息世界的第一层抽象，是数据库设计人员进行数据库设计的有力工具，也是数据库设计人员和用户之间进行交流的语言。'
              },
              {
                show: false,
                name: '定义并解释概念模型中以下术语： 实体，实体型，实体集，属性，码，实体联系图（E-R图）',
                answer: '实体：客观存在并可以相互区分的事物叫实体。 实体型：具有相同属性的实体具有相同的特征和性质，用实体名及其属性名集合来抽象和刻画同类实体称为实体型。 实体集：同型实体的集合称为实体集。 属性：实体所具有的某一特性，一个实体可由若干个属性来刻画。 码：唯一标识实体的属性集称为码。 实体联系图：E-R图提供了表示实体型、属性和联系的方法： • 实体型：用矩形表示，矩形框内写明实体名。 • 属性：用椭圆形表示，并用无向边将其与相应的实体连接起来。 •联系：用菱形表示，菱形框内写明联系名，并用无向边分别与有关实体连接起来，同时在无向边旁标上联系的类型（1 : 1，1 : n或m : n）。'
              },
              {
                show: false,
                name: '试述网状、层次数据库的优缺点。',
                answer: '层次模型的优点主要有： 1）模型简单，对具有一对多的层次关系的部门描述非常自然、直观，容易理解，这是层次数据库的突出优点； 2） 用层次模型的应用系统性能好，特别是对于那些实体间联系是固定的预先定义好的应用，采用层次模型来实现，其性能优于关系模型； 3） 次数据模型提供了良好的完整性支持。 层次模型的缺点主要有： 1） 现实世界中很多联系是非层次性的，如多对多联系、一个结点具有多个双亲等，层次模型不能自然地表示这类联系。只能通过引入冗余数据或引入虚拟结点来解决。 2 ）对插入和删除操作的限制比较多。 3）查询子女结点必须通过双亲结点。 网状模型： 网状数据模型的优点主要有： 1） 能够更为直接地描述现实世界，如一个结点可以有多个双亲。 2）具有良好的性能，存取效率较高。 网状数据模型的缺点主要有： 1） 结构比较复杂，而且随着应用环境的扩大，数据库的结构就变得越来越复杂，不利于最终用户掌握。 2）其DDL，DML语言复杂，用户不容易使用。 由于记录之间联系是通过存取路径实现的，应用程序在访问数据时必须选择适当的存取路径。因此，用户必须了解系统结构的细节，加重了编写应用程序的负担。'
              },
              {
                show: false,
                name: '试述关系模型的概念，定义并解释以下术语： （1）关系 （2）属性 （3）域 （4）元组 （5）主码 （6）分量 （7）关系模式',
                answer: '关系模型由关系数据结构、关系操作集合和关系完整性约束三部分组成。在用户观点下，关系模型中数据的逻辑结构是一张二维表，它由行和列组成。 （１） 关系：一个关系对应通常说的一张表。 （２） 属性：表中的一列即为一个属性； （３） 域：属性的取值范围； （４） 元组：表中的一行即为一个元组； （５） 码：表中的某个属性组，它可以唯一确定一个元组； （６） 分量：元组中的一个属性值； （７） 关系模式：对关系的描述，一般表示为 　　　　　　　　关系名（属性１，属性２，•••，属性n）。'
              },
              {
                show: false,
                name: '试述关系数据库的特点。',
                answer: '关系数据模型具有下列优点： • 关系模型与非关系模型不同，它是建立在严格的数学概念的基础上的。 • 关系模型的概念单一。无论实体还是实体之间的联系都用关系表示。操作的对象和操作的结果都是关系。所以其数据结构简单、清晰，用户易懂易用。 • 关系模型的存取路径对用户透明，从而具有更高的数据独立性、更好的安全保密性，也简化了程序员的工作和数据库开发建立的工作。 当然，关系数据模型也有缺点，其中最主要的缺点是，由于存取路径对用户透明，查询效率往往不如非关系数据模型。因此为了提高性能，必须对用户的查询请求进行优化，增加了开发数据库管理系统软件的难度。'
              },
              {
                show: false,
                name: '试述数据库系统三级模式结构，这种结构的优点是什么？',
                answer: '数据库系统的三级模式结构由外模式、模式和内模式组成。（参见书上图1.29） 外模式，亦称子模式或用户模式，是数据库用户（包括应用程序员和最终用户）能够看见和使用的局部数据的逻辑结构和特征的描述，是数据库用户的数据视图，是与某一应用有关的数据的逻辑表示。 模式，亦称逻辑模式，是数据库中全体数据的逻辑结构和特性的描述，是所有用户的 公共数据视图。模式描述的是数据的全局逻辑结构。外模式涉及的是数据的局部的逻辑结构，通常是模式的子集。 内模式，亦称存储模式，是数据在数据库系统内部的表示，即对数据的物理结构和存 储方式的描述。 数据库系统的三级模式是对数据的三个抽象级别，它把数据的具体组织留给DBMS管理，使用户能逻辑抽象地处理数据，而不必关心数据在计算机中的表示和存储。 为了能够在内部实现这三个抽象层次的联系和转换，数据库系统在这三级模式之间提供了两层映象：外模式／模式映象和模式／内模式映象。正是这两层映象保证了数据库系统中的数据能够具有较高的逻辑独立性和物理独立性。'
              },
              {
                show: false,
                name: 'DBA的职责是什么？',
                answer: '负责全面地管理和控制数据库系统。具体职责包括： ① 决定数据库的信息内容和结构； ② 决定数据库的存储结构和存取策略； ③ 定义数据的安全性要求和完整性约束条件； ④ 监督和控制数据库的试用和运行； ⑤ 数据库系统的改进和重组。'
              },
              {
                show: false,
                name: '系统分析员、数据库设计人员、应用程序员的职责是什么？',
                answer: '系统分析员负责应用系统的需求分析和规范说明，系统分析员要和用户及DBA相结合，确定系统的硬件软件配置，并参与数据库系统的概要设计。 数据库设计人员负责数据库中数据的确定、数据库各级模式的设计。数据库设计人员必须参加用户需求调查和系统分析，然后进行数据库设计。在很多情况下，数据库设计人员就由数据库管理员担任。 应用程序员负责设计和编写应用系统的程序模块，并进行调试和安装。'
              },
              {
                show: false,
                name: '数据库数据具有__________、__________和__________三个基本特点。',
                answer: '永久存储 有组织 可共享'
              },
              {
                show: false,
                name: '数据库管理系统是数据库系统的一个重要组成部分，它的功能包括__________、__________、__________、__________。',
                answer: '数据定义功能 数据操纵功能 数据库的运行管理 数据库的建立和维护功能'
              },
              {
                show: false,
                name: '数据库系统是指在计算机系统中引入数据库后的系统，一般由__________、__________、__________和__________构成。',
                answer: '数据库 数据库管理系统（及其开发工具） 应用系统 数据库管理员'
              },
              {
                show: false,
                name: '数据库管理技术的发展是与计算机技术及其应用的发展联系在一起的，它经历了三个阶段：__________阶段，__________阶段和__________阶段。',
                answer: '人工管理 文件系统 数据库系统'
              },
              {
                show: false,
                name: '数据库具有数据结构化、最小的__________、较高的__________等特点 。',
                answer: '冗余度 数据独立性'
              },
              {
                show: false,
                name: 'DBMS还必须提供__________保护、__________检查、__________、__________等数据控制功能。',
                answer: ' 数据的安全性 数据的完整性 并发控制 数据库恢复'
              },
              {
                show: false,
                name: '模式（Schema）是数据库中全体数据的__________和__________的描述，它仅仅涉及到__________的描述，不涉及到具体的值。',
                answer: '逻辑结构 特征 型'
              },
              {
                show: false,
                name: '三级模式之间的两层映象保证了数据库系统中的数据能够具有较高的__________和__________。',
                answer: '逻辑独立性 物理独立性'
              },
              {
                show: false,
                name: '根据模型应用的不同目的，可以将这些模型划分为两类，它们分别属于两个不同的层次。第一类是__________，第二类是__________。',
                answer: '概念模型 数据模型'
              },
              {
                show: false,
                name: '数据模型的三要素是指__________，__________，__________。实际数据库系统中所支持的主要数据模型是__________，__________，__________。',
                answer: '数据结构 数据操作 完整性约束 关系模型 层次模型 网状模型'
              },
              {
                show: false,
                name: '数据模型中的__________是对数据系统的静态特征描述，包括数据结构和数据间联系的描述，__________是对数据库系统的动态特征描述，是一组定义在数据上的操作，包括操作的涵义、操作符、运算规则及其语言等。',
                answer: '数据结构 数据操作'
              },
              {
                show: false,
                name: '用树型结构表示实体类型及实体间联系的数据模型称为__________模型，上一层的父结点和下一层的子结点之间的联系是 的联系。',
                answer: '层次 一对多'
              },
              {
                show: false,
                name: '用有向图结构表示实体类型及实体间联系的数据模型称为__________模型，数据之间的联系通常通过__________实现。',
                answer: '网状 指针'
              },
              {
                show: false,
                name: '__________是目前最常用也是最重要的一种数据模型。采用该模型作为数据的组织方式的数据库系统称为__________。',
                answer: '关系模型 关系数据库系统'
              },
              {
                show: false,
                name: '关系的完整性约束条件包括三大类：__________、__________和__________。',
                answer: '实体完整性 参照完整性 用户定义的完整性'
              }
            ]
          },
          {
            id: 2,
            name: '第二章 关系数据库',
            contents: [
              {
                show: false,
                name: '关系数据模型中，二维表的列称为________，二维表的行称为________。',
                answer: '属性 记录或元组'
              },
              {
                show: false,
                name: '用户选作元组标识的一个候选码为________，其属性不能取________。',
                answer: '主码 空值'
              },
              {
                show: false,
                name: '关系代数运算中，传统的集合运算有_____，_____，_____，_____。',
                answer: '笛卡尔积 并 交 差'
              },
              {
                show: false,
                name: '关系代数运算中，基本的运算是________，________，________，________，________。',
                answer: '并 差 笛卡尔积 选择 投影'
              },
              {
                show: false,
                name: '关系代数运算中，专门的关系运算有________，________，________。',
                answer: '选择 投影 连接'
              },
              {
                show: false,
                name: '关系数据库中基于数学上的两类运算是________和________。',
                answer: '关系代数 关系演算'
              },
              {
                show: false,
                name: '关系代数中，从两个关系中找出相同元组的运算称为________运算。',
                answer: '交'
              },
              {
                show: false,
                name: 'R S表示R与S的________。',
                answer: '自然连接'
              },
              {
                show: false,
                name: '设有学生关系：S（XH，XM，XB，NL，DP）。在这个关系中，XH表示学号，XM表示姓名，XB表示性别，NL表示年龄，DP表示系部。查询学生姓名和所在系的投影操作的关系运算式是________________。',
                answer: 'π2,5（S） 或 πXM,DP（S）'
              },
              {
                show: false,
                name: '在“学生-选课-课程”数据库中的3个关系如下：S（S#，SNAME，SEX，AGE）；SC（S#，C#，GRADE）; C（C#，CNAME，TEACHER），查找选修“数据库技术”这门课程学生的学生名和成绩，若用关系代数表达式来表示为________________。',
                answer: 'πSNAME,GRADE(S(SC(σCNAME=’数据库技术’©)))'
              },
              {
                show: false,
                name: '已知系（系编号，系名称，系主任，电话，地点）和学生（学号，姓名，性别，入学日期，专业，系编号）两个关系，系关系的主码是________，系关系的外码是________，学生关系的主码是________，学生关系的外码是________。',
                answer: '系编号 没有 学号 系编号'
              },
              {
                show: false,
                name: '试述关系模型的三个组成部分。',
                answer: '关系模型由关系数据结构、关系操作集合和关系完整性约束三部分组成。'
              },
              {
                show: false,
                name: '试述关系数据语言的特点和分类。',
                answer: '关系数据语言可以分为三类： 关系代数语言，例如ISBL 关系演算语言，包括：元组关系演算语言，例如APLHA，QUEL 域关系演算语言，例如QBE 具有关系代数和关系演算双重特点的语言 例如SQL 这些关系数据语言的共同特点是，具有完备的表达能力，是非过程化的集合操作语言，功能强，能够嵌入高级语言中使用。'
              },
              {
                show: false,
                name: '定义并理解下列术语，说明它们之间的联系与区别: （1） 域，笛卡尔积，关系，元组，属性 （2）主码，候选码，外部码 (3)关系模式，关系，关系数据库',
                answer: '域：域是一组具有相同数据类型的值的集合。 笛卡尔积： 给定一组域D1，D2，…，Dn，这些域中可以有相同的。这组域的笛卡尔积为： D1×D2×…×Dn＝｛ （d1，d2，…，dn）｜diDi，i＝1，2，…，n ｝ 其中每一个元素（d1，d2，…，dn）叫作一个n元组（n-tuple）或简称元组（Tuple）。 元素中的每一个值di叫作一个分量（Component）。 关系：在域D1，D2，…，Dn上笛卡尔积D1×D2×…×Dn的子集称为关系，表示为 R（D1，D2，…，Dn） 元组：关系中的每个元素是关系中的元组。 属性：关系也是一个二维表，表的每行对应一个元组，表的每列对应一个域。由于域可 以相同，为了加以区分，必须对每列起一个名字，称为属性（Attribute）。 候选码：若关系中的某一属性组的值能唯一地标识一个元组，则称该属性组为候选码（Candidate key）。 主码：若一个关系有多个候选码，则选定其中一个为主码（Primary key）。 外部码：设F是基本关系R的一个或一组属性，但不是关系R的码，如果F与基本关系S的主码Ks相对应，则称F是基本关系R的外部码（Foreign key），简称外码。 基本关系R称为参照关系（Referencing relation），基本关系S称为被参照关系（Referenced relation）或目标关系（Target relation）。关系R和S可以是相同的关系。 关系模式：关系的描述称为关系模式（Relation Schema）。它可以形式化地表示为： R（U，D，dom，F） 其中R为关系名，U为组成该关系的属性名集合，D为属性组U中属性所来自的域，dom为属性向域的映象集合，F为属性间数据的依赖关系集合。 关系：在域D1，D2，…，Dn上笛卡尔积D1×D2×…×Dn的子集称为关系，表示为 R（D1，D2，…，Dn） 关系是关系模式在某一时刻的状态或内容。关系模式是静态的、稳定的，而关系是动态的、随时间不断变化的，因为关系操作在不断地更新着数据库中的数据。 关系数据库：关系数据库也有型和值之分。关系数据库的型也称为关系数据库模式，是对关系数据库的描述，它包括若干域的定义以及在这些域上定义的若干关系模式。关系数据库的值是这些关系模式在某一时刻对应的关系的集合，通常就称为关系数据库。'
              },
              {
                show: false,
                name: '试述关系模型的完整性规则。在参照完整性中，为什么外部码属性的值也可以为空？什么情况下才可以为空？',
                answer: '关系模型的完整性规则是对关系的某种约束条件。关系模型中可以有三类完整性约束：实体完整性、参照完整性和用户定义的完整性。 其中实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统自动支持。 1) 实体完整性规则：若属性A是基本关系R的主属性，则属性A不能取空值。 2) 参照完整性规则：若属性（或属性组）F是基本关系R的外码，它与基本关系S的主码Ks相对应（基本关系R和S不一定是不同的关系），则对于R中每个元组在F上的值必 须为： • 或者取空值（F的每个属性值均为空值）； • 或者等于S中某个元组的主码值。 3) 用户定义的完整性是针对某一具体关系数据库的约束条件。它反映某一具体应用所涉及的数据必须满足的语义要求。 　　 在参照完整性中，外部码属性的值可以为空，它表示该属性的值尚未确定。但前提条件是该外部码属性不是其所在关系的主属性。 例如，在下面的“学生”表中，“专业号”是一个外部码，不是学生表的主属性，可以为空。其语义是，该学生的专业尚未确定。 学生（学号，姓名，性别，专业号，年龄） 专业（专业号，专业名） 而在下面的“选修”表中的“课程号”虽然也是一个外部码属性，但它又是“选修”表的主属性，所以不能为空。因为关系模型必须满足实体完整性。 课程（课程号，课程名，学分） 选修（学号，课程号，成绩）'
              },
              {
                show: false,
                name: '等值连接与自然连接的区别是什么？',
                answer: '连接运算中有两种最为重要也最为常用的连接，一种是等值连接（equi-join），另一种是自然连接（Natural join）。 Θ为“＝”的连接运算称为等值连接。 它是从关系R与S的笛卡尔积中选取A、B属性值相等的那些元组。即等值连接为： R A=B S = { tｒ tｓ| tｒ∈R ∧ tｓ∈S ∧ tｒ[A] = tｓ[B] } 　　自然连接（Natural join）是一种特殊的等值连接，它要求两个关系中进行比较的分量必须是相同的属性组，并且要在结果中把重复的属性去掉。即若R和S具有相同的属性组B，则自然连接可记作： R S = { tｒ tｓ| tｒ∈R ∧ tｓ∈S ∧ tｒ[B] = tｓ[B] }'
              },
              {
                show: false,
                name: '代数的基本运算有哪些？如何用这些基本运算来表示其他的关系基本运算？',
                answer: '在八种关系代数运算中，并、差、笛卡尔积、投影和选择五种运算为基本的运算。其他三种运算，即交、连接和除，均可以用五种基本运算来表达。 交运算： R  S = R-(R-S) 连接运算 R S = AB(RS) AB 除运算：R（X，Y） S（Y，Z） = X® - X ( X®  Y(S) R ) X、Y、Z 为属性组，R中的Y和S中的Y可以有不同的属性名，但必须出自相同的域集。'
              }
            ]
          },
          {
            id: 3,
            name: '第三章 关系数据库标准语言SQL',
            contents: [
              {
                show: false,
                name: 'SQL的中文全称是________________。',
                answer: '结构化查询语言'
              },
              {
                show: false,
                name: 'SQL语言除了具有数据查询和数据操纵功能之外，还具有________和________的功能，它是一个综合性的功能强大的语言。',
                answer: '数据定义 数据控制'
              },
              {
                show: false,
                name: '在关系数据库标准语言SQL中，实现数据检索的语句命令是________。',
                answer: 'SELECT'
              },
              {
                show: false,
                name: '在SQL语言的结构中，________有对应的物理存储，而________没有对应的物理存储。',
                answer: '基本表 视图'
              },
              {
                show: false,
                name: '关系R（A，B，C）和S（A，D，E，F），R和S有相同属性A，若将关系代数表达式：πR.A,R.B,S.D,S.F（R∞ S）用SQL语言的查询语句表示，则为： SELECT R.A,R.B,S.D,S.F FROM R,S WHERE________________。',
                answer: 'R.A=S.A'
              },
              {
                show: false,
                name: '视图是从________中导出的表，数据库中实际存放的是视图的________。',
                answer: '基本表或视图 定义'
              },
              {
                show: false,
                name: '关系数据操作语言（DML）的特点是：操作对象与结果均为关系、操作的________、语言一体化并且是建立在数学理论基础之上。',
                answer: '非过程性强'
              },
              {
                show: false,
                name: '设有如下关系表R、S、T： R（BH，XM，XB，DWH） S（DWH，DWM） T（BH，XM，XB，DWH） （1） 实现R∪T的SQL语句是__。 （2） 实现σ DWH=’100’ ® 的SQL语句是__。 （3） 实现πXM,XB ® 的SQL语句是__。 （4） 实现πXM,DWH (σ XB=’女’ ®) 的SQL语句是__。 （5） 实现R∞S的SQL语句是__。 （6） 实现πXM,XB,DWH (σ XB=’男’ (R∞S)) 的SQL语句是__。',
                answer: '(1) SELECT * FROM R UNION SELECT * FROM T (2) SELECT * FROM R WHERE DWH=’100’ (3) SELECT XM , XB FROM R (4) SELECT XM,DWH FROM R WHERE XB=’女’ (5) SELECT R.BH , R.XM , R.XB , R.DWH , S.DWM FROM R , S WHERE R.DWH=S.DWH (6) SELECT R.XM , R.XB , S.DWH FROM R , S WHERE R.DWH=S.DWH AND R.XB=’男’'
              },
              {
                show: false,
                name: '设有如下关系表R：R（NO,NAME,SEX,AGE,CLASS）,主码是NO （1） 插入一个记录（25，“李明”，“男”，21，“95031”）；___。 （2） 插入“95031”班学号为30，姓名为“郑和”的学生记录；____。 （3） 将学号为10的学生姓名改为“王华”；_____。 （4） 将所有“95101”班号改为“95091”；_____。 （5） 删除学号为20的学生记录；____。 （6） 删除姓“王”的学生记录；___。',
                answer: '(1) INSERT INTO R VALUES(25，"李明"，"男"，21，"95031") (2) INSERT INTO R(NO，NAME，CLASS) VALUES(30，"郑和"，"95031") (3) UPDATE R SET NAME="王华" WHERE NO=10 (4) UPDATE R SET CLASS="95091" WHERE CLASS="95101" (5) DELETE FROM R WHERE NO=20 (6) DELETE FROM R WHERE NAME LIKE “王％'
              },
              {
                show: false,
                name: '试述SQL语言的特点。',
                answer: '（1）综合统一。 SQL语言集数据定义语言DDL、数据操纵语言DML、数据控制语言DCL的功能于一体。 （2）高度非过程化。用SQL语言进行数据操作，只要提出“做什么”，而无须指明“怎么做”，因此无需了解存取路径，存取路径的选择以及SQL语句的操作过程由系统自动完成。 （3）面向集合的操作方式。SQL语言采用集合操作方式，不仅操作对象、查找结果可以是元组的集合，而且一次插入、删除、更新操作的对象也可以是元组的集合。 （4）以同一种语法结构提供两种使用方式。SQL语言既是自含式语言，又是嵌入式语言。作为自含式语言，它能够独立地用于联机交互的使用方式，也能够嵌入到高级语言程序中，供程序员设计程序时使用。 （5）语言简捷，易学易用。'
              },
              {
                show: false,
                name: '试述SQL的定义功能。',
                answer: 'SQL的数据定义功能包括定义表、定义视图和定义索引。 SQL语言使用CREATE TABLE语句建立基本表，ALTER TABLE语句修改基本表定义，DROP TABLE语句删除基本表； 使用CREATE INDEX语句建立索引， DROP INDEX语句删除索引； 使用CREATE VIEW命令建立视图，DROP VIEW语句删除视图。'
              },
              {
                show: false,
                name: '用SQL语句建立第2章习题5中的四个表。',
                answer: '对于S表：S( SNO，SNAME，STATUS，CITY)； 建S表 CREATE TABLE S (SNO CHAR(3)， SNAME CHAR(10)， STATUS CHAR(2)， CITY CHAR(10))； P(PNO，PNAME，COLOR，WEIGHT)； 建P表 CREATE TABLE P (PNO CHAR(3)， PNAME CHAR(10)， COLOR CHAR(4)， WEIGHT INT)； J(JNO，JNAME，CITY)； 建J表 CREATE TABLE J (JNO CHAR(3)， JNAME CHAR(10)， CITY CHAR(10))； SPJ(SNO，PNO，JNO，QTY)； 建SPJ表 CREATE TABLE SPJ (SNO CHAR(3)， PNO CHAR(3)， JNO CHAR(3)， QTY INT)；'
              },
              {
                show: false,
                name: '针对上题中建立的四个表试用SQL语言完成第2章习题5中的查询。。',
                answer: '（1） 求供应工程J1零件的供应商号码SNO； SELECT SNO FROM SPJ WHERE JNO=‘J1’； （2） 求供应工程J1零件P1的供应商号码SNO； SELECT SNO FROM SPJ WHERE JNO=‘J1’ AND PNO=‘P1’； （3） 求供应工程J1零件为红色的供应商号码SNO； SELECT SNO /*这是嵌套查询*/ FROM SPJ WHERE JNO=‘J1’ AND PNO IN /*找出红色的零件的零件号码PNO */ (SELECT PNO FROM P /*从P表中找*/ WHERE COLOR=‘红’)； 或 SELECT SNO FROM SPJ，P /*这是两表连接查询*/ WHERE JNO=‘J1’ /*这是复合条件连接查询*/ AND SPJ.PNO=P.PNO AND COLOR=‘红’； （4） 求没有使用天津供应商生产的红色零件的工程号JNO； *解析： 读者可以对比第2章习题5中用ALPHA语言来完成该查询的解答。如果大家理解了有关该题的解析说明，那么本题的解答可以看成是把关系演算用SQL来表示的过程。 GET W (J.JNO): SPJX( SPJX .JNO=J.JNO  SX ( SX.SNO=SPJX .SNO  SX .CITY=\'天津\'  PX(PX .PNO=SPJX .PNO  PX .COLOR=\' 红\' )) 这里的第一种解法是使用多重嵌套查询，第二种方法的子查询是一个多表连接。 注意：从J表入手，以包含那些尚未使用任何零件的工程号。 SELECT JNO FROM J WHERE NOT EXISTS (SELECT * FROM SPJ WHERE SPJ.JNO=J.JNO AND SNO IN /*天津供应商的SNO*/ (SELECT SNO FROM S WHERE CITY=‘天津’) AND PNO IN /*红色零件的PNO*/ (SELECT PNO FROM P WHERE COLOR=‘红’))； 或 SELECT JNO FROM J WHERE NOT EXISTS (SELECT * FROM SPJ, S, P WHERE SPJ.JNO=J.JNO AND SPJ.SNO=S.SNO AND SPJ.PNO=P.PNO AND S.CITY=‘天津’ AND P. COLOR=‘红’)； //删除： 本例中父查询和子查询均引用了Student表，可以像自身连接那样用别名将父查询中的Student表与子查询中的Student表区分开：// （5） 求至少用了供应商S1所供应的全部零件的工程号JNO (类似于P113例44)。 *解析： 本查询的解析可以参考第二章第5题，用ALPHA语言的逻辑蕴函来表达。 上述查询可以抽象为: 要求这样的工程x，使 (y) p  q为真。 即： 对于所有的零件y，满足逻辑蕴函 p  q： P表示谓词：“供应商S1供应了零件y” q表示谓词：“工程x选用了零件y” 即 只要“供应商S1供应了零件y”为真，则“工程x选用了零件y”为真。 逻辑蕴函可以转换为等价形式： (y)p  q≡  (y ((p  q ))≡ (y (( p∨ q)≡ y(p∧q) 它所表达的语义为：不存在这样的零件y，供应商S1供应了y，而工程x没有选用y。 用SQL语言表示如下： SELECT DISTINCT JNO FROM SPJ SPJZ WHERE NOT EXISTS /*这是一个相关子查询 */ (SELECT * /*父查询和子查询均引用了SPJ表*/ FROM SPJ SPJX /*用别名将父查询与子查询中的SPJ表区分开*/ WHERE SNO=\'S1\' AND NOT EXISTS (SELECT * FROM SPJ SPJY WHERE SPJY.PNO=SPJX.PNO AND SPJY.JNO=SPJZ.JNO AND SPJY.SNO=’S1’））；'
              },
              {
                show: false,
                name: '针对习题3中的四个表试用SQL语言完成以下各项操作： (1) 找出所有供应商的姓名和所在城市。 (2) 找出所有零件的名称、颜色、重量。 (3) 找出使用供应商S1所供应零件的工程号码。 (4) 找出工程项目J2使用的各种零件的名称及其数量。 (5) 找出上海厂商供应的所有零件号码。 (6) 找出使用上海产的零件的工程名称。 (7) 找出没有使用天津产的零件的工程号码。 (8) 把全部红色零件的颜色改成蓝色。 (9) 由S5供给J4的零件P6改为由S3供应，请作必要的修改。。',
                answer: '(1) 找出所有供应商的姓名和所在城市。 SELECT SNAME, CITY FROM S; (2) 找出所有零件的名称、颜色、重量。 SELECT PNAME, COLOR, WEIGHT FROM P; (3) 找出使用供应商S1所供应零件的工程号码。 SELECT JNO FROM SPJ WHERE SNO=‘S1’; (4) 找出工程项目J2使用的各种零件的名称及其数量。 SELECT P.PNAME, SPJ.QTY FROM P, SPJ WHERE P.PNO=SPJ.PNO AND SPJ.JNO=\'J2\'; (5) 找出上海厂商供应的所有零件号码。 SELECT DISTINCT PNO FROM SPJ WHERE SNO IN （SELECT SNO FROM S WHERE CITY=\'上海\'）; (6) 找出使用上海产的零件的工程名称。 SELECT JNAME FROM J, SPJ, S WHERE J. JNO=SPJ. JNO AND SPJ. SNO=S.SNO AND S.CITY=\'上海\'; 或 SELECT JNAME FROM J WHERE JNO IN (SELECT JNO FROM SPJ, S WHERE SPJ. SNO=S.SNO AND S.CITY=\'上海\'); (7) 找出没有使用天津产的零件的工程号码。 SELECT JNO FROM J WHERE NOT EXISTS (SELECT * FROM SPJ WHERE SPJ.JNO=J.JNO AND SNO IN (SELECT SNO FROM S WHERE CITY=‘天津’))； 或 SELECT JNO FROM J WHERE NOT EXISTS (SELECT * FROM SPJ, S WHERE SPJ.JNO=J.JNO AND SPJ.SNO=S.SNO AND S.CITY=‘天津’)； (8) 把全部红色零件的颜色改成蓝色。 UPDATE P SET COLOR=\'蓝\' WHERE COLOR=\'红\' ; (9) 由S5供给J4的零件P6改为由S3供应，请作必要的修改。 UPDATE SPJ SET SNO=\'S3\' WHERE SNO=\'S5\' AND JNO=\'J4\' AND PNO=\'P6\'; (10) 从供应商关系中删除S2的记录，并从供应情况关系中删除相应的记录。 DELETE FROM SPJ WHERE SNO=\'S2\'; DELETE FROM S WHERE SNO=\'S2\'; *解析：注意删除顺序，应该先从SPJ表中删除供应商S2所供应零件的记录，然后从从S表中删除S2。(11) 请将 (S2，J6，P4，200) 插入供应情况关系。 INSERT INTO SPJ(SNO, JNO, PNO, QTY) /*INTO子句中指明列名*/ VALUES (S2，J6，P4，200); /*插入的属性值与指明列要对应*/ 或 INSERT INTO SPJ /*INTO子句中没有指明列名*/ VALUES (S2，P4，J6，200); /*插入的记录在每个属性列上有值*/ /*并且属性列要和表定义中的次序对应*/'
              },
              {
                show: false,
                name: '什么是基本表？什么是视图？两者的区别和联系是什么？。',
                answer: '基本表是本身独立存在的表，在SQL中一个关系就对应一个表。 视图是从一个或几个基本表导出的表。视图本身不独立存储在数据库中，是一个虚表。即数据库中只存放视图的定义而不存放视图对应的数据，这些数据仍存放在导出视图的基本表中。视图在概念上与基本表等同，用户可以如同基本表那样使用视图，可以在视图上再定义视图。'
              },
              {
                show: false,
                name: '试述视图的优点。。',
                answer: '(1)视图能够简化用户的操作。 (2)视图使用户能以多种角度看待同一数据。 (3)视图对重构数据库提供了一定程度的逻辑独立性。 (4)视图能够对机密数据提供安全保护。'
              },
              {
                show: false,
                name: '所有的视图是否都可以更新？为什么？。',
                answer: '不是。视图是不实际存储数据的虚表，因此对视图的更新，最终要转换为对基本表的更新。因为有些视图的更新不能唯一地有意义地转换成对相应基本表的更新，所以，并不是所有的视图都是可更新的。如《概论》3.5.1中的视图S_G（学生的学号及他的平均成绩） CREAT VIEW S_G(Sno，Gavg) AS SELECT Sno，AVG(Grade) /*设SC表中“成绩”列Grade为数字型*/ FROM SC GROUP BY Sno； 要修改平均成绩，必须修改各科成绩，而我们无法知道哪些课程成绩的变化导致了平均成绩的变化。'
              },
              {
                show: false,
                name: '哪类视图是可以更新的，哪类视图是不可更新的？ 各举一例说明。',
                answer: '基本表的行列子集视图一般是可更新的。如《概论》3.5.3中的例1。 若视图的属性来自集函数、表达式，则该视图肯定是不可以更新的。 如《概论》3.5.3中的S_G视图。'
              },
              {
                show: false,
                name: '请为三建工程项目建立一个供应情况的视图，包括供应商代码（SNO）、零件代码（PNO）、供应数量（QTY）。针对该视图完成下列查询： (1) 找出三建工程项目使用的各种零件代码及其数量。 (2) 找出供应商S1的供应情况。',
                answer: '建视图： CREATE VIEW V_SPJ AS SELECT SNO, PNO, QTY FROM SPJ WHERE JNO= （SELECT JNO FROM J WHERE JNAME=\'三建\'）; 对该视图查询： (1) 找出三建工程项目使用的各种零件代码及其数量。 SELECT PNO, QTY FROM V_SPJ; (2) 找出供应商S1的供应情况。 SELECT PNO, QTY /* S1供应三建工程的零件号和对应的数量*/ FROM V_SPJ WHERE SNO=\'S1\';'
              },
              {
                show: false,
                name: '针对习题3建立的表，用SQL语言完成以下各项操作： (1) 把对表S的INSERT权限授予用户张勇，并允许他再将此权限授予其他用户。 (2) 把查询SPJ表和修改QTY属性的权限授给用户李天明。',
                answer: '(1) 把对表S的INSERT权限授予用户张勇，并允许他再将此权限授予其他用户。 GRANT INSERT ON TABLE S TO 张勇 WITH GRANT OPTION; (2) 把查询SPJ表和修改QTY属性的权限授给用户李天明。 GRANT SELECT, UPDATE(QTY) ON TABLE SPJ TO 李天明；'
              },
              {
                show: false,
                name: '在嵌入式SQL中是如何区分SQL语句和主语言语句的？',
                answer: '在SQL语句前加上前缀EXEC SQL。SQL语句的结束标志则随主语言的不同而不同。 例如在PL/1和C中以分号（；）结束，在COBOL中以END-EXEC结束。'
              },
              {
                show: false,
                name: '在嵌入式SQL中是如何解决数据库工作单元与源程序工作单元之间通信的？',
                answer: '数据库工作单元与源程序工作单元之间的通信主要包括： （1）SQL通信区SQLCA，用来向主语言传递SQL语句的执行状态信息，使主语言能够根据此信息控制程序流程。 （2）主变量（Host Variable），1）用来实现主语言向SQL语句提供参数。 2）将SQL语句查询数据库的结果交主语言进一步处理 （3）游标（Cursor），解决集合性操作语言与过程性操作语言的不匹配通过游标逐一获取记录，并赋给主变量，交由主语言进一步处理。 （详细解释参见《概论》3.7.2 ）'
              },
              {
                show: false,
                name: '在嵌入式SQL中是如何协调SQL语言的集合处理方式和主语言的单记录处理方式的？',
                answer: '用游标来协调这两种不同的处理方式。游标区是系统为用户开设的一个数据缓冲区，存放SQL语句的执行结果，每个游标区都有一个名字。用户可以通过游标逐一获取记录，并赋给主变量，交由主语言进一步处理。'
              }
            ]
          },
          {
            id: 4,
            name: '第四章 关系系统及其查询优化',
            contents: [
              {
                show: false,
                name: '试述查询优化的一般准则。',
                answer: '下面的优化策略一般能提高查询效率： （1）选择运算应尽可能先做。 （2）把投影运算和选择运算同时进行。 （3）把投影同其前或其后的双目运算结合起来执行。 （4）把某些选择同在它前面要执行的笛卡尔积结合起来成为一个连接运算。 （5）找出公共子表达式。 （6）选取合适的连接算法'
              },
              {
                show: false,
                name: '试述查询优化的一般步骤。',
                answer: '各个关系系统的优化方法不尽相同，大致的步骤可以归纳如下: （1）把查询转换成某种内部表示，通常用的内部表示是语法树。 （2）把语法树转换成标准(优化)形式。 即利用优化算法，把原始的语法树转换成优化的形式。 （3）选择低层的存取路径。 （4）生成查询计划，选择代价最小的。'
              },
              {
                show: false,
                name: '试给出各类关系系统的定义：最小关系系统；关系上完备的系统；全关系型的关系系统。',
                answer: '最小关系系统： 一个系统可定义为最小关系系统，当且仅当它： （1）支持关系数据库（关系数据结构）。 从用户观点看，关系数据库由表构成，并且只有表这一种结构。 （2）支持选择、投影和（自然）连接运算，对这些运算不必要求定义任何物理存取路径。 关系上完备的系统： 这类系统支持关系数据结构和所有的关系代数操作（或者功能上与关系代数等价的操作）。 全关系型的关系系统： 这类系统支持关系模型的所有特征。即不仅是关系上完备的而且支持数据结构中域的概念，支持实体完整性和参照完整性。'
              },
              {
                show: false,
                name: '试述全关系型系统应满足的十二条准则，以及十二条基本准则的实际意义和理论意义。',
                answer: '关系模型的奠基人E.F.Codd具体地给出了全关系型的关系系统应遵循的十二条基本准则。从实际意义上看，这十二条准则可以作为评价或购买关系型产品的标准。从理论意义上看，它是对关系数据模型的具体而又深入的论述，是从理论和实际紧密结合的高度对关系型DBMS的评述。 准则0 一个关系型的DBMS必须能完全通过它的关系能力来管理数据库。 准则1 信息准则。关系型DBMS的所有信息都应在逻辑一级上用一种方法即表中的值显式地表示。 准则2 保证访问准则。依靠表名、主码和列名的组合，保证能以逻辑方式访问关系数据库中的每个数据项(分量值)。 准则3 空值的系统化处理。全关系型的DBMS应支持空值的概念，并用系统化的方式处理空值。 准则4 基于关系模型的动态的联机数据字典。数据库的描述在逻辑级上应该和普通数据采用同样的表示方式，使得授权用户可以使用查询一般数据所用的关系语言来查询数据库的描述信息。 准则5 统一的数据子语言准则。 准则6 视图更新准则。所有理论上可更新的视图也应该允许由系统更新。 准则7 高级的插入、修改和删除操作。 准则8 数据物理独立性。无论数据库的数据在存储表示或存取方法上作任何变化，应用程序和终端活动都保持逻辑上的不变性。 准则9 数据逻辑独立性。当对基本关系进行理论上信息不受损害的任何改变时，应用程序和终端活动都保持逻辑上的不变性。 准则l0 数据完整性的独立性。关系数据库的完整性约束条件必须是用数据库语言定义并存储在数据字典中的，而不是在应用程序中加以定义的。 准则11 分布独立性。关系型DBMS具有分布独立性。 准则12 无破坏准则。如果一个关系系统具有一个低级(指一次一个记录)语言，则这个低级语言不能违背或绕过完整性准则。'
              },
              {
                show: false,
                name: '试述查询优化在关系数据库系统中的重要性和可能性。',
                answer: '重要性：关系系统的查询优化既是RDBMS实现的关键技术又是关系系统的优点所在。它减轻了用户选择存取路径的负担。用户只要提出“干什么”，不必指出“怎么干”。 查询优化的优点不仅在于用户不必考虑如何最好地表达查询以获得较好的效率，而且在于系统可以比用户程序的“优化”做得更好。 可能性： 这是因为： （1）优化器可以从数据字典中获取许多统计信息，例如各个关系中的元组数、关系中每个属性值的分布情况、这些属性上是否有索引、是什么索引，B+树索引还是HASH索引？唯一索引？组合索引？等等。优化器可以根据这些信息选择有效的执行计划，而用户程序则难以获得这些信息。 （2）如果数据库的物理统计信息改变了，系统可以自动对查询进行重新优化以选择相适应的执行计划。在非关系系统中必须重写程序，而重写程序在实际应用中往往是不太可能的。 （3）优化器可以考虑数十甚至数百种不同的执行计划，从中选出较优的一个，而程序员一般只能考虑有限的几种可能性。 （4）优化器中包括了很多复杂的优化技术，这些优化技术往往只有最好的程序员才能掌握。系统的自动优化相当于使得所有人都拥有这些优化技术。'
              }
            ]
          },
          {
            id: 5,
            name: '第五章 关系数据理论',
            contents: [
              {
                show: false,
                name: '在关系模式R（D，E，G）中，存在函数依赖关系{E→D，（D，G）→E}，则候选码是__________，关系模式R（D，E，G）属于____________。',
                answer: '（E，G），（D，G） 3NF'
              },
              {
                show: false,
                name: '理解并给出下列术语的定义： 函数依赖、部分函数依赖、完全函数依赖、传递依赖、候选码、主码、 外码、全码(All-key)、1NF、2NF、3NF、BCNF、多值依赖、4NF。',
                answer: '函数依赖：设R (U)是一个关系模式，U是R的属性集合，X和Y是U的子集。对于R (U)的任意一个可能的关系r，如果r中不存在两个元组，它们在X上的属性值相同， 而在Y上的属性值不同， 则称“X函数确定Y"或“Y函数依赖于X"，记作X→Y。 *解析： 1）函数依赖是最基本的一种数据依赖，也是最重要的一种数据依赖。 2）函数依赖是属性之间的一种联系，体现在属性值是否相等。由上面的定义可以知道，如果X→Y，则r中任意两个元组，若它们在X上的属性值相同，那么在Y上的属性值一定也相同。 3）我们要从属性间实际存在的语义来确定他们之间的函数依赖，即函数依赖反映了（描述了）现实世界的一种语义。 4）函数依赖不是指关系模式R的在某个时刻的关系（值）满足的约束条件，而是指R任何时刻的一切关系均要满足的约束条件。 答： 完全函数依赖、部分函数依赖：在R（U）中，如果X→Y，并且对于X的任何一个真子集X，都有X′→Y，则称Y对X完全函数依赖，记作： 若X→Y，但Y不完全函数依赖于X，则称Y对X部分函数依赖，记作： 传递依赖：在R（U）中，如果X →Y，（Y  X），Y →X，Y→Z，则称Z对X传递函数依赖。 候选码、主码： 设K为R中的属性或属性组合，若K → U则K为R的候选码（Candidate key）。若候选码多于一个，则选定其中的一个为主码（Primary key）。 *解析： 1） 这里我们用函数依赖来严格定义码的概念。在第二章中我们只是描述性地定义码（可以复习2.2.1）：若关系中的某一属性组的值能唯一地标识一个元组，则称该属性组为候选码（Candidate key）。 2）因为码有了严格定义，同学在学习了《概论》5.3数据依赖的公理系统后就可以从R的函数依赖集F出发，用算法来求候选码。 答： 外码：关系模式R中属性或属性组X并非R的码，但X是另一个关系模式的码，则称X是R的外部码（Foreign key）也称外码。 全码：整个属性组是码，称为全码（All-key）。 答： 1NF：如果一个关系模式R的所有属性都是不可分的基本数据项，则R∈1NF。 *解析：第一范式是对关系模式的最起码的要求。不满足第一范式的数据库模式不能称为关系数据库。 答： 2NF：若关系模式R∈1NF，并且每一个非主属性都完全函数依赖于R的码，则R∈2NF。 3NF：关系模式R 中若不存在这样的码X，属性组Y及非主属性Z（Z  Y）使得X→Y，（Y → X）Y→Z，成立，则称R  3NF。 BCNF：关系模式R 1NF。若X→Y且Y  X时X必含有码，则R  BCNF。 *解析： 同学们要真正理解这些范式的内涵。各种范式之间的联系：5NF 4NF BCNF 3NF 2NF lNF（《概论》上图5.2）。能够理解为什么有这种包含关系。 答： 多值依赖：设R（U）是属性集U上的一个关系模式。X，Y，Z是U的子集，并且Z=U-X-Y。关系模式R（U）中多值依赖X→→Y成立，当且仅当对R（U）的任一关系r，给定的一对（x，z）值，有一组Y的值，这组值仅仅决定于x值而与z值无关。 4NF：关系模式R  lNF，如果对于R的每个非平凡多值依赖X→→Y（Y  X），X都含有码，则称R  4NF。 *解析： 对于多值依赖的定义有多种。《概论》上定义 5.9后面又给出了一种等价的定义。习题中的第4题是另一种等价的定义。同学们可以对比不同的定义来理解多值依赖。选择自己容易理解的一种定义来掌握多值依赖概念。'
              },
              {
                show: false,
                name: '在关系模式R（A，C，D）中，存在函数依赖关系{ A→C，A→D }，则候选码是___________ ，关系模式R（A，C，D）最高可以达到_____________ 。',
                answer: 'A BCNF'
              },
              {
                show: false,
                name: '试由Armostrong公理系统推导出下面三条推理规则： (1) 合并规则：若X→Z，X→Y，则有X→YZ (2) 伪传递规则：由X→Y，WY→Z有XW→Z (3) 分解规则：X→Y，Z Y，有X→Z',
                answer: '（1） 已知X→Z，由增广律知XY→YZ，又因为X→Y，可得XX→XY→YZ，最后根据传递律得X→YZ。 （2） 已知X→Y，据增广律得XW→WY，因为WY→Z，所以XW→WY→Z，通过传递律可知XW→Z。 （3） 已知Z Y，根据自反律知Y→Z，又因为X→Y，所以由传递律可得X→Z。'
              },
              {
                show: false,
                name: '关于多值依赖的另一种定义是： 给定一个关系模式R（X，Y，Z），其中X，Y，Z可以是属性或属性组合。 设x∈X，y∈Y，z∈Z，xz在R中的像集为： Yx z = {r.Y | r.X=x ∧ r.Z = z ∧ rR} 定义 R（X，Y，Z）当且仅当Yxz =Yxz′对于每一组（x，z，z′）都成立，则Y对X多值依赖，记作X→→Y。这里，允许Z为空集，在Z为空集时，称为平凡的多值依赖。 请证明这里的定义和《概论》5.2.7节中定义5.9是等价的。',
                answer: '设Yxz=Yxz’对于每一组（x，z，z′）都成立，现证其能推出定义5.9的条件： 设s、t是关系r中的两个元组，s[X]= t[X]，由新定义的条件知对于每一个z值，都对应相同的一组y值。这样一来，对相同的x值，交换y值后所得的元组仍然属于关系r，即定义5.9的条件成立； 如果定义5.9的条件成立，则对相同的x值，交换y值后所得的元组仍然属于关系r，由于任意性及其对称性，可知每个z值对应相同的一组y值，所以Yxz=Yxz’对于每一组（x，z，z′）都成立。 综上可知，新定义和定义5.9的条件是等价的，所以新定义和定义5.9是等价的。'
              },
              {
                show: false,
                name: '试举出三个多值依赖的实例。',
                answer: '（1） 关系模式MSC（M，S，C）中，M表示专业，S表示学生，C表示该专业的必修课。假设每个专业有多个学生，有一组必修课。设同专业内所有学生的选修的必修课相同，实例关系如下。按照语义对于M的每一个值M i，S有一个完整的集合与之对应而不问C取何值，所以M→→S。由于C与S的完全对称性，必然有M→→C成立。 （2） 关系模式ISA（I，S，A）中，I表示学生兴趣小组，S表示学生，A表示某兴趣小组的活动项目。假设每个兴趣小组有多个学生，有若干活动项目。每个学生必须参加所 在兴趣小组的所有活动项目，每个活动项目要求该兴趣小组的所有学生参加。 按照语义有I→→S，I→→A成立。 （3） 关系模式RDP（R，D，P）中，R表示医院的病房，D表示责任医务人员，P表示病人。假设每个病房住有多个病人，有多个责任医务人员负责医治和护理该病房的所有病人。按照语义有R→→D，R→→P成立。'
              },
              {
                show: false,
                name: '试证明《概论》上给出的关于FD和MVD公理系统的A4，A6和A8。',
                answer: ' A4：若X→→Y，VWU，则XW→→YV 设Z=U-X-Y 已知X→→Y，设r是R上的任一关系，s、t∈r，且t[X]=s[X]，则存在元组p、q∈r，使p[X]=q[X]=t[X]，而p[Y]=t[Y]，p[Z]=s[Z]，q[Y]=s[Y]，q[Z]=t[Z]。 设t[XW]=s[XW]，我们以上构造的元组p和q，是某部分属性在s和t上翻转而成，所以p[W]=q[W]，可知p[XW]=q[XW]，同理p[YV]=t[YV]（由VW知t[V]=s[V]），q[YV]=s[YV]，p[U-YV-XW]=s[U-YV-XW](因为U-YV-XWZ)，q[U-YV-XW]=t[U-YV-XW]。所以XW→→YV。 A6：若X→→Y，Y→→Z则X→→Z-Y 由Y→→Z容易证得Y→→Z-Y。 设R1=U－X－Y，R2=U－Y－Z，R3=U-X-Z+Y。 已知X→→Y，设r是R上的任一关系，s、t∈r，且t[X]=s[X]，则存在元组p、q∈r，使p[X]=q[X]=t[X]，而p[Y]=t[Y]，p[Ｒ１]=s[Ｒ１]，q[Y]=s[Y]，q[Ｒ１]=t[Ｒ１]。 对元组ｔ、ｐ，已知ｔ[Y]=p[Y]，t[X]=p[X]，由Y→→Z-Y知：存在元组m∈r，使m[Z-Y]=p[Z-Y]，m[R2]=t[R2]。因为（Z-Y）R1，又p[R1]=s[R1]，所以m[Z-Y]=s[Z-Y]。因为元组p和s在除属性Y之外的属性上值相等，所以m[R2]=t[R2]，另外元组m是由元组t和p交换某些属性上的值而产生的，而t和p在属性X上值相等，显然m[X]=t[X]，所以m[U-（Z-Y）]=t[U-（Z-Y）]，即m[R3]=t[R3]。 对元组s、q，同理可知s[Y]=q[Y]，存在元组n，使n[Z-Y]=t[Z-Y]，即n[R3]=s[R3]。 综上所述，对t、s∈r，t[X]=s[X]，存在元组m、n∈r，使m[X]=n[X]=t[X]，而m[Z-Y]=s[Z-Y]，m[R3]=t[R3]，n[Z-Y]=t[Z-Y]，n[R3]=s[R3]。 A8：若X→→Y，W→Z，W∩Y=Φ，ZY，则X→Z。 设r是R上的任一关系，对任意s、t∈r，若t[X]=s[X]，设R1=U-X-Y，则根据X→→Y知：存在元组p、q∈r，使p[X]=q[X]=t[X]，而p[Y]=t[Y]，p[Ｒ１]=s[Ｒ１]，q[Y]=s[Y]，q[Ｒ１]=t[Ｒ１]。因为W∩Y=Φ，所以s[W]=p[W]，又W→Z，所以s[Z]=p[Z]；因为ZY，且p[Y]=t[Y]，所以p[Z]=t[Z]；所以可得t[Z]=s[Z]，即X→Z。'
              },
              {
                show: false,
                name: '设关系模式为R（U，F），X，Y为属性集，X，YU。证明: （1）XXF+ （2）（XF+）F+=XF+ （3）若XY则XF+YF+ （4）UF+=U',
                answer: '（1）因为X→X 所以XXF+ （根据XF+的定义） （2） *解析 1 要证明（XF+）F+=XF+ 只要证明 XF+ （XF+）F+ 并且（XF+）F+  XF+ 而XF+ （XF+）F+ 是显然的，因此只要证明（XF+）F+  XF+ 2 这里的证明要用集合论的基本知识，同学们应该复习一下有关集合论中的有关概念和证明方法。 证明：下面求证（XF+）F+XF+ 任意A∈（XF+）F+，（由题意知）存在B∈XF+，使B→A能由F根据Armstrong公理导出，而从B∈XF+ 可知X→B能由F根据Armstrong公理导出，根据公理中的传递律可知X→A能由F根据Armstrong公理导出，所以A∈XF+，因此（XF+）F+  XF+。 所以（XF+）F+=XF+。 （3）对任意A∈XF+ ，可知X→A能由F根据Armstrong公理导出，因为XY，由自反律可以得Y→X，由传递律得Y→A，所以A∈YF+ 。 XF+YF+ 得证。 （4） *解析 要证明UF+=U 只要证明 U UF+ 并且 UF+ U U UF+ 是显然的； 下面证明UF+ U，即证U由F据Armstrong公理推出的集合仍属于U： 自反律：Y  U，U→Y为F所蕴含。显然U由F据Armstrong公理的自反律推出的Y仍属于U； 增广律：U→Y为F所蕴含，且ZU，则U Z→YZ为F所蕴含，YZU。 传递律：U→Y 和Y→Z都为F所蕴含，则U→Z为F所蕴含。ZU。'
              },
              {
                show: false,
                name: '设关系模式为R（U，F），若XF+=X，则称X相对于F是饱和的。 定义饱和集F={X | X=XF+}， 试证明F = {XF+ | XU }。',
                answer: '（1）证 F  {XF+|XU} 对任意A∈F ，由已知条件得A=AF+ ，因为AU，A=AF+ 所以A∈{XF+|XU}。 （2）证 {XF+| XU}  F 对任意A∈{AF+|AU}，因为（AF+）F+ = AF+（见习题7），令B=AF+，有BF+ =B 所以 B∈F 即AF+∈F ，A∈F 得证。'
              },
              {
                show: false,
                name: '在一个关系R中，若每个数据项都是不可再分割的，那么R一定属于__________ 。',
                answer: '第一范式(1NF)'
              },
              {
                show: false,
                name: '若关系为1NF，且它的每一非主属性都__________ 候选码，则该关系为2NF。',
                answer: '完全函数依赖于'
              },
              {
                show: false,
                name: '如果X→Y和X→Z成立，那么X→YZ也成立，这个推理规则称为___________ 。',
                answer: '合并规则'
              },
              {
                show: false,
                name: '如果关系模式R是第二范式，且每个非主属性都不传递依赖于R的候选码，则称R为________ 关系模式。',
                answer: '3NF'
              },
              {
                show: false,
                name: '在函数依赖中，平凡函数依赖是可以根据Armstrong推理规则中的__________ 律推出的。',
                answer: '自反'
              },
              {
                show: false,
                name: '关系模式规范化需要考虑数据间的依赖关系，人们已经提出了多种类型的数据依赖，其中最重要的是_____________和___________。',
                answer: '函数依赖 多值依赖'
              },
              {
                show: false,
                name: '设关系R（U），X，Y∈U，X→Y是R的一个函数依赖，如果存在X′∈X，使X′→Y成立，则称函数依赖X→Y是___________ 函数依赖。',
                answer: '部分'
              },
              {
                show: false,
                name: '在关系模式R（A，B，C，D）中，存在函数依赖关系{A→B，A→C，A→D，（B，C）→A}，则候选码是___________，关系模式R（A，B，C，D）属于____________ 。',
                answer: 'A，（B，C） 2NF'
              }
            ]
          },
          {
            id: 6,
            name: '第六章 数据库设计',
            contents: [
              {
                show: false,
                name: '“三分________，七分________，十二分________”是数据库建设的基本规律。',
                answer: '技术 管理 基础数据'
              },
              {
                show: false,
                name: '十二分基础数据强调了数据的________ 、________、________和________是数据库建设中的重要的环节。',
                answer: '整理 收集 组织 不断更新'
              },
              {
                show: false,
                name: '试述数据库设计的特点。',
                answer: '数据库设计既是一项涉及多学科的综合性技术又是一项庞大的工程项目。其主要特点有： 1) 数据库建设是硬件、软件和干件（技术与管理的界面）的结合。 2) 从软件设计的技术角度看，数据库设计应该和应用系统设计相结合，也就是说，整个设计过程中要把结构（数据）设计和行为（处理）设计密切结合起来。'
              },
              {
                show: false,
                name: '规范化理论对数据库设计有什么指导意义？',
                answer: '规范化理论为数据库设计人员判断关系模式优劣提供了理论标准，可用以指导关系数据模型的优化，用来预测模式可能出现的问题，为设计人员提供了自动产生各种模式的算法工具，使数据库设计工作有了严格的理论基础。（可参考《概论》书上P231-232数据模型的优化）。'
              },
              {
                show: false,
                name: '试述数据库设计过程。',
                answer: '这里只概要列出数据库设计过程的六个阶段： 1) 需求分析 2) 概念结构设计 3) 逻辑结构设计 4) 数据库物理设计 5) 数据库实施 6) 数据库运行和维护 这是一个完整的实际数据库及其应用系统的设计过程。不仅包括设计数据库本身，还包括数据库的实施、数据库运行和维护。 设计一个完善的数据库应用系统往往是上述六个阶段的不断反复。'
              },
              {
                show: false,
                name: '规范设计法从本质上看仍然是手工设计方法，其基本思想是________ 和________。',
                answer: '过程迭代 逐步求精'
              },
              {
                show: false,
                name: '数据库的生命周期可分为两个阶段：一是数据库需求分析和________ ；二是数据库实现和________。',
                answer: '设计阶段 运行阶段'
              },
              {
                show: false,
                name: '试述数据库设计过程的各个阶段上的设计描述。',
                answer: '各阶段的设计要点如下： 1) 需求分析：准确了解与分析用户需求（包括数据与处理）。 2) 概念结构设计：通过对用户需求进行综合、归纳与抽象，形成一个独立于具体DBMS的概念模型。 3) 逻辑结构设计：将概念结构转换为某个DBMS所支持的数据模型，并对其进行优化。 4) 数据库物理设计：为逻辑数据模型选取一个最适合应用环境的物理结构（包括存储结构和存取方法）。 5) 数据库实施：设计人员运用DBMS提供的数据语言、工具及宿主语言，根据逻辑设计和物理设计的结果建立数据库，编制与调试应用程序，组织数据入库，并进行试运行。 6) 数据库运行和维护：在数据库系统运行过程中对其进行评价、调整与修改。'
              },
              {
                show: false,
                name: '试述数据库设计过程中结构设计部分形成的数据库模式。',
                answer: '数据库结构设计的不同阶段形成数据库的各级模式，即：  在概念设计阶段形成独立于机器特点，独立于各个DBMS产品的概念模式，在本篇中就是E-R图；  在逻辑设计阶段将E-R图转换成具体的数据库产品支持的数据模型，如关系模型，形成数据库逻辑模式；然后在基本表的基础上再建立必要的视图(View)，形成数据的外模式；  在物理设计阶段，根据DBMS特点和处理的需要，进行物理存储安排，建立索引，形成数据库内模式。 同学们可以参考《概论》上图6.4（P.209）。 图中概念模式是面向用户和设计人员的，属于概念模型的层次；逻辑模式、外模式、内模式是DBMS支持的模式，属于数据模型的层次。可以在DBMS中加以描述和存储。'
              },
              {
                show: false,
                name: '需求分析阶段的设计目标是什么？调查的内容是什么？',
                answer: '需求分析阶段的设计目标是通过详细调查现实世界要处理的对象（组织、部门、企业等），充分了解原系统（手工系统或计算机系统）工作概况，明确用户的各种需求，然后在此基础上确定新系统的功能。 调查的内容是“数据”和“处理”，即获得用户对数据库的如下要求： （1）信息要求。指用户需要从数据库中获得信息的内容与性质。由信息要求可以导出数据要求，即在数据库中需要存储哪些数据。 （2）处理要求。指用户要完成什么处理功能，对处理的响应时间有什么要求，处理方式是批处理还是联机处理。 （3）安全性与完整性要求。'
              },
              {
                show: false,
                name: '数据字典的内容和作用是什么？',
                answer: '数据字典是系统中各类数据描述的集合。数据字典的内容通常包括：  数据项  数据结构  数据流  数据存储  处理过程五个部分 其中数据项是数据的最小组成单位，若干个数据项可以组成一个数据结构。数据字典通过对数据项和数据结构的定义来描述数据流、数据存储的逻辑内容。 数据字典的作用： 数据字典是关于数据库中数据的描述，在需求分析阶段建立，是下一步进行概念设计的基础，并在数据库设计过程中不断修改、充实、完善。 （详细参考《概论》书上6.2.3。注意，数据库设计阶段形成的数据字典与第十一章DBMS中的数据字典不同，后者是DBMS关于数据库中数据的描述，当然两者是有联系的）。'
              },
              {
                show: false,
                name: '什么是数据库的概念结构？试述其特点和设计策略。',
                answer: '概念结构是信息世界的结构，即概念模型，其主要特点是： （1）能真实、充分地反映现实世界，包括事物和事物之间的联系，能满足用户对数据的处理要求。是对现实世界的一个真实模型。 （2）易于理解，从而可以用它和不熟悉计算机的用户交换意见，用户的积极参与是数据库的设计成功的关键。 （3）易于更改，当应用环境和应用要求改变时，容易对概念模型修改和扩充。 （4）易于向关系、网状、层次等各种数据模型转换。 概念结构的设计策略通常有四种： • 自顶向下。即首先定义全局概念结构的框架，然后逐步细化； • 自底向上。即首先定义各局部应用的概念结构，然后将它们集成起来，得到全局概念 结构； • 逐步扩张。首先定义最重要的核心概念结构，然后向外扩充，以滚雪球的方式逐步生 成其他概念结构，直至总体概念结构； • 混合策略。即将自顶向下和自底向上相结合，用自顶向下策略设计一个全局概念结构的 框架，以它为骨架集成由自底向上策略中设计的各局部概念结构。'
              },
              {
                show: false,
                name: '什么叫数据抽象？试举例说明。',
                answer: '数据抽象是对实际的人、物、事和概念进行人为处理，抽取所关心的共同特性，忽略非本质的细节，并把这些特性用各种概念精确地加以描述，这些概念组成了某种模型。 如分类这种抽象是：定义某一类概念作为现实世界中一组对象的类型。这些对象具有某些共同的特性和行为。它抽象了对象值和型之间的“is member of”的语义。在E-R模型中，实体型就是这种抽象。例如在学校环境中，李英是老师，表示李英是教师类型中的一员，则教师是实体型，李英是教师实体型中的一个实体值，具有教师共同的特性和行为：在某个系某个专业教学，讲授某些课程，从事某个方向的科研。'
              },
              {
                show: false,
                name: '试述数据库概念结构设计的重要性和设计步骤。',
                answer: '重要性： 数据库概念设计是整个数据库设计的关键，将在需求分析阶段所得到的应用需求首先抽 象为概念结构，以此作为各种数据模型的共同基础，从而能更好地、更准确地用某一DBMS实现这些需求。 设计步骤： 概念结构的设计方法有多种，其中最经常采用的策略是自底向上方法，该方法的设计步 骤通常分为两步：第1步是抽象数据并设计局部视图，第2步是集成局部视图，得到全局的概念结构(如图6.9所示，P216)。'
              },
              {
                show: false,
                name: '什么是E-R图？构成E-R图的基本要素是什么？',
                answer: 'E-R图为实体-联系图，提供了表示实体型、属性和联系的方法，用来描述现实世界的概念模型。 构成E-R图的基本要素是实体型、属性和联系，其表示方法为： • 实体型：用矩形表示，矩形框内写明实体名； • 属性：用椭圆形表示，并用无向边将其与相应的实体连接起来； • 联系：用菱形表示，菱形框内写明联系名，并用无向边分别与有关实体连接起来，同时在无向边旁标上联系的类型（1 : 1，1 : n或m : n）。'
              },
              {
                show: false,
                name: '数据库设计分为以下六个阶段_______、________、________、________、________和________。',
                answer: '需求分析 概念结构设计 逻辑结构设计 物理设计阶段 数据库实施阶段 数据库运行和维护阶段'
              },
              {
                show: false,
                name: '为什么要视图集成？视图集成的方法是什么？',
                answer: '在对数据库系统进行概念结构设计时一般采用自底向上的设计方法，把繁杂的大系统分解子系统。首先设计各个子系统的局部视图，然后通过视图集成的方式将各子系统有机的融合起来，综合成一个系统的总视图。这样设计清晰，由简到繁。由于数据库系统是从整体角度看待和描述数据的，因此数据不再面向某个应用而是整个系统。因此必须进行视图集成，使得数据库能被全系统的多个用户、多个应用共享使用。 一般说来，视图集成可以有两种方式： • 多个分E-R图一次集成，如《概论》书上图6.25(a)（P.224）； • 逐步集成，用累加的方式一次集成两个分E-R图，如图6.25(b)。 无论采用哪种方式，每次集成局部E-R图时都需要分两步走： （1）合并。解决各分E-R图之间的冲突，将各分E-R图合并起来生成初步E-R图。 （2）修改和重构。消除不必要的冗余，生成基本E-R图。'
              },
              {
                show: false,
                name: '什么是数据库的逻辑结构设计？试述其设计步骤。',
                answer: '数据库的逻辑结构设计就是把概念结构设计阶段设计好的基本E-R图转换为与选用的DBMS产品所支持的数据模型相符合的逻辑结构。 设计步骤为（图6.31）： （1）将概念结构转换为一般的关系、网状、层次模型； （2）将转换来的关系、网状、层次模型向特定DBMS支持下的数据模型转换； （3）对数据模型进行优化。'
              },
              {
                show: false,
                name: '试述把E-R图转换为DBTG模型和关系模型的转换规则。',
                answer: 'E-R图向DBTG模型的转换规则： 1) 每个实体型转换为记录型，实体的属性转换为记录的数据项； 2) 实体型之间1：n（n≥1）的联系转换为一个系，没有任何联系的实体型转换为奇异系； 3) K（K≥2）个实体型之间多对多的联系，引入一个连结记录，形成K个实体型和连结记录之间的K个系。连结记录的属性由诸首记录的码及联系属性所组成； 4) 同一实体型内的1：n，n：m联系，引入连结记录，转换为两个系。'
              },
              {
                show: false,
                name: '你能给出由E-R图转换为IMS模型的转换规则吗？',
                answer: 'E-R图向IMS模型的转换规则： 1) 每个实体型转换为记录型，实体的属性转换为记录的数据项； 2) 实体型之间1：n（n≥1）的联系转换记录型之间的有向边； 3) 实体型之间m：n（m>1，n>1）的联系则分解成一对多联系，再根据2)转换； 4) K（K≥2）个实体型之间多对多的联系，可先转换成多对两个实体型之间的联系，再根据3)转换。'
              },
              {
                show: false,
                name: '试述数据库物理设计的内容和步骤。',
                answer: '数据库在物理设备上的存储结构与存取方法称为数据库的物理结构，它依赖于给定的DBMS。为一个给定的逻辑数据模型选取一个最适合应用要求的物理结构，就是数据库的物理设计的主要内容。 数据库的物理设计步骤通常分为两步： （1）确定数据库的物理结构，在关系数据库中主要指存取方法和存储结构； （2）对物理结构进行评价，评价的重点是时间和空间效率。'
              },
              {
                show: false,
                name: '你能给出关系数据库物理设计的主要内容吗？例如ORACLE数据库物理设计的内容。',
                answer: '对于关系数据库物理设计的内容主要包括 ： • 为关系模式选择存取方法； • 设计关系、索引等数据库文件的物理存储结构。 详细参考《概论》书上6.5.2 和6.5.3。 有关ORACLE数据库物理设计的内容请参考其技术资料，根据上述内容进行总结。'
              },
              {
                show: false,
                name: '数据输入在实施阶段的重要性是什么？如何保证输入数据的正确性？',
                answer: '数据库是用来对数据进行存储、管理与应用的，因此在实施阶段必须将原有系统中的历史数据输入到数据库。数据量一般都很大，而且数据来源于部门中的各个不同的单位。数据的组织方式、结构和格式都与新设计的数据库系统有相当的差距，组织数据录入就要将各类源数据从各个局部应用中抽取出来，分类转换，最后综合成符合新设计的数据库结构的形式，输入数据库。因此这样的数据转换、组织入库的工作是相当费力费时的工作。特别是原系统是手工数据处理系统时，各类数据分散在各种不同的原始表格、凭证、单据之中。数据输入工作量更大。 保证输入数据正确性的方法： 为提高数据输入工作的效率和质量，应该针对具体的应用环境设计一个数据录入子系统，由计算机来完成数据入库的任务。在源数据入库之前要采用多种方法对它们进行检验，以防止不正确的数据入库。'
              },
              {
                show: false,
                name: '什么是数据库的再组织和重构造？为什么要进行数据库的再组织和重构造？',
                answer: '数据库的再组织是指：按原设计要求重新安排存储位置、回收垃圾、减少指针链等，以提高系统性能。 数据库的重构造则是指部分修改数据库的模式和内模式，即修改原设计的逻辑和物理结构。数据库的再组织是不修改数据库的模式和内模式的。 进行数据库的再组织和重构造的原因： 数据库运行一段时间后，由于记录不断增、删、改，会使数据库的物理存储情况变坏，降低了数据的存取效率，数据库性能下降，这时DBA就要对数据库进行重组织。DBMS一般都提供数据重组织用的实用程序。 数据库应用环境常常发生变化，如增加新的应用或新的实体，取消了某些应用，有的实体与实体间的联系也发生了变化等，使原有的数据库设计不能满足新的需求，需要调整数据库的模式和内模式。这就要进行数据库重构造。'
              },
              {
                show: false,
                name: ' 数据库实施阶段包括两项重要的工作，一项是________ ，另一项是应用程序的________和________。',
                answer: '组织数据入库 编码 调试'
              },
              {
                show: false,
                name: '根据模型应用的不同目的，可以将这些模型划分为两类，它们分别属于两个不同的层次。第一类是________，第二类是________。',
                answer: '概念模型 数据模型'
              },
              {
                show: false,
                name: '用________ 方法来设计数据库的概念模型是数据库概念设计阶段广泛采用的方法。',
                answer: '实体—联系方法（E-R）'
              },
              {
                show: false,
                name: '概念模型有以下特点：________、 ________ 、________ 、________。',
                answer: '真实性 易理解性 易修改性 易转换性'
              },
              {
                show: false,
                name: '在E-R模型向关系模型转换时，M：N的联系转换为关系模式时，其码包括________ 。',
                answer: 'M、N端实体的码'
              },
              {
                show: false,
                name: '关系数据库的规范化理论是数据库________ 的一个有力工具；ER模型是数据库的________设计的一个有力工具。',
                answer: '逻辑设计 概念结构'
              },
              {
                show: false,
                name: '数据库的物理设计通常分为两步：（1）确定数据库的________ ，（2）对其进行评价，评价的重点是________和________。',
                answer: '物理结构 时间 空间效率'
              },
              {
                show: false,
                name: '任何DBMS都提供多种存取方法。常用的存取方法有________ 、________ 、________ 等。',
                answer: '索引（index）方法 HASH方法 聚簇（Cluster）方法'
              },
              {
                show: false,
                name: '确定数据库存储结构主要指确定________ 、________ 、________ 、________ 、________等数据的存储安排和存储结构，确定系统配置参数等。',
                answer: '关系 索引 聚簇 日志 备份'
              },
              {
                show: false,
                name: '________ 是数据库中存放数据的基本单位。',
                answer: '表'
              },
              {
                show: false,
                name: '在数据库运行阶段，对数据库经常性的维护工作主要是由________ 完成的。',
                answer: '数据库管理员 （DBA）'
              },
              {
                show: false,
                name: '客观存在并可相互区别的事物称为________ ，它可以是具体的人、事、物，也可以是抽象的概念或联系。',
                answer: '实体'
              },
              {
                show: false,
                name: '唯一标识实体的属性集称为________ 。',
                answer: '码'
              },
              {
                show: false,
                name: '实体之间的联系有________ 、________ 、________三种。',
                answer: '一对一  一对多 多对多'
              },
              {
                show: false,
                name: '如果两个实体之间具有M：N联系，则将它们转换为关系模型的结果是________ 个关系。',
                answer: '3'
              },
              {
                show: false,
                name: 'ER模型是对现实世界的一种抽象，它的主要成分是________ 、联系和 ________。',
                answer: '实体 属性'
              },
              {
                show: false,
                name: '需求调查和分析的结果最终形成________ ，提交给应用部门，通过________后作为以后各个设计阶段的依据。',
                answer: '需求分析说明书  评审'
              },
              {
                show: false,
                name: '_______ 表达了数据和处理的关系， ________则是系统中各类数据描述的集合，是进行详细的数据收集和数据分析所获得的主要成果。',
                answer: '数据流图  数据字典'
              },
              {
                show: false,
                name: '数据字典中应包括对以下几部分数据的描述：________ 、________ 、________ 。',
                answer: '数据项 数据结构 数据流'
              },
              {
                show: false,
                name: '各分E-R图之间的冲突主要有三类：________ 、________和________ 。',
                answer: '属性冲突  命名冲突  结构冲突'
              }
            ]
          },
          {
            id: 7,
            name: '第七章 数据库恢复技术',
            contents: [
              {
                show: false,
                name: '数据库系统中可能发生各种各样的故障，大致可以分为________ 、________ 、________ 和 ________ 等。',
                answer: '事务故障 系统故障 介质故障 计算机病毒'
              },
              {
                show: false,
                name: '数据库中为什么要有恢复子系统？它的功能是什么？',
                answer: '因为计算机系统中硬件的故障、软件的错误、操作员的失误以及恶意的破坏是不可避免的，这些故障轻则造成运行事务非正常中断，影响数据库中数据的正确性，重则破坏数据库，使数据库中全部或部分数据丢失，因此必须要有恢复子系统。 恢复子系统的功能是：把数据库从错误状态恢复到某一已知的正确状态（亦称为一致状态或完整状态）。'
              },
              {
                show: false,
                name: '试述事务的概念及事务的四个特性。',
                answer: '事务是用户定义的一个数据库操作序列，这些操作要么全做要么全不做,是一个不可分割的工作单位。 事务具有四个特性：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）和持续性（Durability）。这个四个特性也简称为ACID特性。 原子性：事务是数据库的逻辑工作单位，事务中包括的诸操作要么都做，要么都不做。 一致性：事务执行的结果必须是使数据库从一个一致性状态变到另一个一致性状态。 隔离性：一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对其他并发事务是隔离的，并发执行的各个事务之间不能互相干扰。 持续性：持续性也称永久性（Permanence），指一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。接下来的其他操作或故障不应该对其执行结果有任何影响。'
              },
              {
                show: false,
                name: '为什么事务非正常结束时会影响数据库数据的正确性，请列举一例说明之。',
                answer: '事务执行的结果必须是使数据库从一个一致性状态变到另一个一致性状态。如果数据库系统运行中发生故障，有些事务尚未完成就被迫中断，这些未完成事务对数据库所做的修改有一部分已写入物理数据库，这时数据库就处于一种不正确的状态，或者说是不一致的状态。 例如某工厂的库存管理系统中，要把数量为Q的某种零件从仓库1移到仓库2存放。 则可以定义一个事务T，T包括两个操作；Q1=Q1-Q，Q2=Q2+Q。如果T非正常终止时只做了第一个操作，则数据库就处于不一致性状态，库存量无缘无故少了Q。'
              },
              {
                show: false,
                name: '数据库运行中可能产生的故障有哪几类？哪些故障影响事务的正常执行？哪些故障破坏数据库数据？',
                answer: '数据库系统中可能发生各种各样的故障，大致可以分以下几类： （1） 事务内部的故障； （2） 系统故障； （3） 介质故障； （4） 计算机病毒。 事务故障、系统故障和介质故障影响事务的正常执行；介质故障和计算机病毒破坏数据 库数据。'
              },
              {
                show: false,
                name: '数据库恢复的基本技术有哪些？',
                answer: '数据转储和登录日志文件是数据库恢复的基本技术。 当系统运行过程中发生故障，利用转储的数据库后备副本和日志文件就可以将数据库恢复到故障前的某个一致性状态。'
              },
              {
                show: false,
                name: '事务具有四个特性：它们是________ 、________ 、________ 和 ________ 。这个四个特性也简称为________特性。',
                answer: '原子性（Atomicity） 一致性（Consistency） 隔离性（Isolation） 持续性（Durability） ACID'
              },
              {
                show: false,
                name: '数据库转储的意义是什么？ 试比较各种数据转储方法。',
                answer: '数据转储是数据库恢复中采用的基本技术。所谓转储即DBA定期地将数据库复制到磁带或另一个磁盘上保存起来的过程。当数据库遭到破坏后可以将后备副本重新装入，将数据库恢复到转储时的状态。 静态转储：在系统中无运行事务时进行的转储操作。如上图所示。静态转储简单，但必须等待正运行的用户事务结束才能进行。同样，新的事务必须等待转储结束才能执行。显然，这会降低数据库的可用性。 动态转储：指转储期间允许对数据库进行存取或修改。动态转储可克服静态转储的缺点，它不用等待正在运行的用户事务结束，也不会影响新事务的运行。但是，转储结束时后援副本上的数据并不能保证正确有效。因为转储期间运行的事务可能修改了某些数据，使得后援副本上的数据不是数据库的一致版本。 为此，必须把转储期间各事务对数据库的修改活动登记下来，建立日志文件（log file）。这样，后援副本加上日志文件就能得到数据库某一时刻的正确状态。 转储还可以分为海量转储和增量转储两种方式。 海量转储是指每次转储全部数据库。增量转储则指每次只转储上一次转储后更新过的数据。从恢复角度看，使用海量转储得到的后备副本进行恢复一般说来更简单些。但如果数据库很大，事务处理又十分频繁，则增量转储方式更实用更有效。'
              },
              {
                show: false,
                name: '什么是日志文件？为什么要设立日志文件？',
                answer: '（1） 日志文件是用来记录事务对数据库的更新操作的文件。 （2） 设立日志文件的目的是： 进行事务故障恢复；进行系统故障恢复；协助后备副本进行介质故障恢复。'
              },
              {
                show: false,
                name: '登记日志文件时为什么必须先写日志文件，后写数据库？',
                answer: '把对数据的修改写到数据库中和把表示这个修改的日志记录写到日志文件中是两个不同的操作。有可能在这两个操作之间发生故障，即这两个写操作只完成了一个。 如果先写了数据库修改，而在运行记录中没有登记这个修改，则以后就无法恢复这个修改了。如果先写日志，但没有修改数据库，在恢复时只不过是多执行一次UNDO操作，并不会影响数据库的正确性。所以一定要先写日志文件，即首先把日志记录写到日志文件中，然后写数据库的修改。'
              },
              {
                show: false,
                name: '针对不同的故障，试给出恢复的策略和方法。（即如何进行事务故障的恢复？系统故障的恢复？介质故障恢复？）',
                answer: '事务故障的恢复： 事务故障的恢复是由DBMS自动完成的，对用户是透明的。 DBMS执行恢复步骤是： （1）反向扫描文件日志（即从最后向前扫描日志文件），查找该事务的更新操作。 （2）对该事务的更新操作执行逆操作。即将日志记录中“更新前的值”写入数据库。 （3）继续反向扫描日志文件，做同样处理。 （4）如此处理下去，直至读到此事务的开始标记，该事务故障的恢复就完成了。 答： 系统故障的恢复： 系统故障可能会造成数据库处于不一致状态： 一是未完成事务对数据库的更新可能已写入数据库； 二是已提交事务对数据库的更新可能还留在缓冲区，没来得及写入数据库。 因此恢复操作就是要撤销(UNDO)故障发生时未完成的事务，重做(REDO)已完成的事务。 系统的恢复步骤是： （1）正向扫描日志文件，找出在故障发生前已经提交的事务队列（REDO队列）和未完成的事务队列（UNDO队列）。 （2）对撤销队列中的各个事务进行UNDO处理。 进行UNDO处理的方法是，反向扫描日志文件，对每个UNDO事务的更新操作执行逆操作，即将日志记录中“更新前的值”（Before Image）写入数据库。 （3）对重做队列中的各个事务进行REDO处理。 进行REDO处理的方法是：正向扫描日志文件，对每个REDO事务重新执行日志文件登记的操作。即将日志记录中“更新后的值”（After Image）写入数据库。 *解析： 在第（1）步中如何找出REDO队列和UNDO队列？请大家思考一下。 下面给出一个算法： 1） 建立两个事务队列: • UNDO-LIST: 需要执行undo操作的事务集合； • REDO-LIST: 需要执行redo操作的事务集合； 两个事务队列初始均为空。 2） 从日志文件头开始，正向扫描日志文件 • 如有新开始（遇到Begin Transaction）的事务Ti，把Ti暂时放入UNDO-LIST队列； • 如有提交的事务（遇到End Transaction）Tj，把Tj从UNDO-LIST队列移到REDO-LIST队列； 直到日志文件结束 答： 介质故障的恢复： 介质故障是最严重的一种故障。 恢复方法是重装数据库，然后重做已完成的事务。具体过程是： （1） DBA装入最新的数据库后备副本（离故障发生时刻最近的转储副本），使数据库恢复到转储时的一致性状态。 （2） DBA装入转储结束时刻的日志文件副本 （3） DBA启动系统恢复命令，由DBMS完成恢复功能，即重做已完成的事务。 *解析 1）我们假定采用的是静态转储，因此第（1）步装入数据库后备副本便可以了。 2）如果采用的是动态转储，第（1）步装入数据库后备副本还不够，还需同时装入转储开始时刻的日志文件副本，经过处理后才能得到正确的数据库后备副本。 3）第（2）步重做已完成的事务的算法是： a. 正向扫描日志文件，找出故障发生前已提交的事务的标识，将其记入重做队列 b. 再一次正向扫描日志文件，对重做队列中的所有事务进行重做处理。即将日志记录中“更新后的值”写入数据库。'
              },
              {
                show: false,
                name: '什么是检查点记录，检查点记录包括哪些内容？',
                answer: '检查点记录是一类新的日志纪录。它的内容包括： ① 建立检查点时刻所有正在执行的事务清单。 ② 这些事务的最近一个日志记录的地址。'
              },
              {
                show: false,
                name: '具有检查点的恢复技术有什么优点？试举一个具体的例子加以说明。',
                answer: '利用日志技术进行数据库恢复时，恢复子系统必须搜索日志，确定哪些事务需要REDO，哪些事务需要UNDO。一般来说，需要检查所有日志记录。这样做有两个问题： 一是搜索整个日志将耗费大量的时间。 二是很多需要REDO处理的事务实际上已经将它们的更新操作结果写到数据库中了，恢复子系统又重新执行了这些操作，浪费了大量时间。 检查点技术就是为了解决这些问题。'
              },
              {
                show: false,
                name: '试述使用检查点方法进行恢复的步骤。',
                answer: '① 从重新开始文件中找到最后一个检查点记录在日志文件中的地址，由该地址在日志文件中找到最后一个检查点记录。 ② 由该检查点记录得到检查点建立时刻所有正在执行的事务清单ACTIVE-LIST。 这里建立两个事务队列: • UNDO-LIST: 需要执行undo操作的事务集合； • REDO-LIST: 需要执行redo操作的事务集合； 把ACTIVE-LIST暂时放入UNDO-LIST队列，REDO队列暂为空。 ③ 从检查点开始正向扫描日志文件 • 如有新开始的事务Ti，把Ti暂时放入UNDO-LIST队列； • 如有提交的事务Tj，把Tj从UNDO-LIST队列移到REDO-LIST队列，直到日志文件结束； ④ 对UNDO-LIST中的每个事务执行UNDO操作, 对REDO-LIST中的每个事务执行REDO操作。'
              },
              {
                show: false,
                name: '什么是数据库镜像？它有什么用途？',
                answer: '数据库镜像即根据DBA的要求，自动把整个数据库或者其中的部分关键数据复制到另一个磁盘上。每当主数据库更新时，DBMS自动把更新后的数据复制过去，即DBMS自动保证镜像数据与主数据的一致性。 数据库镜像的用途有： 一是用于数据库恢复。当出现介质故障时，可由镜像磁盘继续提供使用，同时DBMS自动利用镜像磁盘数据进行数据库的恢复，不需要关闭系统和重装数据库副本。 二是提高数据库的可用性。在没有出现故障时，当一个用户对某个数据加排它锁进行修改时，其他用户可以读镜像数据库上的数据，而不必等待该用户释放锁。'
              },
              {
                show: false,
                name: '把数据库从错误状态恢复到某一已知的正确状态（亦称为一致状态）的功能，这就是________ 。',
                answer: '数据库的恢复'
              },
              {
                show: false,
                name: '_______ 是一系列的数据库操作，是数据库应用程序的基本逻辑单元。',
                answer: '事务'
              },
              {
                show: false,
                name: '事务处理技术主要包括________ 技术和________技术。',
                answer: '数据库恢复 并发控制'
              },
              {
                show: false,
                name: '在SQL语言中，定义事务控制的语句主要有________ 、________ 和 ________ 。',
                answer: 'BEGIN TRANSACTION COMMIT ROLLBACK'
              },
              {
                show: false,
                name: '建立冗余数据最常用的技术是________ 和________ 。通常在一个数据库系统中，这两种方法是一起使用的。',
                answer: '数据转储 登录日志文件'
              },
              {
                show: false,
                name: '转储可分为________ 和________，转储方式可以有________和 ________。',
                answer: '静态转储 动态转储 海量转储 增量转储'
              },
              {
                show: false,
                name: '_______ 是用来记录事务对数据库的更新操作的文件。主要有两种格式：以________为单位的日志文件和以________为单位的日志文件。',
                answer: '日志文件 记录 数据块'
              }
            ]
          },
          {
            id: 8,
            name: '第八章 并发控制',
            contents: [
              {
                show: false,
                name: '并发操作可能会产生哪几类数据不一致？用什么方法能避免各种不一致的情况？',
                answer: '并发操作带来的数据不一致性包括三类：丢失修改、不可重复读和读“脏”数据。 （1）丢失修改（Lost Update） 两个事务T1和T2读入同一数据并修改，T2提交的结果破坏了（覆盖了）T1提交的结果，导致T1的修改被丢失。 （2）不可重复读（Non-Repeatable Read） 不可重复读是指事务T1读取数据后，事务T2执行更新操作，使T1无法再现前一次读取结果。不可重复读包括三种情况：详见《概论》8.1 p266。 （3）读“脏”数据（Dirty Read） 读“脏”数据是指事务T1修改某一数据，并将其写回磁盘，事务T2读取同一数据后，T1由于某种原因被撤销，这时T1已修改过的数据恢复原值，T2读到的数据就与数据库中的数据不一致，则T2读到的数据就为“脏”数据，即不正确的数据。 避免不一致性的方法就是并发控制。最常用的并发控制技术是封锁技术。 也可以用其他技术，例如在分布式数据库系统中可以采用时间戳方法来进行并发控制。'
              },
              {
                show: false,
                name: '在数据库中为什么要并发控制？',
                answer: '数据库是共享资源，通常有许多个事务同时在运行。 当多个事务并发地存取数据库时就会产生同时读取和/或修改同一数据的情况。若对并发操作不加控制就可能会存取和存储不正确的数据，破坏数据库的一致性。所以数据库管理系统必须提供并发控制机制。'
              },
              {
                show: false,
                name: '什么是封锁？',
                answer: '封锁就是事务T在对某个数据对象例如表、记录等操作之前，先向系统发出请求，对其加锁。加锁后事务T就对该数据对象有了一定的控制，在事务T释放它的锁之前，其他的事务不能更新此数据对象。 封锁是实现并发控制的一个非常重要的技术。'
              },
              {
                show: false,
                name: '基本的封锁类型有几种？试述它们的含义。',
                answer: '基本的封锁类型有两种: 排它锁(Exclusive Locks，简称X锁) 和共享锁(Share Locks，简称S锁)。 排它锁又称为写锁。若事务T对数据对象A加上X锁，则只允许T读取和修改A，其他任何事务都不能再对A加任何类型的锁，直到T释放A上的锁。这就保证了其他事务在T释放A上的锁之前不能再读取和修改A。 共享锁又称为读锁。若事务T对数据对象A加上S锁，则事务T可以读A但不能修改A，其他事务只能再对A加S锁，而不能加X锁，直到T释放A上的S锁。这就保证了其他事务可以读A，但在T释放A上的S锁之前不能对A做任何修改。'
              },
              {
                show: false,
                name: '什么是封锁协议？不同级别的封锁协议的主要区别是什么？',
                answer: ' 在运用封锁技术对数据加锁时，要约定一些规则。例如，在运用X锁和S锁对数据对象加锁时，要约定何时申请X锁或S锁、何时释放封锁等。这些约定或者规则称为封锁协议（Locking Protocol）。对封锁方式约定不同的规则，就形成了各种不同的封锁协议。不同级别的封锁协议，例如《概论》8.3中介绍的三级封锁协议，三级协议的主要区别在于什么操作需要申请封锁，何时申请封锁以及何时释放锁（即持锁时间的长短）。 一级封锁协议：事务T在修改数据R之前必须先对其加X锁，直到事务结束才释放。 二级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，读完后即可释放S锁。 三级封锁协议：一级封锁协议加上事务T在读取数据R之前必须先对其加S锁，直到事务结束才释放。'
              },
              {
                show: false,
                name: '不同封锁协议与系统一致性级别的关系是什么？',
                answer: '不同的封锁协议对应不同的一致性级别。 一级封锁协议可防止丢失修改，并保证事务T是可恢复的。在一级封锁协议中，对读数据是不加S锁的，所以它不能保证可重复读和不读“脏”数据。 二级封锁协议除防止了丢失修改，还可进一步防止读“脏”数据。在二级封锁协议中，由于读完数据后立即释放S锁，所以它不能保证可重复读。 在三级封锁协议中，无论是读数据还是写数据都加长锁，即都要到事务结束时才释放封锁。所以三级封锁协议除防止了丢失修改和不读“脏”数据外，还进一步防止了不可重复读。'
              },
              {
                show: false,
                name: '什么是活锁？什么是死锁 ？',
                answer: '如果事务T1封锁了数据R，事务T2又请求封锁R，于是T2等待。T3也请求封锁R，当T1释放了R上的封锁之后系统首先批准了T3的请求，T2仍然等待。然后T4又请求封锁R，当T3释放了R上的封锁之后系统又批准了T4的请求……T2有可能永远等待，这就是活锁的情形。活锁的含义是该等待事务等待时间太长，似乎被锁住了，实际上可能被激活。 如果事务T1封锁了数据R1，T2封锁了数据R2，然后T1又请求封锁R2，因T2已封锁了R2，于是T1等待T2释放R2上的锁。接着T2又申请封锁R1，因T1已封锁了R1，T2也只能等待T1释放R1上的锁。这样就出现了T1在等待T2，而T2又在等待T1的局面，T1和T2两个事务永远不能结束，形成死锁。'
              },
              {
                show: false,
                name: '试述活锁的产生原因和解决方法。',
                answer: '活锁产生的原因：当一系列封锁不能按照其先后顺序执行时，就可能导致一些事务无限期等待某个封锁，从而导致活锁。 避免活锁的简单方法是采用先来先服务的策略。当多个事务请求封锁同一数据对象时，封锁子系统按请求封锁的先后次序对事务排队，数据对象上的锁一旦释放就批准申请队列中第一个事务获得锁。'
              },
              {
                show: false,
                name: '请给出预防死锁的若干方法。',
                answer: '在数据库中，产生死锁的原因是两个或多个事务都已封锁了一些数据对象，然后又都请求已被其他事务封锁的数据加锁，从而出现死等待。 防止死锁的发生其实就是要破坏产生死锁的条件。预防死锁通常有两种方法： （1）一次封锁法 要求每个事务必须一次将所有要使用的数据全部加锁，否则就不能继续执行。 （2）顺序封锁法 预先对数据对象规定一个封锁顺序，所有事务都按这个顺序实行封锁。'
              },
              {
                show: false,
                name: '请给出检测死锁发生的一种方法，当发生死锁后如何解除死锁？',
                answer: '数据库系统一般采用允许死锁发生，DBMS检测到死锁后加以解除的方法。 DBMS中诊断死锁的方法与操作系统类似，一般使用超时法或事务等待图法。 超时法是：如果一个事务的等待时间超过了规定的时限，就认为发生了死锁。超时法实现简单，但有可能误判死锁，事务因其他原因长时间等待超过时限时，系统会误认为发生了死锁。若时限设置得太长，又不能及时发现死锁发生。 DBMS并发控制子系统检测到死锁后，就要设法解除。通常采用的方法是选择一个处理死锁代价最小的事务，将其撤消，释放此事务持有的所有锁，使其他事务得以继续运行下去。当然，对撤销的事务所执行的数据修改操作必须加以恢复。'
              },
              {
                show: false,
                name: '什么样的并发调度是正确的调度？',
                answer: '可串行化（Serializable）的调度是正确的调度。 可串行化的调度的定义：多个事务的并发执行是正确的，当且仅当其结果与按某一次序串行地执行它们时的结果相同，我们称这种调度策略为可串行化的调度。'
              },
              {
                show: false,
                name: '试述两段锁协议的概念。',
                answer: '两段锁协议是指所有事务必须分两个阶段对数据项加锁和解锁。 • 在对任何数据进行读、写操作之前，首先要申请并获得对该数据的封锁； • 在释放一个封锁之后，事务不再申请和获得任何其他封锁。 “两段”的含义是，事务分为两个阶段： 第一阶段是获得封锁，也称为扩展阶段。在这阶段，事务可以申请获得任何数据项上的任何类型的锁，但是不能释放任何锁。 第二阶段是释放封锁，也称为收缩阶段。在这阶段，事务释放已经获得的锁，但是不能再申请任何锁。'
              },
              {
                show: false,
                name: '试证明，若并发事务遵守两段锁协议，则对这些事务的并发调度是可串行化的。',
                answer: ' 首先以两个并发事务T1和T2为例，存在多个并发事务的情形可以类推。 根据可串行化定义可知，事务不可串行化只可能发生在下列两种情况： 1．事务T1写某个数据对象A，T2读或写A； 2．事务T1读或写某个数据对象A，T2写A。 下面称A为潜在冲突对象。 设T1和T2访问的潜在冲突的公共对象为{A1, A2, …, An}。 不失一般性，假设这组潜在冲突对象中X={A1,A2, …, Ai}均符合情况1。 Y={Ai+1, …,An}符合所情况2。 xX，T1需要Xlock x ① T2需要Slock x或Xlockx ② （1） 如果操作①先执行，则T1获得锁，T2等待 由于遵守两段锁协议，T1在成功获得X和Y中全部对象及非潜在冲突对象的锁后，才会释放锁 这时如果wX或Y，T2已获得w的锁，则出现死锁 否则，T1在对X、Y中对象全部处理完毕后，T2才能执行 这相当于按T1、T2的顺序串行执行 根据可串行化定义，T1和T2的调度是可串行化的。 （2） 操作②先执行的情况与（1）对称 因此，若并发事务遵守两段锁协议，在不发生死锁的情况下，对这些事务的并发调度一定是可串行化的。'
              },
              {
                show: false,
                name: '为什么要引进意向锁？ 意向锁的含义是什么？',
                answer: '引进意向锁是为了提高封锁子系统的效率。该封锁子系统支持多种封锁粒度。 原因是：在多粒度封锁方法中一个数据对象可能以两种方式加锁—显式封锁和隐式封锁（有关概念参见《概论》8.7.1）。因此系统在对某一数据对象加锁时不仅要检查该数据对象上有无（显式和隐式）封锁与之冲突；还要检查其所有上级结点和所有下级结点，看申请的封锁是否与这些结点上的（显式和隐式）封锁冲突；显然，这样的检查方法效率很低。为此引进了意向锁。 意向锁的含义是：对任一结点加锁时，必须先对它的上层结点加意向锁。 例如事务T要对某个元组加X锁，则首先要对关系和数据库加IX锁。换言之，对关系和数据库加IX锁，表示它的后裔结点—某个元组拟（意向）加X锁。 引进意向锁后，系统对某一数据对象加锁时不必逐个检查与下一级结点的封锁冲突了。例如，事务T要对关系R加X锁时，系统只要检查根结点数据库和R本身是否已加了不相容的锁（如发现已经加了IX，则与X冲突），而不再需要搜索和检查R中的每一个元组是否加了X锁或S锁。'
              },
              {
                show: false,
                name: '试述常用的意向锁：IS锁，IX锁，SIX锁，给出这些锁的相容矩阵。',
                answer: 'IS锁 如果对一个数据对象加IS锁，表示它的后裔结点拟（意向）加S锁。例如，要对某个元组加S锁，则要首先对关系和数据库加IS锁 IX锁 如果对一个数据对象加IX锁，表示它的后裔结点拟（意向）加X锁。例如，要对某个元组加X锁，则要首先对关系和数据库加IX锁。 SIX锁 如果对一个数据对象加SIX锁，表示对它加S锁，再加IX锁，即SIX = S + IX。'
              },
              {
                show: false,
                name: '并发操作带来的数据不一致性包括：________ 、________ 和 ________ 。',
                answer: '丢失修改 不可重复读 读“脏”数据'
              },
              {
                show: false,
                name: '多个事务的并发执行是正确的，当且仅当其结果与按某一次序串行地执行它们时的结果相同，我们称这种调度策略为________的调度。',
                answer: '可串行化'
              },
              {
                show: false,
                name: '基本的封锁类型有两种：________ 和________ 。',
                answer: '排它锁(Exclusive Locks，简称X锁) 共享锁(Share Locks，简称S锁)'
              },
              {
                show: false,
                name: '在数据库并发控制中，两个或多个事务同时处在相互等待状态，称为________ 。',
                answer: '死锁'
              },
              {
                show: false,
                name: '________ 被称为封锁的粒度。',
                answer: '封锁对象的大小'
              }
            ]
          },
          {
            id: 9,
            name: '第九章 数据库安全性',
            contents: [
              {
                show: false,
                name: '什么是数据库的安全性？',
                answer: '数据库的安全性是指保护数据库以防止不合法的使用所造成的数据泄露、更改或破坏。'
              },
              {
                show: false,
                name: '数据库安全性和计算机系统的安全性有什么关系？',
                answer: '安全性问题不是数据库系统所独有的，所有计算机系统都有这个问题。只是在数据库系统中大量数据集中存放，而且为许多最终用户直接共享，从而使安全性问题更为突出。 系统安全保护措施是否有效是数据库系统的主要指标之一。 数据库的安全性和计算机系统的安全性，包括操作系统、网络系统的安全性是紧密联系、相互支持的，'
              },
              {
                show: false,
                name: '试述可信计算机系统评测标准的情况，试述TDI/TCSEC标准的基本内容。',
                answer: '各个国家在计算机安全技术方面都建立了一套可信标准。目前各国引用或制定的一系列安全标准中，最重要的是美国国防部（DoD）正式颁布的《 DoD可信计算机系统评估标准》（Trusted Computer System Evaluation Criteria，简称TCSEC，又称桔皮书）。 TDI/TCSEC标准是将TCSEC扩展到数据库管理系统，即《可信计算机系统评估标准关于可信数据库系统的解释》（ Trusted Database Interpretation 简称TDI，又称紫皮书）。在TDI中定义了数据库管理系统的设计与实现中需满足和用以进行安全性级别评估的标准。 TDI与TCSEC一样，从安全策略、责任、保证和文档四个方面来描述安全性级别划分的指标。每个方面又细分为若干项。'
              },
              {
                show: false,
                name: '试述TCSEC（TDI）将系统安全级别划分为四组七个等级的基本内容。',
                answer: '根据计算机系统对安全性各项指标的支持情况，TCSEC（TDI）将系统划分为四组（division）七个等级，依次是D；C（C1，C2）；B（B1，B2，B3）；A（A1），按系统可靠或可信程度逐渐增高。 这些安全级别之间具有一种偏序向下兼容的关系，即较高安全性级别提供的安全保护包含较低级别的所有保护要求，同时提供更多或更完善的保护能力。 各个等级的基本内容为： D级 D级是最低级别。一切不符合更高标准的系统，统统归于D组。 C1级 只提供了非常初级的自主安全保护。能够实现对用户和数据的分离，进行自主存取控制（DAC），保护或限制用户权限的传播。 C2级 实际是安全产品的最低档次，提供受控的存取保护，即将C1级的DAC进一步细化，以个人身份注册负责，并实施审计和资源隔离。 B1级 标记安全保护。对系统的数据加以标记，并对标记的主体和客体实施强制存取控制（MAC）以及审计等安全机制。 B2级 结构化保护。建立形式化的安全策略模型并对系统内的所有主体和客体实施DAC和MAC。 B3级 安全域。该级的TCB必须满足访问监控器的要求，审计跟踪能力更强，并提 供系统恢复过程。 A1级 验证设计，即提供B3级保护的同时给出系统的形式化设计说明和验证以确信 各安全保护真正实现。'
              },
              {
                show: false,
                name: '试述实现数据库安全性控制的常用方法和技术。',
                answer: '实现数据库安全性控制的常用方法和技术有： 1) 用户标识和鉴别：该方法由系统提供一定的方式让用户标识自己的名字或身份。每次用户要求进入系统时，由系统进行核对，通过鉴定后才提供系统的使用权。 2) 存取控制：通过用户权限定义和合法权检查确保只有合法权限的用户访问数据库，所有未被授权的人员无法存取数据。例如C2级中的自主存取控制（DAC），B1级中的强制存取控制（MAC）； 3) 视图机制：为不同的用户定义视图，通过视图机制把要保密的数据对无权存取的用户隐藏起来，从而自动地对数据提供一定程度的安全保护。 4) 审计：建立审计日志，把用户对数据库的所有操作自动记录下来放入审计日志中， DBA可以利用审计跟踪的信息，重现导致数据库现有状况的一系列事件，找出非法存取数据的人、时间和内容等。 5) 数据加密：对存储和传输的数据进行加密处理，从而使得不知道解密算法的人无法获知数据的内容。'
              },
              {
                show: false,
                name: '什么是数据库中的自主存取控制方法和强制存取控制方法？',
                answer: '自主存取控制方法：定义各个用户对不同数据对象的存取权限。当用户对数据库访问时首先检查用户的存取权限。防止不合法用户对数据库的存取。 强制存取控制方法：每一个数据对象被（强制地）标以一定的密级，每一个用户也被（强制地）授予某一个级别的许可证。系统规定只有具有某一许可证级别的用户才能存取某一个密级的数据对象。 *解析：自主存取控制中自主的含义是：用户可以将自己拥有的存取权限“自主”地授予别人。即用户具有一定的“自主”权。'
              },
              {
                show: false,
                name: 'SQL语言中提供了哪些数据控制（自主存取控制）的语句？请试举几例说明它们的使用方法。',
                answer: 'SQL中 的自主存取控制是通过GRANT 语句和 REVOKE 语句来实现的。如： GRANT SELECT， INSERT ON Student TO 王平 WITH GRANT OPTION； 就将Student表的SELECT和INSERT权限授予了用户王平，后面的“WITH GRANT OPTION”子句表示用户王平同时也获得了“授权”的权限，即可以把得到的权限继续授予其他用户。 REVOKE INSERT ON Student FROM 王平 CASCADE； 就将Student表 的INSERT权限从用户王平处收回，选项 CASCADE 表示，如果用户王平将 Student 的 INSERT 权限又转授给了其他用户，那么这些权限也将从其他用户处收回。'
              },
              {
                show: false,
                name: '为什么强制存取控制提供了更高级别的数据库安全性？',
                answer: ' 强制存取控制（MAC）是对数据本身进行密级标记，无论数据如何复制，标记与数据是一个不可分的整体，只有符合密级标记要求的用户才可以操纵数据，从而提供了更高级别的安全性。'
              },
              {
                show: false,
                name: '理解并解释MAC机制中主体、客体、敏感度标记的含义。',
                answer: '主体是系统中的活动实体，既包括DBMS所管理的实际用户，也包括代表用户的各进程。 客体是系统中的被动实体，是受主体操纵的，包括文件、基表、索引、视图等。 对于主体和客体，DBMS为它们每个实例（值）指派一个敏感度标记（Label）。敏感度标记被分成若干级别，例如绝密（Top Secret）、机密（Secret）、可信（Confidential）、公开（Public）等。主体的敏感度标记称为许可证级别（Clearance Level），客体的敏感度标记称为密级（Classification Level）。'
              },
              {
                show: false,
                name: '什么是数据库的审计功能，为什么要提供审计功能？',
                answer: '审计功能是指DBMS的审计模块在用户对数据库执行操作的同时把所有操作自动记录到系统的审计日志中。 因为任何系统的安全保护措施都不是完美无缺的，蓄意盗窃破坏数据的人总可能存在。利用数据库的审计功能，DBA可以根据审计跟踪的信息，重现导致数据库现有状况的一系列事件，找出非法存取数据的人、时间和内容等。'
              },
              {
                show: false,
                name: '统计数据库中存在何种特殊的安全性问题？',
                answer: '统计数据库允许用户查询聚集类型的信息，如合计、平均值、最大值、最小值等，不允许查询单个记录信息。但是，人们可以从合法的查询中推导出不合法的信息，即可能存在隐蔽的信息通道，这是统计数据库要研究和解决的特殊的安全性问题。'
              },
              {
                show: false,
                name: '数据库的安全性是指保护数据库以防止不合法的使用所造成的_______、_______或______。',
                answer: '数据泄漏 更改 破坏'
              },
              {
                show: false,
                name: '计算机系统有三类安全性问题，即________ 、_________和 ________。',
                answer: '技术安全类 管理安全类 政策法律类'
              },
              {
                show: false,
                name: '用户标识和鉴别的方法有很多种，而且在一个系统中往往是多种方法并举，以获得更强的安全性。常用的方法有通过输入________和 ________来鉴别用户。',
                answer: '用户名 口令'
              },
              {
                show: false,
                name: '_______ 和 ________ 一起组成了DBMS的安全子系统。',
                answer: '用户权限定义 合法权检查机制'
              },
              {
                show: false,
                name: '当前大型的DBMS一般都支持________ ，有些DBMS同时还支持________ 。',
                answer: '自主存取控制（DAC） 强制存取控制（MAC）'
              },
              {
                show: false,
                name: '用户权限是由两个要素组成的：________ 和 ________ 。',
                answer: '数据对象 操作类型'
              },
              {
                show: false,
                name: '在数据库系统中，定义存取权限称为________ 。SQL语言用________语句向用户授予对数据的操作权限，用________语句收回授予的权限。',
                answer: '授权 GRANT REVOKE'
              },
              {
                show: false,
                name: '对数据库模式的授权由DBA在________ 时实现。',
                answer: '创建用户'
              },
              {
                show: false,
                name: '一个DBA用户可以拥有________ 、________ 和________ 权限，一个RESOURCE用户可以拥有________权限。',
                answer: 'CREATE USER CREATE SCHEMA CREATE TABLE CREATE TABLE'
              },
              {
                show: false,
                name: '数据库角色是被命名的一组与________ 相关的权限，角色是________的集合。',
                answer: ' 数据库操作 权限'
              },
              {
                show: false,
                name: '通过________ 可以把要保密的数据对无权存取的用户隐藏起来，从而自动地对数据提供一定程度的安全保护。',
                answer: '视图机制'
              },
              {
                show: false,
                name: '审计一般可以分为________ 审计和 ________审计。',
                answer: '用户级 系统级'
              }
            ]
          },
          {
            id: 10,
            name: '第十章 数据库完整性',
            contents: [
              {
                show: false,
                name: '什么是数据库的完整性？',
                answer: '数据库的完整性是指数据的正确性和相容性。'
              },
              {
                show: false,
                name: '数据库的完整性概念与数据库的安全性概念有什么区别和联系？',
                answer: '数据的完整性和安全性是两个不同的概念，但是有一定的联系。 前者是为了防止数据库中存在不符合语义的数据，防止错误信息的输入和输出，即所谓垃圾进垃圾出（Garbage In Garbage Out）所造成的无效操作和错误结果。 后者是保护数据库防止恶意的破坏和非法的存取。 也就是说，安全性措施的防范对象是非法用户和非法操作，完整性措施的防范对象是不合语义的数据。'
              },
              {
                show: false,
                name: '什么是数据库的完整性约束条件？可分为哪几类？',
                answer: '完整性约束条件是指数据库中的数据应该满足的语义约束条件。 一般可以分为六类： 静态列级约束、静态元组约束、静态关系约束、动态列级约束、动态元组约束、动态关系约束。 静态列级约束是对一个列的取值域的说明，包括以下几方面： 1. 对数据类型的约束，包括数据的类型、长度、单位、精度等 2. 对数据格式的约束 3. 对取值范围或取值集合的约束。 4. 对空值的约束 5. 其他约束 静态元组约束就是规定组成一个元组的各个列之间的约束关系，静态元组约束只局限在单个元组上。 静态关系约束是在一个关系的各个元组之间或者若干关系之间常常存在各种联系或约束。常见的静态关系约束有： 1. 实体完整性约束。 2. 参照完整性约束。 3. 函数依赖约束。 动态列级约束是修改列定义或列值时应满足的约束条件，包括下面两方面： 1. 修改列定义时的约束 2. 修改列值时的约束 动态元组约束是指修改某个元组的值时需要参照其旧值，并且新旧值之间需要满足某种约束条件。 动态关系约束是加在关系变化前后状态上的限制条件，例如事务一致性、原子性等约束条件。'
              },
              {
                show: false,
                name: 'DBMS的完整性控制机制应具有哪些功能？',
                answer: ' DBMS的完整性控制机制应具有三个方面的功能： 1. 定义功能，即提供定义完整性约束条件的机制。 2. 检查功能，即检查用户发出的操作请求是否违背了完整性约束条件。 3. 违约反应：如果发现用户的操作请求使数据违背了完整性约束条件，则采取一定的动作来保证数据的完整性。'
              },
              {
                show: false,
                name: 'RDBMS在实现参照完整性时需要考虑哪些方面？',
                answer: 'RDBMS在实现参照完整性时需要考虑以下几个方面： 1） 外码是否可以接受空值 2） 删除被参照关系的元组时的考虑，这时系统可能采取的作法有三种： （a）级联删除（CASCADES）； （b）受限删除（RESTRICTED）； （c）置空值删除（NULLIFIES） 3） 在参照关系中插入元组时的问题，这时系统可能采取的作法有： （a）受限插入 （b）递归插入 4） 修改关系中主码的问题 一般是不能用UPDATE语句修改关系主码的。如果需要修改主码值，只能先删除该元组，然后再把具有新主码值的元组插入到关系中。 如果允许修改主码，首先要保证主码的唯一性和非空，否则拒绝修改。然后要区分是参照关系还是被参照关系。'
              },
              {
                show: false,
                name: '假设有下面两个关系模式： 职工（职工号，姓名，年龄，职务，工资，部门号），其中职工号为主码； 部门（部门号，名称，经理名，电话），其中部门号为主码； 用SQL语言定义这两个关系模式，要求在模式中完成以下完整性约束条件的定义： 定义每个模式的主码；定义参照完整性；定义职工年龄不得超过60岁。',
                answer: 'CREATE TABLE DEPT (Deptno NUMBER(2), Deptname VARCHAR(10), Manager VARCHAR(10), PhoneNumber Char(12) CONSTRAINT PK_SC PRIMARY KEY (Deptno)); CREATE TABLE EMP (Empno NUMBER(4), Ename VARCHAR(10), Age NUMBER(2), CONSTRAINT C1 CHECK (Aage <= 60), Job VARCHAR(9), Sal NUMBER(7,2), Deptno NUMBER(2), CONSTRAINT FK_DEPTNO FOREIGN KEY (Deptno) REFERENCES DEPT(Deptno))；'
              },
              {
                show: false,
                name: '关系系统中，当操作违反实体完整性、参照完整性和用户定义的完整性约束条件时，一般是如何分别进行处理的？',
                answer: '对于违反实体完整性和用户定义的完整性的操作一般都采用拒绝执行的方式进行处理。而对于违反参照完整性的操作，并不都是简单地拒绝执行，有时要根据应用语义执行一些附加的操作，以保证数据库的正确性。具体的处理可以参见上面第5题或《概论》10.2中相应部分。'
              },
              {
                show: false,
                name: '数据库的完整性是指数据的________ 和 ________。',
                answer: ' 正确性 相容性'
              },
              {
                show: false,
                name: 'SQL标准使用了一系列概念来描述完整性，包括关系模型的________ 、________和 ________完整性。',
                answer: '实体完整性 参照完整性 用户定义'
              },
              {
                show: false,
                name: '数据库完整性的定义一般由SQL的________ 语句来实现。它们作为数据库模式的一部分存入 中。',
                answer: 'DDL 数据字典'
              },
              {
                show: false,
                name: '关系模型的实体完整性在________ 中用________定义。',
                answer: 'CREATE TABLE PRIMARY KEY'
              },
              {
                show: false,
                name: '为了避免对基本表进行全表扫描，RDBMS核心一般都对________ 自动建立一个________ 。',
                answer: '主码 索引'
              },
              {
                show: false,
                name: '关系模型的参照完整性在________中用________短语定义哪些列为外码列，用________短语指明这些外码参照哪些表的主码。',
                answer: 'CREATE TABLE FOREIGN KEY REFERENCES'
              }
            ]
          },
          {
            id: 11,
            name: '第十一章 数据库管理系统',
            contents: [
              {
                show: false,
                name: 'DBMS由哪些主要的程序模块组成？',
                answer: 'DBMS主要的程序模块有： 1． 数据定义模块 2． 数据操纵模块 3． 数据库运行管理方面的程序模块 4． 数据库组织、存储和管理方面的程序模块 5． 数据库建立、维护和其他方面的程序模块'
              },
              {
                show: false,
                name: 'DBMS的语言翻译层是如何处理一个DDL语句的？',
                answer: '语言翻译处理层首先要对DDL语句进行语法检查、语义检查和用户权限检查。语义检查的内容具体做法是，DBMS读取数据字典，检查是否存在与该语句中的表，或视图，或索引等要创建的对象名相同的对象名，检查该用户是否具有创建数据库对象的权限。 然后把DDL语句翻译成内部表示，把它存储在系统的数据字典中。例如新建立一个表，就要把关系名、建立者、属性个数、记录长度等等信息记入数据字典中。'
              },
              {
                show: false,
                name: '试述DBMS的语言翻译层处理一个DML语句的大致过程。',
                answer: '首先，对DML语句进行词法分析和语法分析，并把外部关系名、属性名转换为内部名。词法和语法分析通过后生成语法分析树。 接着，根据数据字典中的内容进行查询检查，包括审核用户的存取权限、视图转换和完整性检查。 然后，对查询进行优化。优化分为两类，一类为代数优化，另一类为存取路径优化。并把选中的查询执行方案描述出来。 DBMS语言翻译层处理一个DML语句的过程称为一个逐步束缚的过程。'
              },
              {
                show: false,
                name: '试述DBMS的基本功能？',
                answer: 'DBMS主要是实现对共享数据有效的组织、管理和存取。DBMS的基本功能有： （1）数据库定义功能； （2）数据存取功能； （3）数据库运行管理功能； （4）数据组织、存储和管理功能； （5）数据库的建立和维护功能； （6）其他功能'
              },
              {
                show: false,
                name: '试述DBMS 四种进程组织方案，并分析各种方案的特点和优缺点。',
                answer: 'DBMS 四种进程组织方案是： N方案：N个DB用户应用程序对应 N个用户进程，DBMS作为应用程序的子程序被 连入用户应用程序中。因此这种方案也称为连入式方案。数据库系统中共有N个进程。 2N方案：每个用户进程有一个DBMS进程为之服务，因此N个用户进程就有N个DBMS 进程，共2N个进程。 N+1方案：N个用户进程仅有一个DBMS进程为它们服务，因此共N+1个进程，共 N+1个进程。 N+M方案：用M个DBMS进程为N个用户进程提供服务，一般M < N。 这四个方案各自的特点和优缺点请参见《概论》11.2.1、11.2.2、11.2.3、11.2.4。'
              },
              {
                show: false,
                name: '理解并解释下列术语的含义： 进程、任务、“轻权”进程、线程、线索。',
                answer: '进程：操作系统中的核心概念，进程是程序的一次执行过程。进程既是资源分配的最小单 位也是操作系统调度的基本单位。 任务：在单处理器系统中任务与进程是类似的概念。随着多处理器系统以及并行计算技术 的发展，进程概念被进一步细划为任务（Task）与线程（Thread）的概念。任务是 申请资源的基本单位，而线程是调度和运行的基本单位。 轻权进程：线程又被称为“轻权”或“轻量” 进程。 线索：是数据库系统中的概念，它借鉴了操作系统中“线程”的概念：整个DBMS可以看 作是一个Task，当有一个用户申请数据库服务时，Task分配多个Thread为之服务， 多个Thread并行工作，共享资源。一般地讲，DBMS中的线索是DBMS的一个执 行流。'
              },
              {
                show: false,
                name: '什么是DBMS的多线索机制？有什么优点？',
                answer: 'DBMS借鉴了操作系统中“线程”的概念和技术，在DBMS的实现中采用多线索机制。 一般地讲，DBMS中的线索是DBMS的一个执行流，它服务于整个DBMS系统或DBMS中的某个用户；DBMS服务器响应客户请求是通过为每个用户创建线索（而不是创建进程）来完成的。DBMS的各个线索能在逻辑上并行执行；它们共存于一个服务器进程中，共享DBMS的所有资源，如数据库缓冲区和CPU时间；线索是DBMS的调度单位，服务器进程能按一定的调度算法调度用户请求。 与进程相比，线索具有以下优点： 1）线索比进程占用较少的系统资源，如内存 2）线索调度比较灵活，可控制性强 3）线索切换开销较小 4）线索间通信简便'
              },
              {
                show: false,
                name: '什么是处理DML语句的解释方法和预编译方法？试述二者的区别，联系，比较各自的优缺点。',
                answer: '解释执行DML语句的方法是：执行语句前，该语句都以原始字符串的形式保存。当执行到该语句时，才利用解释程序去完成束缚的全部过程，同时予以执行。 解释方法的优点是：应变性强，能适应在解释过程中发生的数据结构、存储结构等的变化，因此能保持较高的数据独立性。缺点是：每次执行一次DML语句时都要经过所有解释步骤，尤其当这样的语句位于一个循环体内时，就要多次重复解释一个DML语句，显然效率比较低。 预编译方法是：在用户提交DML语句之后对它进行翻译处理，保存产生的可执行代码。当需要运行时，取出保存的可执行代码加以执行。 优点是：效率高。但是，使用这种方法会遇到这样的问题：在束缚过程中进行优化所依据的条件可能在运行前已不存在，导致已作出的应用规划在执行时不再有效。为了解决这类问题，可以采用自动重编译技术。'
              },
              {
                show: false,
                name: '试述数据存取层主要的子系统及其功能。',
                answer: ' 数据存取层中包括记录存取子系统，事务管理子系统，封锁子系统，恢复子系统，存取路径维护子系统，排序/合并模块等等。主要功能有： 1． 记录存取、事务管理子系统： 记录存取子系统提供按某个属性值直接取一个元组和顺序取一个元组的存取原语。事务管理子系统提供定义和控制事务的操作。 2． 封锁子系统，执行并发控制。 3． 恢复子系统：主要是日志登记子系统把事务开始、滚回、提交；对元组的插入、删除、修改；对索引记录的插入、删除、修改等每一个操作作为一个日志记录存入日志文件中， 对不同的故障恢复策略执行恢复。 4． 控制信息管理模块： 该模块利用专门的数据区（内存中）登记不同记录类型以及不同存取路径的说明信息（取自数据字典）和控制信息。 5． 存取路径维护子系统：对数据执行插入、删除、修改操作的同时要对相应的存取路径进行维护。 6． 排序/合并子系统： 在语言翻译处理层中，描述性语言表达的集合级操作被转换成一系列的对数据存取层所提供的存取原语的调用。为了得到用户所要求的有序输出，为了加速关系运算（如自然连接）的中间步骤，为了提高效率，常常需要对关系元组重新排序。这一工作由排序/合并子系统来完成'
              },
              {
                show: false,
                name: '在操作系统中也有并发控制问题，为什么DBMS还要并发控制机制？',
                answer: '操作系统提供的封锁机制和DBMS的封锁机制在封锁对象，封锁对象的状态，封锁的粒度，及封锁的类型上存在很大的差别，操作系统的封锁机制不能直接应用在DBMS中，DBMS必须重新设计，来满足复杂的封锁需求。'
              },
              {
                show: false,
                name: 'DBMS中为什么要设置系统缓冲区？',
                answer: '设立系统缓冲区的原因： 一是为了把存储层以上DBMS各系统成分和实在的外存设备隔离，外存设备的变更不会影响这些系统，使DBMS具有设备独立性。 二是为了提高效率。DBMS利用系统缓冲区滞留数据。当需要读取数据时系统首先到缓冲区中查找。只有当缓冲区中不存在该数据时才真正从外存读入该数据所在的页面。当要写回一元组到数据库中时，系统并不把它立即写回外存，仅把该元组所在的缓冲区页面作一标志，表示可以释放。只有当该用户事务结束或缓冲区已满需要调入新页时才按一定的淘汰策略把缓冲区中已有释放标志的页面写回外存。这样可以减少I/O次数，提高系统效率。'
              },
              {
                show: false,
                name: '数据库中要存储和管理的数据内容包括哪些方面？',
                answer: '数据库中存储四个方面的数据： 1．数据描述，即数据的外模式、模式、内模式； 2．数据本身； 3．数据之间的联系； 4．存取路径。 这四个方面的数据内容都要采用一定的方式组织、存储起来。'
              }
            ]
          },
          {
            id: 12,
            name: '第十二章 数据库技术新发展',
            contents: [
              {
                show: false,
                name: '试述数据库技术的发展过程。',
                answer: '答案要点： 1） 数据模型是数据库系统的核心和基础。数据库技术的三个发展阶段应该按照数据模型的进展来界定。按照数据模型的进展，数据库技术可以相应地分为三个发展阶段。 2） 数据模型的发展经历了格式化数据模型（包括层次数据模型和网状数据模型）、关系数据模型两个阶段，以面向对象数据模型为代表的非传统数据模型的阶段。 3） 同学们可以从每一代数据库系统的主要特征、代表性系统、主要成就、优点和不足来了解数据库技术的发展过程。 层次数据库系统和网状数据库系统的数据模型虽然分别为层次模型和网状模型，但实质上层次模型是网状模型的特例。它们都是格式化模型。它们从体系结构、数据库语言到数据存储管理均具有共同特征，是第一代数据库系统。 关系数据库系统支持关系模型。关系模型不仅简单、清晰，而且有关系代数作为语言模型，有关系数据理论作为理论基础。因此，关系数据库系统具有形式基础好、数据独立性强、数据库语言非过程化等特色，标志着数据库技术发展到了第二代。 第二代数据库系统的数据模型虽然描述了现实世界数据的结构和一些重要的相互联系，但是仍不能捕捉和表达数据对象所具有的丰富而重要的语义，因此尚只能属于语法模型。 第三代的数据库系统将以更加丰富的数据模型和更强大的数据管理功能为特征，从而满足传统数据库系统难以支持的新的应用要求。'
              },
              {
                show: false,
                name: '当前数据库技术发展的主要特征是什么？',
                answer: ' 答案要点： 新一代数据库技术的特点是： （1）面向对象的方法和技术对数据库发展的影响最为深远 数据库研究人员借鉴和吸收了面向对象的方法和技术，提出了面向对象数据模型(简称对象模型)。该模型克服了传统数据模型的局限性，促进了数据库技术在一个新的技术基础上继续发展。 （2）数据库技术与多学科技术的有机结合 计算机领域中其他新兴技术的发展对数据库技术产生了重大影响。传统的数据库技术和其他计算机技术如，网络通信技术、人工智能技术、面向对象程序设计技术、并行计算技术移动计算技术等的互相结合、互相渗透，使数据库中新的技术内容层出不穷。 （3）面向应用领域的数据库技术的研究 在传统数据库系统基础上，结合各个应用领域的特点，研究适合该应用领域的数据库技术，如数据仓库、工程数据库、统计数据库、科学数据库、空间数据库、地理数据库等，这是当前数据库技术发展的又一重要特征。'
              },
              {
                show: false,
                name: '试述第一、二代数据库系统的主要成就。',
                answer: '答案要点： 第一代数据库系统指层次和网状数据库系统，其代表是： （1） 1969年IBM公司研制的层次模型的数据库管理系统IMS。 （2） 美国数据库系统语言协商会CODASYL下属的数据库任务组DBTG对数据库方法进行了系统的研究、探讨，于20世纪60年代末70年代初提出了若干DBTG报告。DBTG 报告确定并建立了数据库系统的许多概念、方法和技术。DBTG所提议的方法是基于网状结构的。它是数据库网状模型的典型代表。在DBTG方法和思想的指引下数据库系统的实现技术不断成熟，开发了许多商品化的数据库管理系统，它们都是基于网状模型或层次模型的。 可以说，层次数据库是数据库系统的先驱，而网状数据库则是数据库概念、方法、技术的奠基。它们是数据库技术中研究得最早的两种数据库系统。 支持关系数据模型的关系数据库系统是第二代数据库系统。 20世纪70年代是关系数据库理论研究和原型开发的时代，其中以IBM San Jose研究室开发的System R和Berkeley大学研制的INGRES为典型代表。经过大量的高层次的研究和开发取得了一系列的成果，主要是： （1）奠定了关系模型的理论基础，给出了人们一致接受的关系模型的规范说明。 （2）研究了关系数据语言，有关系代数、关系演算、SQL语言及QBE等。这些描述性语言一改以往程序设计语言和网状、层次数据库系统中数据库语言的风格，以其易学易懂的优点得到了最终用户的喜爱，为20世纪80年代数据库语言标准化打下了基础。 （3）研制了大量的RDBMS的原型，攻克了系统实现中查询优化、并发控制、故障恢复等一系列关键技术。不仅大大丰富了DBMS实现技术和数据库理论，更重要的是促进了RDBMS产品的蓬勃发展和广泛应用。 在计算机领域中把20世纪70年代称为数据库时代。20世纪80年代几乎所有新开发的系统均是关系的。关系数据库系统从实验室走向了社会，数据库技术日益广泛地应用到企业管理、情报检索、辅助决策等各个方面，成为实现和优化信息系统的基础和基本技术。'
              },
              {
                show: false,
                name: '第三代数据库系统的主要特点是什么？',
                answer: '经过多年的研究和讨论，对第三代数据库系统的基本特征已有了共识。 (1)第三代数据库系统应支持数据管理、对象管理和知识管理 除提供传统的数据管理服务外，第三代数据库系统将支持更加丰富的对象结构和规则，应该集数据管理、对象管理和知识管理为一体。由此可以导出第三代数据库系统必须支持OO数据模型。 (2)第三代数据库系统必须保持或继承第二代数据库系统的技术 第三代数据库系统应继承第二代数据库系统已有的技术，如第二代数据库系统的非过程化数据存取方式和数据独立性。不仅能很好的支持对象管理和规则管理，而且能更好地支持原有的数据管理，支持多数用户需要的即席查询等。 (3)第三代数据库系统必须对其他系统开放 数据库系统的开放性表现在：支持数据库语言标准；在网络上支持标准网络协议；系统具有良好的可移植性、可连接性、可扩展性和可互操作性等。'
              },
              {
                show: false,
                name: '试述数据模型在数据库系统发展中的作用和地位。',
                answer: '答案要点： (1)数据模型是数据库系统的核心和基础。 (2)数据库的发展集中表现在数据模型的发展。'
              },
              {
                show: false,
                name: '请用实例阐述数据库技术与其他学科的技术相结合的成果。',
                answer: '答案要点： 数据库技术与其他学科的内容相结合，是新一代数据库技术的一个显著特征，涌现出各种新型的数据库系统（如图所示）。例如： • 数据库技术与分布处理技术相结合，出现了分布式数据库系统； • 数据库技术与并行处理技术相结合，出现了并行数据库系统； • 数据库技术与人工智能技术相结合，出现了知识库系统和主动数据库系统； • 数据库技术与多媒体技术相结合，出现了多媒体数据库系统； • 数据库技术与模糊技术相结合，出现了模糊数据库系统； 等等。'
              },
              {
                show: false,
                name: '请阐述以下数据库系统的主要概念、研究的主要问题及其发展过程： 分布式数据库系统、并行数据库系统、主动数据库系统、多媒体数据库系统、模糊数据库系统。',
                answer: '答案要点： 下面仅仅给出有关概念，它们研究的主要问题及其发展过程请参见《概论》。 分布式数据库系统：分布式数据库是由一组数据组成的，这组数据分布在计算机网络的不同计算机上，网络中的每个结点具有独立处理的能力（称为场地自治），可以执行局部应用。同时，每个结点也能通过网络通信子系统执行全局应用。（参见《概论》12.2.2与14.1.1） 并行数据库系统:并行数据库系统是在并行机上运行的具有并行处理能力的数据库系统。并行数据库系统是数据库技术与并行计算技术相结合的产物。（参见《概论》12.2.2与15.1） 主动数据库系统:主动数据库是相对于传统数据库的被动性而言的。主动数据库能根据数据库的当前状态，主动适时地做出反应，执行某些操作，向用户提供有关信息。主动数据库是传统数据库技术与人工智能技术、面向对象技术相结合的产物。（参见《概论》12.2.2） 多媒体数据库系统:可实现对格式化和非格式化的多媒体数据的存储、管理和查询的数据库系统。（参见《概论》12.2.2） 模糊数据库系统:存储、组织、管理和操作模糊数据的数据库系统。（参见《概论》12.2.2）'
              },
              {
                show: false,
                name: '试述数据仓库的产生背景。',
                answer: ' 答案要点： 1） 数据库技术的发展和广泛应用使许多部门、企业积累了大量的原始数据，这些数据是宝贵的资源 2） 对这些数据的分析和利用可以了解企业运行的情况，发现存在的问题，预测未来的趋势。 3） 数据库系统作为数据管理的先进技术已经成功用于事务处理。但是它对分析处理的支持一直不能令人满意，具体表现在： (1)分析处理时性能低。 (2)分析的数据对象分散，而且不一致，即缺乏对数据的清洗、集成能力。 (3)事务处理系统不具备动态集成的能力。 (4)系统缺乏对历史数据的有效组织和存储能力，而分析方法必须以大量的历史数据为 依托。 (5)在事务处理系统中存储的是细节数据，不适合进行分析处理，而事务处理系统又不 具备对数据的综合能力。 总之，DSS对数据在空间和时间的广度上都有了更高的要求，而事务处理环境难以满足这些要求。在事务型环境中直接构建分析型应用是一种失败的尝试。数据仓库正是为了构建这种新的分析处理环境而出现的一种数据存储和组织技术。但是数据仓库的主要驱动力并不是过去的缺点，而是市场商业经营行为的改变，市场竞争要求捕获和分析事务级的业务数据。（详细参见《概论》12.2.3）'
              },
              {
                show: false,
                name: '数据仓库数据的基本特征是什么？',
                answer: '答案要点：四个基本特征是： • 数据仓库的数据是面向主题的 • 数据仓库的数据是集成的 • 数据仓库的数据是不可更新的 • 数据仓库的数据是随时间不断变化的 （参见《概论》12.2.3）'
              },
              {
                show: false,
                name: '什么是联机分析处理？什么是数据挖掘？',
                answer: '答案要点： 联机分析处理OLAP是以海量数据为基础的复杂分析技术。 OLAP支持各级管理决策人员从不同的角度、快速灵活地对数据仓库中的数据进行复杂查询和多维分析处理，并且能以直观易懂的形式将查询和分析结果提供给决策人员，以方便他们及时掌握企业内外的情况，辅助各级领导进行正确决策，提高企业的竞争力 数据挖掘是从超大型数据库（VLDB）或数据仓库中发现并提取隐藏在内的模式的过程，这些模式是有效的、新颖的、有潜在使用价值的和易于理解的。目的是帮助决策者寻找数据间潜在的关联，发现经营者忽略的要素，而这些要素对预测趋势、决策行为也许是十分有用的信息。 （详细参见《概论》12.2.3）'
              },
              {
                show: false,
                name: '基于数据库技术的DSS解决方案是什么？',
                answer: '基于数据库技术的DSS的解决方案是： DW＋OLAP＋DM DSS的可行方案 数据仓库、联机分析处理和数据挖掘是作为三种独立的信息处理技术出现的。数据仓库用于数据的存储和组织，OLAP集中于数据的分析，数据挖掘则致力于知识的发现。由于这三种技术内在的联系性和互补性，将它们结合起来是一种新的DSS构架。是DSS有效而可操作的整体解决方案。 （详细参见《概论》12.2.3）'
              },
              {
                show: false,
                name: '什么是工程数据库？',
                answer: '工程数据库是一种能存储和管理各种工程设计图形和工程设计文档，并能为工程设计提供各种服务的数据库。 主要应用于CAD/CAM，CIM，CASE等工程应用领域。 工程数据库中，由于传统的数据模型难以满足工程应用的要求，需要运用新的模型技术，如扩展的关系模型、语义模型、面向对象的数据模型。 工程数据库管理系统的功能与传统数据库管理系统有很大不同，详细参见《概论》12.2.3。'
              },
              {
                show: false,
                name: '什么是统计数据库？',
                answer: '统计数据库是一种用来对统计数据进行存储、统计、分析的数据库系统。 统计数据具有层次型特点，但并不完全是层次型结构。统计数据也有关系型特点，但关系型也不完全满足需要。统计数据具有一些特殊的性质，例如： （1） 分类属性和统计属性 （2） 多维性 （3） 分类属性的层次结构 （4） 微数据和宏数据之分 统计数据库中常用的操作有：抽样、邻近搜索、估计与插值、转置、聚集及复杂的分析操作。这些操作不同于关系数据库中传统的查询、增加、删除、修改操作。人们希望能从DMBS一级来支持以上的数据特性和操作。因此，研究和发展了统计数据库技术。 统计数据库在安全性方面有特殊的要求，要防止某些用户在统计数据库中利用对统计数据（如综合数据）的合法查询推导出该用户无权了解的某一个体的具体数据。'
              },
              {
                show: false,
                name: '什么是空间数据库？',
                answer: '空间数据库系统是描述、存储和处理空间数据及其属性数据的数据库系统。 空间数据是用于表示空间物体的位置、形状、大小和分布特征等诸方面信息的数据。 空间数据的特点是不仅包括物体本身的空间位置及状态信息，还包括表示物体的空间关系（即拓扑关系）的信息。 空间数据库是随着地理信息系统（GIS）的开发和应用而发展起来的数据库新技术。目前，空间数据库系统不是独立存在的系统，它是和应用紧密结合，大多数作为地理信息系统的基础和核心的形式出现。 空间数据库的研究涉及计算机科学、地理学、地图制图学、摄影测量与遥感、图像处理等多个学科。空间数据库技术研究的主要内容包括： （1）空间数据模型 （2）空间数据查询语言 （3）空间数据库管理系统 等等。'
              }
            ]
          },
          {
            id: 13,
            name: '第十三章 面向对象数据库系统',
            contents: [
              {
                show: false,
                name: '举例说明超类和子类的概念。',
                answer: '在第4题例子中： 工人和干部是人的子类，在职工人、退休工人、下岗工人是工人的子类， 行政干部、技术干部是干部的子类； 人是工人和干部的直接超类。人也是在职工人、退休工人、下岗工人、行政干部、技术干部的间接超类。'
              },
              {
                show: false,
                name: '面向对象程序设计的基本思想是什么？ 它的主要特点是什么？',
                answer: '面向对象程序设计的基本思想是封装和可扩展性。 封装的特点： 面向对象程序设计就是把数据结构和数据结构上的操作算法封装在一个对象之中。 对象是以对象名封装的数据结构和可施加在这些数据上的私有操作。对象的数据结构 描述了对象的状态，对象的操作是对象的行为。 面向对象程序设计中，操作名列在封装对象的界面上，当其他对象要启动它的某个操作时，以操作名发一条消息，该对象接受消息，操作动作起来，完成对私有数据的加工。当一个面向对象的程序运行完毕时，各对象也就达到了各自的终态。输入、输出也由对象自己完成。 这种全封装的计算实体给软件带来了模块性、安全性等显著优点。因为它基本没有数据耦合，对象间没有因操作而产生的边界效应，出了错可以很快找到原因，所以易于维护和修改。 可扩展性的特点： 面向对象程序设计的可扩展性体现在继承性和行为扩展两个方面。 因为对象具有一种层次关系。每个对象可以有子对象。子对象可以继承父对象（及其祖先对象）的数据结构和操作，继承的部分就可以重用。 另一方面子对象还可以增加新的数据结构和新的操作。新增加的部分就是子对象对父对象发展的部分。 面向对象程序设计的行为扩展是指可以方便地增加程序代码来扩展对象的行为而不会影响该对象上的其他操作。'
              },
              {
                show: false,
                name: '定义并解释OO模型中以下核心概念： 对象与对象标识、封装、类、类层次。',
                answer: '答案要点：  对象与对象标识OID 现实世界的任一实体被模型化为一个对象，每个对象有一个唯一的标识，称为对象标识。  封装 每一个对象是其状态与行为的封装，其中状态是该对象一系列属性值的集合，而行为是在对象状态上操作的集合，操作也称为方法。  类 共享同样属性和方法集的所有对象构成了一个对象类简称类，一个对象是某一类的一个实例。类的属性的定义域可以是任何类，即可以是基本类也可以是包含属性和方法的一般类，还也可是这个类自身。  类层次 在一个面向对象数据库模式中，可以定义一个类（如C1）的子类（如C2），类C1称为类C2的超类（或父类)。子类（如C2）还可以再定义子类（如C3）。这样，面向对象数据库模式的一组类形成一个有限的层次结构，称为类层次。'
              },
              {
                show: false,
                name: 'OO模型中对象标识与关系模型中的“码”有什么区别？',
                answer: '答案要点： 对象标识具有永久持久性。一个对象一经产生系统就给它赋于一个在全系统中唯一的对象标识符，直到它被删除。对象标识是由系统统一分配的，用户不能对对象标识符进行修改。对象标识是稳定的，独立于值的，它不会因为对象中某个值的修改而改变。 关系模型中的“码”是值标识，不具有永久持久性，只具有程序内持久性。码是由用户 建立的，用来区分关系的不同元组。'
              },
              {
                show: false,
                name: '什么是单继承？什么是多重继承？继承性有什么优点？',
                answer: '答案要点： 若一个子类只能继承一个超类的特性（包括属性、方法和消息），这种继承称为单继承；若一个子类能继承多个超类的特性，这种继承称为多重继承。 继承性优点：  它是建模的有力工具，提供了对现实世界简明而精确的描述。  它提供了信息重用机制。由于子类可以继承超类的特性，这就可以避免许多重复定义。 （详细参见《概论》13.2.4）'
              },
              {
                show: false,
                name: '什么是操作的重载？在OODB中为什么要滞后联编？',
                answer: '答案要点： 在OO模型中对于同一个操作，可以按照类的不同，重新定义操作的实现，这称为操作的重载。这样，同一个操作名就与不同的实现方法，与不同的参数相联系。 为了提供这个功能，OODBMS不能在编译时就把操作名联编到程序上，必须在运行时根据实际请求中的对象类型和操作来选择相应的程序，把操作名与它联编上（即把操作名转换成该程序的地址），这个推迟的转换称为滞后联编。 （详细参见《概论》13.2.5）'
              },
              {
                show: false,
                name: '什么是OODB模式演进？为什么面向对象数据库模式的修改要比关系模式的修改复杂得多？',
                answer: '答案要点： 面向对象数据库模式是类的集合。模式为适应需求的变化会随着时间而变化，这称为模式演进。模式演进包括创建新的类、删除旧的类、修改类的属性和操作等。 面向对象数据库模式的修改要比关系模式的修改复杂的原因是：  模式改变频繁 使用OODB系统的应用通常需要频繁地改变OODB数据库模式。例如OODB经常运用于工程设计环境中，设计环境特征之一就是不断变化。  模式修改复杂 OO模型具有很强的建模能力和丰富的语义，包括类本身的语义、类属性之间和类之间丰富的语义联系，这使得模式修改操作的类型复杂多样。  OODB中模式演进往往是动态的，使得实现技术更加复杂。 （详细参见《概论》13.4）'
              },
              {
                show: false,
                name: '什么是对象-关系数据库？它的主要特点是什么？常用的实现方法有哪些？',
                answer: '答案要点： 对象-关系数据库系统是将关系数据库系统与面向对象数据库系统两方面的特征相结合，不仅支持核心的面向对象数据模型，而且支持传统数据库系统所具有的特征。 主要特点有： 1) 具有原来关系数据库的各种特点； 2) 扩充数据类型； 3) 支持复杂对象； 4) 支持继承的概念； 5) 提供通用的规则系统； 实现对象-关系数据库系统的方法主要有以下五类。 1) 从头开发对象-关系DBMS。 2) 在现有的关系型DBMS基础上进行扩展。扩展方法有两种：  对关系型DBMS核心进行扩充，逐渐增加对象特性。  不修改现有的关系型DBMS核心，而是在现有关系型DBMS外面加一个包装层。 3) 将现有的关系型DBMS与其他厂商的对象-关系型DBMS连接在一起，使现有的关系型DBMS直接而迅速地具有了对象-关系特征。连接方法主要有两种：  关系型DBMS使用网关技术与其他厂商的对象-关系型DBMS连接。  将对象-关系型引擎与关系型存储管理器结合起来，即以关系型DBMS作为系统的最底层，对象-关系型系统作为上层。 4) 将现有的OO型DBMS与其他厂商的对象-关系型DBMS连接在一起，使现有的面向对象型DBMS直接而迅速地具有了对象-关系特征。 5) 扩充现有的面向对象的DBMS，使之成为对象-关系型DBMS。'
              }
            ]
          },
          {
            id: 14,
            name: '第十四章 分布式数据库系统',
            contents: [
              {
                show: false,
                name: '什么样的数据库系统是分布式数据库系统？图14.1的系统配置在什么情况下只能算分散的数据库系统？在什么条件下才是分布式数据库系统？',
                answer: '答案要点： 分布式数据库是由一组数据组成的，这组数据分布在计算机网络的不同计算机上，网络中的每个结点具有独立处理的能力（称为场地自治），可以执行局部应用。同时，每个结点也能通过网络通信子系统执行全局应用。 分布式数据库定义的要点：分布性、逻辑整体性、自治性和协作性。 *解析： （1）分布性，数据库中的数据不是存储在同一场地上，这就可以和集中式数据库相区别。 （2）逻辑整体性，这些数据逻辑上是互相联系的，是一个整体，逻辑上如同集中数据库。 （3）自治性，分布数据库中每个结点上的DBMS具有独立处理的能力（如果没有连入网络，也是一个完整的DBMS）。 （4）协作性，分布数据库中各个结点上的DBMS能相互协调，执行全局应用。 答案要点： 《概论》图14.1中，如果用户既可以通过客户机对本地服务器中的数据库执行局部应用，也可以对两个或两个以上结点中的数据库执行全局应用，这样的系统是分布式数据库系统。不支持全局应用的系统不能称为分布式数据库系统，即只是分散的数据库系统。 （详细说明参见《概论》14.1.1）'
              },
              {
                show: false,
                name: '试述研制分布式数据库系统的目的和动机。',
                answer: '答案要点：研制分布式数据库系统的目的和动机，主要包括技术和组织两方面。  适应部门分布的组织结构，降低费用；  提高系统的可靠性和可用性；  充分利用数据库资源，提高数据库的利用率和共享程度；  逐步地扩展系统处理能力和系统规模。 （详细说明参见《概论》14.1.3）。'
              },
              {
                show: false,
                name: '试述分布式数据库系统的模式结构。',
                answer: ' 答案要点： 分布式数据库系统的模式结构可以分为两大部分：集中式数据库系统的模式结构和分布式数据库系统增加的模式级别，其中包括： （1）全局外模式，它们是全局应用的用户视图，是全局概念模式的子集。 （2）全局概念模式，它定义分布式数据库中数据的整体逻辑结构，使得数据如同没有分布一样。 （3）分片模式，定义片段以及全局关系到片段的映象。 （4）分布模式，定义片段的存放结点。分布模式的映象类型确定了分布式数据库是冗余的还是非冗余的。 （详细可参考《概论》图14.3分布式数据库系统的模式结构）。'
              },
              {
                show: false,
                name: '什么是数据分片？有几种分片方式？数据分片的目的是什么？有什么优点？',
                answer: '答案要点： 数据分片就是将数据表按照一定条件划分成若干子集，每个子集称为一个片段。 分片的方式有多种，水平分片和垂直分片是两种基本的分片方式，混合分片和导出分片是较复杂的分片方式。 水平分片是指按一定的条件将关系表按行（水平方向）分为若干不相交的子集，每个子集为关系的一个片段。 垂直分片是指将关系按列（垂直方向）分为若干子集。垂直分片的各个片段都要包含关系的码。这样才能从各个片段重构原来的关系。 导出分片是指导出水平分片，即水平分片的条件不是本身属性的条件而是其他关系的属性的条件。 混合分片是指按上述三种分片方式得到的片段继续按另一种方式分片。 数据分片的优点是：数据不是按照关系而是按片段来存放，有利于更好地根据用户需求来组织数据的分布，也有利于控制数据的冗余度。'
              },
              {
                show: false,
                name: '试述分布透明性的内容。',
                answer: '答案要点： 分布透明性包括分片透明性、位置透明性和局部数据模型透明性。 分片透明性指用户或应用程序只对全局关系进行操作而不必考虑关系的分片。当分片模式改变了，由于全局模式到分片模式的映象，全局模式不变，应用程序不必改写。 位置透明性指用户或应用程序不必了解片段的存储场地，当存储场地改变了，由于分片模式到分布模式的映象，应用程序不必改变。同时，若片段的重复副本数目改变了，数据的冗余度改变了，用户也不必关心如何保持各副本的一致性，这就是重复副本的透明性。 局部数据模型透明性指用户或用户程序不必了解局部场地上使用的是哪种数据模型。'
              },
              {
                show: false,
                name: '什么是同构型D-DBMS？ 什么是异构型D-DBMS？',
                answer: '答案要点： D-DBMS的同构和异构可以有三级：硬件级、操作系统级和局部DBMS级。其中最主要的是局部DBMS这一级，因为硬件和操作系统的不同将由通信软件处理和管理。所以，同构型D-DBMS定义为：在分布数据库系统中若每个结点的局部数据库具有相同的DBMS则成为同构型D-DBMS；若各结点的局部数据库具有不同的DBMS，则成为异构型的D-DBMS。 （详细说明参见《概论》14.2.4）'
              },
              {
                show: false,
                name: '设在《概论》14.2.3节的分布式数据库系统例子中，还有全局关系SC(SNO，CNO，G)，它具有两个导出分片SC_A，SC_B，分别存储理学院和文学院学生的选课记录。SC_A存放在场地4，SC_B存放在场地今有一个稍复杂的查询，从终端输入一个课程号，查找选修该课程的学生学号和姓名，并把它们显示在屏幕上。请写出具有不同层次分布透明性(类比例子中的三种情况)的应用程序。不必给出细节，只需写出算法思想。',
                answer: '情况1 若系统具有分片透明性，则 Scanf（″% s″，Scnumber）； / * 从终端读入课程号到变量Scnumber中 */ EXEC SQL SELECT Sno，Sname INTO ：SNO， ：NAME / * SNO，NAME为程序变量 * / FROM SC，Student / * 在全局关系SC，Student中查找 * / WHERE SC．Cno ＝：Scnumber AND SC．Sno＝Student．Sno； Printf（″% s，% s″，SNO，NAME）； / * 把SNO，NAME输出在屏幕上 * / 情况2 若系统具有位置透明性，但不具有分片透明性，则 Scanf（″% s″，Scnumber）； EXEC SQL SELECT Sno，Sname INTO ：SNO， ：NAME FROM SC_A，S_A WHERE SC_A．Cno ＝：Scnumber AND SC_A．Sno＝S_A．Sno； If（! FOUND）｛ EXEC SQL SELECT Sno，Sname INTO ：SNO， ：NAME FROM SC_B，S_B WHERE SC_B．Cno ＝：Scnumber AND SC_B．Sno＝S_B．Sno； ｝ Printf（″% s，% s″，SNO，NAME）； 情况3 若系统只具有局部数据模型透明性，不具有位置透明性（当然也就不具有分片透明性），则 Scanf（″% s″，Scnumber）； EXEC SQL SELECT Sno，Sname INTO ：SNO，：NAME FROM SC_A AT Site4， S_A AT Site1 / * 先在场地4的片段SC_A和场地1的片段S_A中查找* / WHERE SC_A．Cno ＝：Scnumber AND SC_A．Sno＝S_A．Sno； If（! FOUND）{ EXEC SQL SELECT Sno，Sname INTO ：SNO，：NAME FROM SC_B AT Site5，S_B AT Site2 / * 再在场地5的片段SC_B和场地2的片段S_B中查找*/ /*也可以在场地5的片段SC_B和场地3的片段S_B中查找* / WHERE SC_B．Cno ＝：Scnumber AND SC_B．Sno＝S_B．Sno； } Printf（″% s，% s″，SNO，NAME）；'
              },
              {
                show: false,
                name: '对14.3.1节的例子中介绍的六种策略改用下列估算值后分别计算通信时间： 红色零件数=1000， 北京供应商的装运单=10000。',
                answer: ' 策略1 把关系P传送到场地A，在A地进行查询处理，所以， T[1]=1+105×100/104 =103秒(16.7分) 策略2 把关系S，SP传到场地B，在B地执行查询处理，所以 T[2]=2+(104+106)×100/104≈10 100秒(2.8小时) 策略3 在场地A连接关系S和SP，选出城市为北京的元组（104个）然后对这些元组中的每个元组的Pno，询问场地B看此零件 是否红色。所以共问答104次，由于不是传送数据，只是消息的问答，所以 T[3]=2×104s (5.6小时) 策略4 在场地B选出红色零件的元组（103个），然后对每一个元组逐一检查A站，看北京供应商的装运单中是否有这个零件装运单（若有则选出SNO）每做这样一次检查包括2次消息，共问一答103次，所以 T[4]=2×103s (33.3分) 策略5 在场地A选出北京的供应商的装运单把结果送到场地B，在场地B完成最后处理，所以 T[5]=1+(104×100)/104≈101秒 (1.68分) 策略6 在场地B的关系 P 中选出红色的元组（1000个），把结果送到场地A完成最终处理。所以 T[6]=1+(1000×100)/104=11秒'
              },
              {
                show: false,
                name: '试述下列概念：两段提交协议(2PC)；分布事务的原子性；全局死锁。',
                answer: '答案要点： 2PC：2PC把一个分布事务的事务管理分为协调者和参与者。 2PC的第一阶段：协调者向所有参与者发出“准备提交”信息。如果某个参与者准备提交，就回答“就绪”信息，否则回答“撤销”信息。参与者在回答前，应把有关信息写入自己的日志中。协调者在发出准备提交信息前也要把有关信息写入自己的日志中。如果在规定时间内协调者收到了所有参与者“就绪”的信息，则将作出提交的决定，否则将作出撤销的决定。 2PC的第二阶段：协调者将有关决定的信息先写入日志，然后把这个决定发送给的所有的参与者。所有参与者收到命令之后首先往日志中写入“收到提交（或撤销）”决定的信息，并向协调者发送“应答（ACK）”消息，最后执行有关决定。协调者收到所有参与者的应答消息后，一个事务的执行到此结束，有关日志信息可以脱机保存。 分布事务的原子性：分布事务的原子性就应该是：组成一个全局事务的所有子事务要么一致地全部提交，要么一致地全部滚回。 全局死锁：全局事务执行时发生的涉及两个以上场地上的死锁。'
              },
              {
                show: false,
                name: '在分布式数据库系统中，对多副本的封锁有几种解决方法？',
                answer: '处理多副本的封锁可采取如下几种方法： （1）对写操作，要申请对所有副本的X锁。对于读操作，只要申请对某个副 本的S锁。 （2）无论是写操作还是读操作都要对多数（大于半数）副本申请X锁或S锁。 （3）规定某个场地上的副本为主副本，所有的读写操作均申请对主副本的封锁。'
              },
              {
                show: false,
                name: '分布式数据库系统有什么特点？',
                answer: '答案要点： 分布式数据库系统是在集中式数据库系统技术的基础上发展起来的，但不是简单地把集中式数据库分散地实现，它是具有自己的性质和特征的系统。  数据独立性：除了数据的逻辑独立性与物理独立性外，还具有数据分布独立性亦称分布透明性。  集中与自治相结合的控制结构：各局部的DBMS可以独立地管理局部数据库，具有自治的功能。同时又有集中控制机制，协调各局部DBMS的工作，执行全局应用。  数据可以适当冗余以提高系统的可靠性、可用性和性能。  全局的一致性、可串行性和可恢复性。分布式数据库系统中各局部数据库应满足集中式数据库的一致性、并发事务的可串行性和可恢复性。除此以外还应保证数据库的全局一致性、全局并发事务的可串行性和系统的全局可恢复性。 （详细说明参见《概论》14.1.2）。'
              }
            ]
          },
          {
            id: 15,
            name: '第十五章 并行数据库系统',
            contents: [
              {
                show: false,
                name: '并行数据库系统中有哪几种常用的数据划分方法？',
                answer: '答案要点： 划分数据时可以依据一个属性的值，也可以同时依据多个属性的值，前者称为一维数据划分，后者则称为多维数据划分。 一维数据划分方法相对比较简单，常用的数据划分方法有： •轮转法 •Hash法 •值域划分法 此外，还有用户定义的划分法、模式划分法、Hybrid_Range划分法等。 具体说明可参考《概论》15.5.1。'
              },
              {
                show: false,
                name: '什么是并行数据库系统的伸缩比和加速比？',
                answer: '答案要点： 线性伸缩比是指当任务扩大N倍，系统处理和存储能力也扩大N倍时系统性能不变。 线性伸缩比= （小任务在小系统上的运行时间）/（大（N倍）任务在大任务上的运行时间）=1 线性加速比是指当任务不变而系统处理和存储能力扩大N倍时，系统性能也提高N倍。 线性加速比= （小系统上执行一个任务的时间）/（大（N倍）系统上执行同一任务的时间）=N'
              },
              {
                show: false,
                name: '什么是并行数据库系统？',
                answer: '答案要点： 并行数据库系统是在并行机上运行的具有并行处理能力的数据库系统。并行数据库系统是数据库技术与并行计算技术相结合的产物。'
              },
              {
                show: false,
                name: '试述并行数据库系统的研制目标。',
                answer: '答案要点： 并行数据库系统该实现如下目标：  高性能 并行数据库系统通过将数据库管理技术与并行处理技术有机结合，发挥多处理机结构 的优势，提供比相应的大型机系统更高的性能价格比和可用性。  高可用性 并行数据库系统可通过数据复制来增强数据库的可用性。  可扩充性 系统通过增加处理和存储能力来平滑地扩展性能，应具有线性伸缩比和线性加速比。 具体说明可参考《概论》15.2。'
              },
              {
                show: false,
                name: '并行数据库系统有哪几种体系结构？试比较它们的特点。',
                answer: '答案要点：从硬件结构来看，根据处理机与磁盘、内存的相互关系可以将并行计算机分为三种基本的体系结构： •共享内存结构（SM）； •共享磁盘结构（SD）； •无共享资源结构（SN）。 此外还有混合结构，即整个系统是Shared_Nothing结构而每个结点是Shared_Memory结构。这种结构综合了SM与SN的优点。 (1) SM并行结构 SM并行结构由多个处理机、一个共享内存（主存储器）和多个磁盘存储器构成。多处理机和共享内存由高速通讯网络连接，每个处理机可直接存取一个或多个磁盘，即所有内存与磁盘为所有处理机共享。 (2) SD并行结构 SD并行结构由多个具有独立内存的处理机和多个磁盘构成。每个处理机都可以读写任何磁盘。 (3) SN并行结构 SN并行结构由多个处理节点构成。每个处理节点具有自己独立的处理机、内存和磁盘存储器。多个处理机结点由高速通信网络连接。 并行数据库系统体系结构的详细说明可参考《概论》15.3.1、15.3.2、15.3.3。'
              },
              {
                show: false,
                name: '阐述并行数据库系统中并行粒度的概念。',
                answer: '答案要点： 并行粒度是用来刻画查询执行的并行程度，有四种并行粒度： 不同用户事务间的并行性、同一事务内不同查询间的并行性、同一查询内不同操作间的并行性和同一操作内的并行性。 具体说明可参考《概论》15.4.1。'
              },
              {
                show: false,
                name: '举例说明水平并行和垂直并行的概念。',
                answer: '水平并行化指：互相独立的多个操作或者一个操作内互相独立的多个子操作分别由不同的处理机并行执行的形式。 如果两个操作OP1和OP2之间没有数据的依赖关系，这两个操作可以独立地并行执行。例如图（a）中对不同表的扫描操作Scan S和Scan P，由不同的处理机并行执行就是水平并行化的实例。 如果把操作的输入数据分解为多个子集，该操作就可以分成多个独立的子操作，每个子操作只处理一部分数据，这种针对单个操作的并行被称为操作内并行。例如图（c）中的Scan S和Sort S都被分解成三个子操作，每个子操作只对部分数据进行扫描和排序。 如果一个操作的输出流是另一个操作的输入流，这两个操作之间就存在着流水线并行性，操作间流水线并行又被直观地称为垂直并行。垂直并行化也就是指存在流水线方式依赖关系的操作分别由不同处理机并行执行的形式。例如图（b）中的四个操作都可以采用流水线方式并行执行。 详细说明可参考《概论》15.4.2。'
              },
              {
                show: false,
                name: '并行数据库系统中并行查询优化的必要性和困难何在？',
                answer: '答案要点： 查询优化始终是数据库管理系统的重要组成部分，查询优化的目标在于提高执行效率。由于并行数据库环境中存在多个处理机，并行查询优化应尽可能地使每个操作并行处理，充分利用系统资源提高并行度来达到提高系统性能的目的。 并行查询优化面临的两大困难在于： （1） 执行计划的搜索空间十分庞大 （2） 执行时的某些系统参数比如CPU数目、内存大小在优化时是未知的。 具体说明可参考《概论》15.4.4。'
              },
              {
                show: false,
                name: '试述数据划分在并行查询处理中的重要性。',
                answer: '答案要点： 数据划分是并行查询处理的重要基础。研究和实际表明，数据划分对于并行数据库系统的性能具有很大的影响。 通过将每个关系的数据划分为小的片段，并把这些小片段均匀地分布在系统的多个磁盘驱动器上可以降低数据的聚集度，使得每个操作能够由多个处理机来承担，从而减少查询的响应时间并提高整个系统的吞吐量。若负载不均，往往会造成多个处理机结点能力的浪费。所以使用正确的数据分布算法以达到负载均衡是并行数据库中数据分布的关键问题。 具体说明可参考《概论》15.5.1。'
              },
              {
                show: false,
                name: '试述并行数据库系统与分布式数据库系统的区别。',
                answer: '答案要点： 分布式数据库系统与并行数据库系统特别是与SN结构的并行数据库系统具有很多相似点:  它们都是用网络连接各个数据处理结点；  整个网络中的所有结点构成一个逻辑上统一的整体；  用户可以对各个结点上的数据进行透明存取等等。 分布式数据库系统和并行数据库系统的应用目标和具体实现方法不同，使得它们具有很大的不同：  应用目标不同 并行数据库系统的目标是充分发挥并行计算机的优势，利用各个处理机结点并行地完成任务，提高系统的整体性能。 分布式数据库系统的目标是实现场地自治和数据的全局透明共享，而不要求利用网络中的各个结点来提高系统处理性能。  实现方式不同 在并行数据库系统中各结点间采用高速网络互连，结点间的数据传输代价相对较低，因此当某些结点处于空闲状态时，可以将工作负载过大的结点上的部分任务通过高速网传送给空闲结点处理，从而实现系统的负载平衡。 在分布式数据库系统中，各结点间一般采用局域网或广域网相连，网络带宽较低，点到点的通信开销较大，因此在查询处理时一般应尽量减少结点间的数据传输量。  各结点的地位不同 在并行数据库系统中，不存在全局应用和局部应用的概念。各结点是非独立的。 而在分布式数据库系统中，各结点除了能通过网络协同完成全局事务外，更重要的是各结点具有场地自治性。'
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: '模拟考试',
        contents: [
          {
            id: 1,
            name: '第1套综合试卷',
            contents: [
              {
                show: false,
                name: '五种基本关系代数运算是[ ]',
                choices: [
                  'A. U，－，×，π和σ',
                  'B. U，－，∞，π和σ',
                  'C. U，n，x，π和σ',
                  'D. U，n，∞，π和σ'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '下列聚集函数中不忽略空值(null)的是[ ]',
                choices: [
                  'A. SUM(列名)',
                  'B. MAX(列名)',
                  'C. COUNT(*)',
                  'D. AVG(列名)'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '设关系模式R(A，B，C)，F是及上成立的FD集，F=｛B→C｝，则分解ρ｛AB，BC｝[ ]',
                choices: [
                  'A. 是无损联接，也是保持FD的分解',
                  'B. 是无损联接，但不保持FD的分解',
                  'C. 不是无损联接，但保持FD的分解',
                  'D. 既不是无损联接，也不保持FD的分解'
                ],
                answer: 'A'
              },
              {
                show: false,
                name: '在数据库设计中，将E-R图转换成关系数据模型的过程属于[ ]',
                choices: [
                  'A. 需求分析阶段',
                  'B. 概念设计阶段',
                  'C. 逻辑设计阶段',
                  'D. 物理设计阶段'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: 'DBMS中实现事务持久性的子系统是[ ]',
                choices: [
                  'A. 安全性管理子系统',
                  'B. 完整性管理子系统',
                  'C. 并发控制子系统',
                  'D. 恢复管理子系统'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '当关系及和S自然联接时，能够把及和S原该舍弃的元组放到结果关系中的操作是[ ]',
                choices: [
                  'A. 左外联接',
                  'B. 右外联接',
                  'C. 外部并',
                  'D. 外联接'
                ],
                answer: 'D'
              },
              {
                show: false,
                name: '关系模型中的实体完整性、参照完整性',
                answer: '(1)实体完整性规则：若属性／4是基本关系及的主属性，则属性A不能取空值。 (2)参照完整性规则：若属性(或属性组)9是基本关系及的外码，它与基本关系S的主码X。相对应(基本关系只和S不一定是不同的关系)，则对于R中每个元组在9上的值必须为： 1)或者取空值(9的每个属性值均为空值)； 2)或者等于S中某个元组的主码值。'
              },
              {
                show: false,
                name: '二段锁协议，可串行化调度',
                answer: '(1)两段锁协议是指所有事务必须分两个阶段对数据项加锁和解锁。 1)在对任何数据进行读、写操作之前，首先要申请并获得对该数据的封锁； 2)在释放一个封锁之后，事务不再申请和获得任何其他封锁。 “两段”的含义是，事务分为两个阶段： 第一阶段是获得封锁，也称为扩展阶段。在这阶段，事务可以申请获得任何数据项上的任何类型的锁，但是不能释放任何锁。 第二阶段是释放封锁，也称为收缩阶段。在这阶段，事务释放已经获得的锁，但是不能再申请任何锁。 (2)可串行化的调度的定义：多个事务的并发执行是正确的，当且仅当其结果与按某一次序串行地执行它们时的结果相同，我们称这种调度策略为可串行化的调度。'
              },
              {
                show: false,
                name: '什么是数据模型及其要素?',
                answer: '数据模型是数据库中用来对现实世界进行抽象的工具，是数据库中用于提供信息表示和操作手段的形式构架。 一般地讲，数据模型是严格定义的概念的集合。这些概念精确地描述系统的静态特性、动态特性和完整性约束条件。因此数据模型通常由数据结构、数据操作和完整性约束三部分组成。 (1)数据结构：是所研究的对象类型的集合，是对系统的静态特性的描述。 (2)数据操作：是指对数据库中各种对象(型)的实例(值)允许进行的操作的集合，包括操作及有关的操作规则，是对系统动态特性的描述。 (3)数据的约束条件：是完整性规则的集合，完整性规则是给定的数据模型中数据及其联系所具有的制约和依存规则，用以限定符合数据模型的数据库状态以及状态的变化，以保证数据的正确、有效、相容。'
              },
              {
                show: false,
                name: '文件系统的特点及其主要缺点是什么?',
                answer: '特点：数据可以长期保存，把数据组织成相互独立的数据文件，利用“按文件名访问，按记录进行存取”的技术，可以对文件进行修改、插入和删除的操作。实现了记录内的结构性，但整体无结构。应用程序和数据有一定的独立性，程序员不必过多考虑物理细节，节省了维护程序的工作量。 缺点：(1)数据共享性差，冗余度大；(2)数据独立性差。'
              },
              {
                show: false,
                name: '什么是数据库恢复?简述数据库恢复的基本技术。',
                answer: '把数据库从错误状态恢复到某一已知的正确状态(即一致状态或完整状态)，就是数据库恢复。 数据库恢复的基本技术是数据转储和登录日志文件。即根据存储在系统别处的冗余信息来恢复数据库系统。转储即DBA按照一定的策略将数据库复制到磁带或另一个磁盘上保存起来的过程。 日志文件是用来记录事务对数据库的所有更新操作的文件，包括数据库内部的更新操作。不同数据库系统采用的日志文件格式是不同的。 当系统运行过程中发生故障，利用转储的数据库后备副本和日志文件就可以将数据库恢复到故障前的某个一致性状态。'
              },
              {
                show: false,
                name: '已知关系模式R，U={A，B，C，D，E，C}F：{AC—B，CB—D，A—BE，E—GCl 求：AB，BC，AC是否为关系R的候选码?',
                answer: 'BC不是候选码，AB、AC是超码。'
              },
              {
                show: false,
                name: '试证由关系模式中全部属性组成的集合为候选码的关系是3NF，也是BCNF。',
                answer: '证明：因为关系模式的候选码由全部属性组成，所以该关系中没有非主属性。因此满足关系只属于3NF的条件：每个非主属性既不部分依赖于码，也不传递依赖于码。'
              },
              {
                show: false,
                name: '现有如下关系模式： 其中，Teacher(Tno，Tname，Tel，Dpartment，Bno，Bname，BorrowDate，Rdate，Backup)。 Tno一教师编号， Tname一教师姓名， Tel一电话， Department一所在部门， Bno一借阅图书编号， Bname一书名， BorrowDate一借书日期， Rdate一还书日期， Backup一备注 该关系模式的属性之间具有通常的语义，例如，教师编号函数决定教师姓名，即教师编号是惟一的，图书编号是惟一的，等等。 1．教师编号是候选码吗? 2．说明上一题判断的理由是什么。 3．写出该关系模式的主码。 4．该关系模式中是否存在部分函数依赖?如果存在，请写出其中两个。 5．说明要将一个1NF的关系模式转化为若干个2NF关系，需要如何做? 6．该关系模式最高满足第几范式?并说明理由。 7．将该关系模式分解为3NF。',
                answer: '1．教师编号Tno不是候选码。'
              },
              {
                show: false,
                name: '假设某商业集团数据库中有一关系模式R如下： R(商店编号，商品编号，商品库存数量，部门编号，负责人)如果规定： (1)每个商店的每种商品只在该商店的一个部门销售； (2)每个商店的每个部门只有一个负责人； (3)每个商店的每种商品只有一个库存数量。 试回答下列问题 (1)根据上述规定，写出关系模式R的基本函数依赖； (2)找出关系模式R的候选码； (3)试问关系模式R最高已经达到第几范式?为什么? (4)如果R不属于3NF，请将R分解成3NF模式集。',
                answer: '(1)有3个函数依赖：'
              },
              {
                show: false,
                name: '在供应商、零件数据库中有以下3个关系模式： 供应商：S(SNO，SNAME，CITY，STATUS) 零件：P(PNO，PNAME，WEIGHT，COLOR，CITY) 供应货：SP(SNO，PNO，QTY) 各属性的含义可由属性名体现，不再重复，供应货关系SP表示某供应商SNO，供应了PNO零件，数量为QTY。 用SQL语言完成以下操作： 1．求供应红色零件的供应商名字； 2．求北京供应商的号码、名字和状况(STATUS)； 3．求零件P2的总供应量； 4．把零件P2的重量增加5，颜色该为黄色。',
                answer: '1． SELECT SNAME FROM S WHERE SNO IN (SELECTSNO FROM P，SP WHERE P．COLOR：‘红色’ANDP．PNO：SP．PNO)； 2． SELECT SNO，SNAME，STATUS FROM S WHERE S．CITY：‘北京’ 3． WHERE PNO：‘P2’ 4． UPDATE P SETWEIGHT：WEIGHT十5，COLOR：‘黄色’ WHERE PNO：‘P2’'
              }
            ]
          },
          {
            id: 2,
            name: '第2套综合试卷',
            contents: [
              {
                show: false,
                name: '数据库与文件系统的根本区别在于[ ]',
                choices: [
                  'A. 提高了系统效率',
                  'B. 方便了用户使用',
                  'C. 数据的结构化',
                  'D. 节省了存储空间'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '现有关系模式： EMP(empno，ename，mgr，sal，workday) DEPT(deptno，dname，loc) 在以下视图中，不可能更新的视图为[]。',
                choices: [
                  'A. 视图V1，由1970年以后参加工作的雇员组成',
                  'B. 视图V2，由部门号和各部门的平均工资组成',
                  'C. 视图V3，由雇员姓名和其领导者姓名组成',
                  'D. 视图V4，由薪金超出所有雇员平均薪金以上的雇员组成'
                ],
                answer: 'B D'
              },
              {
                show: false,
                name: '对由SELECT--FROM—WHERE—GROUP--ORDER组成的SQL语句，其在被DBMS处理时，各子句的执行次序为[ ]。',
                choices: [
                  'A. SELECT—FROM—GROUP—WHERE—ORDER',
                  'B. FROM——SELECT--WHERE——GROUP——ORDER',
                  'C. FROM——WHERE——GROUP——SELECT——ORDER',
                  'D. SELECT——FROM——WHERE——GROUP——ORDER'
                ],
                answer: 'C'
              },
              {
                show: false,
                name: '试给出BCNF的定义，并说明满足BCNF的关系有哪些特性。',
                answer: '关系模式R∈1NF。若X→Y且YX时X必含有码，则R∈BCNF。 满足BCNF关系的特性有： 所有非主属性对每一个码都是完全函数依赖； 所有的主属性对每一个不包含它的码，也是完全函数依赖； 没有任何属性完全函数依赖于非码的任何一组属性。'
              },
              {
                show: false,
                name: '在建立一个数据库应用系统时，为什么要首先调试运行DBMS的恢复功能?简述一下你所了解的数据库系统的恢复方法。',
                answer: '因为计算机系统中硬件的故障、软件的错误、操作员的失误以及恶意的破坏是不可避免的，这些故障轻则造成运行事务非正常中断，影响数据库中数据的正确性，重则破坏数据库，使数据库中全部或部分数据丢失，为了防止出现此类事件带来的灾难性后果，必须首先调试运行DBMS的恢复功能。即把数据库从错误状态恢复到某一已知的正确状态(亦称为一致状态或完整状态)的功能。 DBMS一般都使用数据转储和登录日志文件实现数据库系统恢复功能。针对不同的故障，使用不同的恢复策略和方法。例如，对于事务故障的恢复是由DBMS自动完成的，对用户是透明的。 对于系统故障，也是由DBMS完成恢复操作，包括撤销(UNDO)故障发生时未完成的事务，重做(REDO)已完成的事务。DBA的任务是重新启动系统，系统启动后恢复操作就由DBMS来完成了。 对于介质故障，则恢复方法是由DBA重装最新的数据库后备副本和转储结束时刻的日志文件副本，然后DBA启动系统恢复命令，由DBMS完成恢复功能，即重做已完成的事务。'
              },
              {
                show: false,
                name: '试述数据模型中完整性约束条件的概念，并给出关系模型中的完整性约束。',
                answer: '数据模型应该反映和规定本数据模型必须遵守的基本的通用的完整性约束条件。数据模型还应该提供定义完整性约束条件的机制，以反映具体应月所涉及的数据必须遵守的特定的语义约束条件。 在关系模型中，任何关系必须满足实体完整性和参照完整性两个条件。这是关系数据模型必须遵守基本的通用的完整性约束条件。'
              },
              {
                show: false,
                name: '设有学生表S(SNO，SN)(SNO为学生号，SN为姓名)和学生选修课程表SC(SNO，CNO，CN，C)(CNO为课程号，CN为课程名，C为成绩)，试用SQL语言完成以下各题 (1)建立一个视图V—SSC(SNO，SN，CNO，CN，C)，并按CNO升序排序； (2)从视图V—SSC上查询平均成绩在90分以上的SN、CN和C。',
                answer: '(1) CREATEVIEWV—SSC(SNO，SN，CNO，CN，G) AS SELECT S．SNO，S．SN，CNO，SC．CN，SC．G FROM S，SC WHERE S．SNO：SC．SNO ORDER BY CNO； (2) SELECT SN，CN，C FROM V—SSC GROUP BY SNO HAVINGAVG©>90；'
              },
              {
                show: false,
                name: '今有如下关系数据库： S(SNO，SN，STATUS，CITY) P(PNO，PN，COLOR，WEIGHT) (JNO，JN，CITY) SPJ(SNO，PNO，JNO，QTY) 其中，S为供应单位，P为零件，J为工程项目，SPJ为工程订购零件的订单，其语义为：某供应单位供应某种零件给某个工程，请用SQL完成下列操作。 (1)求为工程J1提供红色零件的供应商代号。 (2)求使用S1供应的零件的工程名称。 (3)求供应商与工程所在城市相同的供应商提供的零件代号。 (4)求至少有一个和工程不在同一城市的供应商提供零件的工程代号。',
                answer: ' (1) SELECT DISnNCT SPJ．SNO FROM SPJ，P WHERE P．PNO二SPJ．PNO AND SPJ.JNO=‘J1’AND P．COLOR=‘红’； (2) SELECTJ．JN FROM J，SPJ WHERE J．JNO=SPJ．JNOAND SPJ．SNO=‘S1’； (3) SELECT DISTINCT SPJ．PNO FROM S，J，SPJ WHERE S．SNO=SPJ．SNO AND)．JNO=SPJ．JNO AND S．CITY=J．CITY； (4) SELECT DISTINCT SPJ．JNO FROM S，J，SPJ WHERE S．SNO=SPJ．SNO AND J．JNO=SPJ．JNO AND S．CITY<>J．CITY；'
              },
              {
                show: false,
                name: '假设存款余额x：1000元，甲事务取走存款300元，乙事务取走存款200元，其执行时间如下： 甲事务 时间 乙事务 读x t1 t2 读x 更新x二x—300 t3 14 更新x：x—200 如何实现这两个事务的并发控制?',
                answer: '如果按照题中的顺序执行甲乙两个事务，则最后的x为800，而不是正确的500。为此，采用封锁的方法，将甲事务修改为： WHILE(x上已有排他锁) ｛ 等待 } 对x加上排他锁 读x 更新x=x-300 释放排他锁 将乙事务修改为： { 等待 } 对x加上排他锁 读x 更新x=x-200 释放排他锁 可以说明如下： 甲事务 时间 乙事务 XLOCK x t1 获得 t2 XLOCK x 等待 更新x=x-300 t3 等待 x=700 Commit t4 等待 UNLOCKx t5 等待 t6 获得XLOCK x t7 更新x=x-200 x=500 t8 Commit t9 UNLOCK x'
              },
              {
                show: false,
                name: '试述关系数据库系统中视图(VIEW)的定义，引进VIEW的概念有什么优点。',
                answer: '视图是从一个或几个基本表导出的表。视图本身不独立存储在数据库中，是一个虚表。即数据库中只存放视图的定义而不存放视图对应的数据，这些数据仍存放在导出视图的基本表中。视图在概念上与基本表等同，用户可以如同基本表那样使用视图，可以在视图上再定义视图。 引进VIEW的优点有： (1)视图能够简化用户的操作。 (2)视图使用户能以多种角度看待同一数据。 (3)视图对重构数据库提供了一定程度的逻辑独立性。 (4)视图能够对机密数据提供安全保护。'
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
