class Drink {
    #temperature;

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error('Нельзя создать экземпляр класса Drink!');
        }

        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    // Получить информацию о напитке
    getInfo() {
        return `
            Название: ${this.name}
            Размер: ${this.size}
            Цена: ${this.price} €
            Температура: ${this.#temperature} °C`;
    }

    // Получить температуру
    getTemperature() {
        return this.#temperature;
    }

    // Изменить температуру
    setTemperature(temperature) {
        if (temperature < 0 || temperature > 100) {
            throw new Error('Температура должна быть от 0 до 100 °C!');
        }

        this.#temperature = temperature;
    }

    // Метод приготовления для наследников
    prepareDrink() {
        throw new Error('Метод prepareDrink() должен быть реализован!');
    }

    // Приватный метод приготовления
    #prepare() {
        console.log(`Готовим напиток: ${this.name}`);
        this.prepareDrink();
    }

    // Подать напиток
    serve() {
        this.#prepare();

        console.log(`Напиток "${this.name}" готов и подан!`);
    }
}

// Класс кофе
class Coffee extends Drink {
    constructor(name, size, price, temperature, beans, milk) {
        super(name, size, price, temperature);

        this.beans = beans;
        this.milk = milk;
    }

    prepareDrink() {
        console.log(`Зёрна: ${this.beans}`);
        console.log(`Молоко: ${this.milk}`);

        this.setTemperature(75);
    }

    getInfo() {
        return `${super.getInfo()}
            Зёрна: ${this.beans} Молоко: ${this.milk}`;
    }
}

// Класс чая
class Tea extends Drink {
    constructor(name, size, price, temperature, teaType) {
        super(name, size, price, temperature);

        this.teaType = teaType;
    }

    prepareDrink() {
        console.log(`Завариваем чай: ${this.teaType}`);

        this.setTemperature(85);
    }

    getInfo() {
        return `${super.getInfo()}
            Вид чая: ${this.teaType}`;
    }
}

// Класс лимонада
class Lemonade extends Drink {
    constructor(name, size, price, temperature, flavor) {
        super(name, size, price, temperature);

        this.flavor = flavor;
    }

    prepareDrink() {
        console.log(`Добавляем вкус: ${this.flavor}`);
        console.log('Добавляем лёд');

        this.setTemperature(5);
    }

    getInfo() {
        return `${super.getInfo()}
            Вкус: ${this.flavor}`;
    }
}

// Класс сока
class Juice extends Drink {
    constructor(name, size, price, temperature, fruit) {
        super(name, size, price, temperature);

        this.fruit = fruit;
    }

    prepareDrink() {
        console.log(`Готовим сок из фруктов: ${this.fruit}`);

        this.setTemperature(8);
    }

    getInfo() {
        return `${super.getInfo()}
            Фрукты: ${this.fruit}`;
    }
}

// Класс кафе
class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    // Получить информацию о кафе
    getInfo() {
        return `
            Кафе: ${this.name}
            Местоположение: ${this.location}`;
    }

    // Заказать напиток
    orderDrink(drink) {
        if (!(drink instanceof Drink)) {
            throw new Error('Можно заказать только напиток!');
        }

        console.log(`\nНовый заказ в кафе "${this.name}"`);

        drink.serve();

        console.log(`Стоимость заказа: ${drink.price} €`);
    }
}

// Создаём кафе
const cafe = new Cafe('Coffee House', 'Вильнюс');

// Создаём напитки
const coffee = new Coffee(
    'Капучино', 'Средний', 4.5, 20, 'Арабика', 'Овсяное'
);

const tea = new Tea(
    'Зелёный чай', 'Большой', 3, 20, 'Зелёный'
);

const lemonade = new Lemonade(
    'Лимонад', 'Средний', 3.5, 20, 'Лимон'
);

const juice = new Juice(
    'Апельсиновый сок', 'Большой', 4, 20, 'Апельсин'
);

// 1. Информация о кафе
console.log(cafe.getInfo());

// 2. Информация о напитках
console.log('\nИнформация о кофе:');
console.log(coffee.getInfo());

console.log('\nИнформация о чае:');
console.log(tea.getInfo());

// 3. Заказываем напитки
cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
cafe.orderDrink(juice);

// 4. Проверяем температуру после приготовления
console.log('\nТемпература кофе:', coffee.getTemperature(), '°C');
console.log('Температура чая:', tea.getTemperature(), '°C');
console.log('Температура лимонада:', lemonade.getTemperature(), '°C');
console.log('Температура сока:', juice.getTemperature(), '°C');