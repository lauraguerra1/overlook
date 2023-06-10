import {
  updateAvailableRoomsHTML,
  updateBookingsHTML,
} from './domUpdates';

// import { allRooms } from './scripts';
let pageData = {
  allRooms: [],
  selectedRoom: {}
}

let currentUser = {
  id: 50,
  budget: {
    min: 150,
    max: 500,
  }
};


// let allRooms = [];
const loadRooms = () => {
  fetchAPI('rooms')
    .then(data => {
      pageData.allRooms = data.rooms
    })
}

const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

const getRoomsAndBookings = (eventHandler) => {
  const id = currentUser.id;
  return () => {
    Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
      .then((data) => {
        eventHandler(data, id);
      })
      .catch((err) => console.error(err));
  };
};

const filterRooms = getRoomsAndBookings(updateAvailableRoomsHTML);

const getUserBookings = getRoomsAndBookings(updateBookingsHTML);

export { getUserBookings, filterRooms, loadRooms, currentUser, pageData };
