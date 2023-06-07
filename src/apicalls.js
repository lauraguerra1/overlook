
const getBookingsData = () => {
  fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(data => console.log(data.bookings.sort((a,b) => a.date - b.date)))
    .catch(error => console.error(error))
}


const getRoomsData = () => {
  fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(data => console.log(data.rooms))
    .catch(error => console.error(error))
}

export {getBookingsData, getRoomsData}
