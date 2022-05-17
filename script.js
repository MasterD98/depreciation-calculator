const form = document.getElementById('form');
const methods = document.getElementById('methods');

// inputs
const costInput = document.getElementById('cost-input');
const usefulLifeInput = document.getElementById('useful-life-input');
const scrapValueInput = document.getElementById('scrap-value-input');
const accDepreciationInput = document.getElementById('acc-depreciation-input');
const scrapInput = document.getElementById('scrap-input');
const noOfUnitsInput = document.getElementById('no-of-units-input');
const productionPerYearInput = document.getElementById('production-per-year-input');
const depreciationInput = document.getElementById('depreciation');

// label
const costLabel = document.getElementById('cost-label');
const usefulLifeLabel = document.getElementById('useful-life-label');
const scrapValueLabel = document.getElementById('scrap-value-label');
const accDepreciationLabel = document.getElementById('acc-depreciation-label');
const scrapLabel = document.getElementById('scrap-label');
const noOfUnitsLabel = document.getElementById('no-of-units-label');
const productionPerYearLabel = document.getElementById('production-per-year-label');
const depreciationLabel = document.getElementById('depreciation');

let selectedOption = 'Straight Line';

form.addEventListener('submit', (event) => {
	event.preventDefault();
	let depreciationValue;
	if (selectedOption === 'Straight Line') {
		const costValue = costInput.value;
		const scrapValueValue = scrapValueInput.value;
		const usefulLifeValue = usefulLifeInput.value;
		depreciationValue = (costValue - scrapValueValue) / usefulLifeValue;
	} else if (selectedOption === 'Reducing Balance') {
		const costValue = costInput.value;
		const accDepreciationValue = accDepreciationInput.value;
		const usefulLifeValue = usefulLifeInput.value;
		const scrapValue = scrapInput.value;
		depreciationValue =(costValue - accDepreciationValue)*(1 - Math.pow((scrapValue/costValue),(1/usefulLifeValue)))* 100;
	} else {
		const costValue = costInput.value;
		const scrapValue = scrapInput.value;
		const noOfUnitsValue = noOfUnitsInput.value;
		const productionPerYearValue = productionPerYearInput.value;
		depreciationValue = ((costValue - scrapValue) * productionPerYearValue) / noOfUnitsValue;
	}
	depreciationInput.value = depreciationValue;
});


function addRemoveInputs(selectedOption) {
	if (selectedOption === 'Straight Line') {
		//add
		accDepreciationInput.classList.add('hide-item');
		scrapInput.classList.add('hide-item');
		noOfUnitsInput.classList.add('hide-item');
		productionPerYearInput.classList.add('hide-item');

		accDepreciationLabel.classList.add('hide-item');
		scrapLabel.classList.add('hide-item');
		noOfUnitsLabel.classList.add('hide-item');
		productionPerYearLabel.classList.add('hide-item');

		// remove
		costInput.classList.remove('hide-item');
		usefulLifeInput.classList.remove('hide-item');
		scrapValueInput.classList.remove('hide-item');

		costLabel.classList.remove('hide-item');
		usefulLifeLabel.classList.remove('hide-item');
		scrapValueLabel.classList.remove('hide-item');
	} else if (selectedOption === 'Reducing Balance') {
		//add
		
		scrapInput.classList.add('hide-item');
		noOfUnitsInput.classList.add('hide-item');
		productionPerYearInput.classList.add('hide-item');

		
		scrapLabel.classList.add('hide-item');
		noOfUnitsLabel.classList.add('hide-item');
		productionPerYearLabel.classList.add('hide-item');

		// remove
		usefulLifeInput.classList.remove('hide-item');
		costInput.classList.remove('hide-item');
		scrapValueInput.classList.remove('hide-item');
		accDepreciationInput.classList.remove('hide-item');

		usefulLifeLabel.classList.remove('hide-item');
		costLabel.classList.remove('hide-item');
		scrapValueLabel.classList.remove('hide-item');
		accDepreciationLabel.classList.remove('hide-item');
	} else if (selectedOption === 'Production Unit') {
		// add
		usefulLifeInput.classList.add('hide-item');
		accDepreciationInput.classList.add('hide-item');
		scrapInput.classList.add('hide-item');

		usefulLifeLabel.classList.add('hide-item');
		accDepreciationLabel.classList.add('hide-item');
		scrapLabel.classList.add('hide-item');

		// remove
		costInput.classList.remove('hide-item');
		scrapValueInput.classList.remove('hide-item');
		noOfUnitsInput.classList.remove('hide-item');
		productionPerYearInput.classList.remove('hide-item');

		costLabel.classList.remove('hide-item');
		scrapValueLabel.classList.remove('hide-item');
		noOfUnitsLabel.classList.remove('hide-item');
		productionPerYearLabel.classList.remove('hide-item');
	}
}

window.addEventListener('load', () => {
	addRemoveInputs(selectedOption)
});

methods.addEventListener('change', (event) => {
	selectedOption = event.target.value;
	addRemoveInputs(selectedOption);
});
