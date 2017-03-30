var app = new Vue({
			el: '#app',
			data: {
			    code: '',
			    text: '',
			    finallyCode: [
`
/* 大家好，我叫采释然*/
/*今天展示一个通过vue写的一个动画效果的页面*/
/*先加点背景色和字体颜色*/
.code{
	background-color: #88A23A;
	color: #fff;
}
/*再加上高度,宽度,边框等等属性*/
*{
	transition: all 0.5s;
}
.code{
	width: 40%;
	height: 600px;
	padding: 20px;
	border: 1px solid #000;
	line-height: 2;
	overflow: auto;
}
/*然后加点旋转效果*/
html{
	perspective: 1000px;
}
.code {
	position: fixed; 
	left: 0; 
	top: 0; 
	transform: rotateY(10deg) translateZ(-100px) ;
}
/*接下来准备一个文本编辑区域区域*/
.text{
	position: fixed; 
	right: 0; 
	top: 0; 
	width: 40%;
	height: 600px;
	border: 1px solid;
	transform: rotateY(10deg);
	white-space: pre-wrap;
	padding: 20px;
	line-height 2;
	background-color: #88A23A;
	color: #fff;
	font-size: 20px;
	overflow: auto;
}
/*现在写点什么吧*/
`
,
`
姓名：采释然
年龄：23
求职意向：前端工程师
技能：
    1. 熟悉掌握 HTML，CSS，JavaScript。
       能够较好的还原设计稿
    2. 能够基本应用 
       jQuery,require.js,webpack,express等常用的库和框架进行开发
    3. 善于学习和自主解决问题
个人博客：http://www.jianshu.com/u/0e080b7dde7e
git：https://github.com/AllenWalkerC?tab=repositories
联系方式：
    电话：15994782676
    qq邮箱：383911973@qq.com
    微信: CSR_1994
`]
			},
			created: function(){
               this.start()
			},
			computed: {
                styleCode: function(){
                	return '<style>' + this.code + '</style>';
                }
			},
			methods: {
                start: function(){
                	var n = 0,
                        _this = this;
	                var time = setInterval(function(){
	                    _this.code = _this.finallyCode[0].substring(0,n);
	                    _this.goBottom()
	                    if(n > _this.finallyCode[0].length){
	                    	clearInterval(time);
	                    	console.log(1)
	                    	_this.second();
	                    }else{
	                    	n++
	                    }
	                },100)
                },
                second: function(){
                	var n = 0,
                        _this = this;
	                var time = setInterval(function(){
	                    _this.text = _this.finallyCode[1].substring(0,n);
	                    _this.goBottom()
	                    if(n > _this.finallyCode[1].length){
	                    	clearInterval(time);
	                    }else{
	                    	n++
	                    }
	                },100)
                },             
                goBottom: function(){
                	document.querySelector('.code').scrollTop = 1000000;
                }
			}
		})