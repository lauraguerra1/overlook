import { getDateValue } from './dates';

const sortBookings = (bookings, date) => {
  let currentDate = new Date(date).setHours(0, 0, 0, 0);
  return {
    past: bookings.filter(
      (booking) => getDateValue(booking.date) < currentDate
    ),
    upcoming: bookings.filter(
      (booking) => getDateValue(booking.date) > currentDate
    ),
    current: bookings.filter(
      (booking) => getDateValue(booking.date) === currentDate
    ),
  };
};

const totalCost = (bookings, rooms) => {
  let bookedRooms = bookings.map((booking) => {
    return rooms.find((room) => room.number === booking.roomNumber);
  });

  return bookedRooms
    .reduce((total, curr) => (total += curr.costPerNight), 0)
    .toFixed(2);
};

export { sortBookings, totalCost };
