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
} from './scripts';

const slideBudget = (e) => {
  const targets = {
    firstSlider: leftBudgetValue,
    secondSlider: rightBudgetValue,
  };

  targets[e.target.id].innerText = e.target.value;
};

const openModal = () => {
  filterBtn.disabled = true;
  accountBtn.disbaled = true;
  searchBtn.disabled = true
  accountBtn.classList.add('no-click');
  searchBtn.classList.add('no-click');
  filterBtn.classList.add('no-click');
  availableRoomsView.classList.add('blur', 'no-click');
  userDashView.classList.add('blur', 'no-click');
  filterModal.classList.add('fade-in');
  filterModal.classList.remove('hidden');
};

const closeModal = () => {
  filterBtn.disabled = false;
  accountBtn.disbaled = false;
  searchBtn.disabled = false;
  accountBtn.classList.remove('no-click');
  searchBtn.classList.remove('no-click');
  filterBtn.classList.remove('no-click');
  availableRoomsView.classList.remove('blur', 'no-click');
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
  userDashView.classList.add('hidden')
}

export { slideBudget, openModal, closeModal, showDash, switchToHome };
