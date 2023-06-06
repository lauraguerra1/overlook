// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { getBookingsData, getRoomsData } from './apicalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/cabana-room.png'
import './images/lotus-logo-b.png'
import './images/pool-side.png'
import './images/ocean-view.png'


console.log('This is the JavaScript entry file - your code begins here.');
window.addEventListener('load', () => {
  getRoomsData()
  getBookingsData()
})