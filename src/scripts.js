// IMPORTS
import './css/styles.css';
import { getBookingsData, getRoomsData } from './apicalls';
import {
  slideBudget,
  openModal,
  closeModal,
  showDash,
  switchToHome,
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
const showRoomsBtn = document.querySelector('.filter-show-button')

// EVENT LISTENERS
window.addEventListener('load', () => {
  getRoomsData();
  getBookingsData();
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
    switchToHome()
  }
});

export {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterModal,
  availableRoomsView,
  accountBtn,
  searchBtn,
  roomsShownText,
};
