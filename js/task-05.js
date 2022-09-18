const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
  if (event.currentTarget.value.trim().length === 0) {
    outputEl.textContent = "Anonymous";
  }
  else {
    outputEl.textContent = event.currentTarget.value;
  }
}