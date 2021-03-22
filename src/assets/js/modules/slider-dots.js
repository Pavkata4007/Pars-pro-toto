
/**
 *	Adds a class to the dots around the active.
 *
 */

const $sliderHero = $('.js-slider-hero');

$sliderHero.on('afterChange', function(event, slick, currentSlide, nextSlide){
	const $this = $(this);
	const $activeBtn = $this.find('.slick-dots').find('.slick-active');
	const $buttons = $this.find('.slick-dots').find('li');

	$buttons.removeClass('is-active');

	$activeBtn.prev().addClass('is-active');
	$activeBtn.next().addClass('is-active');
});
