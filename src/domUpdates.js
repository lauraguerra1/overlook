import { totalCost, sortBookings } from './bookings';
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

const toggleModal = (changeOption, attributeOption) => {
  changeClass([accountBtn, searchBtn, filterBtn], changeOption, ['no-click']);
  changeClass([availableRoomsView, userDashView], changeOption, ['blur', 'no-click',]);
  changeAttribute([filterBtn, accountBtn, searchBtn], attributeOption, 'disabled', true);
  changeAttribute(availableRoomsView.querySelectorAll('button'), attributeOption, 'disabled', true);
  filterModal.classList.toggle('fade-in');
  filterModal.classList.toggle('hidden');
};

const showDash = () => {
  filterBtn.classList.add('hidden');
  accountBtn.classList.add('hidden');
  searchBtn.classList.remove('hidden');
  availableRoomsView.classList.add('hidden');
  userDashView.classList.remove('hidden');
};

const switchToHome = () => {
  toggleModal('remove', 'removeAttribute');
  filterBtn.classList.remove('hidden');
  accountBtn.classList.remove('hidden');
  searchBtn.classList.add('hidden');
  availableRoomsView.classList.remove('hidden');
  userDashView.classList.add('hidden');
};

const getAltText = (img) => {
  const altOptions = {
    residentialsuite:
      'open floor plan hotel suite with an outdoor patio, ocean view and blue decor',
    juniorsuite: 'modern hotel suite with an ocean view and small living room',
    suite:
      'breezy plant filled hotel suite with an ocean view and wicker decor',
    singleroom:
      'single hotel room with an ocean view, small desk, and comfortable chaise',
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

const createUserBookingsHTML = (userBookings, rooms) => {
  let sortedBookings = sortBookings(userBookings, Date.now());
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

export {
  slideBudget,
  toggleModal,
  showDash,
  switchToHome,
  createUserBookingsHTML,
  setCalendarDate,
};
