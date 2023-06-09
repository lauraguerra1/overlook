import { getDateValue } from "./dates"

const getAvailableRooms = (bookings, rooms, date) => {
  const bookingsOnDate = bookings.filter((booking) => getDateValue(booking.date) === date)
  const bookedRooms = bookingsOnDate.map(booking => rooms.find(room => room.number === booking.roomNumber))
  const availableRooms = rooms.filter(room => !bookedRooms.includes(room))
  return availableRooms;
}

const filterRoomsByType = (rooms, type) => {
  return rooms.filter(room => room.roomType === type)
}

const filterRoomsByPrice = (rooms, min, max) => {
  return rooms.filter(room => room.costPerNight >= min && room.costPerNight <= max)
}

export {
  getAvailableRooms,
  filterRoomsByType, 
  filterRoomsByPrice
}