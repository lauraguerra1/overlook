import { totalCost, sortBookings, sortSections } from './bookings';
import { formatDate, checkDateValidity } from './dates';
import {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterCloseBtn,
  filterModal,
  availableRoomsView,
  accountBtn,
  searchBtn,
  userDashView,
  userBookingSections,
  currentBookings,
  updateAvailableRooms,
  calendar,
  dateError,
  noResultsView,
  roomModal, 
  bookingModal
} from './scripts';

import { currentUser, filterRooms, pageData } from './apicalls';

const formatRoomType = room => room.roomType.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

const setCalendarDate = () => {
  document
    .querySelector('#calendar')
    .setAttribute('min', formatDate('calendar', Date.now()));
};

const removeDateError = () => {
  if(checkDateValidity(Date.now(), calendar.value)) {
    changeClass([calendar], 'remove', ['error']);
    changeClass([dateError], 'add', ['hidden']);
  }
}

const slideBudget = (e) => {
  const targets = {
    min: leftBudgetValue,
    max: rightBudgetValue,
  };
  currentUser.budget[e.target.id] = e.target.value
  targets[e.target.id].innerText = currentUser.budget[e.target.id];
};

const changeClass = (elements, change, classes) => {
  elements.forEach((element) => {
    classes.forEach((item) => {
      element.classList[change](item);
    });
  });
};

const changeAttribute = (elements, change, attribute, boolean) => {
  elements.forEach((element) => {
    element[change](attribute, boolean);
  });
};

const toggleModal = (modal, changeOption, attributeOption) => {
  changeClass([accountBtn, searchBtn, filterBtn], changeOption, ['no-click']);
  changeClass([availableRoomsView, userDashView, noResultsView], changeOption, ['blur', 'no-click',]);
  changeAttribute([filterBtn, accountBtn, searchBtn], attributeOption, 'disabled', true);
  changeAttribute(availableRoomsView.querySelectorAll('.booking-btn'), attributeOption, 'disabled', true);
  if (modal !== bookingModal) {
    modal.classList.toggle('fade-in');
  }
  modal.classList.toggle('hidden');
  filterCloseBtn.classList.remove('hidden');
  changeAttribute(userDashView.querySelectorAll('.user-room'), 'removeAttribute', 'tabindex', 0)
};

const showDash = () => {
  changeClass([filterBtn, accountBtn, searchBtn, availableRoomsView, noResultsView], 'add', ['hidden'])
  changeClass([searchBtn, userDashView], 'remove', ['hidden'])
  changeAttribute(userDashView.querySelectorAll('.user-room'), 'setAttribute', 'tabindex', 0)
};

const switchToHome = () => {
  toggleModal(filterModal, 'remove', 'removeAttribute');
  changeClass([filterBtn, accountBtn, searchBtn, availableRoomsView], 'remove', ['hidden'])
  changeClass([searchBtn, userDashView], 'add', ['hidden'])
};

const closeFilterModal = () => {
  if (calendar.value && checkDateValidity(Date.now(), calendar.value)) {
    filterRooms()
    switchToHome()
  } else {
    dateError.classList.remove('hidden')
    calendar.classList.add('error')
  }
}

const getAltText = (img) => {
  const altOptions = {
    residentialsuite:'open floor plan hotel suite with an outdoor patio, ocean view and blue decor',
    juniorsuite: 'modern hotel suite with an ocean view and small living room',
    singleroom:'breezy plant filled hotel room with an ocean view and wicker decor',
    suite:'suite with an ocean view, small desk, and comfortable chaise',
  };

  return altOptions[img];
};

const createCardInfo = (booking, rooms, i, array) => {
  const foundRoom = rooms.find((room) => room.number === booking.roomNumber);
  const img = foundRoom.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  const date = formatDate('US', booking.date);
  let plural = '';
  let roomLast = ''; 

  if (foundRoom.numBeds > 1) {
    plural = 's';
  }

  if(i === array.length - 1) {
    roomLast = 'last-room'
  }

  return { foundRoom, img, alt, date, plural, roomLast};
};

const createSingleRoomInfo = (room, i, array) => {
  const img = room.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  let plural = '';
  let roomLast = '';

  if (room.numBeds > 1) {
    plural = 's';
  }

  if(i === array?.length - 1) {
    roomLast = 'last-room'
  }

  return { img, alt, plural, roomLast }
}

