
main2.appendChild(popup2);
second_sheet.appendChild(main2);

const general_close = document.querySelector('.closeProject');
general_close.addEventListener('click', () => {
  second_sheet.removeChild(main2);
})
});

const third_sheet = document.querySelector('.third-sheet');
const section3 = document.createElement('section3');
second_sheet.appendChild(section3);
section3.innerHTML = `<section class="third-sheet">
<section class="third-sheet__area">
  <article>
    <h2 class="third-sheet__area-title">Multi-Post Stories</h2>
    <div class="third-sheet__area-frame">
      <h4 class="third-sheet__area-frame-canopy">FACEBOOK</h4>
      <img class="third-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h4 class="third-sheet__area-frame-BackEndDev">Full Stack Dev</h4>
      <img class="third-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h5 class="third-sheet__area-frame-BackEndDev">2015</h5>
    </div>
    <p class="third-sheet__paragraph">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p>
    <div class="footer">
      <div class="footer__languages">
        <div class="footer__languages-html footer__languages-text">html</div>
        <div class="footer__languages-css footer__languages-text">Ruby on rails</div>
        <div class="footer__languages-css footer__languages-text">css</div>
        <div class="footer__languages-javascript footer__languages-text">javaScript</div>
      </div>
      <a class="footer__button footer__button-text" href="" class="Project3">See Project</a>
    </div>
  </article>
  <img class="third-sheet__area-big-image" src="./images/big-image4.png" alt="personal-image">
</section>
</section>
`;

const openProject3 = document.querySelector('.Project3');
openProject1.addEventListener('click', () => {
  const main3 = document.createElement('div');
  const popup3 = document.createElement('div');
  popup3.innerHTML = `
  <section class="third-sheet">
    <section class="third-sheet__area">
      <article>
        <h2 class="third-sheet__area-title">Multi-Post Stories</h2>
        <div class="third-sheet__area-frame">
          <h4 class="third-sheet__area-frame-canopy">FACEBOOK</h4>
          <img class="third-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
          <h4 class="third-sheet__area-frame-BackEndDev">Full Stack Dev</h4>
          <img class="third-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
          <h5 class="third-sheet__area-frame-BackEndDev">2015</h5>
        </div>
        <p class="third-sheet__paragraph">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p>
        <div class="footer">
          <div class="footer__languages">
            <div class="footer__languages-html footer__languages-text">html</div>
            <div class="footer__languages-css footer__languages-text">Ruby on rails</div>
            <div class="footer__languages-css footer__languages-text">css</div>
            <div class="footer__languages-javascript footer__languages-text">javaScript</div>
          </div>
          <a class="footer__button footer__button-text" href="#" class="closeProject">See Project</a>
        </div>
      </article>
      <img class="third-sheet__area-big-image" src="./images/big-image4.png" alt="personal-image">
    </section>
  </section>
`;
main3.appendChild(popup3);
third_sheet.appendChild(main3);

const general_close = document.querySelector('.closeProject');
general_close.addEventListener('click', () => {
  third_sheet.removeChild(main3);
})
});









/*
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
