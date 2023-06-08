const getDateValue = date => {
  const dateValues = date.split('/');
  const fullDate = new Date(dateValues[0], dateValues[1]- 1, dateValues[2]).setHours(0,0,0,0)
  return fullDate
}

const checkDateValidity = (currDate, bookingDate) => {
  const currentDate = new Date(currDate).setHours(0,0,0,0)
  const attemptedDate = getDateValue(bookingDate)
  if (currentDate <= attemptedDate) {
    return true
  } else {
    return false
  }
}
export {getDateValue, checkDateValidity}