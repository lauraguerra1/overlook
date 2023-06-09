// IMPORTS
import './css/styles.css';
import {
  filterRooms,
  getUserBookings,
  currentUser
} from './apicalls';

import {
  slideBudget,
  toggleModal,
  showDash,
  switchToHome,
  setCalendarDate
} from './domUpdates';

import { filterRoomsByPrice, filterRoomsByType, getAvailableRooms } from './rooms';

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
import { getDateValue } from './dates';

//GLOBAL VARIABLES
const leftSlider = document.querySelector('#min');
const rightSlider = document.querySelector('#max');
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
const modalImgs = document.querySelector('.modal-imgs');
const calendar = document.querySelector('#calendar');

//DATA MODEL 
// let currentUser = {id: 50};

// FUNCTIONS
// const updateCurrentUser = (user) => {
//   currentUser = user;
//   currentUser.budget = {
//     min: 150, 
//     max: 500
//   }
// }

const updateAvailableRooms = (data) => {
  const roomType = document.querySelector('#roomTypes')
  const date = getDateValue(calendar.value)
  const roomsByDate = getAvailableRooms(data[1].bookings, data[0].rooms, date);
  const roomsByPrice = filterRoomsByPrice(roomsByDate, currentUser.budget.min, currentUser.budget.max)
  if(roomType.value !== 'allRooms') {
    return filterRoomsByType(roomsByPrice, roomType.value)
  } else {
    return roomsByPrice
  }
}
// EVENT LISTENERS
window.addEventListener('load', () => {
  setCalendarDate()
  getUserBookings();
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
})

filterCloseBtn.addEventListener('click', () => {
  toggleModal(filterModal, 'remove', 'removeAttribute');
});

roomCloseBtn.addEventListener('click', () => {
  toggleModal(roomModal, 'remove', 'removeAttribute');
});

accountBtn.addEventListener('click', showDash);

showRoomsBtn.addEventListener('click', () => {
  if (calendar.value) {
    filterRooms()
    switchToHome()
  } else {
    console.log('calendar has no value')
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
  currentBookings,
  updateAvailableRooms,
  
  // currentUser
};
