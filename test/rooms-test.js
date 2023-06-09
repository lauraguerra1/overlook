import chai from 'chai';
const assert = chai.assert;

import { getAvailableRooms, filterRoomsByType, filterRoomsByPrice } from '../src/rooms';
import { getDateValue } from '../src/dates';
import { sampleData } from '../src/sample-data';

describe('rooms', () => {
  let sampleRooms = sampleData.rooms
  let sampleBookings = sampleData.bookings
  const bookingDate = getDateValue('2023/06/08');
  it('should get available rooms', () => {
    // const bookingDate = getDateValue('2023/06/08');
    const availableRooms = getAvailableRooms(sampleBookings, sampleRooms, bookingDate)
    assert.deepEqual(availableRooms, [sampleRooms[1], sampleRooms[2], sampleRooms[3], sampleRooms[4], sampleRooms[5]])
  });

  it('should return all rooms if there are no bookings on the specified date', () => {
    const bookingDate = getDateValue('2024/06/08');
    const availableRooms = getAvailableRooms(sampleBookings, sampleRooms, bookingDate)
    assert.deepEqual(availableRooms, sampleRooms)
  });

  it('should return no rooms if all rooms are booked', () => {
    const simpleBookings = [{date: '2023/06/08', roomNumber: 1}, {date: '2023/06/08', roomNumber: 2}];
    const bookedRooms = [{number: 1}, {number: 2}]
    const availableRooms = getAvailableRooms(simpleBookings, bookedRooms, bookingDate)
    assert.deepEqual(availableRooms, [])
  });

  it('should return all rooms within if the price range covers all rooms', () => {
    const rooms = filterRoomsByPrice(sampleRooms, 150, 500);
    assert.deepEqual(rooms, sampleRooms)
  });

  it('should return only some rooms within a smaller price range', () => {
    const rooms = filterRoomsByPrice(sampleRooms, 300, 400);
    assert.deepEqual(rooms, [sampleRooms[0], sampleRooms[4], sampleRooms[5]])
  });

  it('should return no rooms if there are none within the price range', () => {
    const rooms = filterRoomsByPrice(sampleRooms, 100, 200);
    assert.deepEqual(rooms, [])
  });

  it('should return all rooms of a specific type', () => {
    const roomsByType = filterRoomsByType(sampleRooms, 'suite')
    assert.deepEqual(roomsByType, [sampleRooms[1]])
  });

  it('should return all rooms of a different type', () => {
    const roomsByType = filterRoomsByType(sampleRooms, 'single room')
    assert.deepEqual(roomsByType, [sampleRooms[2], sampleRooms[3], sampleRooms[4]])
  });

  it('should return no rooms if there are no rooms of that type', () => {
    const roomsByType = filterRoomsByType(sampleRooms, 'honeymoon suite')
    assert.deepEqual(roomsByType, [])
  });
})