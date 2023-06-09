import { totalCost, sortBookings, sortSections } from './bookings';
import { formatDate } from './dates';
import {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterModal,
  availableRoomsView,
  accountBtn,
  searchBtn,
  userDashView,
  userBookingSections,
  currentBookings,
  updateAvailableRooms,
  
} from './scripts';

const setCalendarDate = () => {
  document
    .querySelector('#calendar')
    .setAttribute('min', formatDate('calendar', Date.now()));
};

const slideBudget = (e) => {
  const targets = {
    firstSlider: leftBudgetValue,
    secondSlider: rightBudgetValue,
  };

  targets[e.target.id].innerText = e.target.value;
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
  changeClass([availableRoomsView, userDashView], changeOption, ['blur', 'no-click',]);
  changeAttribute([filterBtn, accountBtn, searchBtn], attributeOption, 'disabled', true);
  changeAttribute(availableRoomsView.querySelectorAll('.booking-btn'), attributeOption, 'disabled', true);
  modal.classList.toggle('fade-in');
  modal.classList.toggle('hidden');
};

const showDash = () => {
  filterBtn.classList.add('hidden');
  accountBtn.classList.add('hidden');
  searchBtn.classList.remove('hidden');
  availableRoomsView.classList.add('hidden');
  userDashView.classList.remove('hidden');
};

const switchToHome = () => {
  toggleModal(filterModal, 'remove', 'removeAttribute');
  filterBtn.classList.remove('hidden');
  accountBtn.classList.remove('hidden');
  searchBtn.classList.add('hidden');
  availableRoomsView.classList.remove('hidden');
  userDashView.classList.add('hidden');
};

const getAltText = (img) => {
  const altOptions = {
    residentialsuite:'open floor plan hotel suite with an outdoor patio, ocean view and blue decor',
    juniorsuite: 'modern hotel suite with an ocean view and small living room',
    suite:'breezy plant filled hotel suite with an ocean view and wicker decor',
    singleroom:'single hotel room with an ocean view, small desk, and comfortable chaise',
  };

  return altOptions[img];
};

const createCardInfo = (booking, rooms) => {
  const foundRoom = rooms.find((room) => room.number === booking.roomNumber);
  const img = foundRoom.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  const date = formatDate('US', booking.date);
  let plural = '';
  if (foundRoom.numBeds > 1) {
    plural = 's';
  }

  return { foundRoom, img, alt, date, plural };
};

const createSingleRoomInfo = room => {
  const img = room.roomType.split(' ').join('').toLowerCase();
  const alt = getAltText(img);
  let plural = '';
  if (room.numBeds > 1) {
    plural = 's';
  }

  return { img, alt, plural }
}

const createSingleRoomHTML = (room) => {
  const info = createSingleRoomInfo(room);

  return `
  <section class="single-room" id:"${room.number}">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${room.number}</p>
      <p class="room-type">Room Type: ${room.roomType}</p>
      <p class="room-cost">Cost Per Night: $${room.costPerNight.toFixed(2)}</p>
      <p class="room-beds">${room.numBeds} ${room.bedSize} sized bed${info.plural}</p>
    </div>
    <button class="btn booking-btn">
      Book Now
    </button>
  </section>`;
}

const createSingleUserBookingHTML = (booking, rooms) => {
  const info = createCardInfo(booking, rooms);

  return `
  <section class="single-room user-room">
    <img class="room-img" src="./images/${info.img}.png" alt="${info.alt}">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${info.foundRoom.number}</p>
      <p class="room-type">Room Type: ${info.foundRoom.roomType}</p>
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
// const sortSections = (userBookings, currentDate) => {
//   return Object.keys(userBookings).reduce((bookings, curr) => {
//     const newBookings = sortBookingsByDate(userBookings[curr], currentDate)
//     if (curr === 'past') {
//       newBookings.reverse()
//     }
//     bookings[curr] = newBookings
//     return bookings
//   }, {})
// }

const createUserBookingsHTML = (userBookings, rooms) => {
  let separatedBookings = sortBookings(userBookings, Date.now());
  const sortedBookings = sortSections(separatedBookings, Date.now());

  document.querySelector('.total-spent').innerText = `Total Spent: $${totalCost(userBookings,rooms)}`;
  addTitleToSections();

  userBookingSections.forEach((section) => {
    section.innerHTML += sortedBookings[section.id]
      .map((booking) => createSingleUserBookingHTML(booking, rooms))
      .join('');
  });

  if (!sortedBookings.current.length) {
    currentBookings.innerHTML = '';
    currentBookings.classList.add('hidden');
  }
};

const createAvailableRoomsHTML = rooms => {
  availableRoomsView.innerHTML = `<p class="rooms-shown-txt">Showing <span class="rooms-avail-amt">${rooms.length}</span> Available Rooms:</p>`
  rooms.forEach(room => {
    availableRoomsView.innerHTML += createSingleRoomHTML(room);
  })
}

const updateAvailableRoomsHTML = (data) => {
 
  const availableRooms = updateAvailableRooms(data);
  createAvailableRoomsHTML(availableRooms)

}

export {
  slideBudget,
  toggleModal,
  showDash,
  switchToHome,
  createUserBookingsHTML,
  createAvailableRoomsHTML,
  setCalendarDate,
  updateAvailableRoomsHTML
};
