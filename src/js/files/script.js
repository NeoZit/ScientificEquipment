// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const language = document.querySelector('.header__language');
const select = document.querySelector('.header__select');
const values = document.querySelector('.header__values');
const value = document.querySelectorAll('.header__value');

language.addEventListener('click', function (e) {
  this.classList.toggle('header__language--active');
  select.textContent = e.target.textContent;
  const clicked = e.target.closest('.header__value');
  if (!clicked) return;
  value.forEach(function (el) {
    el.classList.remove('header__value--active');
  });
  clicked.classList.add('header__value--active');
});
