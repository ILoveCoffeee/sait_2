document.addEventListener("DOMContentLoaded", function() {
    let cartItemsContainer = document.getElementById('cart-items');
    let totalAmountElement = document.getElementById('total-amount');
    let emptyCartMessage = document.getElementById('empty-cart-message');
    let cartTotalContainer = document.getElementById('cart-total');
    let cartCountElement = document.getElementById('cart-count');

    // Получение информации о товарах из localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let checkoutButton = document.getElementById('checkout-button');
    let modal = document.getElementById('checkout-modal');
    let closeBtn = document.querySelector('.close-btn');

    checkoutButton.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('checkout-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Здесь можно добавить логику для обработки формы оформления заказа
        alert('Ваш заказ оформлен!');
        modal.style.display = 'none';
        // Дополнительная логика для обработки заказа
    });

    // Функция для отображения товаров в корзине
    function renderCartItems() {
        cartItemsContainer.innerHTML = ''; // Очищаем контейнер перед рендерингом

        let totalAmount = 0; // Общая сумма товаров

        if (cartItems.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartTotalContainer.style.display = 'none';
        } else {
            emptyCartMessage.style.display = 'none';
            cartTotalContainer.style.display = 'flex'; // Используем flex для отображения элементов

            cartItems.forEach((item, index) => {
                let cartItemElement = document.createElement('div');
                cartItemElement.classList.add('cart-item');
                cartItemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <p class="cart-item-price">${item.price.toLocaleString()} ₽</p>
                        <div class="quantity-controls">
                            <button class="decrease-quantity" data-index="${index}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="increase-quantity" data-index="${index}">+</button>
                        </div>
                    </div>
                    <button class="remove-item-btn" data-index="${index}">&times;</button>
                `;
                cartItemsContainer.appendChild(cartItemElement);

                // Увеличиваем общую сумму
                totalAmount += item.price * item.quantity;
            });

            // Обновляем общую сумму на странице
            totalAmountElement.textContent = `${totalAmount.toLocaleString()} ₽`;

            // Добавляем обработчики событий для кнопок
            document.querySelectorAll('.remove-item-btn').forEach(button => {
                button.addEventListener('click', function() {
                    let itemIndex = this.getAttribute('data-index');
                    removeCartItem(itemIndex);
                });
            });

            document.querySelectorAll('.increase-quantity').forEach(button => {
                button.addEventListener('click', function() {
                    let itemIndex = this.getAttribute('data-index');
                    increaseQuantity(itemIndex);
                });
            });

            document.querySelectorAll('.decrease-quantity').forEach(button => {
                button.addEventListener('click', function() {
                    let itemIndex = this.getAttribute('data-index');
                    decreaseQuantity(itemIndex);
                });
            });
        }
    }

    // Функция для удаления товара из корзины
    function removeCartItem(index) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems(); // Перерисовываем корзину после удаления товара
        updateCartCount(); // Обновляем счетчик товаров
    }

    // Функция для увеличения количества товара
    function increaseQuantity(index) {
        cartItems[index].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems(); // Перерисовываем корзину после изменения количества
        updateCartCount(); // Обновляем счетчик товаров
    }

    // Функция для уменьшения количества товара
    function decreaseQuantity(index) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
        } else {
            cartItems.splice(index, 1); // Удаляем товар, если количество равно 1 и пользователь нажал уменьшить
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        renderCartItems(); // Перерисовываем корзину после изменения количества
        updateCartCount(); // Обновляем счетчик товаров
    }

    function updateCartCount() {
        let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) {
            if (totalItems > 0) {
                cartCountElement.textContent = totalItems;
                cartCountElement.style.display = 'flex'; // Показываем элемент
            } else {
                cartCountElement.style.display = 'none'; // Скрываем элемент
            }
        }
    }

    renderCartItems(); // Первоначальный рендеринг корзины
    updateCartCount(); // Обновление счетчика товаров при загрузке страницы
});






document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contacts-btn').addEventListener('click', function() {
        var section = document.getElementById('contact-section');
        section.style.display = 'block';
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        var page1 = document.getElementById('page1');
        var page2 = document.getElementById('page2');
        page1.style.display = 'none';
        page2.style.display = 'block';
    });

    document.getElementById('submit-btn').addEventListener('click', function() {
        var section = document.getElementById('contact-section');
        section.style.display = 'none';
        // Дополнительный код для отправки данных формы
    });

    document.getElementById('close-btn').addEventListener('click', function() {
        var section = document.getElementById('contact-section');
        section.style.display = 'none';
    });
    
    document.getElementById('previous-btn').addEventListener('click', function() {
        var page1 = document.getElementById('page1');
        var page2 = document.getElementById('page2');
        page2.style.display = 'none';
        page1.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    // Обработчик изменения поля ввода email
    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() === '') {
            nextBtn.disabled = true;
            submitBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
            submitBtn.disabled = false;
        }
    });

    // Обработчик изменения поля ввода имени
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            submitBtn.disabled = true;
        } else {
            submitBtn.disabled = false;
        }
    });

    // Обработчик клика по кнопке "Далее"
    nextBtn.addEventListener('click', function() {
        // Здесь может быть дополнительная проверка перед переходом на следующую страницу, если необходимо
    });

    // Обработчик отправки формы
    submitBtn.addEventListener('click', function() {
        // Здесь может быть дополнительная проверка перед отправкой формы, если необходимо
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const questionForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Ваше письмо отправлено';
    successMessage.style.position = 'fixed';
    successMessage.style.bottom = '20px';
    successMessage.style.right = '20px';
    successMessage.style.padding = '20px';
    successMessage.style.backgroundColor = '#3b3b3b';
    successMessage.style.border = '1px solid #a7e205';
    successMessage.style.borderRadius = '5px';
    successMessage.style.display = 'none';
    successMessage.style.fontFamily = 'Arial, sans-serif';
    successMessage.style.fontSize = '16px';
    successMessage.style.color = '#a7e205';
    successMessage.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    successMessage.style.zIndex = '9999';
    document.body.appendChild(successMessage);

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвратить стандартную отправку формы

        // Эмулируем отправку формы и показываем сообщение об успешной отправке
        setTimeout(function() {
            successMessage.style.display = 'block';
            // Через 3 секунды скрываем сообщение
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 3000);
        }, 1000);

        questionForm.reset(); // Очищаем форму
    });
});