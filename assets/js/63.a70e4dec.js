(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{270:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("专栏原创出处："),s("a",{attrs:{href:"https://github.com/GourdErwa/review-notes/tree/master/language/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源笔记文件 "),s("OutboundLink")],1),t._v(" ，"),s("a",{attrs:{href:"https://github.com/GourdErwa/java-advanced/tree/master/java-concurrency",target:"_blank",rel:"noopener noreferrer"}},[t._v("github-源码 "),s("OutboundLink")],1),t._v("，欢迎 Star，转载请附上原文出处链接和本声明。")])]),t._v(" "),s("p",[t._v("Java 并发编程专栏系列笔记，系统性学习可访问个人复盘笔记-技术博客 "),s("a",{attrs:{href:"https://review-notes.top/language/java-concurrency/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程 "),s("OutboundLink")],1)]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#countdownlatch-是什么"}},[t._v("CountDownLatch 是什么")])]),s("li",[s("a",{attrs:{href:"#countdownlatch-如何使用"}},[t._v("CountDownLatch 如何使用")])]),s("li",[s("a",{attrs:{href:"#countdownlatch-实现原理"}},[t._v("CountDownLatch 实现原理")])]),s("li",[s("a",{attrs:{href:"#countdownlatch-和-join-的区别"}},[t._v("CountDownLatch 和 join 的区别")])]),s("li",[s("a",{attrs:{href:"#应用场景"}},[t._v("应用场景")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"countdownlatch-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countdownlatch-是什么"}},[t._v("#")]),t._v(" CountDownLatch 是什么")]),t._v(" "),s("p",[t._v("CountDownLatch 允许一个或多个线程等待其他线程完成操作。")]),t._v(" "),s("h2",{attrs:{id:"countdownlatch-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countdownlatch-如何使用"}},[t._v("#")]),t._v(" CountDownLatch 如何使用")]),t._v(" "),s("ul",[s("li",[t._v("CountDownLatch 的构造方法需要传入一个计数值，计数值即需要等待的线程数量。")]),t._v(" "),s("li",[t._v("任务封装为线程模式异步运行，每个任务完成后调用 countDown 方法（计数值 -1）")]),t._v(" "),s("li",[t._v("调用 await 方法，当前线程进入等待状态")]),t._v(" "),s("li",[t._v("计数值为 0 时，将从 await 方法返回，继续执行后续逻辑")])]),t._v(" "),s("p",[t._v("我们模拟一个方法，可以解析 excel 工作簿 ，每个工作簿解析由单独线程完成，全部完成后返回执行结果，伪代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountDownLatchExample")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 线程池")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExecutorService")]),t._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newFixedThreadPool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  解析 excel 工作簿，sheets 为多个工作簿")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolveExcel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" sheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个工作簿解析为一个计数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountDownLatch")]),t._v(" latch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountDownLatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个工作簿封装为一个工作线程提交到线程池，完成后计数 -1")]),t._v("\n        sheets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("\n            executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解析工作簿... {}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                latch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("countDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 完成后计数 -1")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" latch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MINUTES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等待 2 min")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"解析超时，当前计数[{}]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" latch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"countdownlatch-实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countdownlatch-实现原理"}},[t._v("#")]),t._v(" CountDownLatch 实现原理")]),t._v(" "),s("p",[t._v("部分关键源码解读，需要 AbstractQueuedSynchronizer（AQS） 基础知识：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountDownLatch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 基于 AQS 实现的共享式同步状态相关操作")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Sync")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractQueuedSynchronizer")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 CountDownLatch ，需指定计数器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CountDownLatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入等待状态。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 共享式的获取同步状态，响应中断")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进入等待状态，在 await 基础上支持超时等待。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("await")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InterruptedException")]),t._v(" \n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前计数 -1 ，底层表现为，同步状态值 -1 ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("countDown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前计数结果 ，底层表现为，当前同步状态值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("主要逻辑为：")]),t._v(" "),s("ul",[s("li",[t._v("初始化一个共享式锁，初始化时同步状态设置为计数值 N（理解为：初始化后已经被 N 个线程持有锁了）")]),t._v(" "),s("li",[t._v("调用 wait 方法后，当前线程进入等待状态，等待同步状态为 0 时获取锁")]),t._v(" "),s("li",[t._v("每个线程完成后调用 countDown 方法，即同步状态 -1")]),t._v(" "),s("li",[t._v("所有线程完成后，同步状态为 0，wait 方法所在线程获取锁继续执行")])]),t._v(" "),s("h2",{attrs:{id:"countdownlatch-和-join-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#countdownlatch-和-join-的区别"}},[t._v("#")]),t._v(" CountDownLatch 和 join 的区别")]),t._v(" "),s("p",[t._v("join 用于让当前执行线程等待 join 线程执行结束。其实现原理是不停检查 join 线程是否存活，如果 join 线程存活则让当前线程永远等待。")]),t._v(" "),s("ul",[s("li",[t._v("调用 join 方法需要等待 thread 执行完毕才能继续向下执行")]),t._v(" "),s("li",[t._v("CountDownLatch 只需要检查计数器的值为零就可以继续向下执行")])]),t._v(" "),s("p",[t._v("相比之下，CountDownLatch 更加灵活一些，可以实现一些更加复杂的业务场景。")]),t._v(" "),s("h2",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("ul",[s("li",[t._v("需要等待多个线程"),s("em",[t._v("完成后继续执行")]),t._v("的场景。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);