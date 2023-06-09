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
import './images/canopy.png'
import './images/yoga-room.png'
import './images/resort-area.png'

//GLOBAL VARIABLES
const leftSlider = document.querySelector('#firstSlider');
const rightSlider = document.querySelector('#secondSlider');
const leftBudgetValue = document.querySelector('.value1');
const rightBudgetValue = document.querySelector('.value2');
const filterCloseBtn = document.querySelector('.close-btn-1');
const roomCloseBtn = document.querySelector('.close-btn-2');
const filterBtn = document.querySelector('.filter-button');
const accountBtn = document.querySelector('.account-btn');
const searchBtn = document.querySelector('.search-btn');
const filterModal = document.querySelector('.filter-modal');
const roomModal = document.querySelector('.room-modal')
const availableRoomsView = document.querySelector('.available-rooms-view');
const roomsShownText = document.querySelector('.rooms-shown-txt');
const showRoomsBtn = document.querySelector('.filter-show-button');
const userDashView = document.querySelector('.user-dash-view');
const upcomingBookings = document.querySelector('.upcoming-bookings');
const pastBookings = document.querySelector('.past-bookings');
const currentBookings = document.querySelector('.current-bookings');
const userBookingSections = Array.from([upcomingBookings, pastBookings, currentBookings])
const filterAndSearchBtns = Array.from([filterBtn, searchBtn]);
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const modalImgs = document.querySelector('.modal-imgs')

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
    toggleModal(filterModal, 'add', 'setAttribute');
  });

  btn.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      toggleModal(filterModal, 'add', 'setAttribute');
    }
  });
})

filterCloseBtn.addEventListener('click', () => {
  toggleModal(filterModal, 'remove', 'removeAttribute');
});

filterCloseBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    toggleModal(filterModal, 'remove', 'removeAttribute');
  }
});

roomCloseBtn.addEventListener('click', () => {
  toggleModal(roomModal, 'remove', 'removeAttribute');
});

roomCloseBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    toggleModal(roomModal, 'remove', 'removeAttribute');
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

availableRoomsView.addEventListener('click', (e) => {
  if(e.target.classList.contains('booking-btn')) {
    toggleModal(roomModal, 'add', 'setAttribute')
  }
})

leftArrow.addEventListener('click', () => {
  modalImgs.scrollBy({
    top: 0,
    left: -200,
    behavior: "smooth",
  })
})

leftArrow.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    modalImgs.scrollBy({
      top: 0,
      left: -200,
      behavior: "smooth",
    })
  }
})

rightArrow.addEventListener('click', () => {
  modalImgs.scrollBy({
    top: 0,
    left: 200,
    behavior: "smooth",
  })
})

rightArrow.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    modalImgs.scrollBy({
      top: 0,
      left: 200,
      behavior: "smooth",
    })
  }
})

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
