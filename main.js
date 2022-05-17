const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

const close = document.querySelector('.cls');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});
