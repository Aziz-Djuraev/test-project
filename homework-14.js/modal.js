export class Modal {
    constructor(modalId, buttonId, shouldCloseOnOverlay) {
        this.modal = document.getElementById(modalId);
        this.overlay = document.getElementById('overlay');

        this.shouldCloseOnOverlay = shouldCloseOnOverlay;

        // Сохраняем обработчик клика по оверлею
        this.overlayClickHandler = () => {
            this.close();
        };

        this.#initOpen(buttonId);
        this.#initClose();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');

        // Подписываемся на клик по оверлею
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener(
                'click',
                this.overlayClickHandler
            );
        }
    }

    close() {
        this.modal.classList.remove('modal-showed');

        // Отписываемся от клика по оверлею
        this.overlay.removeEventListener(
            'click',
            this.overlayClickHandler
        );

        // Проверяем, остались ли открытые окна
        const openedModals = document.querySelectorAll(
            '.modal.modal-showed'
        );

        // Если окон нет, скрываем оверлей
        if (openedModals.length === 0) {
            this.overlay.classList.remove('overlay-showed');
        }
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    #initOpen(buttonId) {
        const button = document.getElementById(buttonId);

        button.addEventListener('click', () => {
            this.open();
        });
    }

    #initClose() {
        const closeButton = this.modal.querySelector(
            '.modal-close-button'
        );

        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
}
