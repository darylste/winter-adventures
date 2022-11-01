// save elements in variables

const packageEl = document.getElementById('package');
const sportEl = document.getElementById('sport');
const numPeopleEl = document.getElementById('numPeople');
const btnEl = document.getElementById('equiptmentBtn');
const costOutput = document.getElementById('costOutput');

const calcCost = (e) => {
	e.preventDefault();

	const package = packageEl.value;
	const sport = sportEl.value;
	const numPeople = numPeopleEl.value;

	if (numPeople === '') {
		alert('Please enter the number of people you are hiring equiptment for.');
		return;
	}
	let cost;
	switch (package) {
		case 'economy':
			cost = sport === 'skiing' ? numPeople * 90 : numPeople * 120;
			break;
		case 'intermediate':
			cost = sport === 'skiing' ? numPeople * 120 : numPeople * 145;
			break;
		case 'performance':
			cost = sport === 'skiing' ? numPeople * 145 : numPeople * 170;
			break;

		default:
			break;
	}

	costOutput.innerHTML = `Estimated cost: £${cost}`;
};

btnEl.addEventListener('click', calcCost);
