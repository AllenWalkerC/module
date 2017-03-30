function Tab(){
           this.bind()
}
Tab.prototype = {
	switch: function($ele){
        var index = $ele.index();
        $ele.siblings('li').removeClass('active');
        $ele.addClass('active');
        $ele.parents('.tab').find('.content li')
            .eq(index).siblings('li').addClass('hide');
        $ele.parents('.tab').find('.content li')
            .eq(index).removeClass('hide');    
	},
	bind: function(){
		var _this = this;
		$('.header li').on('click',function(){
            _this.switch($(this));
		})
	}
}
var tab = new Tab();