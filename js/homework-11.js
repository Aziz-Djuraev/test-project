const subscribeForm = document.querySelector('#subscribe-form');

const registrationButton = document.querySelector('#registration-button');

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const modalClose = document.querySelector('#modal-close');

const registrationForm = document.querySelector('#registration-form');

const password = document.querySelector('#password');

const repeatPassword = document.querySelector('#repeat-password');


// Переменная user
let user = null;


/* ========================= */
/* ФОРМА ПОДПИСКИ */
/* ========================= */

subscribeForm.addEventListener('submit', function (event) {

    event.preventDefault();

    if (!subscribeForm.checkValidity()) {
        subscribeForm.reportValidity();
        return;
    }

    const formData = new FormData(subscribeForm);

    const email = formData.get('email');

    console.log({
        email: email
    });

    subscribeForm.reset();
});


/* ========================= */
/* ОТКРЫТИЕ МОДАЛЬНОГО ОКНА */
/* ========================= */

registrationButton.addEventListener('click', function () {

    modal.classList.add('modal-showed');

    overlay.classList.add('modal-showed');

});


/* ========================= */
/* ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА */
/* ========================= */

function closeModal() {

    modal.classList.remove('modal-showed');

    overlay.classList.remove('modal-showed');

}


modalClose.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


/* ========================= */
/* ФОРМА РЕГИСТРАЦИИ */
/* ========================= */

registrationForm.addEventListener('submit', function (event) {

    event.preventDefault();


    // Проверяем правильность заполнения формы

    if (!registrationForm.checkValidity()) {

        alert('Регистрация отклонена. Заполните форму правильно.');

        registrationForm.reportValidity();

        return;
    }


    // Проверяем пароли

    if (password.value !== repeatPassword.value) {

        alert('Регистрация отклонена. Пароли не совпадают.');

        return;
    }


    // Получаем данные формы

    const formData = new FormData(registrationForm);


    // Создаем пользователя

    user = {

        firstName: formData.get('firstName'),

        lastName: formData.get('lastName'),

        birthDate: formData.get('birthDate'),

        login: formData.get('login'),

        password: formData.get('password'),

        repeatPassword: formData.get('repeatPassword'),

        createdOn: new Date()

    };


    // Выводим пользователя в консоль

    console.log(user);


    alert('Регистрация прошла успешно!');


    // Закрываем модалку

    closeModal();


    // Очищаем форму

    registrationForm.reset();

});