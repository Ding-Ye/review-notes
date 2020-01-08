(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{352:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("专栏原创出处："),a("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/scala-basis",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源笔记文件 "),a("OutboundLink")],1),s._v(" ，"),a("a",{attrs:{href:"https://github.com/GourdErwa/scala-advanced/tree/master/scala-base/src/main/scala/com/gourd/scala/base/",target:"_blank",rel:"noopener noreferrer"}},[s._v("github-源码 "),a("OutboundLink")],1),s._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),s._v(" "),a("p",[s._v("Scala 编程语言专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),a("a",{attrs:{href:"https://review-notes.top/language/scala-basis/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Scala 编程语言 "),a("OutboundLink")],1)]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#什么是案例类"}},[s._v("什么是案例类")])]),a("li",[a("a",{attrs:{href:"#定义一个案例类"}},[s._v("定义一个案例类")])]),a("li",[a("a",{attrs:{href:"#比较两个案例类"}},[s._v("比较两个案例类")])]),a("li",[a("a",{attrs:{href:"#拷贝一个案例类"}},[s._v("拷贝一个案例类")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"什么是案例类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是案例类"}},[s._v("#")]),s._v(" 什么是案例类")]),s._v(" "),a("p",[s._v("案例类 (Case classes) 和普通类差不多，但是有几点关键差别：")]),s._v(" "),a("ul",[a("li",[s._v("案例类创建之后，scala 还会为其自动创建一个半生对象，里面包含了 apply 和 unapply 方法。")]),s._v(" "),a("li",[s._v("案例类默认实现了 unapply 方法，可以通过模式匹配获取成员属性，因此案例类很适合用于模式匹配。")]),s._v(" "),a("li",[s._v("案例类非常适合用于创建不可变的数据，因此构造参数不建议声明成 var。")]),s._v(" "),a("li",[s._v("案例类还默认实现了 toString、equals、copy、hashCode 这些方法。")])]),s._v(" "),a("h2",{attrs:{id:"定义一个案例类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义一个案例类"}},[s._v("#")]),s._v(" 定义一个案例类")]),s._v(" "),a("p",[s._v("一个最简单的案例类定义由关键字 case class、类名、参数列表 (可为空) 组成。")]),s._v(" "),a("ul",[a("li",[s._v("实例化案例类时可以不使用关键字 new，直接通过类名创建，因为案例类有一个默认的 apply 方法来创建对象。")]),s._v(" "),a("li",[s._v("案例类构造方法中的成员属性默认是 public val 的。")])]),s._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("isbn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" frankenstein "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"978-0486282114"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 案例类的构造参数没有加关键字限定时，默认是 public val 的")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" recipient"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guillaume@quebec.ca"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jorge@catalonia.es"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ça va ?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prints guillaume@quebec.ca")]),s._v("\n  message1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"travis@washington.us"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this line does not compile")]),s._v("\n")])])]),a("h2",{attrs:{id:"比较两个案例类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较两个案例类"}},[s._v("#")]),s._v(" 比较两个案例类")]),s._v(" "),a("p",[s._v("案例类在做比较的时候是按属性值进行比较而非按引用比较。")]),s._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 尽管 message2 和 message3 引用不同的对象，但是他们的属性值是相等的，所以 message2 == message3 为 true。")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" recipient"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jorge@catalonia.es"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guillaume@quebec.ca"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Com va?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jorge@catalonia.es"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guillaume@quebec.ca"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Com va?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" message3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])])]),a("h2",{attrs:{id:"拷贝一个案例类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝一个案例类"}},[s._v("#")]),s._v(" 拷贝一个案例类")]),s._v(" "),a("p",[s._v("可以使用案例类的实例的 copy 方法来创建一个浅拷贝。"),a("br"),s._v("\n创建浅拷贝的同时可以通过构造参数来为浅拷贝对象的成员属性做一些改变。")]),s._v(" "),a("div",{staticClass:"language-scala extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" recipient"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" body"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"julien@bretagne.fr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"travis@washington.us"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Me zo o komz gant ma amezeg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定 message 的 recipient 作为 message1 的 sender")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 设置 message1 的 recipient 的属性值为 "claire@bourgogne.fr"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 而 message1 的 body 属性直接拷贝的 message 实例的 body 值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" message1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recipient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" recipient "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"claire@bourgogne.fr"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// travis@washington.us")]),s._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recipient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// claire@bourgogne.fr")]),s._v("\n  println"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "Me zo o komz gant ma amezeg"')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);