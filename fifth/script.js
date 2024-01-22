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
const firstScreen = document.querySelector('#wrapper__right1')

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

confirmButton.addEventListener('click', function() {
  firstScreen.style.display = 'none';
  secondScreen.style.display = 'flex';
})

