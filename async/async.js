const usersList = document.querySelector('#users-list');
const statusMessage = document.querySelector('#status-message');

const deleteAllButton = document.querySelector('#delete-all-users');
const getAllButton = document.querySelector('#get-all-users');

const STORAGE_KEY = 'async-users';

let users = [];
let allCardsDisplayed = false;

// Получаем пользователей из JSON.
function getUsersFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('./users.json')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Не удалось загрузить users.json');
                    }

                    return response.json();
                })
                .then((data) => {
                    if (!data || !Array.isArray(data.users)) {
                        throw new Error('В JSON отсутствует массив users');
                    }

                    resolve(data.users);
                })
                .catch((error) => {
                    reject(error);
                });
        }, 1500);
    });
}

// Получаем пользователей из localStorage.
function getUsersFromStorage() {
    const savedUsers = localStorage.getItem(STORAGE_KEY);

    if (savedUsers === null) {
        return null;
    }

    try {
        const parsedUsers = JSON.parse(savedUsers);

        if (!Array.isArray(parsedUsers)) {
            throw new Error('Сохранённые данные должны быть массивом');
        }

        return parsedUsers;
    } catch (error) {
        console.error('Ошибка чтения localStorage:', error);
        localStorage.removeItem(STORAGE_KEY);

        return null;
    }
}

// Сохраняем пользователей в localStorage.
function saveUsersToStorage() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(users)
    );
}

// Отображаем карточки пользователей.
function renderUsers() {
    usersList.innerHTML = '';

    if (users.length === 0) {
        statusMessage.textContent = 'Пользователи отсутствуют';
        allCardsDisplayed = true;
        return;
    }

    users.forEach((user) => {
        const card = document.createElement('article');
        card.classList.add('user-card');

        const title = document.createElement('h2');
        title.classList.add('user-card-title');
        title.textContent = `${user.name} ${user.surname}`;

        const id = document.createElement('p');
        id.classList.add('user-card-info');
        id.textContent = `ID: ${user.id}`;

        const email = document.createElement('p');
        email.classList.add('user-card-info');
        email.textContent = `Email: ${user.email}`;

        const age = document.createElement('p');
        age.classList.add('user-card-info');
        age.textContent = `Возраст: ${user.age}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-user-button');
        deleteButton.type = 'button';
        deleteButton.dataset.id = user.id;
        deleteButton.textContent = 'Удалить карточку';

        card.append(title, id, email, age, deleteButton);

        usersList.append(card);
    });

    statusMessage.textContent = '';
    allCardsDisplayed = true;
}

// Загружаем пользователей.
async function loadUsers() {
    const savedUsers = getUsersFromStorage();

    // Если данные уже есть, fetch не выполняем.
    if (savedUsers !== null) {
        users = savedUsers;
        renderUsers();
        return;
    }

    statusMessage.textContent = 'Данные загружаются';

    try {
        users = await getUsersFromServer();

        saveUsersToStorage();
        renderUsers();

    } catch (error) {
        statusMessage.textContent = 'Ошибка при загрузке данных';

        console.error(
            new Error(`Ошибка загрузки пользователей: ${error.message}`)
        );
    }
}

// Удаляем все карточки.
function deleteAllUsers() {
    if (users.length === 0) {
        statusMessage.textContent = 'Все карточки уже удалены';
        return;
    }

    users = [];

    saveUsersToStorage();
    renderUsers();

    statusMessage.textContent = 'Все карточки удалены';
}

// Удаляем конкретного пользователя через filter().
function deleteOneUser(userId) {
    const oldLength = users.length;

    users = users.filter((user) => user.id !== userId);

    if (users.length === oldLength) {
        statusMessage.textContent = 'Пользователь не найден';
        return;
    }

    saveUsersToStorage();
    renderUsers();

    statusMessage.textContent = 'Карточка удалена';
}

// Получаем всех пользователей.
function getAllUsers() {
    if (users.length === 0) {
        statusMessage.textContent = 'Нет пользователей для отображения';
        return;
    }

    if (allCardsDisplayed) {
        statusMessage.textContent = 'Все карточки уже отображены';
        return;
    }

    renderUsers();

    statusMessage.textContent = 'Все пользователи отображены';
}

// Обработчик удаления карточки.
usersList.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('.delete-user-button');

    if (deleteButton === null) {
        return;
    }

    const userId = Number(deleteButton.dataset.id);

    deleteOneUser(userId);
});

// Обработчики основных кнопок.
deleteAllButton.addEventListener('click', deleteAllUsers);
getAllButton.addEventListener('click', getAllUsers);

// Запускаем загрузку при открытии страницы.
loadUsers();
