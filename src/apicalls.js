import { createAvailableRoomsHTML, createUserBookingsHTML } from "./domUpdates"

const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

const getUserBookings = (id) => {
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
    .then(data => {
      let userBookings = data[1].bookings.filter(booking => booking.userID === id)
      createAvailableRoomsHTML(data[0].rooms)
      createUserBookingsHTML(userBookings, data[0].rooms)
    })
    .catch((err) => console.error(err))

}

export { getUserBookings }
