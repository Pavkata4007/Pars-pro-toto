/**
 * Handle active nav link.
 *
 */

$('.nav a').each( function() {
	const dataPage = $(this).data('page');

	if (typeof(pageName) === 'undefined') {
		return;
	}

	if (dataPage === pageName) {
		$(this).parent().addClass('is-active');
	}
})
