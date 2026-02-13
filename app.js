var swiper = new Swiper('.swiper-galery', {
	spaceBetween: 30,
	// effect: 'fade',
	navigation: {
		nextEl: '.swiper-button-next-galery',
		prevEl: '.swiper-button-prev-galery',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
