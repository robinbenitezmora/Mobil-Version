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
  {
    name: 'SuperHero #1',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'SuperHero #2',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'SuperHero #3',
    description: 'Spiderman: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'SuperHero #4',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'SuperHero #5',
    description: 'Spiderman:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias, quod recusandae asperiores similique quos aperiam aspernatur, ipsam autem fuga minima libero dolor accusantium corporis possimus quaerat repellat harum distinctio!',
    image: ['./images/big-image.png'],
    technologies: ['HTML/CSS', 'JavaScript', 'Bootstrap', 'Ruby on Rails'],
    linkToLiveVersion: "#",
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
];

const mobil = document.querySelector('#popup-modal');

const openMobil= document.getElementById('openPopup');
const modal = document.getElementById('popup-modal');
const closeMobil = document.getElementById('closePopMobil');

openMobil.addEventListener('click', () => {
  modal.classList.add('active');
});

closeMobil.addEventListener('click', () => {
  modal.classList.remove('active');
});
function openPopup(num = null) {
  if (num != null) {
    const { technologies } = superheroes[num];
    let technologiesList = "";
    technologies.forEach((tech) => {
      technologiesList += `<li>${tech}</li>`;
    });

    const { images } = superheroes[num];
    let imagesList = "";
    images.forEach((img) => {
      imagesList += `<img src="${img}"><img>`;
    });

    document.getElementById('mobil-project').innerHTML = superheroes[num].name;
    document.getElementById('popup-image').src = superheroes[num].image;
    document.getElementById('popup-open-live').innerHTML = superheroes[num].linkToLiveVersion;
    document.getElementById('popup-source').innerHTML = superheroes[num].linkToSource;
    document.getElementById('popup-technology').innerHTML = technologiesList;
    document.getElementById('').innerHTML = imagesList;

    mobil.classList.add('active');
  }
}

function closePopup(id = null) {
  if (id != null) {
    mobil.classList.remove('active');
  }
}

openPopup();
closePopup();
