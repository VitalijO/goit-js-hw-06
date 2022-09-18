function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divEl = document.querySelector('div#controls');
const inputSomeEl = divEl.querySelector('input');
const btnCreate = divEl.querySelector('button[data-create]');
const btnDestroy = divEl.querySelector('button[data-destroy]');
const boxesEl = document.querySelector("div#boxes")

let divListEl = [];

function createBoxes(amount) {
  let size = 30
  for (let i = 0; i < amount; i += 1) {
    boxesEl.insertAdjacentHTML("beforeend",
      `<div style="width:${size}px; 
      height :${size}px; 
      background-color:${getRandomHexColor()};"> </div>`);
    size +=10
  }
 boxesEl.append(...divListEl);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

btnCreate.addEventListener("click", () => {
 
  createBoxes(inputSomeEl.value)
} )
btnDestroy.addEventListener("click", () => {
  destroyBoxes()
  inputSomeEl.value = ''
} )