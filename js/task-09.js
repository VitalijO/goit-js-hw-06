function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('button.change-color');
const colorNameEl = document.querySelector('span.color');
colorEl.addEventListener('click', function () {
  bodyEl.style.backgroundColor = getRandomHexColor(); 
  colorNameEl.textContent = bodyEl.style.backgroundColor;   
})

