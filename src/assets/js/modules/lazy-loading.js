import 'jquery-lazy';


$(function($) {
	$("img.lazy").Lazy();
});

$('.js-slider-magazines').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('img.lazy').lazy({
		bind: "event"
	});
});
