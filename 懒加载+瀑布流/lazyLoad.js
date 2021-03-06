function LazyLoad(){
	this.init = function(){
		this.div = $('.hide');
		this.data = [
		             'http://imgs.aixifan.com/live/1487597946154/1487597946154.png',
		             'http://imgs.aixifan.com/live/1487597933085/1487597933085.jpg',
		             'http://imgs.aixifan.com/live/1485502791959/1485502791959.png',
		             'http://imgs.aixifan.com/live/1485502794294/1485502794294.jpg',
		             'http://imgs.aixifan.com/live/1485502813214/1485502813214.jpg',
		             'http://imgs.aixifan.com/live/1484128032428/1484128032428.jpg',
		             'http://imgs.aixifan.com/live/1484128023911/1484128023911.jpg',
		             'http://imgs.aixifan.com/live/1484128078769/1484128078769.jpg',
		             'http://imgs.aixifan.com/live/1484128111773/1484128111773.jpg',
		             'http://imgs.aixifan.com/live/1484128147427/1484128147427.png',
		             'http://imgs.aixifan.com/live/1484128240776/1484128240776.jpg',
		             'http://imgs.aixifan.com/live/1484128294770/1484128294770.jpg'
		             ];
	}
	this.lazy = function(){
		if(this.checkShow()){
			this.render(this.waterfall)
		}
	}
	this.checkShow = function(){
		var scoll = $(window).scrollTop(),
		    windowHeight = $(window).height(),
		    divHeight = this.div.offset().top;
		if(divHeight<(scoll+windowHeight)){
			return true;
		}else{
			return false;
		}
	}
	this.waterfall= function(){
		var arr = [],
		    minValue,
		    minIndex,
		    cols = parseInt($(window).width()/$('.img-list>li').outerWidth(true));
		for(var i = 0;i<cols;i++){
			arr[i] = 0;
		}
		$('.img-list>li').each(function(){
			minValue = Math.min.apply(null,arr);
			minIndex = arr.indexOf(minValue);
			$(this).css({
				top: minValue,
				left: $(this).outerWidth(true) * minIndex
			})
			arr[minIndex] += $(this).outerHeight(true);
			$('.ct-img>ul').height(arr[minIndex]);
		})
	}
	this.render = function(fn){
		var html = '';
		for(var i = 0;i<this.data.length;i++){
	    		    html += '<li>';
	    		    html += '<img src='+this.data[i]+' class=h'+this.random(1,5)+'>';
	    		    html += '</li>';
		}
        $('.ct-img>ul').append(html);
        fn()
	}
    this.bind = function(){
			var that = this
			$(window).on('scroll',function(){
				var lock;
				if(lock){
                	clearTimeout(lock);
	            }
                lock = setTimeout(function(){
                	that.lazy();
                },500)
			})
			$(window).on('resize',function(){
				that.render(that.waterfall)
			})
   }
   this.random = function(min,max){
   	   return Math.floor(Math.random()*(max-min+1)+min)
   }
   this.init();
   this.bind();
   this.render(this.waterfall);
}
var lazyWater = new LazyLoad()