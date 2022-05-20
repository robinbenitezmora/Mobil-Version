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

// Code following the video for second-sheet and third-sheet in index.html

const sheet2 = `<section class="second-sheet" id="portfolio">
<section class="second-sheet__area">
  <img class="second-sheet__area-big-image" src="./images/tonic.svg" alt="tonic">
  <article>
    <h2 class="second-sheet__area-title">Tonic</h2>
    <div class="second-sheet__area-frame">
      <h4 class="second-sheet__area-frame-canopy">CANOPY</h4>
      <img class="second-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h4 class="second-sheet__area-frame-BackEndDev">Back End Dev</h4>
      <img class="second-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h5 class="second-sheet__area-frame-BackEndDev">2015</h5>
    </div>
    <p class="second-sheet__paragraph">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
    <div class="footer">
      <div class="footer__languages">
        <div class="footer__languages-html footer__languages-text">html</div>
        <div class="footer__languages-css footer__languages-text">css</div>
        <div class="footer__languages-javascript footer__languages-text">javaScript</div>
      </div>
      <a class="footer__button footer__button-text" id="openDesktop" href="#">See Project</a>
    </div>
  </article>
</section>
</section>
`;

const secondSheet = document.querySelector('#projects');
const section2 = document.createElement('div');
section2.innerHTML = sheet2;
secondSheet.appendChild(section2);

const sheet3 = `    <section class="third-sheet">
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
      <a class="footer__button footer__button-text" href="javascript:openProjects(1)">See Project</a>
    </div>
  </article>
  <img class="third-sheet__area-big-image" src="./images/big-image4.png" alt="personal-image">
</section>
</section>
`;

const thirdSheet = document.querySelector('#projects');
const section3 = document.createElement('div');
section3.innerHTML = sheet3;
thirdSheet.appendChild(section2);
