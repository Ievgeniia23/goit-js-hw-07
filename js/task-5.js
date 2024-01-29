'use strict';



const changedColor = document.querySelector(".color");
const changingButton = document.querySelector(".change-color")
changingButton.addEventListener('click', changeHandler);

function changeHandler() {

  const body = document.body;
  const randomColor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  body.style.backgroundColor = randomColor;

  changedColor.textContent = `Color ${randomColor}`;
}
