// import { sortBookings } from "./bookings"
import { createUserBookingsHTML } from "./domUpdates"

// const getSingleUser = (id) => {
//   fetch(`http://localhost:3001/api/v1/customers/${id}`)
//     .then(res => res.json())
//     .then(data => {
// console.log(data)
//       // console.log(sortBookings(data.user.bookings, Date.now()))
//     })
// }

const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
};

// const getBookingsData = () => {
//   fetch('http://localhost:3001/api/v1/bookings')
//     .then(response => response.json())
//     // .then(data => {
//     //   let userBookings = data.bookings.filter(booking => booking.userID === id)
//     //   let sortedUserBookings = sortBookings(userBookings, Date.now())
//     //   console.log(sortedUserBookings)
//     //   return sortedUserBookings
//     // })
//     .catch(error => console.error(error))
// }


// const getRoomsData = () => {
//   fetch('http://localhost:3001/api/v1/rooms')
//     .then(response => response.json())
//     .catch(error => console.error(error))
// }

const getUserBookings = (id) => {
  Promise.all([fetchAPI('rooms'), fetchAPI('bookings')])
    .then(data => {
      let userBookings = data[1].bookings.filter(booking => booking.userID === id)
      createUserBookingsHTML(userBookings, data[0].rooms)
      })
}

export {
  getUserBookings
  // getBookingsData, 
  // getRoomsData, 
  // getSingleUser
}
