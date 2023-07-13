const dataProduct = `[
    {
    "id": "card1",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_1.svg"
    },
    {
    "id": "card2",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_2.svg"
    },
    {
    "id": "card3",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_3.svg"
    },
    {
    "id": "card4",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_4.svg"
    },
    {
    "id": "card5",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_5.svg"
    },
    {
    "id": "card6",
    "brand": "ELLERY X M'O",
    "category": "CAPSULE",
    "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi",
    "currency": "$",
    "price": "52.00",
    "color": "Red",
    "quantity": "1",
    "size": "XI",
    "image": "./img/card_6.svg"
    }
]`

// let slideIndex = 1;
// /* Вызываем функцию, которая реализована ниже: */
//         showSlides(slideIndex);

// /* Увеличиваем индекс на 1 — показываем следующий слайд: */
//         function nextSlide() {
//            showSlides(slideIndex += 1);
//         }

// /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
//         function previousSlide() {
//            showSlides(slideIndex -= 1);  
//         }

// /* Устанавливаем текущий слайд: */
//         function currentSlide(n) {
//            showSlides(slideIndex = n);
//         }

// /* Функция перелистывания: */
//         function showSlides(n) {
//     /* Обращаемся к элементам с названием класса "slider__item" */
//            let slides = document.querySelector('.slider__item');
    
//     /* Проверяем количество слайдов: */
//             if (n > slides.length) {
//                slideIndex = 1
//             }
//             if (n < 1) {
//                slideIndex = slides.length
//             }
  
//     /* Проходим по каждому слайду в цикле for: */
//             for (let slide of slides) {
//                slide.style.display = "none";
//             }
//     /* Делаем элемент блочным: */
//             slides[slideIndex - 1].style.display = "flex";    
// }
        
const productCardItem = document.querySelector('.products__cards');

JSON.parse(dataProduct).forEach(product => {
        // Обертка для карточки
        const cardItem = document.createElement('div');
        cardItem.classList.add('products__cards__item');
        productCardItem.append(cardItem);

        // Два блока: картинка,кнопка + описание
        const cardImageWrapper = document.createElement('div');
        cardImageWrapper.classList.add('image');
        cardItem.append(cardImageWrapper);

        const cardDescription = document.createElement('div');
        cardDescription.classList.add('cards__description');
        cardItem.append(cardDescription);

        // Внутрянка для блока картинка,кнопка
        const cardImage = document.createElement('img');
        cardImage.classList.add('card__image');
        cardImage.src = product.image;
        cardImage.alt = 'picture';
        cardImageWrapper.append(cardImage);

        const cardCartLink = document.createElement('a');
        cardCartLink.classList.add('hover__button', 'fade-in-fwd');
        cardCartLink.setAttribute("data-id", product.id); // ID для карточек
        cardImageWrapper.append(cardCartLink);

        const cardCartSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        cardCartSvg.classList.add('hover__svg');
        cardCartSvg.setAttribute("viewBox", "0 0 27 25");
        cardCartSvg.setAttribute("width", "27");
        cardCartSvg.setAttribute("height", "25");
        cardCartSvg.setAttribute("fill", "none");
        cardCartSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        cardCartLink.append(cardCartSvg);

        cardCartSvg.insertAdjacentText('afterend', 'Add to Cart');
        
        const cardCartSvgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        cardCartSvgPath.setAttribute("d", "M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z");
        cardCartSvgPath.setAttribute("fill", "white");
        cardCartSvg.append(cardCartSvgPath);

        // Внутрянка для блока описание
        const cardHeading = document.createElement('h4');
        cardHeading.classList.add('card__heading');
        cardDescription.append(cardHeading);

        const cardHeadingLink = document.createElement('a');
        cardHeadingLink.classList.add('card__heading__link');
        cardHeadingLink.href = "#";
        cardHeadingLink.textContent = `${product.brand} ${product.category}`;
        cardHeading.append(cardHeadingLink);

        const cardText = document.createElement('p');
        cardText.classList.add('card__text');
        cardText.textContent = product.description;
        cardDescription.append(cardText);
        
        const cardPrice = document.createElement('p');
        cardPrice.classList.add('card__price');
        cardPrice.textContent = `${product.currency} ${product.price}`;
        cardDescription.append(cardPrice);
    
});


// Создание секции Корзина, ее заголовка и обертки для карточек
const cartItemsSection = document.createElement('section');
cartItemsSection.classList.add('cart-items', 'center');
const sectionFeatures = document.querySelector('.features');
sectionFeatures.insertAdjacentElement('afterend', cartItemsSection);

