import { products } from './productsData.js';


// Пункт 4. Получаем массив объектов с названием и описанием
const productDescriptions = products.reduce((acc, currentProduct) => {
  acc.push({
    [currentProduct.title]: currentProduct.description
  });

  return acc;
}, []);

console.log(productDescriptions);


// Пункт 5. Получаем количество карточек
function getCountFromUser() {
  const userInput = prompt('Сколько карточек отобразить? От 1 до 5');

  const count = Number(userInput);

  if (Number.isInteger(count) && count >= 1 && count <= 5) {
    return count;
  }

  alert('Будут показаны все 5 карточек.');

  return 5;
}


// Рендерим карточки
function renderProducts(productsArray) {
  const targetList = document.querySelector('.products-list');
  const template = document.querySelector('#product-template');

  const fragment = document.createDocumentFragment();

  productsArray.forEach(product => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector('img');

    img.src = product.image;
    img.alt = product.title;

    clone.querySelector('.skin-type').textContent = product.skinType;
    clone.querySelector('.product').textContent = product.title;
    clone.querySelector('.description').textContent = product.description;
    clone.querySelector('.product-price').textContent = product.price;

    const componentsList = clone.querySelector('.components-list');

    product.components.forEach(compText => {
      const li = document.createElement('li');

      li.className = 'component';
      li.textContent = compText;

      componentsList.append(li);
    });

    fragment.append(clone);
  });

  targetList.innerHTML = '';
  targetList.append(fragment);
}


// Получаем количество
const count = getCountFromUser();

// Рендерим нужное количество карточек
renderProducts(products.slice(0, count));