'use strict'

let faqs = document.querySelectorAll('.front-block__lower_button');

faqs.forEach((faq) => {
  faq.addEventListener('click', function() {

      let panel = faq.nextElementSibling;
      let icon = faq.querySelector('.front-block__lower-icon');
      
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
        icon.src = './imgs/icon-plus.svg';
      }
      else {
        panel.style.display = 'block';
        icon.src = './imgs/icon-minus.svg';
      }
  })
})