
/**
 * Handle mobile-nav
 */

const $navigation = $('.js-nav')
const $window = $(window);
const $body = $('body');

$navigation.on('click', function() {
	const $this = $(this);
	const $mobileNav = $this.find('.js-mobile-nav');
	const $nav = $('.js-nav');
	const $button = $('.js-button');

	$mobileNav.toggleClass('mobile-nav--active');
	$nav.toggleClass('is-active');
});
