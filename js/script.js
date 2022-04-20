// JavaScript Document
AOS.init();
$(document).ready(function(){
	$("#inner").hide();
	$("#inner2").hide();
	$("#inner3").hide();
	$("#inner4").hide();
	$("#inner5").hide();
	$("#inner6").hide();
	$("#inner7").hide();
	$("#inner8").hide();
	
	$("#m1").hover(function(){
		$("#inner").fadeIn();
		});
	$("#m2").hover(function(){
		$("#inner2").fadeIn();
		});
		$("#m3").hover(function(){
		$("#inner3").fadeIn();
		});
		$("#m4").hover(function(){
		$("#inner4").fadeIn();
		});
		$("#m6").hover(function(){
		$("#inner5").fadeIn();
		});
		$("#m7").hover(function(){
		$("#inner6").fadeIn();
		});
		$("#m8").hover(function(){
		$("#inner7").fadeIn();
		});
		$("#m9").hover(function(){
		$("#inner8").fadeIn();
		});
		$("#m1").mouseleave(function(){
			$("#inner").fadeOut();
			});
			$("#m2").mouseleave(function(){
			$("#inner2").fadeOut();
			});
			$("#m3").mouseleave(function(){
			$("#inner3").fadeOut();
			});
			$("#m4").mouseleave(function(){
			$("#inner4").fadeOut();
			});
			$("#m6").mouseleave(function(){
			$("#inner5").fadeOut();
			});
			$("#m7").mouseleave(function(){
			$("#inner6").fadeOut();
			});
			$("#m8").mouseleave(function(){
			$("#inner7").fadeOut();
			});
			$("#m9").mouseleave(function(){
			$("#inner8").fadeOut();
			});
});



$(".owl-carousel").owlCarousel({
	autoplay:true,
	autoplayHoverPause:true,
	items:4,
	dots:true,
	loop:true,
	lazyload:true,
	margin:5,
	stagePadding:5,
	responsive:{
		0:{
			items:1,
			dots:true	
		},
		485:{
			items:1,
			dots:true	
		},
		728:{
			items:1,
			loop:true
		},
		960:{
			items:1,
			loop:true	
		},
		1200:{
			items:1,
			dots:true	
		}
	}
	});




	