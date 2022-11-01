const weatherApiKey = '4e85746a87e5ddb03518e39b19531ebf';

const getWeather = async (lat, lng, wApiKey) => {
	const results = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${wApiKey}`,
	)
		.then((response) => response.json())
		.then((data) => {
			const weatherDesc = data.weather[0].description;
			const temp = Math.round(data.main.temp * 10) / 10;
			const icon = data.weather[0].icon;
			setHtmlWeather(weatherDesc, temp, icon);
		});
};

const setHtmlWeather = (desc, temp, icon) => {
	// get text elements

	const descEl = document.getElementById('weather-desc');
	const tempEl = document.getElementById('weather-temp');
	const iconEl = document.getElementById('weather-icon');

	// set value of text elements
	descEl.innerHTML = desc;
	tempEl.innerHTML = `${temp}&#176;C`;
	iconEl.src = `http://openweathermap.org/img/wn/${icon}.png`;
};
const title = document.title.split('- ')[1];

switch (title) {
	case 'Tignes':
		getWeather(45.4683, 6.9056, weatherApiKey);
		break;
	case 'Morzine':
		getWeather(46.1792, 6.7089, weatherApiKey);
		break;
	case 'Tania':
		getWeather(45.4317, 6.595, weatherApiKey);
		break;

	default:
		break;
}

tignesCoords = { lat: 45.4683, lng: 6.9056 };
