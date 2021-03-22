/**
 * On click shows more info.
 *
 */

const $btn = $('.js-additional-info-btn');
const $info = $('.js-additional-info');
const $window = $(window);

$window.on("load resize", function(e) {

	if ($window.width() < 768) {

		$btn.on('click', function() {
			const $this = $(this);

			$this.addClass('is-hidden');
			$this.closest('.section__grid').find($info).addClass('is-active');
		})
	}
});
