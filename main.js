const open = document.querySelector('.menu__icon');
open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.add('active');
});

const close = document.querySelector('#slide_menu');
close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

const projects = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './images/tonic.svg',
    technologies: ['html', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './images/tonic.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './images/tonic.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './images/tonic.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    live: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
];

const detail = document.getElementById('detail');
const detailTitle = document.getElementById('detailTitle');
const detailDescription = document.getElementById('detailDescription');
const detailLanguajes = document.getElementById('detailLanguajes');
const btnDetailLive = document.getElementById('btnDetailLive');
const btnDetailSource = document.getElementById('btnDetailSource');
const detailImage = document.getElementById('detailImage');

const openDetail = (projectNumber = null) => {
  if (projectNumber != null) {
    const lan = projects[projectNumber].technologies;
    let lanShow = '';
    lan.forEach((element) => { lanShow += `<li>${element}</li>`; });

    detail.style.width = '100%';
    detailTitle.innerText = projects[projectNumber].name;
    detailDescription.innerText = projects[projectNumber].description;
    detailImage.src = projects[projectNumber].image;
    btnDetailLive.href = projects[projectNumber].live;
    btnDetailSource.href = projects[projectNumber].source;
    detailLanguajes.innerHTML = lanShow;
  }
};

const closeDetail = () => {
  detail.style.width = '0%';
};

openDetail();
closeDetail();