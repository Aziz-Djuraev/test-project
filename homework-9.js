export const comments = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
    },
    {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur doloremque qui porro ipsam amet ipsam est praesentium occaecati qui illum repudiandae"
    },
    {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lindsay.Reichert@lueilwitz.com",
        body: "non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati"
    },
    {
        postId: 1,
        id: 5,
        name: "vero eaque aliquid doloribus et culpa",
        email: "Gussie_Kautzer@sydney.com",
        body: "harum non quasi et ratione tempore iure ex voluptatem pariatur asperiores rerum repudiandae quisquam cumque rem voluptate deleniti"
    },
    {
        postId: 1,
        id: 6,
        name: "et fugit eligendi deleniti quidem qui sint nihil autem",
        email: "Raleigh@garfield.biz",
        body: "doloribus at sed quis culpa deserunt consectetur qui praesentium accusamus fugiat dicta quos maxime incidunt sed aliquid libero"
    },
    {
        postId: 1,
        id: 7,
        name: "repellat consequatur praesentium vel minus molestias voluptatum",
        email: "Karley_Dare@garfield.biz",
        body: "maiores sed dolores similique labore et inventore et quasi mollitia velit consectetur natus consequatur similique quaerat"
    },
    {
        postId: 1,
        id: 8,
        name: "et omnis dolorem",
        email: "Pattie@garfield.biz",
        body: "ut rerum iure et architecto velit doloribus atque numquam repellat"
    },
    {
        postId: 1,
        id: 9,
        name: "provident id voluptas",
        email: "Karley@garfield.biz",
        body: "repellat et voluptatem repudiandae omnis corporis"
    },
    {
        postId: 1,
        id: 10,
        name: "eaque et deleniti",
        email: "Maudie@garfield.biz",
        body: "accusamus voluptas repellat qui et corporis consequatur"
    }
];

// 6. Импортируем массив комментариев
import { comments } from "./comment.js";


// 2. Массив чисел от 1 до 10
// Получаем числа начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number >= 5);

console.log("Задание 2:", numbersFromFive);


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

console.log("Задание 3:", hasSofa);


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

console.log("Задание 4:", reversedFirstArray);
console.log("Задание 4:", reversedSecondArray);


// 7. Получаем комментарии,
// у которых почта содержит ".com"

const commentsWithCom = comments.filter(comment => {
    return comment.email.includes(".com");
});

console.log("Задание 7:", commentsWithCom);


// 8. Если id <= 5, устанавливаем postId = 2.
// Если id > 5, устанавливаем postId = 1.

const changedComments = comments.map(comment => {
    if (comment.id <= 5) {
        return {
            ...comment,
            postId: 2
        };
    }

    return {
        ...comment,
        postId: 1
    };
});

console.log("Задание 8:", changedComments);


// 9. Создаем массив,
// состоящий только из id и name

const idAndName = comments.map(comment => {
    return {
        id: comment.id,
        name: comment.name
    };
});

console.log("Задание 9:", idAndName);


// 10. Добавляем свойство isInvalid.
// Если body больше 180 символов — true.
// Если меньше или равно 180 — false.

const checkedComments = comments.map(comment => {
    return {
        ...comment,
        isInvalid: comment.body.length > 180
    };
});

console.log("Задание 10:", checkedComments);


// 11. Используем reduce().
// Получаем массив почтовых адресов.

const emailsReduce = comments.reduce((result, comment) => {
    result.push(comment.email);

    return result;
}, []);

console.log("Задание 11 reduce:", emailsReduce);


// 11. То же самое с помощью map()

const emailsMap = comments.map(comment => {
    return comment.email;
});

console.log("Задание 11 map:", emailsMap);


// 12. Преобразуем массив почты в строку
// с помощью toString()

const emailsToString = emailsMap.toString();

console.log("Задание 12 toString:", emailsToString);


// 12. Преобразуем массив почты в строку
// с помощью join()

const emailsJoin = emailsMap.join(", ");

console.log("Задание 12 join:", emailsJoin);