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

const dataSpeed = $('.js-slider-hero').data('speed') || 1500;
const dataAutoplay = $('.js-slider-hero').data('autoplay') || 2000;

const $sliderHero = $(".js-slider-hero .slider__slides");
const sliderHero = {
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	arrows: true,
	autoplay: true,
	speed: dataSpeed,
	autoplaySpeed: dataAutoplay,
	nextArrow: '<a class="slick-next slick-arrow"><img src="assets/images/temp/right.png" alt="" /></a>',
	prevArrow: '<a class="slick-prev slick-arrow"><img src="assets/images/temp/left.png" alt="" /></a>',
};

initSlider($sliderHero, sliderHero);

const dataSpeedMagazine = $('.js-slider-magazines').data('speed') || 1000;
const dataAutoplayMagazine = $('.js-slider-magazines').data('autoplay') || 1500;

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
	autoplay: true,
	speed: dataSpeedMagazine,
	autoplaySpeed: dataAutoplayMagazine,
	responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '130px',
				autoplay: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '80px',
				autoplay: false,
			}
		},
		{
			breakpoint: 470,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '50px',
				autoplay: false,
			}
		},

		{
			breakpoint: 370,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '20px',
				autoplay: false,
			}
		},
	],
};

initSlider($sliderMagizine, sliderMagizine);
