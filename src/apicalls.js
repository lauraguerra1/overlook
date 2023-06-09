import { createAvailableRoomsHTML, createUserBookingsHTML, updateAvailableRoomsHTML } from "./domUpdates"
// import {currentUser} from './scripts'

let currentUser = {
  id: 50,
  budget: {
    min: 150,
    max: 500
  }
};

const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

const updateRoomsAndBookingsHTML = (data, id) => {
  let userBookings = data[1].bookings.filter(booking => booking.userID === id)
  createAvailableRoomsHTML(data[0].rooms)
  createUserBookingsHTML(userBookings, data[0].rooms)
}

const getRoomsAndBookings = (eventHandler) => {
  const id = currentUser.id
  return () => {
    Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
    .then(data => {
      eventHandler(data, id)
    })
    .catch((err) => console.error(err))
  }
}

const filterRooms = getRoomsAndBookings(updateAvailableRoomsHTML)

const getUserBookings = getRoomsAndBookings(updateRoomsAndBookingsHTML)

// const getUserBookings = (id) => {
//   Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
//     .then(data => {
//       let userBookings = data[1].bookings.filter(booking => booking.userID === id)
//       createAvailableRoomsHTML(data[0].rooms)
//       createUserBookingsHTML(userBookings, data[0].rooms)
//     })
//     .catch((err) => console.error(err))

// }

export { getUserBookings, filterRooms }
