const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
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