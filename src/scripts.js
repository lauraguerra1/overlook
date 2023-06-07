// IMPORTS
import './css/styles.css';
import { getBookingsData, getRoomsData } from './apicalls';
import { slideBudget } from './domUpdates'

//IMAGES
import './images/cabana-room.png'
import './images/lotus-logo-b.png'
import './images/pool-side.png'
import './images/ocean-view.png'

//GLOBAL VARIABLES 
const leftSlider = document.querySelector('#firstSlider')
const rightSlider = document.querySelector('#secondSlider')
const leftBudgetValue = document.querySelector('.value1')
const rightBudgetValue = document.querySelector('.value2')


// EVENT LISTENERS 
window.addEventListener('load', () => {
  getRoomsData()
  getBookingsData()
  // console.log(leftSlider, rightSlider)
})

Array.from([leftSlider, rightSlider]).forEach(input => {
  console.log(input)
  input.addEventListener('input', (e) => {slideBudget(e)})
})

export {
  leftBudgetValue,
  rightBudgetValue
}