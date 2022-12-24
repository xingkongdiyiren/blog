import{_ as e,o,c as t,a as r}from"./app.995015c7.js";const u=JSON.parse('{"title":"前端框架下的战争","description":"","frontmatter":{"updateTime":"2019/01/28","title":"前端框架下的战争"},"headers":[],"relativePath":"ESSAY/beyondFrameworks.md","lastUpdated":1671886206000}'),s={name:"ESSAY/beyondFrameworks.md"},c=r("<p>前端框架、工具越来越多。借助这些，有的如鱼得水，大展身手；有的也深感困惑，疲于学习，也不知学习这么多东西的出路在哪。<br> 也听到过许多有趣的技术论点。</p><blockquote><p><strong>使用前后端分离框架的人/项目/公司技术比较先进/牛？xx框架导致了oo问题？a框架是垃圾，不如b框架？</strong></p></blockquote><p>不可否认的是，前后端分离的开发思想和模式是更先进的。<br> 而框架不过是个工具而已，关键还是要看使用的人。<br> 记得第一次接手一个前后端分离开发模式的商业项目时，一打开前人的代码，几乎把我惊到下巴接不上。随便举几点：</p><ul><li>css 样式，直接使用 inline 的方式写在 html 结构中，前后端在开发模式上是分离了，而样式和结构、行为却混合在一起</li><li>组件间的变量传递，各处 <code>$refs</code> 齐飞，什么 View-Model、响应式，想找下数据是哪里被改变的都困难，更不用说放着 <code>vuex</code> 不用了</li><li>开发人员分了好几批，代码风格也各异，会发现同一种效果，有数种不同的实现方式，更有的为了改不同的字，就把一个组件复制出十多份来修改</li><li>UI组件已有完善的功能，还用极麻烦的原生方法来实现，刀耕火种，码风淳朴，却明显不是在炫技而只是因为没仔细看组件的官方文档</li><li>我来到项目组时，项目经理/后端/IOS开发几种人员能同时兼前端工作的，可以脑补一下是一种什么情况</li><li>不加思索地使用 <code>if-else</code> <code>for</code>，代码冗长而易读性差，其实根本就不用判断或者手动实现循环的</li></ul><p>这样的情况也是比较常见了。但暴露出的问题，和使用了什么开发模式、什么前后框架本身关系不大。</p><blockquote><p><strong>前端很容易？xx前端框架是学习后端框架的思想的？</strong></p></blockquote><p>业界有个经典的前端自黑的笑话，说一个不太懂技术的领导问项目经理，前端是干什么的，为什么要设置这个岗位，为什么有了美工还要有前端。<br> 实际上这已不是个笑话，因为我遇到过太多被轻视的事。<br> 还遇到过，项目在开始时不太想在前端投入资源，到后期实在有前端问题搞不定了，就来找，“有个简单的前端问题，你帮忙看看”……前端人员难以承受之痛！<br> UI设计师好歹只是被称呼成美工嘛，前端连存在的意义都被质疑了。</p><p>又有次一位后端开发找到，让帮忙处理个样式的 BUG，是直接在他的电脑上修改的。他研究了小半天吧，才找来的，结果我半分钟就搞定了，然后他并没有觉得我技术多牛或经验丰富，而是哦了下，说原来这样，下次我也会了。<br> 当时内心颇感好笑。不是因为他的评价对我有多重要，而是这不是“知道某个属性”就能解决的问题，而是理解一些 DOM 布局的模式才好懂的事，否则他下次还是只会复制粘贴。</p><p>对后端同学并无恶意与不敬。<br> 前端、后端术业有专攻，各有各的不容易。<br> CSS 就是一个个的属性设置，没太多的逻辑，所以入门很容易，往往被“爱展示技术超群”的程序员们所不屑，认为这是无技术含量的工作。但要写一后漂亮的结构和样式，真不是容易的事。即使能写得很好（代码简洁、可读性高、易于重构重用……），客户知道么？领导买账么？再厉害也就被称呼为“高级页面仔”。综合而言就是个吃力不讨好的工作。<br> 我自己作为前端，都渐渐不太爱写样式了，更别说后端了。最好是有现成的、美观的 UI 库，开箱即用。<br> 什么？UI 设计师在偷偷搞什么创新设计和屌炸天的样式？赶紧上去一掌拍死。</p><p>知道一些前端后端俱佳，甚至 UI 都精通的大牛，根本就不会去发表xx行业/岗位困难或是容易的。他们没空。</p>",10),l=[c];function p(a,i,d,n,_,b){return o(),t("div",null,l)}const S=e(s,[["render",p]]);export{u as __pageData,S as default};
