import {
  showConfirmation,
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

const submitBooking = (userID, date, roomNumber) => {
  const data = { userID, date, roomNumber }
  fetchAPI('bookings', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((data) => {
      showConfirmation(data.newBooking)
      console.log(data.newBooking)
      getUserBookings()
    })
    .catch(error => console.error(error))
}

const fetchAPI = (dataType, options) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`, options)
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

export { getUserBookings, filterRooms, loadRooms, submitBooking, currentUser, pageData };
