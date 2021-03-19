
/**
 * Handle mobile-nav
 */

const $mobileNav = $('.js-mobile-nav')

$mobileNav.on('click', function() {
	const $this = $(this);
	const $nav = $('.js-nav');
	const $button = $('.js-button');

	$this.toggleClass('mobile-nav--active');
	$nav.toggleClass('is-active');

});