import Modal from './Modal.js';
import Form from './Form.js';

// Создаём модальное окно
const registrationModal = new Modal('registration-modal');

// Создаём объекты форм
const registrationForm = new Form('registration-form');
const subscribeForm = new Form('subscribe-form');

// Кнопка открытия модального окна
const registrationButton = document.querySelector('#registration-button');

// Переменная для пользователя
let user = null;

// Открытие окна регистрации
registrationButton.addEventListener('click', () => {
    registrationModal.open();

    console.log('Окно открыто:', registrationModal.isOpen());
});

// Отправка формы подписки
subscribeForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!subscribeForm.isValid()) {
        subscribeForm.form.reportValidity();
        return;
    }

    const values = subscribeForm.getValues();

    console.log({
        email: values.email
    });

    subscribeForm.reset();
});

// Отправка формы регистрации
registrationForm.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!registrationForm.isValid()) {
        registrationForm.form.reportValidity();
        return;
    }

    const values = registrationForm.getValues();

    if (values.password !== values.repeatPassword) {
        alert('Регистрация отклонена. Пароли не совпадают.');
        return;
    }

    user = {
        ...values,
        createdOn: new Date()
    };

    console.log(user);

    alert('Регистрация прошла успешно!');

    registrationModal.close();
    registrationForm.reset();
});
