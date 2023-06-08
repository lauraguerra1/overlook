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
  closeBtn
} from './scripts';

const slideBudget = (e) => {
  const targets = {
    firstSlider: leftBudgetValue,
    secondSlider: rightBudgetValue,
  };

  targets[e.target.id].innerText = e.target.value;
};

const openModal = () => {
  filterBtn.setAttribute('disabled', true)
  console.log(accountBtn)
  accountBtn.setAttribute('disabled', true)
  console.log(accountBtn.disabled)
  searchBtn.setAttribute('disabled', true)
  accountBtn.classList.add('no-click');
  searchBtn.classList.add('no-click');
  filterBtn.classList.add('no-click');
  availableRoomsView.classList.add('blur', 'no-click');
  availableRoomsView.querySelectorAll('button').forEach(btn => {
    btn.setAttribute('disabled', true)
  })
  userDashView.classList.add('blur', 'no-click');
  filterModal.classList.add('fade-in');
  filterModal.classList.remove('hidden');
  closeBtn.focus()
};

const closeModal = () => {
  searchBtn.removeAttribute('disabled')
  accountBtn.removeAttribute('disabled')
  filterBtn.removeAttribute('disabled')
  accountBtn.classList.remove('no-click');
  searchBtn.classList.remove('no-click');
  filterBtn.classList.remove('no-click');
  availableRoomsView.classList.remove('blur', 'no-click');
  availableRoomsView.querySelectorAll('button').forEach(btn => {
    btn.removeAttribute('disabled')
  })
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
