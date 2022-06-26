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
