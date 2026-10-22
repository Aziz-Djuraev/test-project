export default class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);

        if (!this.modal) {
            throw new Error(`Модальное окно "${modalId}" не найдено`);
        }

        this.overlay = document.querySelector('.overlay');
        this.closeButton = this.modal.querySelector('.modal-close');

        this.addCloseListeners();
    }

        // Закрытие по крестику
    addCloseListeners() {
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => {
                this.close();
            });
        }

        // Закрытие по клику на затемнение
        if (this.overlay) {
            this.overlay.addEventListener('click', () => {
                this.close();
            });
        }
    }

    // Открытие окна
    open() {
        this.modal.classList.add('modal-showed');

        if (this.overlay) {
            this.overlay.classList.add('modal-showed');
        }
    }

    // Закрытие окна
    close() {
        this.modal.classList.remove('modal-showed');

        if (this.overlay) {
            this.overlay.classList.remove('modal-showed');
        }
    }

    // Проверка, открыто ли окно
    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }
}