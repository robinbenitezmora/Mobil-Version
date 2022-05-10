const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

const close = document.querySelector('.items');
close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('inactive');
});

const close2 = document.querySelector('.cls');
close2.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('inactive');
});

