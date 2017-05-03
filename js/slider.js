(function($) {
	$(document).ready(function() {

		$.fn.slider = function(options) {

			return this.each(function() {
				var $this = $(this);
				var NumberOfSlides = $this.find('.slider_item').length;
				var n = 4; //number of slides to show
				//var slideWidth = ($this.width())/n;
				var i = 1;
				/*---Changing a number of slides in mobile view---*/
				if ($('body').width() <= 783) {
					var n = 1;
					var slideWidth = $('.offer_item_inner').width();
				} else {
					var n = 4; //number of slides to show
					var slideWidth = ($this.width()) / 4;
				}
				/*------------------------------------------------*/
				
				//change dimensions on resize window
				$(window).resize(function() {

						/*---Changing a number of slides in mobile view---*/
						if ($('body').width() <= 783) {
							var n = 1;
							var slideWidth = $('.offer_item_inner').width();
							$this.find('.slides').css({
								'width': NumberOfSlides * slideWidth,
								'marginLeft': (i - 1) * (-slideWidth)
							});
							$this.find('.slider_item').css('width', slideWidth);
						} 
						if ($('body').width() > 783) {
							var n = 4; //number of slides to show
							slideWidth = ($this.width()) / n;
							$this.find('.slides').css({
								'width': NumberOfSlides * slideWidth,
								'marginLeft': (i - 1) * (-slideWidth)
							});
							$this.find('.slider_item').css('width', slideWidth);
						}
						/*------------------------------------------------*/
						
				})
					//-----------------------//
				
				$this.find('.slides').css({
					'width': NumberOfSlides * slideWidth,
					'marginLeft': 0
				});
				$this.find('.slider_item').css('width', slideWidth);

				$this.find('.next').click(function() {
					if (i < (NumberOfSlides - (n - 1))) {
						$this.find('.slides').animate({
							'marginLeft': i * (-slideWidth)
						}, 300);
						i = i + 1;
					}
				})
				$this.find('.prev').click(function() {
					if (i > 1) {
						$this.find('.slides').animate({
							'marginLeft': ((i - 1) * (-slideWidth) + slideWidth)
						}, 300);
						i = i - 1;
					} else {
						return false;
					}
				})

			})

		};

	})
})(jQuery)