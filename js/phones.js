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

document.addEventListener("DOMContentLoaded", function() {
    // Обновление счетчика корзины при загрузке страницы
    updateCartCount();

    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        let cartCountElement = document.getElementById('cart-count');
        if (totalItems > 0) {
            cartCountElement.textContent = totalItems;
            cartCountElement.style.display = 'flex'; // Показываем элемент
        } else {
            cartCountElement.style.display = 'none'; // Скрываем элемент
        }
    }
});
