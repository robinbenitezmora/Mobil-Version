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
  const name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Your name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)) {
    nameError.innerHTML = 'Please write your name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateName ();
function validateEmail () {
  const email = document.getElementById('contact-email').value;
  
  if (email.length === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }

  if (!email.match(/^[a-z._\-[0-9]*[@][a-z]*\.[a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (!validateName() || !validateEmail()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please check a error before submit';
    setTimeout(function(){ submitError.style.display = 'none'; }, 2500);
    return false;
  }
  return true;
}
