(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{252:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-链表"}},[t._v("1.链表")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-1-链表的特点"}},[t._v("1.1 链表的特点")])]),s("li",[s("a",{attrs:{href:"#_1-2-链表的类型"}},[t._v("1.2 链表的类型")])]),s("li",[s("a",{attrs:{href:"#_1-3-时间复杂对比对"}},[t._v("1.3 时间复杂对比对")])])])]),s("li",[s("a",{attrs:{href:"#_2-单链表"}},[t._v("2.单链表")])]),s("li",[s("a",{attrs:{href:"#_3-单向循环链表"}},[t._v("3.单向循环链表")])]),s("li",[s("a",{attrs:{href:"#_4-双向链表"}},[t._v("4.双向链表")])]),s("li",[s("a",{attrs:{href:"#_5-双向循环链表"}},[t._v("5.双向循环链表")])]),s("li",[s("a",{attrs:{href:"#_6-实践"}},[t._v("6.实践")])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-链表"}},[t._v("#")]),t._v(" 1.链表")]),t._v(" "),s("p",[t._v("链表作为一种基础的数据结构可以用来生成其它类型的数据结构。通常由一连串节点组成，每个节点包含任意的实例数据（data）和一或两个用来指向上一个/或下一个节点的位置的链接。")]),t._v(" "),s("p",[t._v("我们通过下图可直观的比对数组与链表的结构。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/ArrayList_LinkedList.jpg"}})]),t._v(" "),s("p",[t._v("比如我们删除第「3」个元素时，两种数据结构的操作差异性如下：")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/ArrayList_LinkedList_Node_delete.jpg"}})]),t._v(" "),s("h3",{attrs:{id:"_1-1-链表的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-链表的特点"}},[t._v("#")]),t._v(" 1.1 链表的特点")]),t._v(" "),s("ul",[s("li",[t._v("灵活的内存分配，不需要连续的内存空间。")]),t._v(" "),s("li",[t._v("查询慢。不能随机访问，需要迭代整个链表。时间复杂度为 O(n)，n 为链表长度。")]),t._v(" "),s("li",[t._v("修改删除快。只需要操作对应节点的数据就可以。时间复杂度为 O(1)。")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-链表的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-链表的类型"}},[t._v("#")]),t._v(" 1.2 链表的类型")]),t._v(" "),s("p",[t._v("根据链表节点内部维护的指针及头尾节点引用维护动作情况可分为单链表、双向链表、单向循环链表、双向循环列表。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/linked.jpg"}}),t._v(" "),s("p",[t._v(" 来源：https://www.jianshu.com/p/a3698e4f0414")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-时间复杂对比对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-时间复杂对比对"}},[t._v("#")]),t._v(" 1.3 时间复杂对比对")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/171811.png"}}),t._v(" "),s("p",[t._v(" 来源：https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/761/")])]),t._v("\n结论：\n"),s("p",[t._v("如果你需要经常添加或删除结点，链表可能是一个不错的选择。")]),t._v(" "),s("p",[t._v("如果你需要经常按索引访问元素，数组可能是比链表更好的选择。")]),t._v(" "),s("h2",{attrs:{id:"_2-单链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-单链表"}},[t._v("#")]),t._v(" 2.单链表")]),t._v(" "),s("p",[t._v("每个节点仅有一个后驱指针。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单链表-节点定义.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SinglyListNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SinglyListNode")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后驱节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SinglyListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("优点：插入/删除数据：因为不需要移动数据，只需要在操作位前后修改数据，仅单独操作考虑，时间复杂度位 O(1)")]),t._v(" "),s("p",[t._v("缺点：随机访问第 K 个元素需要根据指一个一个遍历，时间复杂度位 O(n)")]),t._v(" "),s("h2",{attrs:{id:"_3-单向循环链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-单向循环链表"}},[t._v("#")]),t._v(" 3.单向循环链表")]),t._v(" "),s("p",[t._v("在单链表的基础上，尾节点的 next 指针指向头节点地址，使链表首尾相连")]),t._v(" "),s("p",[t._v("优点：从表中任一节点出发都能遍历整个链表")]),t._v(" "),s("h2",{attrs:{id:"_4-双向链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-双向链表"}},[t._v("#")]),t._v(" 4.双向链表")]),t._v(" "),s("p",[t._v("每个节点有前驱和后驱两个指针。")]),t._v(" "),s("blockquote",[s("p",[t._v("在单链表中，它无法获取给定结点的前一个结点，因此在删除给定结点之前我们必须花费 O(N) 时间来找出前一结点。"),s("br"),t._v("\n在双链表中，这会更容易，因为我们可以使用“prev”引用字段获取前一个结点。因此我们可以在 O(1) 时间内删除给定结点。")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 双向链表-节点定义.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DoublyListNode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DoublyListNode")]),t._v(" next"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后驱、前驱节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DoublyListNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("优点：双向链表可以根据查询索引判断遍历的方向。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 寻找 index 所在的节点")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findCurrNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),t._v(" pred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断头部、尾部遍历")]),t._v("\n        pred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        pred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("缺点：占用了更多的内存空间。最坏的情况下，时间复杂度将是 O(N)，其中 N 是链表的长度。")]),t._v(" "),s("h2",{attrs:{id:"_5-双向循环链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-双向循环链表"}},[t._v("#")]),t._v(" 5.双向循环链表")]),t._v(" "),s("p",[t._v("在双向链表的基础上，将首尾两个节点相连接起来。")]),t._v(" "),s("p",[t._v("优点：从表中任一节点出发都能遍历整个链表")]),t._v(" "),s("h2",{attrs:{id:"_6-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-实践"}},[t._v("#")]),t._v(" 6.实践")]),t._v(" "),s("p",[t._v("推荐完成")]),t._v(" "),s("ul",[s("li",[t._v("关于单链表、双链表的实现源码可参考 "),s("a",{attrs:{href:"https://github.com/GourdErwa/leetcode/tree/bd37714b00af1ba53bb5f6616e9fd71c36aa70f1/data-structures/src/main/java/io/groud/leetcode/data_structures/linkedlist",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/explore/learn/card/linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LeetCode-探索-链表 "),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E9%93%BE%E8%A1%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科-链表 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/explore/learn/card/linked-list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣-探索-链表 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/circle/article/YGr54o/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣刷题总结之链表 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://codenuclear.com/difference-between-arraylist-and-linkedlist-arraylist-vs-linkedlist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("codenuclear-Difference between ArrayList and LinkedList"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("更多相关专栏内容汇总：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/104368031",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构与算法-专栏文章目录汇总 "),s("OutboundLink")],1)])])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);