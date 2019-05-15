// === client section slider
var swiper = new Swiper('.swiper-container', {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 6500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// ======= Menu Button ========
var menuBtn = document.getElementById('btn-menu');
var menuItems = document.getElementById('nav');
var navItem = document.querySelectorAll('.nav-item');

let showCase = false;
menuBtn.addEventListener('click', function() {
	if (!showCase) {
		menuBtn.classList.add('menu');
		menuItems.classList.add('show');

		showCase = true;
	} else {
		menuBtn.classList.remove('menu');
		menuItems.classList.remove('show');
		showCase = false;
	}
});
navItem.scrollIntoView({
	behavior: 'smooth',
});
