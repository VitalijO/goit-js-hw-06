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