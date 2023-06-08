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
  roomsShownText,
  userDashView,
  closeBtn,
  upcomingBookings,
  pastBookings,
} from './scripts';


const setCalendarDate = () => {
  document
  .querySelector('#calendar')
  .setAttribute('min', formatDate('calendar', Date.now()));
}

const slideBudget = (e) => {
  const targets = {
    firstSlider: leftBudgetValue,
    secondSlider: rightBudgetValue,
  };

  targets[e.target.id].innerText = e.target.value;
};

const openModal = () => {
  filterBtn.setAttribute('disabled', true);
  console.log(accountBtn);
  accountBtn.setAttribute('disabled', true);
  console.log(accountBtn.disabled);
  searchBtn.setAttribute('disabled', true);
  accountBtn.classList.add('no-click');
  searchBtn.classList.add('no-click');
  filterBtn.classList.add('no-click');
  availableRoomsView.classList.add('blur', 'no-click');
  availableRoomsView.querySelectorAll('button').forEach((btn) => {
    btn.setAttribute('disabled', true);
  });
  userDashView.classList.add('blur', 'no-click');
  filterModal.classList.add('fade-in');
  filterModal.classList.remove('hidden');
  closeBtn.focus();
};

const closeModal = () => {
  searchBtn.removeAttribute('disabled');
  accountBtn.removeAttribute('disabled');
  filterBtn.removeAttribute('disabled');
  accountBtn.classList.remove('no-click');
  searchBtn.classList.remove('no-click');
  filterBtn.classList.remove('no-click');
  availableRoomsView.classList.remove('blur', 'no-click');
  availableRoomsView.querySelectorAll('button').forEach((btn) => {
    btn.removeAttribute('disabled');
  });
  userDashView.classList.remove('blur', 'no-click');
  filterModal.classList.remove('fade-in');
  filterModal.classList.add('hidden');
};

const showDash = () => {
  filterBtn.classList.add('hidden');
  accountBtn.classList.add('hidden');
  searchBtn.classList.remove('hidden');
  availableRoomsView.classList.add('hidden');
  userDashView.classList.remove('hidden');
};

const switchToHome = () => {
  closeModal();
  filterBtn.classList.remove('hidden');
  accountBtn.classList.remove('hidden');
  searchBtn.classList.add('hidden');
  availableRoomsView.classList.remove('hidden');
  userDashView.classList.add('hidden');
};

const createSingleUserBookingHTML = (booking, rooms) => {
  const foundRoom = rooms.find((room) => room.number === booking.roomNumber);
  console.log('foundRoom', foundRoom);
  const img = foundRoom.roomType.split(' ').join('').toLowerCase();
  const date = formatDate('US', booking.date);
  let plural = '';
  if (foundRoom.numBeds > 1) {
    plural = 's';
  }
  return `
  <section class="single-room user-room">
    <img class="room-img" src="./images/${img}.png" alt="breezy plant filled hotel suite with an ocean view and wicker decor">
    <div class="room-details">
      <p class="rooom-number">Room Number: ${foundRoom.number}</p>
      <p class="room-type">Room Type: ${foundRoom.roomType}</p>
      <p class="room-beds">${foundRoom.numBeds} ${foundRoom.bedSize} sized bed${plural}</p>
      <p class="booked-date">Date: ${date}</p>
    </div>
  </section>
</section>`;
};

const createUserBookingsHTML = (userBookings, rooms) => {
  let sortedBookings = sortBookings(userBookings, Date.now())
  upcomingBookings.innerHTML = `<p class="upcoming-text">Upcoming Bookings</p>`;
  pastBookings.innerHTML = `<p class="past-text">Past Bookings</p>`;
  document.querySelector('.total-spent').innerText = `Total Spent: $${totalCost(userBookings, rooms)}`
  Array.from([upcomingBookings, pastBookings]).forEach((section) => {
    section.innerHTML += sortedBookings[section.id]
      .map((booking) => createSingleUserBookingHTML(booking, rooms))
      .join('');
  });
};

export {
  slideBudget,
  openModal,
  closeModal,
  showDash,
  switchToHome,
  createUserBookingsHTML,
  setCalendarDate
};
