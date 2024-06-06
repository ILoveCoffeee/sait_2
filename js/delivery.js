ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [60, 100], 
        zoom: 4
    });

    var cities = [
        {name: "Москва", coords: [55.7558, 37.6173], radius: 110000},
        {name: "Санкт-Петербург", coords: [59.9343, 30.3351], radius: 95000},
        {name: "Новосибирск", coords: [55.0084, 82.9357], radius: 90000},
        {name: "Екатеринбург", coords: [56.8389, 60.6057], radius: 85000},
        {name: "Нижний Новгород", coords: [56.2965, 43.9361], radius: 80000},
        {name: "Казань", coords: [55.8304, 49.0661], radius: 75000},
        {name: "Челябинск", coords: [55.1644, 61.4368], radius: 70000},
        {name: "Омск", coords: [54.9924, 73.3686], radius: 65000},
        {name: "Ростов-на-Дону", coords: [47.2225, 39.7188], radius: 120000},
        {name: "Уфа", coords: [54.7388, 55.9721], radius: 55000},
        {name: "Красноярск", coords: [56.0153, 92.8932], radius: 50000},
        {name: "Воронеж", coords: [51.6608, 39.2003], radius: 45000},
        {name: "Пермь", coords: [58.0105, 56.2502], radius: 40000},
        {name: "Волгоград", coords: [48.7080, 44.5133], radius: 70000},
        {name: "Краснодар", coords: [45.0355, 38.9753], radius: 30000},
        {name: "Саратов", coords: [51.5331, 46.0343], radius: 30000},
        {name: "Тюмень", coords: [57.1530, 65.5343], radius: 25000},
        {name: "Тольятти", coords: [53.5078, 49.4204], radius: 20000},
        {name: "Ижевск", coords: [56.8526, 53.2048], radius: 20000},
        {name: "Барнаул", coords: [53.3561, 83.7616], radius: 25000},
        {name: "Ульяновск", coords: [54.3170, 48.4021], radius: 25000},
        {name: "Иркутск", coords: [52.2864, 104.3050], radius: 30000},
        {name: "Хабаровск", coords: [48.4802, 135.0719], radius: 30000},
        {name: "Ярославль", coords: [57.6261, 39.8845], radius: 20000},
        {name: "Владивосток", coords: [43.1155, 131.8855], radius: 35000},
        {name: "Махачкала", coords: [42.9831, 47.5046], radius: 20000},
        {name: "Томск", coords: [56.4846, 84.9482], radius: 20000},
        {name: "Оренбург", coords: [51.7666, 55.1005], radius: 20000},
        {name: "Кемерово", coords: [55.3547, 86.0873], radius: 25000},
        {name: "Новокузнецк", coords: [53.7596, 87.1216], radius: 25000},
        {name: "Самара", coords: [53.1955, 50.1018], radius: 25000},
        {name: "Киров", coords: [58.6035, 49.6679], radius: 20000},
        {name: "Сочи", coords: [43.5855, 39.7231], radius: 20000},
        {name: "Белгород", coords: [50.5957, 36.5872], radius: 15000},
        {name: "Владимир", coords: [56.1291, 40.4066], radius: 15000},
        {name: "Курск", coords: [51.7304, 36.1926], radius: 20000},
        {name: "Калининград", coords: [54.7104, 20.5106], radius: 25000},
        {name: "Смоленск", coords: [54.7818, 32.0401], radius: 15000},
        {name: "Калуга", coords: [54.5070, 36.2523], radius: 15000},
        {name: "Чита", coords: [52.0340, 113.4994], radius: 25000},
        {name: "Орёл", coords: [52.9703, 36.0636], radius: 15000},
        {name: "Якутск", coords: [62.0355, 129.6755], radius: 30000},
        {name: "Мурманск", coords: [68.9707, 33.0749], radius: 25000},
        {name: "Архангельск", coords: [64.5393, 40.5170], radius: 25000},
        {name: "Пенза", coords: [53.195878, 45.018316], radius: 15000},
        {name: "Стерлитамак", coords: [53.630402, 55.930825], radius: 15000},
        {name: "Набережные Челны", coords: [55.743553, 52.39582], radius: 15000},
        {name: "Астрахань", coords: [46.347869, 48.033574], radius: 20000},
        {name: "Липецк", coords: [52.60882, 39.59922], radius: 15000},
        {name: "Тверь", coords: [56.858721, 35.917596], radius: 15000},
        {name: "Кострома", coords: [57.767683, 40.926418], radius: 15000},
        {name: "Петрозаводск", coords: [61.784913, 34.346878], radius: 20000},
        {name: "Тамбов", coords: [52.721246, 41.452238], radius: 15000},
        {name: "Саранск", coords: [54.187433, 45.183938], radius: 15000},
        {name: "Комсомольск-на-Амуре", coords: [50.550011, 137.015245], radius: 20000},
        {name: "Ставрополь", coords: [45.0428, 41.9734], radius: 20000},
        {name: "Улан-Удэ", coords: [51.834464, 107.584574], radius: 20000},
        {name: "Севастополь", coords: [44.61665, 33.525367], radius: 25000},
        {name: "Бийск", coords: [52.539297, 85.21382], radius: 15000},
        {name: "Благовещенск", coords: [50.2907, 127.5272], radius: 15000},
        {name: "Владикавказ", coords: [43.0246, 44.6819], radius: 15000},
        {name: "Грозный", coords: [43.3178, 45.6988], radius: 15000},
        {name: "Елец", coords: [52.6236, 38.5018], radius: 15000},
        {name: "Иваново", coords: [57.0003, 40.9739], radius: 15000},
        {name: "Магнитогорск", coords: [53.4072, 59.0474], radius: 15000},
        {name: "Миасс", coords: [55.0456, 60.1080], radius: 15000},
        {name: "Назрань", coords: [43.2258, 44.7646], radius: 15000},
        {name: "Находка", coords: [42.8240, 132.8928], radius: 15000},
        {name: "Невинномысск", coords: [44.6226, 41.9475], radius: 15000},
        {name: "Нефтекамск", coords: [56.0884, 54.2483], radius: 15000},
        {name: "Новороссийск", coords: [44.7239, 37.7689], radius: 15000},
        {name: "Норильск", coords: [69.3558, 88.1893], radius: 15000},
        {name: "Ноябрьск", coords: [63.1994, 75.4512], radius: 15000},
        {name: "Псков", coords: [57.8193, 28.3317], radius: 15000},
        {name: "Рязань", coords: [54.6292, 39.7364], radius: 15000},
        {name: "Салават", coords: [53.3837, 55.9077], radius: 15000},
        {name: "Сургут", coords: [61.2540, 73.3964], radius: 20000},
        {name: "Сыктывкар", coords: [61.6685, 50.8364], radius: 20000},
        {name: "Тула", coords: [54.1961, 37.6182], radius: 15000},
        {name: "Уссурийск", coords: [43.7973, 131.9517], radius: 15000},
        {name: "Хасавюрт", coords: [43.2504, 46.5852], radius: 15000},
        {name: "Чебоксары", coords: [56.1463, 47.2489], radius: 15000},
        {name: "Череповец", coords: [59.1266, 37.9071], radius: 15000},
        {name: "Южно-Сахалинск", coords: [46.9591, 142.7381], radius: 15000},
        {name: "Якутск", coords: [62.0281, 129.7327], radius: 20000},
        {name: "Братск", coords: [56.1514, 101.6341], radius: 15000},
        {name: "Ангарск", coords: [52.5448, 103.8885], radius: 15000},
        {name: "Березники", coords: [59.4072, 56.8047], radius: 15000},
        {name: "Кисловодск", coords: [43.9133, 42.7208], radius: 15000},
        {name: "Прокопьевск", coords: [53.8605, 86.7186], radius: 15000},
        {name: "Армавир", coords: [44.9892, 41.1234], radius: 15000},
        {name: "Балаково", coords: [52.0223, 47.7828], radius: 15000},
        {name: "Рубцовск", coords: [51.5013, 81.2078], radius: 15000},
        {name: "Майкоп", coords: [44.6098, 40.1007], radius: 15000},
        {name: "Ковров", coords: [56.3604, 41.3168], radius: 15000},
        {name: "Алматы", coords: [43.238949, 76.889709], radius: 50000},
        {name: "Нур-Султан (Астана)", coords: [51.169392, 71.449074], radius: 20000},
        {name: "Шымкент", coords: [42.3417, 69.5901], radius: 15000},
        {name: "Караганда", coords: [49.8024, 73.0877], radius: 20000},
        {name: "Актобе", coords: [50.2981, 57.1538], radius: 15000},
        {name: "Тараз", coords: [42.8994, 71.3668], radius: 15000},
        {name: "Павлодар", coords: [52.2855, 76.9406], radius: 15000},
        {name: "Усть-Каменогорск", coords: [49.9750, 82.6109], radius: 15000},
        {name: "Семей", coords: [50.4111, 80.2275], radius: 15000},
        {name: "Атырау", coords: [47.1126, 51.9206], radius: 15000}
    ];

    cities.forEach(function(city) {
        var circle = new ymaps.Circle([city.coords, city.radius], {
            hintContent: "Зона доставки " + city.name
        }, {
            fillColor: "#00FF00AA", 
            strokeColor: "#00BB00",
            strokeOpacity: 0.8,
            strokeWidth: 2
        });
        myMap.geoObjects.add(circle);
    });
}

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
