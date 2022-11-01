// store elements as variables
const newsletterTitle = document.getElementById('newsletterTitle');
const formEl = document.getElementById('newsletterForm');
const newsletterThankyou = document.getElementById('newsletterThankyou');
const nameInputEl = document.getElementById('nameInput');
const emailInputEl = document.getElementById('emailInput');
const submitBtn = document.getElementById('form-submit');

// function to handle form submit
const handleSubmit = (e) => {
	// prevent page reloading
	e.preventDefault();

	// save user input to variables
	const name = nameInputEl.value;
	const email = emailInputEl.value;

	// set local storage with user input
	localStorage.setItem('name', name);
	localStorage.setItem('email', email);

	// update form title
	newsletterTitle.innerHTML = `Thanks ${name}, we'll be in touch soon!`;
	// hide form elements
	console.log(formEl);
	formEl.classList.add('hidden');
	// show newsletter message
	newsletterThankyou.classList.remove('hidden');
};

// event listener to call handle submit fnc
submitBtn.addEventListener('click', handleSubmit);
