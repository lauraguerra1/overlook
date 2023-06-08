import chai from 'chai';
const assert = chai.assert;
import { sampleData } from '../src/sample-data';
import { sortBookings, totalCost } from '../src/bookings';
import { getDateValue } from '../src/dates';

describe('bookings', () => {
  const sampleBookings = sampleData.bookings;
  const sampleRooms = sampleData.rooms
  it('should sort bookings into past, upcoming, and current', () => {
    const currentDate = getDateValue('2023/06/08');
    const bookings = sortBookings(sampleBookings, currentDate);
    assert.deepEqual(bookings.past, [
      sampleBookings[1],
      sampleBookings[2],
      sampleBookings[3],
      sampleBookings[4],
    ]);
    assert.deepEqual(bookings.upcoming, [sampleBookings[5]]);
    assert.deepEqual(bookings.current, [sampleBookings[0]]);
  });

  it('should return an empty current array when there is no current cooking', () => {
    const currentDate = getDateValue('2023/06/05');
    const bookings = sortBookings(sampleBookings, currentDate);
    assert.deepEqual(bookings.past, [
      sampleBookings[1],
      sampleBookings[2],
      sampleBookings[3],
      sampleBookings[4],
    ]);
    assert.deepEqual(bookings.upcoming, [sampleBookings[0], sampleBookings[5]]);
    assert.deepEqual(bookings.current, []);
  });

  it('should return an empty past array when there are no past bookings', () => {
    const currentDate = getDateValue('2019/06/08');
    const bookings = sortBookings(sampleBookings, currentDate);
    assert.deepEqual(bookings.past, []);
    assert.deepEqual(bookings.upcoming, sampleBookings);
    assert.deepEqual(bookings.current, []);
  });

  it('should return an empty upcoming array when there are no upcoming bookings', () => {
    const currentDate = getDateValue('2024/06/08');
    const bookings = sortBookings(sampleBookings, currentDate);
    assert.deepEqual(bookings.past, sampleBookings);
    assert.deepEqual(bookings.upcoming, []);
    assert.deepEqual(bookings.current, []);
  });

  it('should find the total cost of bookings', () => {
    const cost = totalCost(sampleBookings, sampleRooms);
    assert.equal(cost, 2493.55)
  })

  it('should find the total cost of a single booking', () => {
    const cost = totalCost([sampleBookings[0]], sampleRooms);
    assert.equal(cost, 358.40)
  })

  it('should find the total cost of a free booking', () => {
    const cost = totalCost([{roomNumber: 10}], [{number: 10, costPerNight: 0}]);
    assert.equal(cost, 0.00)
  })
});

