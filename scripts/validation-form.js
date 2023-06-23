document.getElementById('contact-form').addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    document.querySelector('.error').innerHTML = 'Invalid email address, use lowercase characters';
    event.target.reset();
  }
});