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
  console.log({mail, password})
  this.reset()
}
