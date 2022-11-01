// if user has completed newsletter form
// show name and change welcome message
if (localStorage.getItem('name') && document.title !== 'Winter Adventures') {
	const welcomeMsgEl = document.getElementById('welcomeMessage');
	const welcomeDeals = document.getElementById('welcomeDeals');

	const name = localStorage.getItem('name');

	welcomeMsgEl.innerHTML = `Welcome ${name}`;
	welcomeDeals.innerHTML =
		"We at Winter Adventures know how amazing a skiing holiday can be. That's why we have some great offers <em>just for you</em>. Lets make those holiday dreams come true.";
}

// display logo using Canvas API
const canvas = document.getElementById('canvas');
canvas.height = 35;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'white';
ctx.beginPath();
ctx.moveTo(0, 0);

ctx.font = '28px sans-serif';
ctx.strokeText('Winter Adventures', 0, 30);

ctx.stroke();

// Show date in footer
const date = new Date().toISOString().slice(0, 10);
const dateEl = document.getElementById('date');
dateEl.innerHTML = `Todays Date: ${date}`;
