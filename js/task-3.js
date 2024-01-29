'use strict';

const nameInput = document.getElementById('name-input')
console.log(nameInput);

const nameOutput = document.getElementById('name-output')
console.log(nameOutput);

function inputHandler(event) {
const trimmedValue = nameInput.value.trim();

if (trimmedValue === '') {
    nameOutput.textContent = 'Anonymous';
} else {
nameOutput.textContent = trimmedValue;
}
}



nameInput.addEventListener('input', inputHandler);