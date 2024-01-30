'use strict';


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);


  function createBoxes() {
  const amount = parseInt(input.value);
  const newBoxes = [];

  if (amount >= 1 && amount <= 100) {
   
    for (let i = 0; i < amount; i++) {

      const newDiv = document.createElement('div');
      newDiv.style.width = `${30 + i * 10}px`;
      newDiv.style.height = `${30 + i * 10}px`;
      newDiv.style.backgroundColor = getRandomHexColor();
      newBoxes.push(newDiv);

    }
    boxesContainer.innerHTML = '';
    boxesContainer.append(...newBoxes);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}









