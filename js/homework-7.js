// 1. Функция для вывода температуры в городе

function showTemperature(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showTemperature("Ташкент", 35);


// 2. Проверка скорости относительно скорости света

const speedOfLight = 299792458; // м/с

function checkSpeed(speed) {
    if (speed > speedOfLight) {
        console.log("Сверхсветовая скорость");
    } else if (speed < speedOfLight) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

checkSpeed(300000000);
checkSpeed(100000000);
checkSpeed(299792458);


// 3. Покупка товара

const product = "Ноутбук";
const price = 1200; // цена в $

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`${product} приобретён. Спасибо за покупку!`);
    } else {
        const difference = price - budget;
        console.log(`Вам не хватает ${difference}$, пополните баланс.`);
    }
}

buyProduct(1500);
buyProduct(900);

// 4. Создать 1 функцию

function showMessage() {
    console.log("Я программист!");
}

// 5. Три переменные

let name = "Азиз";
let age = 43;
let isStudent = true;

// 6. Вызов функции

showMessage();