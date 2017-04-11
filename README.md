# module

这个项目包括了我在学习过程中写的一些常用的组件和页面，有tab组件，瀑布流组件，轮播组件，懒加载，瀑布流和ajax的新闻页面，使用require.js写的页面，使用vue.js写的动画效果页面。

tab组件，轮播组件，懒加载组件，瀑布流组件都是使用面向对象的方式编写，代码具有一定的复用性，代码结构清晰可读性较高，使用require.js写的页面，有轮播，图片懒加载，回到顶部功能，将不同的功能划分成不同的模块，模块使用了AMD规范编写，再通过发布订阅模式思想写的事件中心模块，实现轮播图变化的同时背景色和文字内容同时改变，最后定义主模块将所有模块的功能集中起来，定义入口模块引入主模块，再通过require.js提供的r.js将所有模块合并压缩，优化请求的次数，实现一个具有轮播，回到顶部，图片懒加载功能的页面，vue.js动画页面主要运用vue.js声明式渲染这一特性，不断的改变数据，让页面呈现一种样式随着文字内容的变化而变化的效果。

通过这个项目，主要让我加深了对代码的模块化和前端工程化的理解，而工程化工具，比如：webpack，gulp的使用主要就是配置文件的配置，对commonjs规范和代码模块化思想的理解，代码模块化不仅让代码的复用性和封装性更高，而且让代码的维护成本也大大降低，使用过vue.js后发现只要基础知识牢固，对它的原理有一定的理解，上手还是很容易的。


- [瀑布流+懒加载页面预览](http://htmlpreview.github.io/?https://github.com/AllenWalkerC/module/blob/master/%E6%87%92%E5%8A%A0%E8%BD%BD%2B%E7%80%91%E5%B8%83%E6%B5%81/%E6%87%92%E5%8A%A0%E8%BD%BD%2B%E7%80%91%E5%B8%83%E6%B5%81.html)

该页面使用面向对象的方式实现，运用到的库是jQuery，实现步骤可参考我的博客[地址](http://www.jianshu.com/p/2a7a41d57b9a)



- [瀑布流+懒加载+ajax页面预览](http://htmlpreview.github.io/?https://github.com/AllenWalkerC/module/blob/master/%E7%80%91%E5%B8%83%E6%B5%81%2B%E6%87%92%E5%8A%A0%E8%BD%BD%2Bajax/%E6%96%B0%E9%97%BB.html)

实现方法和瀑布流+懒加载页面大致相同，通过jsonp方式来获取数据


- [require.js页面预览](http://caishiran.top/module/requirejs/index.html)

该页面使用模块化实现，模块符合AMD规范，运用到的库是require.js。实现步骤可参考我的博客地址[地址](http://www.jianshu.com/p/aacd4ef1f659)

- [Tab组件预览](http://htmlpreview.github.io/?https://github.com/AllenWalkerC/module/blob/master/tab%E7%BB%84%E4%BB%B6/tab%E7%BB%84%E4%BB%B6.html)
  [轮播组件预览](http://caishiran.top/module/%E8%BD%AE%E6%92%AD%E7%BB%84%E4%BB%B6/carousel.html)
  
Tab组件和轮播组件使用面向对象的方式实现


- [vue页面预览](http://caishiran.top/module/vue%E5%8A%A8%E7%94%BB/vue%E5%8A%A8%E7%94%BB.html)

该页面使用vue.js实现，主要的思路就是使用setInterval方法不断的修改数据，达到样式随着内容的改变而改变。
