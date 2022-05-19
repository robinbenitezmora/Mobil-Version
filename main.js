// Creating constants

const openModal = document.getElementById('openDesktop');
const closeModal = document.getElementById('closeDesktop');
const open = document.querySelector('.menu__icon');
const close = document.querySelector('.cls');

// Menu Project

open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

// Pop Window Project

openModal.addEventListener('click', () => {
  document.getElementById('desktop-modal').classList.add('active');
});

closeModal.addEventListener('click', () => {
  document.getElementById('desktop-modal').classList.remove('active');
});

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: ['./images/tonic.svg'],
    technologies: ['html', 'css', 'JavaScript'],
    linkToLiveVersion: 'https://www.nasa.gov/',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: ['./images/big-image4.png'],
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    linkToLiveVersion: 'https://www.nasa.gov/',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: ['./images/photo-portfolio.svg'],
    technologies: ['html', 'Ruby on Rails', 'css', 'JavaScript'],
    linkToLiveVersion: 'https://www.nasa.gov/',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: ['./images/big-image2.png'],
    technologies: ['html', 'Ruby on Rails', 'css', 'JavaScript'],
    linkToLiveVersion: 'https://www.nasa.gov/',
    linkToSource: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
];

function openProjects(num) {
  if (num < projects.length) {
    let technologiesList = '';
    projects[num].technologies.forEach((tech) => {
      technologiesList += `<li>${tech}</li>`;
    });

    document.getElementById('desktop-project').innerHTML = projects[num].name;
    document.getElementById('desktop-description').innerHTML = projects[num].description;
    document.getElementById('desktop-main-image').src = projects[num].image;
    document.getElementById('desktop-open-live').innerHTML = projects[num].linkToLiveVersion;
    document.getElementById('desktop-open-source').src = projects[num].linkToSource;
    document.getElementById('desktop-technology').innerHTML = technologiesList;

    document.getElementById('desktop-modal').classList.add('active');
  }
}

function closeProjects(id = null) {
  if (id != null) {
    document.getElementById('desktop-modal').classList.remove('active');
  }
}

openProjects();
closeProjects();
