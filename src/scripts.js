// IMPORTS
import './css/styles.css';
import {
  getUserBookings,
} from './apicalls';

import {
  slideBudget,
  toggleModal,
  showDash,
  switchToHome,
  setCalendarDate
} from './domUpdates';

//IMAGES
import './images/suite.png';
import './images/lotus-logo-b.png';
import './images/pool-side.png';
import './images/singleroom.png';
import './images/juniorsuite.png';
import './images/residentialsuite.png';

//GLOBAL VARIABLES
const leftSlider = document.querySelector('#firstSlider');
const rightSlider = document.querySelector('#secondSlider');
const leftBudgetValue = document.querySelector('.value1');
const rightBudgetValue = document.querySelector('.value2');
const closeBtn = document.querySelector('.close-btn');
const filterBtn = document.querySelector('.filter-button');
const accountBtn = document.querySelector('.account-btn');
const searchBtn = document.querySelector('.search-btn');
const filterModal = document.querySelector('.filter-modal');
const availableRoomsView = document.querySelector('.available-rooms-view');
const roomsShownText = document.querySelector('.rooms-shown-txt');
const showRoomsBtn = document.querySelector('.filter-show-button');
const userDashView = document.querySelector('.user-dash-view');
const upcomingBookings = document.querySelector('.upcoming-bookings');
const pastBookings = document.querySelector('.past-bookings');
const currentBookings = document.querySelector('.current-bookings');
const userBookingSections = Array.from([upcomingBookings, pastBookings, currentBookings])
const filterAndSearchBtns = Array.from([filterBtn, searchBtn]);

// EVENT LISTENERS
window.addEventListener('load', () => {
  setCalendarDate()
  getUserBookings(50);
});

Array.from([leftSlider, rightSlider]).forEach((input) => {
  input.addEventListener('input', (e) => {
    slideBudget(e);
  });
});

filterAndSearchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleModal('add', 'setAttribute');
  });

  btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      toggleModal('add', 'setAttribute');
    }
  });
})

closeBtn.addEventListener('click', () => {
  toggleModal('remove', 'removeAttribute');
});

closeBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    toggleModal('remove', 'removeAttribute');
  }
});

accountBtn.addEventListener('click', showDash);
accountBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    showDash();
  }
});

showRoomsBtn.addEventListener('click', switchToHome);
showRoomsBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    switchToHome();
  }
});

export {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterModal,
  availableRoomsView,
  userDashView,
  accountBtn,
  searchBtn,
  roomsShownText,
  userBookingSections,
  currentBookings
};
