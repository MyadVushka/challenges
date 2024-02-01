"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const button = document.querySelector('.wrapper__button');
const topText = document.querySelector('.wrapper__text_top');
const bottomText = document.querySelector('.wrapper__text__bottom');
const site = 'https://api.adviceslip.com/advice';
const getAdvice = () => __awaiter(void 0, void 0, void 0, function* () {
    const advice = yield fetch(site);
    const response = yield advice.json();
    console.log(response);
    topText.textContent = 'ADVICE #' + response.slip.id;
    bottomText.textContent = '❝' + response.slip.advice + '❞';
});
button.addEventListener('click', getAdvice);
