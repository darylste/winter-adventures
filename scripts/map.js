const apiKey = '5r5bqNX0WFyedU_hG9-b70APnCToGDqY_mj9Mrorqa0';

// resport Coords
tignesCoords = { lat: 45.4683, lng: 6.9056 };
morzineCoords = { lat: 46.1792, lng: 6.7089 };
taniaCoords = { lat: 45.4317, lng: 6.595 };
// set resortCoords = page resort pased on page title
const resortName = document.title.split('- ')[1].toLocaleLowerCase();
const resortCoords = window[resortName.concat('Coords')];

// function to display map
const displayMap = ({ lat, lng }) => {
	// create and display Map
	var platform = new H.service.Platform({
		apikey: apiKey,
	});

	var defaultLayers = platform.createDefaultLayers();
	var map = new H.Map(
		document.getElementById('mapContainer'),
		defaultLayers.vector.normal.map,
		{
			zoom: 8.25,
			center: { lat, lng },
		},
	);

	// create and display Marker
	var iconBlue = new H.map.Icon('/assets/icons/skiingBlue.svg');
	var iconYellow = new H.map.Icon('/assets/icons/skiingYellow.svg');
	var iconGreen = new H.map.Icon('/assets/icons/skiingGreen.svg');

	var tignesMarker = new H.map.Marker(tignesCoords, { icon: iconBlue });
	var morzineMarker = new H.map.Marker(morzineCoords, { icon: iconYellow });
	var taniaMarker = new H.map.Marker(taniaCoords, { icon: iconGreen });

	map.addObject(tignesMarker);
	map.addObject(morzineMarker);
	map.addObject(taniaMarker);
};

displayMap(resortCoords);
