const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const { email, password } = form.elements;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    [email.name]: email.value.trim(),
    [password.name]: password.value.trim(),
  };

  console.log(formData);
  form.reset();
});
