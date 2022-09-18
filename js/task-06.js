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