const button = document.querySelector('.wrapper__button')!;
const topText = document.querySelector('.wrapper__text_top')!;
const bottomText = document.querySelector('.wrapper__text__bottom')!;

const site : string = 'https://api.adviceslip.com/advice';


async function getAdvice() {
    const advice = await fetch(site);
    const response = await advice.json();
    console.log(response);
    topText.textContent = 'ADVICE #' + response.slip.id;
    bottomText.textContent = '❝' + response.slip.advice + '❞';
}

getAdvice();

button.addEventListener('click', getAdvice);