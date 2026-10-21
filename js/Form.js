export default class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);

        if (!this.form) {
            throw new Error(`Форма "${formId}" не найдена`);
        }
    }

    // Получение значений формы
    getValues() {
        return Object.fromEntries(
            new FormData(this.form).entries()
        );
    }

    // Проверка правильности заполнения
    isValid() {
        return this.form.checkValidity();
    }

    // Сброс значений формы
    reset() {
        this.form.reset();
    }
}