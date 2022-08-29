let inputLabel = document.querySelector('.search');
let inputLabelAdd = document.querySelector('.add');
let drinks = document.querySelectorAll('.bottom__item');
let drinksList = document.querySelector('.bottom__list-items');
let error = document.querySelector('.top__error');

const searchEngine = e => {
	const text = e.target.value.toLowerCase();

	drinks.forEach(drink => {
		if (drink.textContent.toLowerCase().indexOf(text) !== -1) {
			drink.style.display = 'block';
		} else {
			drink.style.display = 'none';
		}
	});
};

const addEngine = () => {
	// const text2 = e.target.value

	if (inputLabelAdd.value !== '') {
		const newDrink = document.createElement('li');
		newDrink.textContent = inputLabelAdd.value;
		newDrink.textContent = newDrink.textContent.charAt(0).toUpperCase() + newDrink.textContent.slice(1).toLowerCase()
		newDrink.classList.add('bottom__item');
		drinksList.append(newDrink);

		error.textContent = '';
		error.style.display = '';
		inputLabelAdd.value = ''
	} else {
		error.textContent = 'Podaj nazwę nowego napoju';
		error.style.display = 'block';
	}
};

checkKey = e => {
	if (e.key == 'Enter') {
		addEngine();
	}
};

inputLabel.addEventListener('keyup', searchEngine);
inputLabelAdd.addEventListener('keyup', checkKey);
