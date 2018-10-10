$(document).ready(function() {
document.body.onmousewheel=function(){
//公司介绍特效 滑动前效果
   	$(".swiper-slide .gsjs .right").css({
   		'right':'-45%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .gsjs .left img").hide();
   	$(".swiper-slide .gsjs .left").find('img').css({
   		'left':'-10%',
   		'opacity':'0.5',
   	});
   	$(".swiper-slide .gsjs .left").find('.five').css({
   		'left':'19.5%',
   		'opacity':'1',
   	});
   	$(".swiper-slide .gsjs .left").find('.center').hide()
//公司介绍特效 滑动当前效果
	var c=$('.swiper-slide .gsjs').parent().attr('class');
	if (c=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .gsjs .right').animate({
		right: '0',
		opacity: '1',
	},1000);
	
	var w=screen.availWidth;
	if (w>1280) {
	$('.swiper-slide .gsjs').find(".center").fadeIn().animate({
		opacity: '1',
	});
	$('.swiper-slide .gsjs').find(".five").fadeIn().animate({
		left: '17%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".one").delay(200).fadeIn().animate({
		left: '26.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".two").delay(500).fadeIn().animate({
//		left: '33%',
		left: '36%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".three").delay(1000).fadeIn().animate({
		left: '27.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".four").delay(1500).fadeIn().animate({
//		left: '11%',
		left: '6%',
		opacity: '1',
	},1000);
	}
	else if(w<1280){
	$('.swiper-slide .gsjs').find(".center").fadeIn().animate({
		opacity: '1',
	});
	$('.swiper-slide .gsjs').find(".five").show(1000);
	$('.swiper-slide .gsjs').find(".one").delay(200).fadeIn().animate({
		left: '22.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".two").delay(500).fadeIn().animate({
		left: '29%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".three").delay(1000).fadeIn().animate({
		left: '23%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".four").delay(1500).fadeIn().animate({
		left: '8%',
		opacity: '1',
	},1000);
	}
	
}
	
//行业解决方案特效 滑动当前效果
	$(".swiper-slide .product h1").css({
   		'marginTop':'10px',
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product h2").css({
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product li").css({
   		'opacity':'0',
   		'top':'300px',
   	});
   	$(".swiper-slide .product li:nth-child(2)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
   	$(".swiper-slide .product li:nth-child(4)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
//行业解决方案特效 滑动当前效果
	var c1=$('.swiper-slide .product').parent().attr('class');
	if (c1=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .product h1').animate({
		'marginTop':'100px',
   		'opacity':'1',
   		'fontSize':'24px',
	},2000);
	$('.swiper-slide .product h2').delay(500).animate({
   		'opacity':'1',
   		'fontSize':'16px',
	},1500);
	$('.swiper-slide .product li:nth-child(1)').delay(1000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(2)').delay(1500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(3)').delay(2000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(4)').delay(2500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
}	
//信息融合产品特效 滑动当前效果
	$(".swiper-slide .advantage h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .advantage h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .advantage .slider-outer").css({
   		'opacity':'0',
   		'marginTop':'500px',
   	});
	
//信息融合产品特效 滑动当前效果
	var c2=$('.swiper-slide .advantage').parent().attr('class');
	if (c2=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .advantage h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$('.swiper-slide .advantage h2').animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .advantage .slider-outer').delay(1000).animate({
   		'opacity':'1',
   		'marginTop':'100px',
	},2000);
}
//服务与支持特效 滑动当前效果
	$(".swiper-slide .fwzc h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .fwzc p").css({
   		'opacity':'0',
   	});
   	$(".swiper-slide .fwzc .info").css({
   		'opacity':'0',
   	});
	
//服务与支持特效特效 滑动当前效果
	var c3=$('.swiper-slide .fwzc').parent().attr('class');
	if (c3=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .fwzc h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .fwzc p').animate({
   		'opacity':'1',
	},3000);
	$('.swiper-slide .fwzc .info').delay(1000).animate({
   		'opacity':'1',
	},1000);
   	
	
}
////合作伙伴特效 滑动前效果
	$(".swiper-slide .partner h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .partner h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .partner li img").css({
   		'top':'-10%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .partner .center img").css({
   		'marginTop':'500px',
   		'opacity':'0',
   	})
