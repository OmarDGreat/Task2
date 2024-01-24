document.querySelector('form').addEventListener('submit', function(event) {
  var email = document.getElementById('email');
  var confirmEmail = document.getElementById('confirmEmail');
 
  if (email.value !== confirmEmail.value) {
     event.preventDefault(); // Prevent form submission
     confirmEmail.setCustomValidity('Email addresses must match.');
  } else {
     confirmEmail.setCustomValidity('');
  }
 });
 