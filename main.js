// Creating constants

const openModal = document.querySelector('.openDesktop');
const closeModal = document.querySelector('.closeDesktop');
const open = document.querySelector('.menu__icon');
const close = document.querySelector('.cls');

// // Menu Project

// open.addEventListener('click', () => {
//   document.getElementById('slide_menu').classList.toggle('active');
// });

// close.addEventListener('click', () => {
//   document.getElementById('slide_menu').classList.remove('active');
// });

// // Pop Window Project

// openModal.addEventListener('click', () => {
//   document.getElementById('desktop-modal').classList.add('active');
// });

// closeModal.addEventListener('click', () => {
//   document.getElementById('desktop-modal').classList.remove('active');
// });

// Code following the video for second-sheet and third-sheet in index.html

const sheet2 = `<section class="second-sheet" id="portfolio">
<section class="second-sheet__area">
  <img class="second-sheet__area-big-image" src="./images/tonic.svg" alt="tonic">
  <article>
    <h2 class="second-sheet__area-title">Tonic</h2
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
      <a class="footer__button footer__button-text" class="openDesktop" href="">See Project</a>
    </div>
  </article>
</section>
</section>
`;

const secondSheet = document.querySelector('#projects');
const section2 = document.createElement('div');
section2.innerHTML = sheet2;
secondSheet.appendChild(section2);

openModal.



// Pop Window Project



// const openProject2 = document.querySelector('.seeProject');
// openProject2.addEventListener('click', () => {
//   const main2 = document.createElement('div');
//   const popup2 = document.createElement('div');
//   popup2.innerHTML = `<section class="desktop" id="desktop-modal">
//   <section class="desktop__area">
//     <article>
//       <div class="desktop-heading">
//         <div class="desktop-title">
//           <h2 class="desktop__area-title" id="desktop-project">Tonic</h2>
//           <a class="close" id="closeDesktop" href="#">&times;</a>
//         </div>
//         <div class="desktop__area-frame">
//           <h4 class="desktop__area-frame-canopy">CANOPY</h4>
//           <img class="desktop__area-frame-dot" src="./images/dot.png" alt="dot">
//           <h4 class="desktop__area-frame-BackEndDev">Back End Dev</h4>
//           <img class="desktop__area-frame-dot" src="./images/dot.png" alt="dot">
//           <h5 class="desktop__area-frame-BackEndDev">2015</h5>
//         </div>
//         <img class="desktop__area-big-image" id="desktop-main-image" src="./images/tonic.svg" alt="project_tonic">
//       </div>
//       <div class="desktop-footer">
//         <p class="desktop__paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s.</p>
//         <div class="desktop-footer-buttons" id="desktop-technology">
//           <div class="footer__languages-desktop-row1">
//             <div class="footer__languages-html footer__languages-text">html</div>
//             <div class="footer__languages-css footer__languages-text">css</div>
//             <div class="footer__languages-javascript footer__languages-text">javaScript</div>
//           </div>
//           <div class="footer__languages-desktop-row2">
//             <div class="footer__languages-html footer__languages-text">github</div>
//             <div class="footer__languages-css footer__languages-text">ruby</div>
//             <div class="footer__languages-javascript footer__languages-text">Bootstrap</div>
//           </div>
//           <div class="desktop__buttons">
//             <div class="desktop__first-button">
//               <a class="desktop__button1 desktop__button-text" href="" id="desktop-open-live">See Live<span><img src="./icons/icon-export.png" alt="icon-export"></span></a>
//             </div>
//             <div class="desktop__first-button">
//               <a class="desktop__button1 desktop__button-text" id="desktop-open-source" href="">See Source<span><img src="./icons/github.png" alt="github"></span></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   </section>
// </section>
// `;
//   main2.appendChild(popup2);
//   secondSheet.appendChild(main2);

//   const closeProject2 = document.querySelector('.closeProjectoPopup');
//   closeProject2.addEventListener('click', () => {
//     secondSheet.removeChild(main2);
//   });
// });

const sheet3 = `<section class="third-sheet">
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
      <a class="footer__button footer__button-text" href="#" class="seeProject">See Project</a>
    </div>
  </article>
  <img class="third-sheet__area-big-image" src="./images/big-image4.png" alt="personal-image">
</section>
</section>
`;

const thirdSheet = document.querySelector('#projects');
const section3 = document.createElement('div');
section3.innerHTML = sheet3;
thirdSheet.appendChild(section3);

