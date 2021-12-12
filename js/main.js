$(function () {

	$('.slider__block').slick({
		arrows: false,
		dots: true,
	});

	const linkDown = document.querySelector('.link_down');
	const secondSection = document.querySelector('.section_about-us');
	const secondSectionY = secondSection.offsetTop;

	let intervalId;

	const trackScroll = () => {
		window.scrollBy(0, 30)
		if (window.pageYOffset >= secondSectionY) {
			clearInterval(intervalId);
		}
	}

	linkDown.addEventListener('click', (e) => {
		e.preventDefault();
		intervalId = setInterval(trackScroll, 10);
	});

});