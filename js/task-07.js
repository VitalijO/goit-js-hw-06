const inputRange = document.querySelector('input#font-size-control')
const textSize = document.querySelector('span#text')

inputRange.addEventListener("change", function () {
  textSize.style.fontSize = `${this.value}px`;  
});