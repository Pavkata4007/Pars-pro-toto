import 'slick-carousel';

/**
 * Slider
 */
function initSlider($selector, options) {
	if ($selector.length && !$selector.hasClass("slick-initialized")) {
		$selector.slick(options);
	}
}
/**
 * [destroySlider description]
 */
function destroySlider($selector) {
	if ( $selector.length && $selector.hasClass('slick-initialized') ) {
		$selector.slick('unslick');
	}
}




const $sliderHero = $(".js-slider-hero .slider__slides");
const sliderHero = {
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	arrows: true,
	nextArrow: '<a class="slick-next slick-arrow"></a>',
	prevArrow: '<a class="slick-prev slick-arrow"></a>',
	autoplay: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

initSlider($sliderHero, sliderHero);
