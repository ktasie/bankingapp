'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//console.log(btnsOpenModal.length)

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLnks = document.querySelector('.nav__links');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

navLnks.addEventListener('click', function (e) {
  //prevent default behaviour
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.btn');

  //Guard clause
  if (!clicked) return;

  // remove all active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // activate tab and content
  clicked.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//Menu fade animation
const nav = document.querySelector('.nav');

const handleOpacity = function (e) {
  if (!e.target.classList.contains('nav__link')) return;
  //console.log(e.target);
  //console.log(this, opacity, e);
  const nav = e.target.closest('.nav');
  const navItems = nav.querySelectorAll('.nav__link');
  const logo = nav.querySelector('.nav__logo');
  //console.log(nav.children)
  navItems.forEach(link => {
    if (link !== e.target) {
      link.style.opacity = this;
    }
  });
  logo.style.opacity = this;
  // console.log(navItems, this.querySelectorAll('.nav__link'));
};

nav.addEventListener('mouseover', handleOpacity.bind('0.5'));

nav.addEventListener('mouseout', handleOpacity.bind('1'));

// Sticky navigation

// window.addEventListener('scroll', function (e) {
//  // console.log(e);
// });
const obsCallback = function () {};

const obsOptions = {};

// Intersection observer API
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
