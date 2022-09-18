

// Task 1

const categories = document.querySelectorAll('ul#categories ul ');

console.log(`Number of categories: ${categories.length}`);
 
for (let i = 0; i < categories.length; i += 1) {
    const a = categories[i].previousElementSibling.textContent;
    const b = categories[i].querySelectorAll('li').length;
    console.log(`Category: ${a}`); 
    console.log(`Elements: ${b}`)   
}

// Task 2


const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listsIngredients = document.querySelector("ul#ingredients");
const elements = [];
  for (let ingredient of ingredients) {
      const oneItem = document.createElement("li");
      oneItem.classList.add('item');
      oneItem.textContent = ingredient;
      elements.push(oneItem);    
  }
  
listsIngredients.append(...elements); 


 // Task 3 

 const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("ul.gallery");
const elementsGallery = [];
for (let image of images) {
  const tegEl = document.createElement("li");
  tegEl.insertAdjacentHTML("afterbegin",`<img src = "${image.url}" alt = "${image.alt}"/>`);
  elementsGallery.push(tegEl); 
}

gallery.append(...elementsGallery);


 // Task 4
let counterValue = 0;
const counterValueInsert = document.querySelector('#counter #value')
const actionsBtn = document.querySelectorAll('#counter button')
const decrement = actionsBtn[0] 
const increment = actionsBtn[1]

decrement.addEventListener('click', ()=> {
  counterValueInsert.textContent = counterValue -= 1;
}
)

increment.addEventListener('click',  ()=> {
  counterValueInsert.textContent = counterValue += 1;
}
)

// Task 5

const inputEl = document.querySelector('input#name-input');
const outputEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
  if (event.currentTarget.value.length === 0) {
    outputEl.textContent = "Anonymous";
  }
  else {
    outputEl.textContent = event.currentTarget.value;
  }
}

// Task 6

const inputValidation = document.querySelector('input#validation-input')
inputValidation.addEventListener('blur', onInputValidation)


function onInputValidation(event)
{
  if (event.currentTarget.value.trim().length < inputValidation.dataset.length) {
    inputValidation.classList.add('invalid');
    inputValidation.classList.remove('valid');
     
  }
  else {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  }
}

// Task 7

const inputRange = document.querySelector('input#font-size-control')
const textSize = document.querySelector('span#text')

inputRange.addEventListener("change", function () {
  textSize.style.fontSize = `${this.value}px`;  
});

// Task 8

const manageFormEl = document.querySelector('form.login-form')
 
manageFormEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const mail = formEl.email.value
  const password = formEl.password.value
  if (!mail || !password) {alert("Поле не може бути пустим!!");
    return this.reset();
  }
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
  console.log("name=>", name,"value=>", value)
    this.reset();
  })
}

// Task 9

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body')
const colorEl = document.querySelector('button.change-color');
const colorNameEl = document.querySelector('span.color');
colorEl.addEventListener('click', function () {
  bodyEl.style.backgroundColor = getRandomHexColor(); 
  colorNameEl.textContent = bodyEl.style.backgroundColor;   
})

 // Task 10


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
    console.log(divListEl)
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