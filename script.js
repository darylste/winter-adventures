const hero = document.getElementById('hero');

// put if statment in a function
const setHero = () => {
	const heroImg = document.getElementById('heroImg');
	const heroVideo = document.getElementById('heroVideo');

	if (window.innerWidth < 900 && !heroImg) {
		const heroImg = document.createElement('img');
		heroImg.src = './assets/video/mobile/mobile-home-page.jpg';
		heroImg.alt = 'Mountains';
		heroImg.id = 'heroImg';

		hero.appendChild(heroImg);
		console.log(window.innerWidth);
	} else if (window.innerWidth > 900 && !heroVideo) {
		const heroVideo = document.createElement('video');
		heroVideo.src = './assets/video/Mt_Baker.mp4';
		heroVideo.alt = 'Mountains';
		heroVideo.id = 'heroVideo';
		heroVideo.setAttribute('autoplay', true);
		heroVideo.setAttribute('loop', true);

		hero.appendChild(heroVideo);
		console.log(window.innerWidth);
	}
};

// add event listener for screen size change?
window.addEventListener('resize', setHero);

// onload
setHero();
