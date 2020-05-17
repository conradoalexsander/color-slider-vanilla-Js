window.addEventListener('load', () => {
	start();
});

var redRange = null;
var redInputValue = null;

var greenRange = null;
var greenInputValue = null;

var blueRange = null;
var blueInputValue = null;

var coloredBlock = null;

start = () => {
	redRange = document.querySelector('#redRange');
	redInputValue = document.querySelector('#redInputValue');

	greenRange = document.querySelector('#greenRange');
	greenInputValue = document.querySelector('#greenInputValue');

	blueRange = document.querySelector('#blueRange');
	blueInputValue = document.querySelector('#blueInputValue');

	redInputValue.value = redRange.value;
	greenInputValue.value = greenRange.value;
	blueInputValue.value = blueRange.value;

	coloredBlock = document.querySelector('#coloredBlock');
	coloredBlock.style.backgroundColor = `rgb(
	${redInputValue.value}, 
    ${greenInputValue.value}, 
	${blueInputValue.value} 
	)`;

	redRange.addEventListener('input', () => {
		updateTextInput(redRange.value, redInputValue.id);
		updateBackgroundColor(coloredBlock);
	});

	greenRange.addEventListener('input', () => {
		updateTextInput(greenRange.value, greenInputValue.id);
		updateBackgroundColor(coloredBlock);
	});

	blueRange.addEventListener('input', () => {
		updateTextInput(blueRange.value, blueInputValue.id);
		updateBackgroundColor(coloredBlock);
	});
};

updateTextInput = (val, elementId) => {
	document.getElementById(elementId).value = val;
};

updateBackgroundColor = (element) => {
	element.style.backgroundColor = `rgb(${redInputValue.value}, 
    ${greenInputValue.value}, 
    ${blueInputValue.value} )`;
};
