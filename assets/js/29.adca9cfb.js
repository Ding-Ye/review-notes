(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{246:function(t,a,s){"use strict";s.r(a);var e=s(9),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/leetcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-树的概念"}},[t._v("1. 树的概念")])]),s("li",[s("a",{attrs:{href:"#_2-二叉树"}},[t._v("2. 二叉树")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-二叉树的遍历"}},[t._v("2.1 二叉树的遍历")])]),s("li",[s("a",{attrs:{href:"#_2-2-二叉树的类型"}},[t._v("2.2 二叉树的类型")])]),s("li",[s("a",{attrs:{href:"#二叉树相关算法"}},[t._v("二叉树相关算法")])])])]),s("li",[s("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-树的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-树的概念"}},[t._v("#")]),t._v(" 1. 树的概念")]),t._v(" "),s("p",[t._v("具有 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("(")]),s("mi",[t._v("n")]),s("mo",[t._v("≥")]),s("mn",[t._v("0")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n(n\\ge 0)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("≥")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 个节点的有限集称为树。")]),t._v(" "),s("p",[t._v("当 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("=")]),s("mn",[t._v("0")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n = 0")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathrm"},[t._v("0")])])])]),t._v(" 时称为空树；")]),t._v(" "),s("p",[t._v("当 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("≥")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n\\ge 1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.78041em","vertical-align":"-0.13597em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("n")]),s("span",{staticClass:"mrel"},[t._v("≥")]),s("span",{staticClass:"mord mathrm"},[t._v("1")])])])]),t._v(" 时，仅有一个特定的称为根的结点，其余结点可分为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("m")]),s("mo",[t._v("(")]),s("mi",[t._v("m")]),s("mo",[t._v("≥")]),s("mn",[t._v("0")]),s("mo",[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m(m\\ge 0)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[t._v("m")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathit"},[t._v("m")]),s("span",{staticClass:"mrel"},[t._v("≥")]),s("span",{staticClass:"mord mathrm"},[t._v("0")]),s("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(" 个互不相交的有限集。每一个集合本身又是一棵树，称为根的子树。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/tree.jpeg"}})]),t._v(" "),s("p",[t._v('特点：树是非线性结构，数据元素具有"一对多"的逻辑关系；树中的每个元素最多有一个前驱结点，有多个后继结点。')]),t._v(" "),s("h2",{attrs:{id:"_2-二叉树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-二叉树"}},[t._v("#")]),t._v(" 2. 二叉树")]),t._v(" "),s("p",[t._v("二叉树是一种更为典型的树树状结构。如它名字所描述的那样，二叉树是每个节点最多有两个子树的树结构，通常子树被称作“左子树”和“右子树”。\n")]),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/binary-tree.jpg"}}),t._v(" "),s("p",[t._v("二叉树示例图")])]),s("p"),t._v(" "),s("h3",{attrs:{id:"_2-1-二叉树的遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-二叉树的遍历"}},[t._v("#")]),t._v(" 2.1 二叉树的遍历")]),t._v(" "),s("ul",[s("li",[t._v("前序遍历：首先访问根节点，然后遍历左子树，最后遍历右子树。")]),t._v(" "),s("li",[t._v("中序遍历：先遍历左子树，然后访问根节点，然后遍历右子树。")]),t._v(" "),s("li",[t._v("后序遍历：先遍历左子树，然后遍历右子树，最后访问树的根节点。")]),t._v(" "),s("li",[t._v("层级遍历：逐层遍历，二叉树的最大深度也就是层级树。")])]),t._v(" "),s("p",[t._v("对于上述三种遍历，我们简化为，前中后只是表明遍历时「根节点的位置」，不管根在哪儿都是从左向右。每次遍历到节点时把它看做时一棵新树按刚刚的方式继续遍历。")]),t._v(" "),s("p",[t._v("我们可以简化为一个不需要记忆的方法：")]),t._v(" "),s("ul",[s("li",[t._v("前序遍历："),s("strong",[t._v("根")]),t._v(" 左 右")]),t._v(" "),s("li",[t._v("中序遍历：左 "),s("strong",[t._v("根")]),t._v(" 右")]),t._v(" "),s("li",[t._v("后序遍历：左 右 "),s("strong",[t._v("根")])])]),t._v(" "),s("p",[t._v("常见算法题：")]),t._v(" "),s("p",[t._v("前序遍历、中序遍历、后序遍历、层级遍历、计算二叉树的最大深度。")]),t._v(" "),s("p",[t._v("从前序与中序遍历序列构造二叉树、从中序与后序遍历序列构造二叉树、二叉树的最近公共祖先")]),t._v(" "),s("h3",{attrs:{id:"_2-2-二叉树的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-二叉树的类型"}},[t._v("#")]),t._v(" 2.2 二叉树的类型")]),t._v(" "),s("p",[t._v("满二叉树：又叫完美二叉树，除叶子节点所有子节点都有左右子节点。")]),t._v(" "),s("p",[t._v("完全二叉树：除叶子节点所有子节点都有左右子节点。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://ipic-review-notes.oss-cn-beijing.aliyuncs.com/091142.jpg"}})]),t._v(" "),s("h3",{attrs:{id:"二叉树相关算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉树相关算法"}},[t._v("#")]),t._v(" 二叉树相关算法")]),t._v(" "),s("p",[t._v("推荐 "),s("a",{attrs:{href:"https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣-卡片-二叉树"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[t._v("本内容随着对数据结构算法的深入，持续更新。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://leetcode-cn.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("力扣 "),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("更多相关专栏内容汇总：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gourderwa.blog.csdn.net/article/details/104020339",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 核心知识-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103594468",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/103828570",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java JVM（JDK13）-专栏文章目录汇总 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/xiaohulunb/article/details/104368031",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据结构与算法-专栏文章目录汇总 "),s("OutboundLink")],1)])])]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://blog-review-notes.oss-cn-beijing.aliyuncs.com/gourderwa.footer.jpeg"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);