const cartItemsTitle = document.createElement('h3');
cartItemsTitle.classList.add('cart-items__title');
cartItemsTitle.textContent = 'Cart Items';
cartItemsSection.append(cartItemsTitle);

const cartItemsProduct = document.createElement('div')
cartItemsProduct.classList.add('product-cart')
cartItemsSection.append(cartItemsProduct);


// Добавление товара в секцию Корзина по клику на любую кнопку 'Add to Cart'
const cardLinkEl = document.querySelectorAll('.hover__button');
let cartItemsArray = [];

cardLinkEl.forEach(item => item.addEventListener('click', function (e) {
    
    JSON.parse(dataProduct).forEach(product => { 
        
        if (cartItemsArray.length === 0 && product.id === e.target.dataset.id) {
            cartItemsArray.push(product);
            cardRenderInCart(product, e.target.dataset.id);
        }
        
        else if (product.id === e.target.dataset.id && cartItemsArray.length !== 0) {

            if (cartItemsArray.some(el => el.id === e.target.dataset.id)) {
                let productInputChange = document.querySelector(`#${e.target.dataset.id}`);
                productInputChange.value = Number(productInputChange.value) + 1;
            } else {
                cardRenderInCart(product, e.target.dataset.id);
                cartItemsArray.push(product);
            }
        }          
    });
    // Удаление товара из секции Корзина
    const exitCrosses = document.querySelectorAll('.product-cart-card__exit');

    exitCrosses.forEach(item => item.addEventListener('click', function (e) {
        
        e.target.closest('.product-cart-card').remove();
        
        for (let i = 0; i < cartItemsArray.length; i++) {
            if (e.target.id === cartItemsArray[i].id) {
                cartItemsArray.splice(i, 1);
                break;
            }
        }

        if (document.querySelector('.product-cart').childNodes.length === 0) { cartItemsSection.style.display = 'none' };
    }));
}));


// Функция отрисовки карточки c присвоением ID
function cardRenderInCart(prod, id) {
// Обертка для каждой карточки
                const productCard = document.createElement('div');
                productCard.classList.add('product-cart-card');
                cartItemsProduct.append(productCard);

                // Три блока: фото + описание + выход
                const productImage = document.createElement('img');
                productImage.classList.add('product-cart-card__image');
                productImage.src = prod.image;
                productCard.append(productImage);

                const productCardDescription = document.createElement('div');
                productCardDescription.classList.add('product-cart-card__description');
                productCard.append(productCardDescription);

                const productCardExit = document.createElement('div');
                productCardExit.classList.add('product-cart-card__exit');
                productCard.append(productCardExit);

                // Контент внутри блока с описанием
                const heading = document.createElement('a');
                heading.classList.add('product-cart-card__heading');
                heading.href = '#';
                heading.textContent = prod.brand;
                productCardDescription.append(heading);

                const categoty = document.createElement('h3');
                categoty.classList.add('product-cart-card__category');
                categoty.textContent = prod.category;
                productCardDescription.append(categoty);

                const price = document.createElement('p');
                price.classList.add('product-cart-card__price');
                price.textContent = 'Price: ';
                productCardDescription.append(price);

                const priceSpan = document.createElement('span');
                priceSpan.classList.add('strong-cart-price');
                priceSpan.textContent = prod.currency + prod.price;
                price.append(priceSpan);

                const color = document.createElement('p');
                color.classList.add('product-cart-card__color');
                color.textContent = `Color: ${prod.color}`;
                productCardDescription.append(color);

                const size = document.createElement('p');
                size.classList.add('product-cart-card__size');
                size.textContent = 'Size: ' + prod.size;
                productCardDescription.append(size);

                const inventory = document.createElement('div');
                inventory.classList.add('product-cart-card__inventory');
                productCardDescription.append(inventory);

                const quantity = document.createElement('p');
                quantity.classList.add('product-cart-card__quantity');
                quantity.textContent = 'Quantity: ';
                inventory.append(quantity);

                const inputCount = document.createElement('input');
                inputCount.classList.add('product-cart-card__count');
                inputCount.setAttribute('type', 'number');
                inputCount.setAttribute('min', '1');
                inputCount.setAttribute("id", id);
                inputCount.value = prod.quantity;
                inventory.append(inputCount);

                // Крестик
                const exit = document.createElement('img');
                exit.classList.add('exit-from-cart');
                exit.src = './img/cross.svg';
                exit.setAttribute("id", id);
                productCardExit.append(exit);
                        
    cartItemsSection.style.display = 'flex';
};