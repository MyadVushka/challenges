const inputFrom = document.querySelector('#cardNumberGeneral');
const inputTo = document.querySelector('.cardnumber');
const nameFrom = document.querySelector('#nameSurnameFrom');
const nameTo = document.querySelector('.nameSurname');
const dateTo = document.querySelector('.date');
const dateFrom = document.querySelectorAll('.input.second');
const cvvCardFrom = document.querySelector('.input.third');
const cvvCardTo = document.querySelector('.cvvInputCard');
const confirmButton = document.querySelector('.confirmButton');
const secondScreen = document.querySelector('#wrapper__right2');
const firstScreen = document.querySelector('#wrapper__right1');
const mistakes = document.querySelectorAll('.mistake');

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function transferInputs() {

  let formatedInput = '';

  for (let i = 0; i < inputFrom.value.length; i++) {
    i % 4 == 0 ? formatedInput += ' ' + inputFrom.value[i] : formatedInput += inputFrom.value[i]; 
  }

  inputTo.value = formatedInput;
}

function nameTransferInputs() {
  nameTo.value = (nameFrom.value).toUpperCase();
}

function dateTransferInputs() {

  let formatedDate = '';

  const monthValue = dateFrom[0].value;
  const yearValue = dateFrom[1].value;

  if (monthValue.length === 2) {
    formatedDate += monthValue + '/';
  }
  else {
    formatedDate += monthValue;
  }

  formatedDate += yearValue;

  dateTo.value = formatedDate;

}

function cvvTransferInput() {
  cvvCardTo.value = cvvCardFrom.value;
}

inputFrom.addEventListener('input', transferInputs);
nameFrom.addEventListener('input', nameTransferInputs);
cvvCardFrom.addEventListener('input', cvvTransferInput);

for (let i = 0; i < dateFrom.length; i++) {
  dateFrom[i].addEventListener('input', dateTransferInputs);
}

function brushForms(arg1, arg2, flag) {
  if (flag == 0) {
    arg1.innerText = "Can't be blank";
    arg2.style.borderColor = 'rgb(182, 46, 46)';
    setTimeout(() => {
      arg1.innerText = '';
      arg2.style.borderColor = 'grey';
    }, 1500)
  }
  else {
    arg1.innerText = 'Wrong format, numbers only';
    arg2.style.borderColor = 'rgb(182, 46, 46)';
    setTimeout(() => {
      arg1.innerText = '';
      arg2.style.borderColor = 'grey';
    }, 1500);
  }
}

function nameValidation() {
  if (nameFrom.value.length === 0) {
    brushForms(mistakes[0], nameFrom, 0);
    return false;
  }
  return true;
}

function numberValidation() {
  let regExp = /[a-zA-Z]/g;

  if (inputFrom.value.length === 0) {
    brushForms(mistakes[1], inputFrom, 0);
    return false;
  }
  else if (regExp.test(inputFrom.value)) {
    brushForms(mistakes[1], inputFrom, 1);
    return false;
  }
  return true;
}

function dateValidation() {
  let res = true;

  if (dateFrom[0].value.length == 0) {
    brushForms(mistakes[2], dateFrom[0], 0);
    res = false;
  }
  if (dateFrom[1].value.length == 0) {
    brushForms(mistakes[2], dateFrom[1], 0);
    res = false;
  }
  return res;
}

function cvvValidation() {
  if (cvvCardFrom.value.length == 0) {
    brushForms(mistakes[3], cvvCardFrom, 0);
    return false;
  }
  return true;
}

function validateCheck() {
  let isValid = true;
  if (!nameValidation()) {
    isValid = false;
    console.log(isValid);
  }
  if (!numberValidation()) {
    isValid = false;
    console.log(isValid);
  }
  if (!dateValidation()) {
    isValid = false;
    console.log(isValid);
  }
  if (!cvvValidation()) {
    isValid = false;
    console.log(isValid);
  }
  return isValid;
}

confirmButton.addEventListener('click', function() {
  if (validateCheck()) {
    firstScreen.style.display = 'none';
    secondScreen.style.display = 'flex';
  }
})

