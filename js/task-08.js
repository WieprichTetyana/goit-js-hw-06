const submitForm = (event) => {
  event.preventDefault(); 

  const form = event.target; 
  const formData = new FormData(form); 

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  if (data.email.trim() === '' || data.password.trim() === '') {
    alert('Будь ласка, заповни всі поля форми.');
  } else {
   
    console.log(data);
    form.reset();
  }
}