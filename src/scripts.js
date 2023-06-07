// IMPORTS
import './css/styles.css';
import { getBookingsData, getRoomsData } from './apicalls';
import { slideBudget, openModal, closeModal } from './domUpdates';

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
const filterModal = document.querySelector('.filter-modal');
const availableRoomsView = document.querySelector('.available-rooms-view');

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
    openModal()
  }
})
closeBtn.addEventListener('click', closeModal)
closeBtn.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    closeModal()
  }
})
export { leftBudgetValue, rightBudgetValue, filterBtn, filterModal, availableRoomsView };