const createSingleRoomHTML = (room, i, array) => {
  const info = createSingleRoomInfo(room, i, array);

  return `
  <section class="single-room ${info.roomLast}" id="${room.number}">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${room.number}</p>
      <p class="room-type">Room Type: ${formatRoomType(room)}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight.toFixed(2)}</p>
      <p class="room-beds">${room.numBeds} ${room.bedSize} sized bed${info.plural}</p>
    </div>
    <button class="btn booking-btn">
      Book Now
    </button>
  </section>`;
}

const createSingleUserBookingHTML = (booking, rooms, i, array) => {
  const info = createCardInfo(booking, rooms, i, array);

  return `
  <section tabindex="0" class="single-room user-room ${info.roomLast}">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${info.foundRoom.number}</p>
      <p class="room-type">Room Type: ${formatRoomType(info.foundRoom)}</p>
      <p class="room-beds">${info.foundRoom.numBeds} ${info.foundRoom.bedSize} sized bed${info.plural}</p>
      <p class="booked-date">Date: ${info.date}</p>
    </div>
  </section>
</section>`;
};

const addTitleToSections = () => {
  userBookingSections.forEach((section) => {
    const formattedTitle =
      section.id.charAt(0).toUpperCase() +
      section.id.split('').slice(1).join('');
    section.innerHTML = `<p class="${section.id}-text">${formattedTitle} Bookings</p>`;
  });
};

const createUserBookingsHTML = (userBookings, rooms) => {
  let separatedBookings = sortBookings(userBookings, Date.now());
  const sortedBookings = sortSections(separatedBookings, Date.now());

  document.querySelector('.total-spent').innerText = `Total Spent: $${totalCost(userBookings,rooms)}`;
  addTitleToSections();

  userBookingSections.forEach((section) => {
    section.innerHTML += sortedBookings[section.id]
      .map((booking, i, array) => createSingleUserBookingHTML(booking, rooms, i, array))
      .join('');
  });

  if (!sortedBookings.current.length) {
    currentBookings.innerHTML = '';
    currentBookings.classList.add('hidden');
  }
};

const createAvailableRoomsHTML = rooms => {
  if(rooms.length) {
    noResultsView.classList.add('hidden')
    availableRoomsView.innerHTML = `<p class="rooms-shown-txt">Showing <span class="rooms-avail-amt">${rooms.length}</span> Available Rooms:</p>`
    rooms.forEach((room, i, array) => {
      availableRoomsView.innerHTML += createSingleRoomHTML(room, i, array);
    })
  } else {
    availableRoomsView.classList.add('hidden')
    noResultsView.classList.remove('hidden')
  }
}

const updateAvailableRoomsHTML = (data) => {
  const availableRooms = updateAvailableRooms(data);
  createAvailableRoomsHTML(availableRooms)

}

const updateBookingsHTML = (data, id) => {
  let userBookings = data[1].bookings.filter(booking => booking.userID === id)
  createUserBookingsHTML(userBookings, data[0].rooms)
}

const updateSelectedRoom = (e) => {
  const roomID = e.target.closest('.single-room').id
  pageData.selectedRoom = {
    room: pageData.allRooms.find(currentRoom => currentRoom.number.toString() === roomID),
    get info() {
      return createSingleRoomInfo(this.room)
    },
    USDate: formatDate('US', currentUser.selectedDate),
    APIDate: formatDate('API', currentUser.selectedDate)
  }
}

const updateRoomModal = () => {
  const room = pageData.selectedRoom.room;
  const info = pageData.selectedRoom.info;
  document.querySelector('.modal-description').innerText = `${formatRoomType(room)} with ${room.numBeds} ${room.bedSize} bed${info.plural}`
  document.querySelector('.room-price').innerText = room.costPerNight.toFixed(2)
  document.querySelector('.selected-date').innerText = pageData.selectedRoom.USDate
  document.querySelector('.modal-room-img').src = `./images/${info.img}.png`;
  document.querySelector('.modal-room-img').alt = info.alt;
}

const showConfirmation = (confirmation) => {
  document.querySelector('.confirmation').innerText = confirmation.id;
  changeClass([roomModal], 'add', ['hidden'])
  changeClass([bookingModal], 'remove', ['hidden'])
}

const returnToFilter = () => {
  changeClass([bookingModal, filterModal, filterCloseBtn], 'toggle', ['hidden'])
}

export {
  slideBudget,
  toggleModal,
  showDash,
  switchToHome,
  createUserBookingsHTML,
  createAvailableRoomsHTML,
  setCalendarDate,
  updateAvailableRoomsHTML,
  updateBookingsHTML,
  removeDateError,
  closeFilterModal,
  updateSelectedRoom,
  updateRoomModal,
  showConfirmation,
  returnToFilter,
  changeAttribute
};
