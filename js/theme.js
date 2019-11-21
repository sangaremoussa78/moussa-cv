;(function($) {
    "use strict";
  
    /*----------------------------------------------------*/
    /*  Menu scroll js
    /*----------------------------------------------------*/
    var nav_offset_top = $('.header_area').offset().top;
    function stickyHeader() {
		if ($('.header_area').length) {
			var strickyScrollPos = nav_offset_top;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.header_area').removeClass('fadeIn animated');
				$('.header_area').addClass('stricky-fixed fadeInDown animated')
			}
			else if($(window).scrollTop() <= strickyScrollPos) {
				$('.header_area').removeClass('stricky-fixed fadeInDown animated');
				$('.header_area').addClass('slideIn animated')
			}
		}
	}
    
    // instance of fuction while Window Scroll event
	$(window).on('scroll', function () {	
		stickyHeader()
	})
    
    /*----------------------------------------------------*/
    /*  Skill js
    /*----------------------------------------------------*/
    $(".skill_item_inner").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
    
    
    /*----------------------------------------------------*/
    /*  presentation slider1
    /*----------------------------------------------------*/
    function blog_sliderp(){
        if ( $('.carsoul').length ){
            $('.carsoul').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay: true,
                smartSpeed: 1500,
                navContainer: '.car',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_sliderp();


    
    /*----------------------------------------------------*/
    /*  Blog slider1
    /*----------------------------------------------------*/
    function blog_slider(){
        if ( $('.blog_slider_inner1').length ){
            $('.blog_slider_inner1').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay: false,
                smartSpeed: 1500,
                navContainer: '.blog_slider_area1',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_slider();
    
    /*----------------------------------------------------*/
    /*  Blog slider2
    /*----------------------------------------------------*/
    function blog_slider2(){
        if ( $('.blog_slider_inner2').length ){
            $('.blog_slider_inner2').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay: false,
                smartSpeed: 1500,
                navContainer: '.blog_slider_area2',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_slider2();
    
    /*----------------------------------------------------*/
    /*  Blog slider1
    /*----------------------------------------------------*/
    function blog_slider3(){
        if ( $('.blog_slider_inner3').length ){
            $('.blog_slider_inner3').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1,
                autoplay:false,
                smartSpeed: 1500,
                navContainer: '.blog_slider_area3',
                navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>']
            });
        }
    }
    blog_slider3();
    

      
    $('.header_area .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80
        }, 1500);
        event.preventDefault();
    });
    
    
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    
    // preloader js
    $(window).load(function() { // makes sure the whole site is loaded
		$('#preloader_spinner').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(150).css({'overflow':'visible'})
    })
    
    
})(jQuery)