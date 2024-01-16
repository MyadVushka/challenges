const inputFrom = document.querySelector('#cardNumberGeneral');
const inputTo = document.querySelector('.cardnumber');
const nameFrom = document.querySelector('#nameSurnameFrom');
const nameTo = document.querySelector('.nameSurname');
const dateTo = document.querySelector('.date');
const dateFrom = document.querySelectorAll('.input.second');

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

  let formattedDate = '';

}

inputFrom.addEventListener('input', transferInputs);
nameFrom.addEventListener('input', nameTransferInputs);

for (let i = 0; i < dateFrom.length; i++) {
  dateFrom[i].addEventListener('input', dateTransferInputs);
}