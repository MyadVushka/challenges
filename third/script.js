let submitBtn = document.querySelector('.first__screen');
let secondScreenText = document.querySelector('.wrapper2__text');
let validText = document.querySelector('.wrapper__text_valid');


// I dunno how to regex yet. Sorry 😁
function isValidMail(mail) {
  if (mail.includes('@') && mail.indexOf('@') !== 0 && mail.indexOf('@') == mail.lastIndexOf('@') &&
      mail.includes('.') && mail.indexOf('.') - mail.indexOf('@') > 1 && mail.indexOf('.') == mail.lastIndexOf('.')) {
        return true;
      }
  return false;
}


submitBtn.addEventListener('click', function(event) {
    const email = document.querySelector('.form__email').value;
    const emailChng = document.querySelector('.form__email');
    if (!isValidMail(email)) {
      event.preventDefault();
      emailChng.style.color = '#d27e77';
      emailChng.style.backgroundColor = '#ffe4e7';
      emailChng.style.borderColor = '#d27e77';
      validText.innerText = 'Valid email required';
      setTimeout(() => {
        emailChng.style.color = 'black';
        emailChng.style.backgroundColor = 'white';
        emailChng.style.borderColor = 'black';
        validText.innerText = '';
      }, 1500)
    }
    else { // останавливает перезагрузку
      event.preventDefault();
      document.getElementById('wrapper1').style.display = 'none';
      document.getElementById('wrapper2').style.display = 'flex';
      document.querySelector('.wrapper2__text').innerHTML = `A confirmation email has been sent to <br> <strong>${email}</strong>. Please open it and click <br> the button inside to confirm your subscription.`
    }


})




