const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('16_numbers').value;
  const phoneNumber = document.getElementById('phone').value;
  const postalCode = document.getElementById('postal').value;
  
  const formData = {
    name: name,
    email: email,
    cardNumber: cardNumber,
    phoneNumber: phoneNumber,
    postalCode: postalCode
  };
  
  console.log(formData); // Log the form data object
  
  form.reset(); // Clear the input fields
});
