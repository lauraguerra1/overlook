import {
  leftBudgetValue,
  rightBudgetValue,
  filterBtn,
  filterModal,
  availableRoomsView,
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
  filterBtn.classList.add('no-click');
  availableRoomsView.classList.add('blur', 'no-click');
  filterModal.classList.remove('hidden');
};

const closeModal = () => {
  filterBtn.disabled = false;
  filterBtn.classList.remove('no-click');
  availableRoomsView.classList.remove('blur', 'no-click');
  filterModal.classList.add('hidden');
};

export { slideBudget, openModal, closeModal };
