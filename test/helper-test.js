import chai from 'chai';
const assert = chai.assert;

import { checkDateValidity, getDateValue } from '../src/helpers';

describe('date', () => {
  const currentDate = 1686229866393
  it('should return a date value with hours set to zero', () => {
    const newDate = getDateValue('2023/06/08')
    assert.equal(newDate, 1686196800000)
  });

  it('should return a date value for a different date', () => {
    const newDate = getDateValue('2021/12/10')
    assert.equal(newDate, 1639112400000)
  });

  it('should return true is the date is in the future', () => {
    const validDate = checkDateValidity(currentDate, '2024/10/05')
    assert.equal(validDate, true)
  });

  it('should return true is the date is the current date', () => {
    const validDate = checkDateValidity(currentDate, '2023/06/08')
    assert.equal(validDate, true)
  });

  it('should return false if the date is in the past', () => {
    const validDate = checkDateValidity(currentDate, '2021/06/08')
    assert.equal(validDate, false)
  })
});
