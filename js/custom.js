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


});