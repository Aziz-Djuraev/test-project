import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10.js';
import './homework-11.js';
import './Products.js';

// Кнопки
const changeColorFirstCardButton = document.querySelector(
    '#change-color-first-card'
);

const changeColorAllCardButton = document.querySelector(
    '#change-color-all-card'
);

const openGoogleButton = document.querySelector(
    '#open-padge-google'
);

const outputLogButton = document.querySelector(
    '#output-message-console-log'
);

const changeColorButton = document.querySelector(
    '#change-color-button'
);

const title = document.querySelector('.title');

// Цвет первой карточки
if (changeColorFirstCardButton) {
    changeColorFirstCardButton.addEventListener('click', () => {
        const firstCard = document.querySelector('.products-list .card');

        if (firstCard) {
            firstCard.classList.toggle('card-blue');
        }
    });
}

// Цвет всех карточек
if (changeColorAllCardButton) {
    changeColorAllCardButton.addEventListener('click', () => {
        const productCards = document.querySelectorAll(
            '.products-list .card'
        );

        productCards.forEach((card) => {
            card.classList.toggle('card-green');
        });
    });
}

// Открытие Google
if (openGoogleButton) {
    openGoogleButton.addEventListener('click', () => {
        const answer = confirm(
            'Вы действительно хотите открыть Google?'
        );

        if (answer) {
            window.open('https://www.google.com', '_blank');
        }
    });
}

// Сообщение в консоль
function outputMessageConsoleLog(message) {
    alert(message);
    console.log(message);
}

if (outputLogButton) {
    outputLogButton.addEventListener('click', () => {
        outputMessageConsoleLog('ДЗ №6');
    });
}

// Вывод заголовка при наведении
if (title) {
    title.addEventListener('mouseover', () => {
        console.log(title.textContent);
    });
}

// Изменение цвета кнопки
if (changeColorButton) {
    changeColorButton.addEventListener('click', () => {
        changeColorButton.classList.toggle('active');

        if (changeColorButton.classList.contains('active')) {
            changeColorButton.textContent = 'Цвет кнопки изменён';
        } else {
            changeColorButton.textContent = 'Сменить цвет кнопки';
        }
    });
}