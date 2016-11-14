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


});