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
    image: './images/big-image4.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    image: './images/photo-portfolio.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    link: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './images/big-image2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'JavaScript'],
    live: 'https://www.tripadvisor.co/Attractions-g652402-Activities-Manizales_Caldas_Department.html',
    source: 'https://github.com/robinbenitezmora/Mobil-Version',
  },
];

/*const desktop = document.querySelector('#desktop-modal');
/*
const openDesktop = document.getElementById('openPopup');
const modal = document.getElementById('desktop-modal');
const closeDesktop = document.getElementById('closePopup');
*/
/*openDesktop.addEventListener('click', () => {
  modal.classList.add('active');
});

closeDesktop.addEventListener('click', () => {
  modal.classList.remove('active');
});
*/



/*
function openPopup(num = null) {
  if (num != null) {
    const { technologies } = superheroes[num];
    let technologiesList = '';
    technologies.forEach((tech) => {
      technologiesList += `<li>${tech}</li>`;
    });

    const { images } = superheroes[num];
    let imagesList = '';
    images.forEach((img) => {
      imagesList += `<img src="${img}"><img>`;
    });

    document.getElementById('desktop-project').innerText = superheroes[num].name;
    document.getElementById('desktop-image').src = superheroes[num].image;
    document.getElementById('desktop-open-live').innerText = superheroes[num].linkToLiveVersion;
    document.getElementById('desktop-source').innerHTML = superheroes[num].linkToSource;
    document.getElementById('desktop-technology').innerHTML = technologiesList;
    document.getElementById('').innerHTML = imagesList;

    desktop.classList.add('active');
  }
}

function closepopup(id = null) {
  if (id != null) {
    desktop.classList.remove('active');
  }
}
*/
/*
openPopup();
closepopup();
*/
// const projects = [
//   {
//     name: 'Multi-Post Stories 1',
//     language: [
//       'css',
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Data Dashboard Healthcare 2',
//     language: [
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Website Portfolio 3',
//     language: [
//       'css',
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Profesional Art Prining Data More 4',
//     language: [
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Data Dashboard Healthcare 5',
//     language: [
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Website Portfolio 6',
//     language: [
//       'css',
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
//   {
//     name: 'Profesional Art Prining Data More 7',
//     language: [
//       'html',
//       'bootstrap',
//       'Ruby',
//     ],
//     image: './images/MultiSotry.png',
//     description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
//     live: 'https://reflexionesrichardburneo.blogspot.com/',
//     source: 'https://github.com/pirc25',
//   },
// ];

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