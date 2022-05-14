const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

const close = document.querySelector('#slide_menu');
close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

const superheroes = [
  {
    name: 'SuperHero #0',
    description: 'Spiderman: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
]
