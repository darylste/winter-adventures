const form = document.getElementById('form');

// dynamically set hero img/video depending on screen size.
const setHero = () => {
	const hero = document.getElementById('hero');
	const heroImg = document.getElementById('heroImg');
	const heroVideo = document.getElementById('heroVideo');

	if (window.innerWidth < 900 && !heroImg) {
		const heroImg = document.createElement('img');
		heroImg.src = './assets/video/mobile/mobile-home-page.jpg';
		heroImg.alt = 'Mountains';
		heroImg.id = 'heroImg';

		hero.appendChild(heroImg);
	} else if (window.innerWidth > 900 && !heroVideo) {
		const heroVideo = document.createElement('video');
		heroVideo.src = './assets/video/Mt_Baker.mp4';
		heroVideo.alt = 'Mountains';
		heroVideo.id = 'heroVideo';

		// NOT WORKING on load
		// works on code save ???
		heroVideo.setAttribute('autoplay', true);
		heroVideo.setAttribute('loop', true);
		heroVideo.setAttribute('muted', true);

		hero.appendChild(heroVideo);
	}
};

// prevent default on form.
const processForm = (event) => {
	const formInputs = document.querySelectorAll('.form-control');
	const formSubmit = document.getElementById('form-submit');

	event.preventDefault();
	// clear form
	formInputs.forEach((item) => {
		item.value = '';
	});
	// change button

	formSubmit.classList.replace('btn-info', 'btn-success');
	formSubmit.innerHTML = 'Submitted';
};

// event listeners
window.addEventListener('resize', setHero);
form.addEventListener('submit', processForm);

// onload
setHero();
