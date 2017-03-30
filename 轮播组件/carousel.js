		function Shuffling(){
              this.imgIndex = 1;
              this.imgWidth = $('.ct li').width();
              this.first = $('.ct li').first().clone();
              this.last = $('.ct li').last().clone();
              $('.ct').prepend(this.last);
              $('.ct').append(this.first);
              this.imgNum = $('.ct li').length;
              $('.ct').width((this.imgNum)*this.imgWidth);
              this.bind();
		}
		Shuffling.prototype = {
			prev: function(num){
				if((this.imgIndex-1) === 0){
					   $('.ct').css({
					   	   left: -this.imgWidth*(this.imgNum-2)
					   })
					   this.imgIndex = this.imgNum-2;
					   this.changeColor(this.imgIndex-1);
					   $('.ct li').eq(this.imgIndex).siblings('li').removeClass('show');
				       $('.ct li').eq(this.imgIndex).addClass('show');
				}else{
					   $('.ct').css({
					   	   left: '+='+this.imgWidth*num
					   })
					   this.imgIndex-=num;
					   this.changeColor(this.imgIndex-1);
					   $('.ct li').eq(this.imgIndex).siblings('li').removeClass('show');
				       $('.ct li').eq(this.imgIndex).addClass('show');
				}
			},
			next: function(num){
				if((this.imgIndex+1) === (this.imgNum-1)){
	               	   $('.ct').css({
	               	   	   left: -this.imgWidth
	               	   })
	               	   this.imgIndex = 1;
	               	   this.changeColor(this.imgIndex-1);
	               	   $('.ct li').eq(this.imgIndex).siblings('li').removeClass('show');
				       $('.ct li').eq(this.imgIndex).addClass('show');
	               }else{
	               	   $('.ct').css({
	               	   	   left: '-='+this.imgWidth*num
	               	   })
	               	   this.imgIndex+=num;
	               	   this.changeColor(this.imgIndex-1);
	               	   $('.ct li').eq(this.imgIndex).siblings('li').removeClass('show');
				       $('.ct li').eq(this.imgIndex).addClass('show');
	               }
			},
			changeColor: function(num){
				$('.btn li').eq(num).siblings('li').removeClass('active');
				$('.btn li').eq(num).addClass('active');
			},
			btnControl: function($ele){
                var index = $ele.index()+1;
                var imgIndex = $('.show').index();
                var difference = index-imgIndex;
                if(difference>0){
                	this.next(difference)
                }else if(difference<0){
                	this.prev(-difference)
                }
			},
			bind: function(){
				var _this = this;
				$('.left').on('click',function(){
					_this.prev(1);
				});
				$('.right').on('click',function(){
					_this.next(1);
				});
				$('.btn').on('click','li',function(){
					var num = $(this).index();
					_this.btnControl($(this));
				})
			} 
		}
		var shuffling = new Shuffling();