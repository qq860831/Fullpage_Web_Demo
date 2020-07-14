$(document).ready(function() {

	// fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage'],
		menu: '#js-menu',
		autoScrolling: false,
		fitToSection: false,
		scrollingSpeed: 1200
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
		

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:16,
	    nav:true,
	    navText:[],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1600:{
	            items:4
	        }
	    }
	})
});