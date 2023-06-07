import {leftBudgetValue, rightBudgetValue } from './scripts'

const slideBudget = (e) => {
  const targets = {
    firstSlider: leftBudgetValue,
    secondSlider: rightBudgetValue
  }
  targets[e.target.id].innerText = e.target.value;
}

export {
  slideBudget
}