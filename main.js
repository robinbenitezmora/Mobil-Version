const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

const close = document.querySelector('.cls');
close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName () {
  let name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Your name is required';
    return false;
  }
  if (name.match(/[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    nameError.innerHTML = 'Please write your name';
    return false;
  }
  nameError.innerHTML = 'valid';
  return true;
}
function validateName ();
function validateEmail () {
  let email = document.getElementById('contact-email').value;
  
  if (email.match(^[A-Z]+$)) {
    emailError.innerHTML = 'Email does not have lower Cases';
    return false;
  }
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail() || validateMessage()) {
    submitError.innerHTML = 'Please check a error before submit';
    
  }
}