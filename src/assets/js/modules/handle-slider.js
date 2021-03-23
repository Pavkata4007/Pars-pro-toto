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
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	arrows: true,
	speed: 200,
	nextArrow: '<a class="slick-next slick-arrow"><img src="assets/images/temp/right.png" alt="" /></a>',
	prevArrow: '<a class="slick-prev slick-arrow"><img src="assets/images/temp/left.png" alt="" /></a>',
	autoplay: false,
};

initSlider($sliderHero, sliderHero);

const $sliderMagizine = $(".js-slider-magazines .slider__slides");
const sliderMagizine = {
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	nextArrow: '<a class="slick-next slick-arrow"><img src="assets/images/temp/right.png" alt="" /></a>',
	prevArrow: '<a class="slick-prev slick-arrow"><img src="assets/images/temp/left.png" alt="" /></a>',
	autoplay: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '20px',
			},
		},
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
	],
};

initSlider($sliderMagizine, sliderMagizine);
