$(function () {

	$('.menu-toggle').on('click', function () {
		$('.menu-toggle').toggleClass('menu-toggle--active');
		$('.menu__list').toggleClass('menu__list--active');
		$('.menu').toggleClass('menu--active');
	});

});

