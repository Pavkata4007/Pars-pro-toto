
/**
 *	When scrolled below the hero, nav changes color.
 *
 */

const $document = $(document);
const $window = $(window);
const $hero = $('.hero');
const heroHeight = $hero.outerHeight();
const $nav = $('.js-nav');

$document.scroll(function() {
	let scroll = $window.scrollTop();

	if (scroll >= heroHeight) {
        $nav.addClass('is-fixed');
    } else {
    	$nav.removeClass('is-fixed');
    }
})
