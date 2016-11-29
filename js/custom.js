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
      if ( ($(this).scrollTop() > 536) && ($('body').width() >= 975) ) {
          $('header.main_header').removeClass('fixed_out').addClass('fixed').addClass('fixed_in');
          $('.main_image').css('margin-top','141px');
      } else 
      if ( ($(this).scrollTop() <= 536) && ($(this).scrollTop() > 140) && ($('body').width() >= 975) ) {
          $('header.main_header').removeClass('fixed_in').addClass('fixed_out');  
      }
      if ( ($(this).scrollTop() <= 140) && ($('body').width() >= 975) ) {
          $('header.main_header').removeClass('fixed_in').removeClass('fixed_out').removeClass('fixed');
          $('.main_image').css('margin-top','0px');
      }
    });

});