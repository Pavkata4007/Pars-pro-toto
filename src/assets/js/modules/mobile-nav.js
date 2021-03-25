
/**
 * Handle mobile-nav
 */

const $navigation = $('.js-nav')
const $window = $(window);
const $body = $('body');

$navigation.on('click', function() {
	const $this = $(this);
	const $nav = $('.js-nav');
	const $button = $('.js-button');

	$this.toggleClass('mobile-nav--active');
	$nav.toggleClass('is-active');
});
