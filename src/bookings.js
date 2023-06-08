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

export { sortBookings };
