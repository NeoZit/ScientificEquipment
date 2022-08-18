// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const language = document.querySelector('.select__body');
const value = document.querySelectorAll('.select__option');
const btnContent = document.querySelector('.select__content');

if (language) {
  value.forEach(function (el) {
    if (btnContent.textContent === el.textContent) {
      el.classList.add('select__option--hide');
    }
  });

  language.addEventListener('click', function (e) {
    const clicked = e.target.closest('.select__option');
    if (!clicked) return;
    value.forEach(function (el) {
      el.classList.remove('select__option--hide');
    });
    clicked.classList.add('select__option--hide');
  });
}