// const openProject3 = document.querySelector('.seeProject');
// openProject3.addEventListener('click', () => {
//   const main3 = document.createElement('div');
//   const popup3 = document.createElement('div');
//   popup3.innerHTML = sheet3;
//   main3.appendChild(popup3);
//   thirdSheet.appendChild(main3);

//   const closeProject3 = document.querySelector('.closeProjectoPopup');
//   closeProject3.addEventListener('click', () => {
//     thirdSheet.removeChild(main3);
//   });
// });


const sheet4 = `<section class="fourth-sheet">
<section class="fourth-sheet__area">
  <img class="fourth-sheet__area-big-image" src="./images/photo-portfolio.svg" alt="flexible-woman-image">
  <article>
    <h2 class="fourth-sheet__area-title">Facebook 360</h2>
    <div class="fourth-sheet__area-frame">
      <h4 class="fourth-sheet__area-frame-canopy">FACEBOOK</h4>
      <img class="fourth-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h4 class="fourth-sheet__area-frame-BackEndDev">Full Stack Dev</h4>
      <img class="fourth-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h5 class="fourth-sheet__area-frame-BackEndDev">2015</h5>
    </div>
    <p class="fourth-sheet__paragraph">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p>
    <div class="footer">
      <div class="footer__languages">
        <div class="footer__languages-html footer__languages-text">html</div>
        <div class="footer__languages-css footer__languages-text">Ruby on rails</div>
        <div class="footer__languages-css footer__languages-text">css</div>
        <div class="footer__languages-javascript footer__languages-text">javaScript</div>
      </div>
      <a class="footer__button footer__button-text" href="#" id="desktop-modal" class="openDesktop">See Project</a>
    </div>
  </article>
</section>
</section>
`;

const fourthSheet = document.querySelector('#projects');
const section4 = document.createElement('div');
section4.innerHTML = sheet4;
fourthSheet.appendChild(section4);

// const openProject4 = document.querySelector('.seeProject');
// openProject4.addEventListener('click', () => {
//   const main4 = document.createElement('div');
//   const popup4 = document.createElement('div');
//   popup4.innerHTML = sheet4;
//   main4.appendChild(popup4);
//   fourthSheet.appendChild(main4);

//   const closeProject4 = document.querySelector('.closeProjectoPopup');
//   closeProject4.addEventListener('click', () => {
//     fourthSheet.removeChild(main4);
//   });
// });


const sheet5 = `<section class="fifth-sheet">
<section class="fifth-sheet__area">
  <article>
    <h2 class="fifth-sheet__area-title">Uber Navigation</h2>
    <div class="fifth-sheet__area-frame">
      <h4 class="fifth-sheet__area-frame-canopy">Uber</h4>
      <img class="fifth-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h4 class="fifth-sheet__area-frame-BackEndDev">Lead Developer</h4>
      <img class="fifth-sheet__area-frame-dot" src="./images/dot.png" alt="dot">
      <h5 class="fifth-sheet__area-frame-BackEndDev">2015</h5>
    </div>
    <p class="fifth-sheet__paragraph">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p>
    <div class="footer">
      <div class="footer__languages">
        <div class="footer__languages-html footer__languages-text">html</div>
        <div class="footer__languages-css footer__languages-text">css</div>
        <div class="footer__languages-javascript footer__languages-text">javaScript</div>
      </div>
      <a class="footer__button footer__button-text" href="#" class="openDesktop">See Project</a>
    </div>
  </article>
  <img class="fifth-sheet__area-big-image" src="./images/big-image2.png" alt="personal-image">
</section>
</section>
`;

const fifthSheet = document.querySelector('#projects');
const section5 = document.createElement('div');
section5.innerHTML = sheet5;
fifthSheet.appendChild(section5);

// const openProject5 = document.querySelector('.seeProject');
// openProject5.addEventListener('click', () => {
//   const main5 = document.createElement('div');
//   const popup5 = document.createElement('div');
//   popup5.innerHTML = sheet5;
//   main5.appendChild(popup5);
//   secondSheet.appendChild(main5);

//   const closeProject5 = document.querySelector('.closeProjectoPopup');
//   closeProject5.addEventListener('click', () => {
//     secondSheet.removeChild(main5);
//   });
// });

// Menu Project

open.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.toggle('active');
});

close.addEventListener('click', () => {
  document.getElementById('slide_menu').classList.remove('active');
});

// Pop Window Project

openModal.addEventListener('click', () => {
  document.getElementById('desktop-modal').classList.toggle('active');
});

closeModal.addEventListener('click', () => {
  document.getElementById('desktop-modal').classList.remove('active');
});
