import { getDateValue } from './dates';

const sortBookings = (bookings, date) => {
  let currentDate = new Date(date).setHours(0, 0, 0, 0);
  return {
    past: bookings.filter((booking) => getDateValue(booking.date) < currentDate),
    upcoming: bookings.filter((booking) => getDateValue(booking.date) > currentDate),
    current: bookings.filter((booking) => getDateValue(booking.date) === currentDate),
  };
};

const sortBookingsByDate = (bookings, currentDate) => {
  const updatedBookings = bookings.map(booking => {
    const diff = currentDate - getDateValue(booking.date);
    return {booking, diff}
  })
  const bookingsToSort = JSON.parse(JSON.stringify(updatedBookings))
  return bookingsToSort.sort((a,b) => {
    return b.diff - a.diff
  })
  .map(booking => booking.booking)
}

const sortSections = (userBookings, currentDate) => {
  return Object.keys(userBookings).reduce((bookings, curr) => {
    const newBookings = sortBookingsByDate(userBookings[curr], currentDate)
    if (curr === 'past') {
      newBookings.reverse()
    }
    bookings[curr] = newBookings
    return bookings
  }, {})
}

const totalCost = (bookings, rooms) => {
  let bookedRooms = bookings.map((booking) => {
    return rooms.find((room) => room.number === booking.roomNumber);
  });

  return bookedRooms
    .reduce((total, curr) => (total += curr.costPerNight), 0)
    .toFixed(2);
};

export { sortBookings, totalCost, sortBookingsByDate, sortSections };
