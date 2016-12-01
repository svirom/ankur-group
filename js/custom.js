$(document).ready(function() {


//smooth scroll to anchor "#"
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	 e.preventDefault();
	 
	var target = this.hash,
	 	$target = $(target);
	 
		$('html, body').stop().animate({'scrollTop': $target.offset().top }, 500, 'swing', function () {
	 		window.location.hash = target;
	 	});
	});

//accordion Documentation
	$(".accordion h4").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
        $(".accordion:first-of-type .accord_content").slideUp("slow");
      } 
      else {
        $(".accordion .accord_content").slideUp("slow");
        $(this).next("div").slideToggle("slow");
      }
    });

//parallax text on main image
    $(window).scroll(function(){
    	var st = $(this).scrollTop();
    	$('.image_text').css({
    		"transform" : "translate(0, -" + st/6 + "%)"
    	});   	
    });

//resize menu on scroll
    $(window).scroll(function(){       
      if ( ($(this).scrollTop() > 536) && ($('header.main_header').width() >= 784) ) {
          $('header.main_header').removeClass('fixed_out').addClass('fixed').addClass('fixed_in');
          $('.main_image').css('margin-top','141px');
      } else 
      if ( ($(this).scrollTop() <= 536) && ($(this).scrollTop() > 140) && ($('header.main_header').width() >= 784) ) {
          $('header.main_header').removeClass('fixed_in').addClass('fixed_out');  
      }
      if ( ($(this).scrollTop() <= 140) && ($('header.main_header').width() >= 784) ) {
          $('header.main_header').removeClass('fixed_in').removeClass('fixed_out').removeClass('fixed');
          $('.main_image').css('margin-top','0px');
      }
      if ( ($(this).scrollTop() > 284) && ($('header.main_header').width() < 784) ) {
          $('header.main_header').removeClass('fixed_out').addClass('fixed').addClass('fixed_in');
          $('.main_image').css('margin-top','64px');
      } else 
      if ( ($(this).scrollTop() <= 284) && ($(this).scrollTop() > 64) && ($('header.main_header').width() < 784) ) {
          $('header.main_header').removeClass('fixed_in').addClass('fixed_out');  
      }
      if ( ($(this).scrollTop() <= 64) && ($('header.main_header').width() < 784) ) {
          $('header.main_header').removeClass('fixed_in').removeClass('fixed_out').removeClass('fixed');
          $('.main_image').css('margin-top','0px');
      }
    });

//mobile menu button
    $('a.nav-opener').click(function(){ 
      if ($('body').width() < 784)
          $(this).toggleClass('nav-active');                
          $('nav#main_menu>ul').slideToggle(300); 
    });

//show menu after resize from smaller resolution
    $(window).resize(function() {
      if ($('body').width() < 784)
          $('nav#main_menu>ul').css("display","none");
          $('a.nav-opener').removeClass('nav-active'); 
      if ($('body').width() >= 784)
          $('nav#main_menu>ul').css("display","block");
    });

});