const btn = document.querySelector('.button-general');
const date = document.querySelectorAll('.wrapper__input-blocks_forms');
const output = document.querySelectorAll('.wrapper__output_placeholder');
const upperLable = document.querySelectorAll('.wrapper__input-blocks_date');
const lowerLable = document.querySelectorAll('.wrapper__input-blocks_mistake');

const currentDate = new Date();

console.log(currentDate.getFullYear());

function isValid(date) {
  let res = '';
  if (date[2].value > currentDate.getFullYear()) {
    res += '1';
  }
  if (date[1].value > 12) {
    res += '2'
  }
  if(date[0].value > 31 || date[1].value < 6 && date[1].value % 2 == 0 && date[0].value > 30 ||
          date[1].value >= 6 && date[1].value & 2 !== 0 && date[0].value > 30) {
    res += '0'
  }
  if(date[0].value.length == 0 || date[1].value.length == 0 || date[2].value.length == 0) {
    return 4;
  }
  return res;
}

function redSpread(upperLable) {
  for (let i = 0; i < upperLable.length; i++) {
    upperLable[i].style.color = '#db6068';
    date[i].style.borderColor = '#db6068'
  }
  setTimeout(() => {
    for (let i = 0; i < upperLable.length; i++) {
      upperLable[i].style.color = 'black';
      date[i].style.borderColor = 'grey';
    }
  }, 2000);
}

btn.addEventListener('click', function(event) {
    let mistakeFinder = isValid(date);
    event.preventDefault();
    switch(mistakeFinder) {
      case '1':
          redSpread(upperLable);
          lowerLable[2].innerText = 'Must be in the past';
          setTimeout(() => {
            lowerLable[2].innerText = '';
          }, 2000);
        break;
      case '2':
        redSpread(upperLable);
        lowerLable[1].innerText = 'Must be a valid month';
        setTimeout(() => {
          lowerLable[1].innerText = '';
        }, 2000);
        break;
      case '0':
        redSpread(upperLable);
        lowerLable[0].innerText = 'Must be a valid day';
        setTimeout(() => {
          lowerLable[0].innerText = '';
        }, 2000);
        break;
      case '12':
        redSpread(upperLable);
        lowerLable[2].innerText = 'Must be in the past';
        lowerLable[1].innerText = 'Must be a valid month';
        setTimeout(() => {
          lowerLable[2].innerText = '';
          lowerLable[1].innerText = '';
        }, 2000)
        break;
      case '10':
        redSpread(upperLable);
        lowerLable[2].innerText = 'Must be in the past';
        lowerLable[0].innerText = 'Must be a valid day';
        setTimeout(() => {
          lowerLable[0].innerText = '';
          lowerLable[2].innerText = '';
        }, 2000);
        break;
      case '20':
        redSpread(upperLable);
        lowerLable[1].innerText = 'Must be a valid month';
        lowerLable[0].innerText = 'Must be a valid day';
        setTimeout(() => {
          lowerLable[1].innerText = '';
          lowerLable[0].innerText = '';
        }, 2000);
        break;
      case '120':
        redSpread(upperLable);
        lowerLable[2].innerText = 'Must be in the past';
        lowerLable[1].innerText = 'Must be a valid month';
        lowerLable[0].innerText = 'Must be a valid day';
        setTimeout(() => {
          lowerLable[1].innerText = '';
          lowerLable[0].innerText = '';
          lowerLable[2].innerText = '';
        }, 2000);
        break;
      case 4:
          redSpread(upperLable);
          for (let i = 0; i < lowerLable.length; i++) {
            lowerLable[i].innerText = 'This field is required';
          }
          setTimeout(() => {
            for (let i = 0; i < lowerLable.length; i++) {
              lowerLable[i].innerText = '';
            }
          }, 2000);
        break;
      default:
        const inputDate = new Date();
        inputDate.setFullYear(date[2].value, date[1].value - 1, date[0].value);

        const timeDifference = new Date(currentDate.getTime() - inputDate.getTime());
      
        const years = timeDifference.getFullYear() - 1970;
        const months = timeDifference.getMonth();
        const days = timeDifference.getDate() - 1;
      
        output[0].textContent = years;
        output[1].textContent = months;
        output[2].textContent = days;
        break;
    }

})