import '../pages/index.css';
import {clearValidation, enableValidation} from '../components/validation.js';

const result = document.querySelector('.calculator__result');
const form = document.forms.calculator;
const inputGender = form.elements.gender;
const inputAge = form.elements.age;
const inputHeight = form.elements.height;
const inputWeight = form.elements.weight;
const validConfig = {
  formSelector: '.calculator__form',
  inputSelector: '.calculator__input-number',
  submitButtonSelector: '.calculator__button-submit',
  inactiveButtonClass: 'calculator__button_disabled',
  inputErrorClass: 'calculator__input-number-error',
  errorClass: 'calculator__error_visible'
};

form.addEventListener('submit', (evt) => handlerFormSubmit(evt));

const handlerFormSubmit = (evt) => {
  evt.preventDefault();
  const data = {};
  data.gender = inputGender.value;
  data.age = inputAge.value;
  data.height = inputHeight.value;
  data.weight = inputWeight.value;
  result.textContent = Math.floor(calcCalories(data))+' кал.';
  form.reset();
  clearValidation(form, validConfig);
}

const calcCalories = (data) => {
  if(data.gender === 'female'){
    return (10*data.weight)+(6.25*data.height)-(5*data.age)-161;
  }else{
    return (10*data.weight)+(6.25*data.height)-(5*data.age)+5;
  }
}

enableValidation(validConfig);