// IMPORTS
import './css/styles.css';
import {
  submitBooking,
  currentUser,
  pageData,
  loadRooms,
  getRoomsAndBookings
} from './apicalls';

import {
  logIn,
  slideBudget,
  toggleModal,
  showDash,
  setCalendarDate,
  removeDateError,
  closeFilterModal,
  updateSelectedRoom,
  updateRoomModal,
  returnToFilter,
  changeAttribute,
  changeBtnAmount,
  logOut
} from './domUpdates';

import { filterRoomsByPrice, filterRoomsByType, getAvailableRooms } from './rooms';

import { getDateValue } from './dates';

//IMAGES
import './images/suite.png';
import './images/lotus-logo.png';
import './images/pool-side.png';
import './images/singleroom.png';
import './images/juniorsuite.png';
import './images/residentialsuite.png';
import './images/canopy.png'
import './images/yoga-room.png'
import './images/resort-area.png'
import './images/no-results.png'
import './images/500-error.png'

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
const roomModal = document.querySelector('.room-modal');
const bookingModal = document.querySelector('.booking-modal');
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
const dateError = document.querySelector('.date-error-msg');
const noResultsView = document.querySelector('.no-results-view');
const reserveBtn = document.querySelector('.reserve-room-btn');
const bookingDashBtn = document.querySelector('.booking-modal-dash-btn');
const bookingSearchBtn = document.querySelector('.booking-modal-search-btn');
const landingPage = document.querySelector('.landing-page-container');
const loginBtn = document.querySelector('.login-btn');
const errorMsg = document.querySelector('.credential-error');
const mainPage = document.querySelector('.available-rooms-container')
const loginForm = document.querySelector('.login-child')
const roomType = document.querySelector('#roomTypes');
const logOutBtn = document.querySelector('.logout-btn');

// FUNCTIONS
const updateAvailableRooms = (data) => {
  currentUser.selectedDate = getDateValue(calendar.value)
  const roomsByDate = getAvailableRooms(data[1].bookings, data[0].rooms, currentUser.selectedDate);
  const roomsByPrice = filterRoomsByPrice(roomsByDate, currentUser.budget.min, currentUser.budget.max)
  let filteredRooms = roomsByPrice;

  if(roomType.value !== 'allRooms') {
    filteredRooms = filterRoomsByType(roomsByPrice, roomType.value)
  } 

  return filteredRooms
}

// EVENT LISTENERS

window.addEventListener('load', () => {
  loadRooms()
  setCalendarDate()
});

loginBtn.addEventListener('click', logIn)

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
})

Array.from([leftSlider, rightSlider]).forEach((input) => {
  input.addEventListener('input', (e) => {
    slideBudget(e);
  });
});


Array.from([calendar, roomType, leftSlider, rightSlider]).forEach(input => {
  input.addEventListener('input', () => {
    getRoomsAndBookings(changeBtnAmount)
  })
})

Array.from([bookingSearchBtn, filterBtn, searchBtn]).forEach(btn => {
  btn.addEventListener('click', () => {
    getRoomsAndBookings(changeBtnAmount)
  })
})

filterAndSearchBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleModal(filterModal, 'add', 'setAttribute');
  });
})

filterCloseBtn.addEventListener('click', () => {
  toggleModal(filterModal, 'remove', 'removeAttribute');
  changeAttribute(userDashView.querySelectorAll('.user-room'), 'setAttribute', 'tabindex', 0)
});

roomCloseBtn.addEventListener('click', () => {
  toggleModal(roomModal, 'remove', 'removeAttribute');
});

accountBtn.addEventListener('click', showDash);

calendar.addEventListener('input', removeDateError);

showRoomsBtn.addEventListener('click', closeFilterModal);

availableRoomsView.addEventListener('click', (e) => {
  if(e.target.classList.contains('booking-btn')) {
    updateSelectedRoom(e)
    updateRoomModal()
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

reserveBtn.addEventListener('click', () => {
  submitBooking(currentUser.id, pageData.selectedRoom.APIDate, pageData.selectedRoom.room.number)
})

bookingSearchBtn.addEventListener('click', returnToFilter);
bookingDashBtn.addEventListener('click', () => {
  toggleModal(bookingModal, 'remove', 'removeAttribute')
  showDash()
});

logOutBtn.addEventListener('click', logOut)

export {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterCloseBtn,
  filterModal,
  bookingModal, 
  roomModal,
  availableRoomsView,
  userDashView,
  accountBtn,
  searchBtn,
  roomsShownText,
  userBookingSections,
  currentBookings,
  updateAvailableRooms,
  calendar,
  dateError,
  noResultsView,
  landingPage, 
  errorMsg, 
  mainPage,
  showRoomsBtn,
  logOutBtn
};
