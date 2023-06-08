// IMPORTS
import './css/styles.css';
import {
  getUserBookings,
  // getBookingsData,
  // getRoomsData,
  // getSingleUser
} from './apicalls';

import {
  slideBudget,
  openModal,
  closeModal,
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
import { formatDate } from './dates';

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

// EVENT LISTENERS
window.addEventListener('load', () => {
  setCalendarDate()
  getUserBookings(50);
  // getRoomsData();
  // getBookingsData(50);
  // getSingleUser(50);
  // console.log(leftSlider, rightSlider)
});

Array.from([leftSlider, rightSlider]).forEach((input) => {
  console.log(input);
  input.addEventListener('input', (e) => {
    slideBudget(e);
  });
});

filterBtn.addEventListener('click', openModal);
filterBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    openModal();
  }
});

closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    closeModal();
  }
});

accountBtn.addEventListener('click', showDash);
accountBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    showDash();
  }
});

searchBtn.addEventListener('click', openModal);
searchBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    openModal();
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
  closeBtn,
  roomsShownText,
  userBookingSections,
  currentBookings
};
