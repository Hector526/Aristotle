import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";

export default defineConfig({
  title: "柴帽双全的博客", //站点标题
  description: "柴帽双全的博客", //mate标签description，多用于搜索引擎抓取摘要
  base: "/Aristotle/",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "柴帽双全",
    nav: [
      { text: "课程笔记", link: "/course/" },
      { text: "前端知识", link: "/knowledge/" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Hector526" },
      {
        icon: {
          svg: '<svg t="1663660926462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2449" width="200" height="200"><path d="M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z" fill="#8a8a8a" p-id="2450"></path><path d="M57.93 489.326c-15.215 12.288-28.527 23.405-29.697 24.576-2.34 2.194-5.412-0.44 80.018 66.852 33.207 26.185 32.622 25.747 57.637 45.495 10.386 8.192 36.279 28.672 57.783 45.495 38.18 30.135 44.91 35.401 52.663 41.545 2.048 1.756 22.967 18.14 46.372 36.572 23.26 18.432 74.167 58.514 112.933 89.088 38.912 30.573 71.095 55.734 71.826 56.027 0.732 0.293 7.46-4.389 14.921-10.386 21.797-16.97 90.259-70.949 101.523-79.872 5.705-4.535 12.873-10.24 15.945-12.58 3.072-2.488 6.436-5.12 7.314-5.852 0.878-0.878 11.85-9.509 24.283-19.31 20.773-16.091 59.1-46.226 64.366-50.615 1.17-1.024 5.12-4.096 8.777-6.875 3.657-2.78 7.9-6.29 9.509-7.607 1.609-1.317 14.775-11.703 29.257-23.113 29.11-22.82 42.277-33.207 88.503-69.632 17.262-13.605 32.475-25.454 33.646-26.478 2.486-2.048 31.451-24.869 44.617-35.255 4.827-3.657 9.07-7.168 9.508-7.607 0.44-0.585 5.998-4.827 12.435-9.8 6.436-4.828 13.165-10.24 15.067-11.85l3.365-2.926-9.948-7.753c-5.412-4.388-10.24-8.192-10.679-8.63-1.17-1.317-22.381-18.433-30.135-24.284-3.95-3.072-7.314-5.998-7.606-6.73-1.317-3.071-6.73 0.147-29.258 17.994-13.458 10.532-25.746 20.187-27.355 21.504-1.61 1.463-10.533 8.338-19.749 15.652-9.216 7.168-17.115 13.459-17.554 13.898-0.439 0.438-6.583 5.412-13.897 10.971-7.168 5.559-15.214 11.703-17.7 13.75-4.974 4.097-5.413 4.39-20.334 16.239-5.56 4.388-11.264 8.777-12.435 9.8-1.17 1.025-20.333 16.092-42.422 33.354-22.09 17.408-41.546 32.768-43.155 34.084-1.609 1.463-14.482 11.557-28.525 22.528s-40.814 32.037-59.539 46.812c-18.578 14.775-42.276 33.353-52.516 41.399s-23.26 18.285-28.965 22.82l-10.386 8.339-4.389-3.072c-2.34-1.756-4.68-3.511-5.12-3.95-0.439-0.439-4.973-4.096-10.24-8.046-11.849-9.216-14.482-11.264-16.676-13.166-0.878-0.877-4.243-3.51-7.46-5.851-3.22-2.487-6.145-4.681-6.584-5.12-0.439-0.439-6.875-5.705-14.482-11.703-7.607-5.851-14.921-11.556-16.091-12.58-1.317-1.17-17.116-13.605-35.255-27.795-17.993-14.19-35.109-27.648-38.035-29.842-5.705-4.681-33.499-26.624-125.074-98.743-34.523-27.209-72.704-57.344-84.846-66.852-49.737-39.498-55.15-43.594-56.905-43.447-0.877 0-14.043 10.24-29.257 22.528z" fill="#8a8a8a" p-id="2451"></path></svg>',
        },
        link: "https://juejin.cn/user/2559318799429822",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 Hector",
    },

    sidebar: {
      "/course/": [
        {
          text: "课程笔记",
          items: [
            { text: "目录", link: "/course/" },
            {
              text: "浏览器原理",
              link: "/browser/",
            },
            {
              text: "说透低代码",
              link: "/lowCode/00-抛开争论，先来看看真正的低代码",
            },
          ],
        },
      ],
      "/browser/": [
        {
          text: "浏览器原理",
          items: [
            {
              text: "宏观视角上的浏览器",
              collapsed: true,
              items: [
                { text: "简介", link: "/browser/" },
                {
                  text: "01-Chrome架构：仅仅打开了1个页面为什么有4个进程",
                  link: "/browser/01-Chrome架构：仅仅打开了1个页面，为什么有4个进程",
                },
                {
                  text: "02-TCP协议：如何保证页面文件能被完整送达浏览器",
                  link: "/browser/02-TCP协议：如何保证页面文件能被完整送达浏览器",
                },
                {
                  text: "03-HTTP请求流程：为什么很多站点第二次打开速度会很快",
                  link: "/browser/03-HTTP请求流程：为什么很多站点第二次打开速度会很快",
                },
                {
                  text: "04-导航流程：从输入URL到页面展示，这中间发生了什么",
                  link: "/browser/04-导航流程：从输入URL到页面展示，这中间发生了什么",
                },
                {
                  text: "05-渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的",
                  link: "/browser/05-渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的",
                },
                {
                  text: "06-渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的",
                  link: "/browser/06-渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的",
                },
              ],
            },
            {
              text: "浏览器中的JavaScript执行机制",
              collapsed: true,
              items: [
                {
                  text: "07-变量提升：JavaScript代码是按顺序执行的吗",
                  link: "/browser/07-变量提升：JavaScript代码是按顺序执行的吗",
                },
                {
                  text: "08-调用栈：为什么JavaScript代码会出现栈溢出",
                  link: "/browser/08-调用栈：为什么JavaScript代码会出现栈溢出",
                },
                {
                  text: "09-块级作用域：var缺陷以及为什么要引入let和const",
                  link: "/browser/09-块级作用域：var缺陷以及为什么要引入let和const",
                },
                {
                  text: "10-作用域链和闭包 ：代码中出现相同的变量，JavaScript引擎是如何选择的",
                  link: "/browser/10-作用域链和闭包 ：代码中出现相同的变量，JavaScript引擎是如何选择的",
                },
                {
                  text: "11-this：从JavaScript执行上下文的视角讲清楚this",
                  link: "/browser/11-this：从JavaScript执行上下文的视角讲清楚this",
                },
              ],
            },
            {
              text: "V8工作原理",
              collapsed: true,
              items: [
                {
                  text: "12-栈空间和堆空间：数据是如何存储的",
                  link: "/browser/12-栈空间和堆空间：数据是如何存储的",
                },
                {
                  text: "13-垃圾回收：垃圾数据是如何自动回收的",
                  link: "/browser/13-垃圾回收：垃圾数据是如何自动回收的",
                },
                {
                  text: "14-编译器和解释器：V8是如何执行一段JavaScript代码的",
                  link: "/browser/14-编译器和解释器：V8是如何执行一段JavaScript代码的",
                },
              ],
            },
            {
              text: "浏览器中的页面循环系统",
              collapsed: true,
              items: [
                {
                  text: "15-消息队列和事件循环：页面是怎么“活”起来的",
                  link: "/browser/15-消息队列和事件循环：页面是怎么“活”起来的",
                },
                {
                  text: "16-WebAPI：setTimeout是如何实现的",
                  link: "/browser/16-WebAPI：setTimeout是如何实现的",
                },
                {
                  text: "17-WebAPI：XMLHttpRequest是怎么实现的",
                  link: "/browser/17-WebAPI：XMLHttpRequest是怎么实现的",
                },
                {
                  text: "18-宏任务和微任务：不是所有任务都是一个待遇",
                  link: "/browser/18-宏任务和微任务：不是所有任务都是一个待遇",
                },
                {
                  text: "19-Promise：使用Promise，告别回调函数",
                  link: "/browser/19-Promise：使用Promise，告别回调函数",
                },
                {
                  text: "20-asyncawait：使用同步的方式去写异步代码",
                  link: "/browser/20-asyncawait：使用同步的方式去写异步代码",
                },
              ],
            },
            {
              text: "浏览器中的页面",
              collapsed: true,
              items: [
                {
                  text: "21-Chrome开发者工具：利用网络面板做性能分析",
                  link: "/browser/21-Chrome开发者工具：利用网络面板做性能分析",
                },
                {
                  text: "22-DOM树：JavaScript是如何影响DOM树构建的",
                  link: "/browser/22-DOM树：JavaScript是如何影响DOM树构建的",
                },
                {
                  text: "23-渲染流水线：CSS如何影响首次加载时的白屏时间",
                  link: "/browser/23-渲染流水线：CSS如何影响首次加载时的白屏时间",
                },
                {
                  text: "24-分层和合成机制：为什么CSS动画比JavaScript高效",
                  link: "/browser/24-分层和合成机制：为什么CSS动画比JavaScript高效",
                },
                {
                  text: "25-页面性能：如何系统地优化页面",
                  link: "/browser/25-页面性能：如何系统地优化页面",
                },
                {
                  text: "26-虚拟DOM：虚拟DOM和实际的DOM有何不同",
                  link: "/browser/26-虚拟DOM：虚拟DOM和实际的DOM有何不同",
                },
                {
                  text: "27-渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题",
                  link: "/browser/27-渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题",
                },
                {
                  text: "28-WebComponent：像搭积木一样构建Web应用",
                  link: "/browser/28-WebComponent：像搭积木一样构建Web应用",
                },
              ],
            },
            {
              text: "浏览器中的网络",
              collapsed: true,
              items: [
                {
                  text: "29-HTTP1：HTTP性能优化",
                  link: "/browser/29-HTTP1：HTTP性能优化",
                },
                {
                  text: "30-HTTP2：如何提升网络速度",
                  link: "/browser/30-HTTP2：如何提升网络速度",
                },
                {
                  text: "31-HTTP3：甩掉TCP、TLS 的包袱，构建高效网络",
                  link: "/browser/31-HTTP3：甩掉TCP、TLS 的包袱，构建高效网络",
                },
                {
                  text: "32-同源策略：为什么XMLHttpRequest不能跨域请求资源",
                  link: "/browser/32-同源策略：为什么XMLHttpRequest不能跨域请求资源",
                },
                {
                  text: "33-跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性",
                  link: "/browser/33-跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性",
                },
                {
                  text: "34-CSRF攻击：陌生链接不要随便点",
                  link: "/browser/34-CSRF攻击：陌生链接不要随便点",
                },
                {
                  text: "35-安全沙箱：页面和系统之间的隔离墙",
                  link: "/browser/35-安全沙箱：页面和系统之间的隔离墙",
                },
                {
                  text: "36-HTTPS：让数据传输更安全",
                  link: "/browser/36-HTTPS：让数据传输更安全",
                },
              ],
            },
            {
              text: "加餐",
              collapsed: true,
              items: [
                {
                  text: "37 加餐一-浏览上下文组：如何计算Chrome中渲染进程的个数",
                  link: "/browser/37 加餐一-浏览上下文组：如何计算Chrome中渲染进程的个数",
                },
                {
                  text: "38 加餐二-任务调度：有了setTimeOut，为什么还要使用rAF",
                  link: "/browser/38 加餐二-任务调度：有了setTimeOut，为什么还要使用rAF",
                },
                {
                  text: "39 加餐三-加载阶段性能：使用Audits来优化Web性能",
                  link: "/browser/39 加餐三-加载阶段性能：使用Audits来优化Web性能",
                },
                {
                  text: "40 加餐四-页面性能工具：如何使用Performance",
                  link: "/browser/40 加餐四-页面性能工具：如何使用Performance",
                },
                {
                  text: "41 加餐五-性能分析工具：如何分析Performance中的Main指标",
                  link: "/browser/41 加餐五-性能分析工具：如何分析Performance中的Main指标",
                },
                {
                  text: "42 加餐六-HTTPS：浏览器如何验证数字证书",
                  link: "/browser/42 加餐六-HTTPS：浏览器如何验证数字证书",
                },
              ],
            },
          ],
        },
      ],
      "/lowCode/": [
        {
          text: "说透低代码",
          items: [
            {
              text: "开篇词",
              collapsed: true,
              items: [
                {
                  text: "00-抛开争论，先来看看真正的低代码",
                  link: "/lowCode/00-抛开争论，先来看看真正的低代码",
                },
              ],
            },
            {
              text: "认知基础与架构策略",
              collapsed: true,
              items: [
                {
                  text: "01-低代码平台到底是什么样的",
                  link: "/lowCode/01-低代码平台到底是什么样的",
                },
                {
                  text: "02-低代码到底是银弹，还是行业毒瘤",
                  link: "/lowCode/02-低代码到底是银弹，还是行业毒瘤",
                },
                {
                  text: "03-低代码的天花板：一个完备的低代码平台应该具备哪些条件",
                  link: "/lowCode/03-低代码的天花板：一个完备的低代码平台应该具备哪些条件",
                },
                {
                  text: "04-演进策略：先发展通用能力还是先满足业务需求",
                  link: "/lowCode/04-演进策略：先发展通用能力还是先满足业务需求",
                },
                {
                  text: "05-基础设施 ：启动低代码平台研发之前，你需要有什么家底",
                  link: "/lowCode/05-基础设施 ：启动低代码平台研发之前，你需要有什么家底",
                },
              ],
            },
            {
              text: "核心功能开发",
              collapsed: true,
              items: [
                {
                  text: "06-踏出新手村便遭遇大Boss：如何架构低代码的引擎",
                  link: "/lowCode/06-踏出新手村便遭遇大Boss：如何架构低代码的引擎",
                },
                {
                  text: "07-结构化代码生成法：代码如何生成代码",
                  link: "/lowCode/07-结构化代码生成法：代码如何生成代码",
                },
                {
                  text: "08-布局编辑器：如何做到鱼和熊掌兼得",
                  link: "/lowCode/08-布局编辑器：如何做到鱼和熊掌兼得",
                },
                {
                  text: "09-属性编辑器：如何解除Web组件属性与编辑器的耦合",
                  link: "/lowCode/09-属性编辑器：如何解除Web组件属性与编辑器的耦合",
                },
                {
                  text: "10-可视化编程：如何有效降低App前后端逻辑开发的技能门槛",
                  link: "/lowCode/10-可视化编程：如何有效降低App前后端逻辑开发的技能门槛",
                },
                {
                  text: "11-亦敌亦友：Low Code与Pro Code混合使用怎样实现",
                  link: "/lowCode/11-亦敌亦友：Low Code与Pro Code混合使用怎样实现",
                },
                {
                  text: "12-业务数据：再好的App，没有数据也是白搭",
                  link: "/lowCode/12-业务数据：再好的App，没有数据也是白搭",
                },
                {
                  text: "13-多人协同编辑：野百合的春天为啥来得这么晚",
                  link: "/lowCode/13-多人协同编辑：野百合的春天为啥来得这么晚",
                },
                {
                  text: "14-编辑历史：是对Git做改造，还是另辟蹊径",
                  link: "/lowCode/14-编辑历史：是对Git做改造，还是另辟蹊径",
                },
              ],
            },
            {
              text: "平台功能拓展",
              collapsed: true,
              items: [
                {
                  text: "15-低代码平台应该优先覆盖应用研发生命周期中的哪些功能",
                  link: "/lowCode/15-低代码平台应该优先覆盖应用研发生命周期中的哪些功能",
                },
                {
                  text: "16-扩展与定制：如何实现插件系统并形成生态圈",
                  link: "/lowCode/16-扩展与定制：如何实现插件系统并形成生态圈",
                },
              ],
            },
            {
              text: "阶段性总结",
              collapsed: true,
              items: [
                {
                  text: "总结与展望-低代码之路，我们才刚刚开始",
                  link: "/lowCode/总结与展望-低代码之路，我们才刚刚开始",
                },
              ],
            },
            {
              text: "动态更新",
              collapsed: true,
              items: [
                {
                  text: "17-兼容性问题：如何有效发现兼容性问题",
                  link: "/lowCode/17-兼容性问题：如何有效发现兼容性问题",
                },
                {
                  text: "18-兼容性问题：如何有效解决兼容性问题",
                  link: "/lowCode/18-兼容性问题：如何有效解决兼容性问题",
                },
                {
                  text: "19-如何使用平民技术实现UX设计稿转代码",
                  link: "/lowCode/19-如何使用平民技术实现UX设计稿转代码",
                },
              ],
            },
          ],
        },
      ],
      "/knowledge/": [
        {
          text: "前端知识",
          items: [
            { text: "目录", link: "/knowledge/" },
            {
              text: "前端调试",
              link: "/devDebugger/",
            },
          ],
        },
      ],
      "/devDebugger/": [
        {
          text: "前端调试",
          items: [
            { text: "简介", link: "/devDebugger/" },
            {
              text: "VSCode调试Vue2项目配置教程",
              link: "/devDebugger/VSCode调试Vue2项目配置教程",
            },
          ],
        },
      ],
    },
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
});
