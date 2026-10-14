// 6. Импортируем массив комментариев

import { comments } from "./comments.js";


// 2. Массив чисел от 1 до 10
// Получаем числа начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number >= 5);

console.log(numbersFromFive);


// 3. Массив строк
// Проверяем, есть ли определенный элемент

const furniture = [
    "Стол",
    "Стул",
    "Диван",
    "Шкаф",
    "Кровать"
];

const hasSofa = furniture.includes("Диван");

console.log(hasSofa);


// 4. Функция для переворачивания массива

function reverseArray(array) {
    return array.reverse();
}

const firstArray = [1, 2, 3, 4, 5];

const secondArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

const reversedFirstArray = reverseArray(firstArray);
const reversedSecondArray = reverseArray(secondArray);

console.log(reversedFirstArray);
console.log(reversedSecondArray);


// 7. Получаем комментарии,
// у которых почта содержит ".com"

const commentsWithCom = comments.filter(comment => {
    return comment.email.includes(".com");
});

console.log(commentsWithCom);


// 8. Если id <= 5, устанавливаем postId = 2.
// Если id > 5, устанавливаем postId = 1.

const changedComments = comments.map(comment => {
    return {
            ...comment,
            postId: comment.id <= 5 ? 2 : 1
        };
    });

console.log(changedComments);


// 9. Создаем массив,
// состоящий только из id и name

const idAndName = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log(idAndName);


// 10. Добавляем свойство isInvalid.
// Если body больше 180 символов — true.
// Если меньше или равно 180 — false.

const checkedComments = comments.map(comment => {
    return {
        ...comment,
        isInvalid: comment.body.length > 180
    };
});

console.log(checkedComments);


// 11. Используем reduce().
// Получаем массив почтовых адресов.

const emailsReduce = comments.reduce((result, comment) => {
    result.push(comment.email);

    return result;
}, []);

console.log(emailsReduce);


// 11. То же самое с помощью map()

const emailsMap = comments.map(comment => {
    return comment.email;
});

console.log(emailsMap);


// 12. Преобразуем массив почты в строку
// с помощью toString()

const emailsToString = emailsMap.toString();

console.log(emailsToString);


// 12. Преобразуем массив почты в строку
// с помощью join()

const emailsJoin = emailsMap.join(", ");

console.log(emailsJoin);