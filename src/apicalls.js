import {
  showConfirmation,
  updateAvailableRoomsHTML,
  updateBookingsHTML,
} from './domUpdates';

// import { allRooms } from './scripts';
let pageData = {
  allRooms: [],
  selectedRoom: {},
};

let currentUser = {
  budget: {
    min: 150,
    max: 500,
  },
};

// let allRooms = [];
const loadRooms = () => {
  fetchAPI('rooms').then((data) => {
    pageData.allRooms = data.rooms;
  });
};

const submitBooking = (userID, date, roomNumber) => {
  const data = { userID, date, roomNumber };
  fetchAPI('bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => {
      showConfirmation(data.newBooking);
      getRoomsAndBookings(updateBookingsHTML);
    })
    .catch(() => alert(`We failed to connect to the server. Please refresh.`));
};

const fetchAPI = (dataType, options) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`, options)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      document
        .querySelectorAll('.main-container')
        .forEach((view) => view.classList.add('hidden'));
      document.querySelector('.error-page').classList.remove('hidden');
    });
};

const getRoomsAndBookings = (eventHandler) => {
  const id = currentUser.id;
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
    .then((data) => {
      eventHandler(data, id);
    })
    .catch(() => {
      document
        .querySelectorAll('.main-container')
        .forEach((view) => view.classList.add('hidden'));
      document.querySelector('.error-page').classList.remove('hidden');
    });
};

export { getRoomsAndBookings, loadRooms, submitBooking, currentUser, pageData };
