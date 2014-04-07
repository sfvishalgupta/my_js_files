function init_swiper_slider(id,option){
	var default_option = {
		onSlideChangeEnd:function(mySwiper){
			if(typeof(option.onSlideChangeEnd) != "undefined") mySwiper.fireCallback(option.onSlideChangeEnd,mySwiper);
			resetPositions(mySwiper);
		},
		onSlideUpdateEnd:function(mySwiper){
			if(typeof(option.onSlideUpdateEnd) != "undefined") mySwiper.fireCallback(option.onSlideUpdateEnd,mySwiper);
		}
	};
	var optionNew = $.extend({},option,default_option);
	mySwiper = new Swiper(id,optionNew);
	$(".paco_next").click(function(){mySwiper.swipeNext();});
	$(".paco_prev").click(function(){mySwiper.swipePrev();});
	resetPositions(mySwiper);
	$(mySwiper.slides[1]).addClass("paco_active");
	return mySwiper;
}
function resetPositions(mySwiper){
	if(mySwiper.hasNext() !== false){
        	$(".paco_next").removeClass("paco_next_disable");
        }else{
                $(".paco_next").addClass("paco_next_disable");
        }
        if(mySwiper.hasPrev() !== false){
                $(".paco_prev").removeClass("paco_prev_disable");
        }else{
                $(".paco_prev").addClass("paco_prev_disable");
        }
}
