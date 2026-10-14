// 3. Объект с данными о человеке

const person = {
  firstName: "Азиз",
  lastName: "Джураев",
  email: "aziz@example.com",
  job: "Программист",
  position: "Frontend Developer",
  age: 43,
  country: "Узбекистан",
  city: "Ташкент",
  relationshipStatus: "Женат",
  phone: "+998901234567"
};

// 4. Объект автомобиля с владельцем

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Черный",
  transmission: "Автомат",
  owner: person
};

// Дополнительное свойство

car.engine = "2.5L Бензин";

// 5. Функция, которая добавляет максимальную скорость

function addMaxSpeed(carObject) {
  if ("maxSpeed" in carObject) {
    return;
  }

  carObject.maxSpeed = 260;
}

addMaxSpeed(car);

// 6. Функция вывода свойства объекта

function showProperty(object, property) {
  console.log(object[property]);
}

showProperty(car, "brand");
showProperty(person, "email");

// 7. Массив продуктов

const products = [
  "Хлеб",
  "Молоко",
  "Сыр",
  "Яблоки",
  "Чай"
];

// 8. Массив книг

const books = [
  {
    title: "Рыцарь пустыни. Халид бин аль-Валид",
    author: "А.И.Акрам",
    year: 1969,
    coverColor: "Белый",
    genre: "Историческая биография"
  },
  {
    title: "Меч Аллаха. Халид бин аль-Валид. Не побежденный командующий",
    author: "Садык Ибрахим Урджун",
    year: 2021,
    coverColor: "Черный",
    genre: "Историческая биография"
  },
  {
    title: "100 великих людей Ислама",
    author: "Джихад ат-Турбани",
    year: 2010,
    coverColor: "Зеленый",
    genre: "Историческая биография"
  }
];

// Добавляем новую книгу

books.push({
  title: "Акыда Имама Аль-Бухари",
  author: "Абу Али аль-Ашари",
  year: 2024,
  coverColor: "Красно-черная",
  genre: "Исламская литература"
});

// 9. Второй массив книг

const islamBooks = [
  {
    title: "Сорок Хадисов Имама ан Навави",
    author: "Абу Али аль-Ашари",
    year: 2023,
    coverColor: "Белый",
    genre: "Вероубеждения"
  },
];

// Объединяем массивы

const allBooks = [...books, ...islamBooks];

// 10. Функция с map(), добавляющая свойство isRare

function addIsRare(array) {
  return array.map(book => {
    return {
      ...book,
      isRare: book.year > 2023
    };
  });
}

const booksWithRare = addIsRare(allBooks);

console.log(person);
console.log(car);
console.log(products);
console.log(allBooks);
console.log(booksWithRare);