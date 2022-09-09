// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import IMask from 'imask';

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

// Validate form
const form = document.forms['popup'];
const inputs = document.querySelectorAll('.popup__input');
const checkbox = document.querySelector('.popup__checkbox');
const btn = document.querySelector('.popup__btn');
const label = document.querySelectorAll('.popup__box');
const thank = document.querySelector('.popup__thank');
const boxCheck = document.querySelector('.popup__box-check');

var element = document.getElementById('popup__phone');
var maskOptions = {
  mask: `{8}-(000)-000-00-00`,
};
var mask = IMask(element, maskOptions);

const validFormArr = [];

inputs.forEach(el => {
  if (el.hasAttribute('data-reg')) {
    el.setAttribute('is-valid', '0');
    validFormArr.push(el);
  }
});

form.addEventListener('input', function (e) {
  const allValid = [];
  inputs.forEach(el => {
    allValid.push(el.getAttribute('is-valid'));
  });
  const isAllValid = allValid.every(inp => {
    return inp === '1';
  });

  if (isAllValid && checkbox.checked) {
    btn.classList.remove('popup__btn--disabled');
    this.button.disabled = false;
  } else {
    this.button.disabled = true;
    btn.classList.add('popup__btn--disabled');
  }
});

Array.from(form.elements).forEach(inp => {
  const inputData = inp.getAttribute('data-reg');
  const re = new RegExp(inputData);
  if (inp.required && inp.type != 'checkbox') {
    inp.addEventListener('input', function () {
      if (inp.hasAttribute('data-reg')) {
        inp.setAttribute('is-valid', '0');
        if (re.test(inp.value) && inp.checkValidity()) {
          inp.previousElementSibling.style.color = 'green';
          inp.setAttribute('is-valid', '1');
        } else {
          inp.previousElementSibling.style.color = 'red';
          inp.setAttribute('is-valid', '0');
          inp.reportValidity();
        }
      }
    });
  }
});

let click = 0;
const thankYou = function (e) {
  e.preventDefault();
  if (thank.hasAttribute('hidden')) {
    thank.removeAttribute('hidden');
    label.forEach(el => {
      el.style.display = 'none';
    });
    boxCheck.style.display = 'none';
    this.textContent = 'Закрыть';
  }
  click++;
  if (click === 2) {
    this.setAttribute('data-close', '');
  }
};

btn.addEventListener('click', thankYou);
