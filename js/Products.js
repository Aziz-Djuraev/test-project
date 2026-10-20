export class BeautyProduct {
    constructor(title, price, brand) {
        this.title = title;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return `${this.brand} ${this.title} — ${this.price} ₽`;
    }
}

export class FaceCream extends BeautyProduct {
    constructor(title, price, brand, skinType) {
        super(title, price, brand);
        this.skinType = skinType;
    }

    getDescription() {
        return `${this.getInfo()}. Тип кожи: ${this.skinType}`;
    }
}

export class Shampoo extends BeautyProduct {
    constructor(title, price, brand, hairType) {
        super(title, price, brand);
        this.hairType = hairType;
    }

    getDescription() {
        return `${this.getInfo()}. Тип волос: ${this.hairType}`;
    }
}

// Примеры объектов
const cream = new FaceCream(
    'Увлажняющий крем',
    1200,
    'Beauty',
    'Сухая'
);

const shampoo = new Shampoo(
    'Шампунь',
    850,
    'Care',
    'Жирные'
);

console.log(cream.getDescription());
console.log(shampoo.getDescription());