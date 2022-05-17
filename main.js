const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

const close = document.querySelector('.cls');
close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

// Creating constants

const menu = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav__menu');
const body = document.querySelector('body');
const desktop = document.getElementById('desktop-modal');
const header = document.querySelector('header');

// Menu project

open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

// Popup Window Project

const superheroes = [
  {
    name: 'Spiderman',
    description: 'Spiderman: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Iron Man',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Hulk',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'American Chaptain',
    description: 'Spiderman: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Superman',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Wonderwoman',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: '#',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
];
function openProjects (num = null) {
  if (num != null) {
    const { technologies } = superheroes[num];
    let technologiesList = '';
    technologies.forEach((tech) => {
      technologiesList += `<li>${tech}</li>`;
    });

    document.getElementById('desktop-project').innerHTML = superheroes[num].name;
    document.getElementById('desktop-main-image').src = superheroes[num].image;
    document.getElementById('desktop-open-live').innerHTML = superheroes[num].linkToLiveVersion;
    document.getElementById('desktop-open-source').innerHTML = superheroes[num].linkToSource;
    document.getElementById('desktop-technology').innerHTML = technologiesList;

    desktop.classList.add('active');
  }
}

function closeProjects (id = null) {
  if (id != null) {
    desktop.classList.remove('active');
  }
}

openProjects();
closeProjects();
