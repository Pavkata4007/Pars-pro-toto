
/**
 * On click scroll to the top of the page.
 *
 */

const $btn = $('.js-btn-to-top');
const $header = $('.header');

$btn.on('click', function(e) {
	$(window).scrollTop() + " px";

	e.preventDefault();
})
$btn.on('click', function() {

	$('html, body').animate({
		scrollTop: $header.offset().top + 'px'
	}, 500);

	return false;
});
