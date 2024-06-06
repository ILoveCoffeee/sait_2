document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let slides = document.querySelectorAll('.product-image-slider img');
    let slideInterval = setInterval(nextSlide, 8000); // Устанавливаем интервал перелистывания

    // Функция для показа конкретного слайда
    function showSlides(n) {
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        slides.forEach(slide => slide.style.display = "none"); // Скрываем все слайды
        slides[slideIndex - 1].style.display = "block"; // Показываем нужный слайд
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
        showSlides(slideIndex -= 1);
    }

    // Обнуление и перезапуск интервала перелистывания
    function resetSlideInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 8000);
    }

    // Перелистывание при нажатии на кнопки
    document.querySelector('.next').addEventListener('click', function() {
        nextSlide();
        resetSlideInterval();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        prevSlide();
        resetSlideInterval();
    });

    showSlides(slideIndex); // Показываем первый слайд при загрузке

    // Обновление счетчика корзины при загрузке страницы
    updateCartCount();

    // Добавление товара в корзину
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            let productElement = this.closest('.product-gallery');
            addToCart(productElement);
        });
    });

    function addToCart(productElement) {
        // Получение информации о товаре из data-атрибутов
        let product = {
            id: productElement.getAttribute('data-id'),
            name: productElement.getAttribute('data-name'),
            price: parseFloat(productElement.getAttribute('data-price')),
            image: productElement.getAttribute('data-image'),
            quantity: 1
        };

        // Получаем товары из localStorage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Проверяем, есть ли уже этот товар в корзине
        let itemIndex = cartItems.findIndex(item => item.id === product.id);

        if (itemIndex === -1) {
            // Если товара нет в корзине, добавляем его
            cartItems.push(product);
        } else {
            // Если товар уже есть в корзине, увеличиваем количество
            cartItems[itemIndex].quantity += 1;
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Обновляем счетчик товаров в корзине
        updateCartCount();
    }

    function updateCartCount() {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        let cartCountElement = document.getElementById('cart-count');
        if (totalItems > 0) {
            cartCountElement.textContent = totalItems;
            cartCountElement.style.display = 'block';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
});