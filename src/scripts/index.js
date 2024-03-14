import '../pages/index.css';

const result = document.querySelector('.calculator_result');
const form = document.forms.calculator;
const inputGender = form.elements.gender;
const inputAge = form.elements.age;
const inputHeight = form.elements.height;
const inputWeight = form.elements.weight;

form.addEventListener('submit', (evt) => handlerFormSubmit(evt));

const handlerFormSubmit = (evt) => {
  evt.preventDefault();
  const data = {};
  data.gender = inputGender.value;
  data.age = inputAge.value;
  data.height = inputHeight.value;
  data.weight = inputWeight.value;
  result.textContent = calcCalories(data)+' кал.';
}

const calcCalories = (data) => {
  if(data.gender === 'female'){
    return (10*data.weight)+(6.25*data.height)-(5*data.age)-161;
  }else{
    return (10*data.weight)+(6.25*data.height)-(5*data.age)+5;
  }
}