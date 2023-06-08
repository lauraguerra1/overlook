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

const checkInitialDateFormat = date => {
  let udpatedDate = date;
  if(date.toString().includes('/')) {
    udpatedDate = getDateValue(date)
  }

  return udpatedDate;
}

const fixIntegerFormat = date => {
  let setDate = date
  if (date.length !== 2) {
    setDate = `0${date}`
  }

  return setDate;
}

const formatDate = (formatType, date) => {
  const udpatedDate = checkInitialDateFormat(date);

  const month = new Date(udpatedDate).getMonth() + 1;
  const setMonth = fixIntegerFormat(month);

  const day = new Date(udpatedDate).getDate();
  const setDay = fixIntegerFormat(day); 

  const year = new Date(udpatedDate).getFullYear();

  const dates = {
    'US': `${month}/${day}/${year}`,
    'calendar': `${year}-${setMonth}-${setDay}`, 
    'API': `${year}/${setMonth}/${setDay}`,
  } 
 
  return dates[formatType];
}

export {getDateValue, checkDateValidity, formatDate}