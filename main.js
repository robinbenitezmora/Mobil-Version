const mobile = document.querySelector('menu__icon');
mobile.addEventListener('click', function () {
  document.addEventListener('slide_menu').classList.toggle('active');
});
