function LoadNews(){
	this.init = function(){
		this.newsList = $('.news-list');
		this.liWidth = $('.news-item').outerWidth(true);
		this.num = 10;
		this.page = 0;
		this.imgArr = [];
		this.rows = parseInt(this.newsList.width()/this.liWidth);
		for(var i = 0;i<this.rows ;i++){
			this.imgArr[i] = 0
		}
	}
	this.bind = function(){ 
	    var lock = false;   		
		$(window).on('scroll',function(){
			this.show();
		}.bind(this))
	}
	this.getNews = function(){
		$.ajax({
			url: 'http://platform.sina.com.cn/slide/album_tech',
			method: 'get',
			data:{
				app_key: '1271687855',
				num: this.num,
				page: this.page
			},
			dataType: 'jsonp',
			jsonp:"jsoncallback"
		}).done(function(result){
			this.render(result);
			this.page++
		}.bind(this))
	}
	this.render = function(result){
		var html = '';
		for(var i = 0 ;i<result.data.length;i++){
			    html +='<li class="news-item">';
			    html +='<a href='+result.data[i].url+'><img src='+result.data[i].img_url+' alt=""></a>';
			    html +='<h3>'+result.data[i].short_name+'</h3>';
			    html +='<p>'+result.data[i].short_intro+'</p>';
			    html +='</li>';
		}
		var $html = $(html),
		    _this = this;
		this.newsList.append($html);
		var defereds = [],
		    $img = $html.find('img');
		$img.each(function(){
			var defer = $.Deferred();
			$(this).on('load',function(){
				defer.resolve();
			})    			
			defereds.push(defer)
		})
		$.when.apply(null,defereds).done(function(){
			_this.waterfallLayout($html);
		})
		return $html
	}
	this.waterfallLayout = function(result){
            for(var i = 0;i<result.length;i++){
            	var minValue = Math.min.apply(null,this.imgArr),
                    minIndex = this.imgArr.indexOf(minValue);
            	result.eq(i).css({
            		top: this.imgArr[minIndex],
            		left: this.liWidth*minIndex
            	})
            	this.imgArr[minIndex] += result.eq(i).outerHeight(true);
            }
            this.newsList.height(Math.max.apply(null,this.imgArr));
	}
	this.checkShow = function(){
		var referencePoint = $('.check-place').offset().top,
		    offsetLen = $(window).height()+$(window).scrollTop();
		    if(referencePoint<offsetLen){
		    	return true;
		    }else{
		    	return false;
		    }
	}
	this.show = function(){
		if(this.checkShow()){
			this.getNews()
		}
	}
	this.init();
	this.show();
	this.bind();
}
var news = new LoadNews();