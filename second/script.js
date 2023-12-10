'use strict'

let stars = document.querySelectorAll('.wrapper__marks_mod')


let starActive;

stars.forEach((star, idx) => {

  star.addEventListener('click', function() {

    if (starActive === undefined) {
      starActive = idx;
      star.style.backgroundColor = 'hsl(216, 12%, 54%)';
    }
    else {
      stars[starActive].style.backgroundColor = 'rgba(255, 255, 255, 0.063)';
      star.style.backgroundColor = 'hsl(216, 12%, 54%)';
      starActive = idx;
    }
  })

  star.addEventListener('mouseenter', function() {
    if (starActive !== idx) {
      star.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
  })
  star.addEventListener('mouseout', function() {
    if (starActive !== idx) {
      star.style.backgroundColor = 'rgba(255, 255, 255, 0.063)';
    }
  })
})



let submit = document.querySelector('.wrapper__button');
let wrap1 = document.getElementById('wrap1');
let wrap2 = document.getElementById('wrap2');

submit.addEventListener('click', function() {
  if (starActive !== undefined) {
    wrap1.style.display = 'none';
    wrap2.style.display = 'inline-flex';
  }

  document.querySelector('.wrapper__points-text').innerHTML = `You selected ${starActive+1} out of 5`;
})





