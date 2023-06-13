import chai from 'chai';
const assert = chai.assert;

import {
  checkDateValidity,
  checkInitialDateFormat,
  fixIntegerFormat,
  formatDate
} from '../src/dates';

describe('date', () => {
  const currentDate = 1686229866393;

  it('should return true is the date is in the future', () => {
    const validDate = checkDateValidity(currentDate, '2024/10/05');
    assert.equal(validDate, true);
  });

  it('should return true is the date is the current date', () => {
    const validDate = checkDateValidity(currentDate, '2023/06/08');
    assert.equal(validDate, true);
  });

  it('should return false if the date is in the past', () => {
    const validDate = checkDateValidity(currentDate, '2021/06/08');
    assert.equal(validDate, false);
  });

  it('should return the same integer if given an integer', () => {
    const newDate = checkInitialDateFormat(1686196800000);
    assert.equal(newDate, 1686196800000);
  });

  it('should add a 0 to single digit months and days', () => {
    const month = fixIntegerFormat('1');
    assert.deepEqual(month, '01');
  });

  it('should return the same number if given a two digit number', () => {
    const month = fixIntegerFormat('11');
    assert.deepEqual(month, '11');
  });

  it('should format a date into a US date', () => {
    const USDate = formatDate('US', '2023/06/08')
    assert.equal(USDate, '6/8/2023')
  })

  it('should format a two integer month & day date into a US date', () => {
    const USDate = formatDate('US', '2023/10/18')
    assert.equal(USDate, '10/18/2023')
  })

  it('should format a date into yyyy-mm-dd', () => {
    const calendarDate = formatDate('calendar', '2023/06/08')
    assert.equal(calendarDate, '2023-06-08')
  })

  it('should format a date into yyyy/mm/dd', () => {
    const APIDate = formatDate('API', '2023/06/08')
    assert.equal(APIDate, '2023/06/08')
  })
});