// 	$(".swiper-slide .partner li:nth-child(even) img").css({
// 		'bottom':'-10%',
// 		'opacity':'0',
// 	})
	var c4=$('.swiper-slide .partner').parent().attr('class');
//合作伙伴特效 滑动当前效果
	if (c4=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .partner h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .partner h2").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$(".swiper-slide .partner .center img").animate({
   		'opacity':'1',
   		'marginTop':'120px',
	},2000);
	$('.swiper-slide .partner li:nth-child(1) img').animate({
		top: '330px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(2) img').animate({
		top: '210px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(3) img').animate({
		top: '200px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(4) img').animate({
		top: '190px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(5) img').animate({
		top: '250px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(6) img').animate({
		top: '360px',
		opacity: '1',
	},1000);
	
}	
}
//点击垂直按钮特效展现 	
$('.swiper-pagination').click(function(){
	//公司介绍特效 滑动前效果
   	$(".swiper-slide .gsjs .right").css({
   		'right':'-45%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .gsjs .left img").hide();
   	$(".swiper-slide .gsjs .left").find('img').css({
   		'left':'-10%',
   		'opacity':'0.5',
   	});
   	$(".swiper-slide .gsjs .left").find('.five').css({
   		'left':'19.5%',
   		'opacity':'1',
   	});
   	$(".swiper-slide .gsjs .left").find('.center').hide()
	//公司介绍特效 滑动当前效果
	var c=$('.swiper-slide .gsjs').parent().attr('class');
	if (c=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .gsjs .right').animate({
		right: '0',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".center").fadeIn().animate({
		opacity: '1',
	});
	$('.swiper-slide .gsjs').find(".five").show(1000);
	$('.swiper-slide .gsjs').find(".one").delay(200).fadeIn().animate({
		left: '26.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".two").delay(500).fadeIn().animate({
		left: '33%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".three").delay(1000).fadeIn().animate({
		left: '27.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".four").delay(1500).fadeIn().animate({
		left: '11%',
		opacity: '1',
	},1000);
}
	
//行业解决方案特效 滑动当前效果
	$(".swiper-slide .product h1").css({
   		'marginTop':'10px',
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product h2").css({
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product li").css({
   		'opacity':'0',
   		'top':'300px',
   	});
   	$(".swiper-slide .product li:nth-child(2)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
   	$(".swiper-slide .product li:nth-child(4)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
//行业解决方案特效 滑动当前效果
	var c1=$('.swiper-slide .product').parent().attr('class');
	if (c1=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .product h1').animate({
		'marginTop':'100px',
   		'opacity':'1',
   		'fontSize':'24px',
	},2000);
	$('.swiper-slide .product h2').delay(500).animate({
   		'opacity':'1',
   		'fontSize':'16px',
	},1500);
	$('.swiper-slide .product li:nth-child(1)').delay(1000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(2)').delay(1500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(3)').delay(2000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(4)').delay(2500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
}	
//信息融合产品特效 滑动当前效果
	$(".swiper-slide .advantage h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .advantage h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .advantage .slider-outer").css({
   		'opacity':'0',
   		'marginTop':'500px',
   	});
	
//信息融合产品特效 滑动当前效果
	var c2=$('.swiper-slide .advantage').parent().attr('class');
	if (c2=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .advantage h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$('.swiper-slide .advantage h2').animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .advantage .slider-outer').delay(1000).animate({
   		'opacity':'1',
   		'marginTop':'100px',
	},2000);
}
$(".swiper-slide .fwzc h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .fwzc p").css({
   		'opacity':'0',
   	});
   	$(".swiper-slide .fwzc .info").css({
   		'opacity':'0',
   	});
	
//服务与支持特效特效 滑动当前效果
	var c3=$('.swiper-slide .fwzc').parent().attr('class');
	if (c3=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .fwzc h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .fwzc p').animate({
   		'opacity':'1',
	},3000);
	$('.swiper-slide .fwzc .info').delay(1000).animate({
   		'opacity':'1',
	},1000);
   	
	
}
////合作伙伴特效 滑动前效果
	$(".swiper-slide .partner h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .partner h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .partner li img").css({
   		'top':'-10%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .partner .center img").css({
   		'marginTop':'500px',
   		'opacity':'0',
   	})
// 	$(".swiper-slide .partner li:nth-child(even) img").css({
// 		'bottom':'-10%',
// 		'opacity':'0',
// 	})
	var c4=$('.swiper-slide .partner').parent().attr('class');
//合作伙伴特效 滑动当前效果
	if (c4=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .partner h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .partner h2").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$(".swiper-slide .partner .center img").animate({
   		'opacity':'1',
   		'marginTop':'120px',
	},2000);
	$('.swiper-slide .partner li:nth-child(1) img').animate({
		top: '330px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(2) img').animate({
		top: '210px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(3) img').animate({
		top: '200px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(4) img').animate({
		top: '190px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(5) img').animate({
		top: '250px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(6) img').animate({
		top: '360px',
		opacity: '1',
	},1000);
	
}	
})
//火狐滑动特效
document.body.addEventListener("DOMMouseScroll", function() {
	//公司介绍特效 滑动前效果
   	$(".swiper-slide .gsjs .right").css({
   		'right':'-45%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .gsjs .left img").hide();
   	$(".swiper-slide .gsjs .left").find('img').css({
   		'left':'-10%',
   		'opacity':'0.5',
   	});
   	$(".swiper-slide .gsjs .left").find('.five').css({
   		'left':'19.5%',
   		'opacity':'1',
   	});
   	$(".swiper-slide .gsjs .left").find('.center').hide()
	//公司介绍特效 滑动当前效果
	var c=$('.swiper-slide .gsjs').parent().attr('class');
	if (c=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .gsjs .right').animate({
		right: '0',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".center").fadeIn().animate({
		opacity: '1',
	});
	$('.swiper-slide .gsjs').find(".five").show(1000);
	$('.swiper-slide .gsjs').find(".one").delay(200).fadeIn().animate({
		left: '26.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".two").delay(500).fadeIn().animate({
		left: '33%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".three").delay(1000).fadeIn().animate({
		left: '27.5%',
		opacity: '1',
	},1000);
	$('.swiper-slide .gsjs').find(".four").delay(1500).fadeIn().animate({
		left: '11%',
		opacity: '1',
	},1000);
}
	
//行业解决方案特效 滑动当前效果
	$(".swiper-slide .product h1").css({
   		'marginTop':'10px',
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product h2").css({
   		'opacity':'0',
   		'fontSize':'0',
   });
	$(".swiper-slide .product li").css({
   		'opacity':'0',
   		'top':'300px',
   	});
   	$(".swiper-slide .product li:nth-child(2)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
   	$(".swiper-slide .product li:nth-child(4)").css({
   		'opacity':'0',
   		'top':'-300px',
   	});
//行业解决方案特效 滑动当前效果
	var c1=$('.swiper-slide .product').parent().attr('class');
	if (c1=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .product h1').animate({
		'marginTop':'100px',
   		'opacity':'1',
   		'fontSize':'24px',
	},2000);
	$('.swiper-slide .product h2').delay(500).animate({
   		'opacity':'1',
   		'fontSize':'16px',
	},1500);
	$('.swiper-slide .product li:nth-child(1)').delay(1000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(2)').delay(1500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(3)').delay(2000).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
	$('.swiper-slide .product li:nth-child(4)').delay(2500).animate({
   		'opacity':'1',
   		'top':'0',
	},1500);
}	
//信息融合产品特效 滑动当前效果
	$(".swiper-slide .advantage h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .advantage h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .advantage .slider-outer").css({
   		'opacity':'0',
   		'marginTop':'500px',
   	});
	
//信息融合产品特效 滑动当前效果
	var c2=$('.swiper-slide .advantage').parent().attr('class');
	if (c2=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .advantage h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$('.swiper-slide .advantage h2').animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .advantage .slider-outer').delay(1000).animate({
   		'opacity':'1',
   		'marginTop':'100px',
	},2000);
}
//服务与支持特效 滑动当前效果
	$(".swiper-slide .fwzc h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .fwzc p").css({
   		'opacity':'0.1',
   		'fontSize':'0',
   	});
   	$(".swiper-slide .fwzc li").css({
   		'opacity':'0',
   		'width':'0',
   	});
   	$(".swiper-slide .fwzc li span").hide();
	
//服务与支持特效特效 滑动当前效果
	var c3=$('.swiper-slide .fwzc').parent().attr('class');
	if (c3=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .fwzc h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .fwzc h2,.swiper-slide .fwzc h3").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$('.swiper-slide .fwzc p').delay(1500).animate({
   		'opacity':'1',
   		'fontSize':'16px',
	},2000);
	$('.swiper-slide .fwzc li:nth-child(1)').delay(2000).animate({
   		'opacity':'1',
   		'width':'25%',
	},1000);
   	$(".swiper-slide .fwzc li:nth-child(1) span").delay(3000).fadeIn();
	$('.swiper-slide .fwzc li:nth-child(2)').delay(3000).animate({
   		'opacity':'1',
   		'width':'25%',
	},1000);
   	$(".swiper-slide .fwzc li:nth-child(2) span").delay(4000).fadeIn();
	$('.swiper-slide .fwzc li:nth-child(3)').delay(4000).animate({
   		'opacity':'1',
   		'width':'25%',
	},1000);
   	$(".swiper-slide .fwzc li:nth-child(3) span").delay(5000).fadeIn();
	$('.swiper-slide .fwzc li:nth-child(4)').delay(5000).animate({
   		'opacity':'1',
   		'width':'25%',
	},1000);
   	$(".swiper-slide .fwzc li:nth-child(4) span").delay(6000).fadeIn();
	
}
////合作伙伴特效 滑动前效果
	$(".swiper-slide .partner h1").css({
   		'opacity':'0',
   		'marginRight':'100%',
   	});	
   	$(".swiper-slide .partner h2").css({
   		'opacity':'0',
   		'marginLeft':'100%',
   	});
   	$(".swiper-slide .partner li img").css({
   		'top':'-10%',
   		'opacity':'0',
   	})
   	$(".swiper-slide .partner .center img").css({
   		'marginTop':'500px',
   		'opacity':'0',
   	})
// 	$(".swiper-slide .partner li:nth-child(even) img").css({
// 		'bottom':'-10%',
// 		'opacity':'0',
// 	})
	var c4=$('.swiper-slide .partner').parent().attr('class');
//合作伙伴特效 滑动当前效果
	if (c4=='swiper-slide swiper-slide-active') {
	$('.swiper-slide .partner h1').animate({
   		'opacity':'1',
   		'marginRight':'0',
	},2000);
	$(".swiper-slide .partner h2").animate({
   		'opacity':'1',
   		'marginLeft':'0',
	},2000);
	$(".swiper-slide .partner .center img").animate({
   		'opacity':'1',
   		'marginTop':'120px',
	},2000);
	$('.swiper-slide .partner li:nth-child(1) img').animate({
		top: '330px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(2) img').animate({
		top: '210px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(3) img').animate({
		top: '200px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(4) img').animate({
		top: '190px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(5) img').animate({
		top: '250px',
		opacity: '1',
	},1000);
	$('.swiper-slide .partner li:nth-child(6) img').animate({
		top: '360px',
		opacity: '1',
	},1000);
	
}	
})
//每个页面底部自适应
   	var h1=screen.availHeight;
		var t=$('footer').offset().top;
		var h3=$('footer').height();
		var h2=h1-h3-82;
		if (t<h2) {
		$('footer').css({
			"position":'fixed',
			"bottom":'0',
//			"backgroundColor":'red',
			
		});
		}
		else{
			$('footer').css({
			"position":'relative',
		});
		} 
//分页
		var p=$('.info ul,.list ul').length-1;
		for(var i=1;i<=p+1;i++){
			$(".display").append("<span>"+i+"</span>");
		}
		$(".display span").first().addClass('on');
		$(".display span").css('marginLeft','4px');
		var n=0;
		//点击页码
		$('.page .display span').each(function(){
			$(this).click(function() {
				$('.page span').removeClass('on');
				$(this).addClass('on');
				n=$(this).index();
				$('.info ul,.list ul').hide();
				$('.info ul,.list ul').eq(n).show();
				if (n!=0&&n!=p) {
				$('.page .first').css({'backgroundColor':'#ffffff'});
				$('.page .prev').css({'backgroundColor':'#ffffff'});
				$('.page .end').css({'backgroundColor':'#ffffff'});
				$('.page .next').css({'backgroundColor':'#ffffff'});
				}
				else if(n==0){
				$('.page .first').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .prev').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .end').css({'backgroundColor':'#ffffff'});
				$('.page .next').css({'backgroundColor':'#ffffff'});
				}
				else if(n==p){
				$('.page .end').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .next').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .next').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .first').css({'backgroundColor':'#ffffff'});
				$('.page .prev').css({'backgroundColor':'#ffffff'});
				}
			})
		})
		//点击上一页
		$('.page .prev').click(function(){
				if(0<n<p) {
				n--;
				$('.info ul,.list ul').hide();
				$('.info ul,.list ul').eq(n).show();
				$('.page .display span').removeClass('on');
				$('.page .display span').eq(n).addClass('on');
				$('.page .end').css({'backgroundColor':'#ffffff'});
				$('.page .next').css({'backgroundColor':'#ffffff'});
				}
				if(n<=0){
				$('.page .first').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .prev').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.info ul,.list ul').hide();
				$('.info ul,.list ul').eq(0).show();
				$('.page .display span').removeClass('on');
				$('.page .display span').eq(0).addClass('on');
				}
				if(n >=0){
					$('.page .display span').eq(Math.abs(5+n)).hide();
					$('.page .display span').eq(Math.abs(n)).show();
				}
		})
		//点击下一页
		$('.page .next').click(function(){
			if (n<p) {
				n++;
				$('.info ul,.list ul').hide();
				$('.info ul,.list ul').eq(n).show();
				$('.page .display span').removeClass('on');
				$('.page .display span').eq(n).addClass('on');
				$('.page .first').css({'backgroundColor':'#ffffff'});
				$('.page .prev').css({'backgroundColor':'#ffffff'});
				$('.page .display span').eq(n).show();
				if(4<n){
					$('.page .display span').eq(Math.abs(5-n)).hide();
				}
			}
			if(n>=p){
				$('.page .end').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.page .next').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
				$('.info ul,.list ul').hide();
				$('.info ul,.list ul').eq(p).show();
				$('.page .display span').removeClass('on');
				$('.page .display span').eq(p).addClass('on');
			}
		});
		//点击首页
		$('.page .first').click(function(){
			$('.info ul,.list ul').hide();
			$('.info ul,.list ul').eq(0).show();
			$('.page .first').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
			$('.page .prev').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
			$('.page .end').css({'backgroundColor':'#ffffff'});
			$('.page .next').css({'backgroundColor':'#ffffff'});
			$('.page .display span').removeClass('on');
			$('.page .display span').eq(0).addClass('on');
			n=0;
			$('.page .display span').hide();
			$('.page .display span:lt(5)').show();
		});
		//点击尾页
		$('.page .end').click(function(){
			$('.info ul,.list ul').hide();
			$('.info ul,.list ul').eq(p).show();
			$('.page .end').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
			$('.page .next').css({'backgroundColor':'#E1E1E1','borderColor':'#e1e1e1'});
			$('.page .first').css({'backgroundColor':'#ffffff'});
			$('.page .prev').css({'backgroundColor':'#ffffff'});
			$('.page .display span').removeClass('on');
			$('.page .display span').eq(p).addClass('on');
			n=p;
			$('.page .display span').hide();
			$('.page .display span').eq(p).show();
			$('.page .display span').eq(p-1).show();
			$('.page .display span').eq(p-2).show();
			$('.page .display span').eq(p-3).show();
			$('.page .display span').eq(p-4).show();
		});
		//加载前五页
		$(function(){
			$('.page .display span:gt(4)').hide();
		});
});	