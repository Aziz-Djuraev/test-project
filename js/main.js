const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const openPadgeGoogleButton = document.querySelector('#open-padge-google');
const outputLogButton = document.querySelector('#output-message-console-log');
const title = document.querySelector('.title');
const changeColorButton = document.querySelector('#change-color-button');

const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
});

openPadgeGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer) {
    window.open('http://google.com');
  }
}

outputLogButton.addEventListener('click', () => outputMessageConsoleLog('ДЗ №6'));

function outputMessageConsoleLog(message) {
  alert(message);
  console.log(message);
}

title.addEventListener('mouseover', () => {
    console.log(title.textContent);
});

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('active');

  if (changeColorButton.classList.contains('active')) {
    changeColorButton.textContent = 'Цвет кнопки изменён';
  } else {
    changeColorButton.textContent = 'Сменить цвет кнопки';
  }
});