/* const imageBody = document.querySelector('.find');
document.addEventListener('click', input);

function input(event) {
  if (event.target.closest('.find__image')) {
    imageBody.classList.toggle('_active');
    console.log('123');
  }
  if (!event.target.closest('.find')) {
    imageBody.classList.remove('_active');
    console.log('456');
  }
}

document.addEventListener("keyup", esc);
function esc(event) {
  if (event.code === 'Escape') {
    console.log('Done!');
    imageBody.classList.remove('_active');
  }
}

const textInput = document.querySelector('.find__input');
const textInputLimit = textInput.getAttribute('maxlength');
const textInputCounter = document.querySelector('.find__counter span');
textInputCounter.innerHTML = textInputLimit;

textInput.addEventListener("keyup", textSetCounter);

function textSetCounter() {
  const textInputResult = textInputLimit - textInput.value.length;
  textInputCounter.innerHTML = textInputResult;
} */

/* --------------------------------------------------------------------------- */

"use strict"

const buyButton = document.querySelectorAll('.buy');
const productItem = document.querySelectorAll('.catfood__item');

for (let elem of buyButton) {
  elem.addEventListener('click', function func(event) {
    elem.classList.toggle('active_buy');
  });
}

for (let elem of productItem) {
  elem.addEventListener('click', function func(event) {
    elem.classList.toggle('active_buy');
  });
}