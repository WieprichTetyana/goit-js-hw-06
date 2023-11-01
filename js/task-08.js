const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(`Email: ${form.elements.email.value}, Password: ${form.elements.password.value}`);
  form.reset();
}
