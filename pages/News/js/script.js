document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.querySelector('.menu-icon');
    var menus = document.querySelector('.menus');

    menuIcon.addEventListener('click', function () {
        menus.classList.toggle('menu-active');
    });

    // Получаем все ссылки меню
    var menuLinks = document.querySelectorAll('.menus a');

    // Обработчик события прокрутки
    window.addEventListener('scroll', function () {
        // Перебираем все ссылки меню
        menuLinks.forEach(function (link) {
            // Получаем элемент, к которому ссылка ведет
            var targetElement = document.querySelector(link.getAttribute('href'));
            // Проверяем, находится ли элемент в области видимости
            if (targetElement.getBoundingClientRect().top < window.innerHeight * 0.3 && targetElement.getBoundingClientRect().bottom > window.innerHeight * 0) {
                // Если да, добавляем класс active
                link.classList.add('nav-bar-active');
            } else {
                // Если нет, удаляем класс active
                link.classList.remove('nav-bar-active');
            }
        });
    });
});
window.addEventListener('load', function () {
    var loader = document.querySelector('.spinnerContainer');
    loader.style.display = 'none'; // Скрыть элемент загрузки после загрузки страницы
});






document.addEventListener('DOMContentLoaded', function () {
    const languageSpans = document.querySelectorAll('.name');

    languageSpans.forEach(function (span) {
        span.addEventListener('click', function () {
            const lang = this.textContent.toLowerCase();
            fetch(`./languages/${lang}.json`)
                .then(response => response.json())
                .then(data => {
                    replaceKeywords(data);
                })
                .catch(error => console.error('Error:', error));
        });
    });

    function replaceKeywords(data) {
        const elementsWithKeywords = document.querySelectorAll('[data-keyword]');
        elementsWithKeywords.forEach(function (element) {
            const keyword = element.getAttribute('data-keyword');
            if (data.hasOwnProperty(keyword)) {
                element.textContent = data[keyword];
            }
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('question-active');
            answer.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const faqs = document.querySelectorAll('.faq');

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.trim().toLowerCase();

        faqs.forEach(faq => {
            const text = faq.textContent.trim().toLowerCase();
            if (text.includes(searchTerm)) {
                faq.classList.remove('hidden'); // Показываем элемент, если содержит совпадение с поисковым запросом
            } else {
                faq.classList.add('hidden'); // Скрываем элемент, если нет совпадений
            }
        });
    });
});


// -------------------------------

function toggleActive(element) {
    var gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function (item) {
        item.classList.remove('active');
    });
    element.classList.add('active');
}


// -------------------------
// Получаем все элементы с классом "news-preview"
var newsPreviews = document.querySelectorAll('.news-preview');

// Проходим по каждому элементу и добавляем обработчик события клика
newsPreviews.forEach(function (newsPreview) {
    // Находим элемент с классом "news-view" внутри текущей секции
    var newsView = newsPreview.querySelector('.news-view');

    // Получаем текущее количество просмотров из локального хранилища, если оно есть
    var views = localStorage.getItem('newsViews') ? parseInt(localStorage.getItem('newsViews')) : 0;

    // Обновляем отображение количества просмотров
    updateViewsDisplay();

    // Добавляем обработчик события клика
    newsPreview.addEventListener('click', function () {
        // Увеличиваем значение просмотров на 1
        views++;

        // Обновляем отображение количества просмотров
        updateViewsDisplay();

        // Сохраняем количество просмотров в локальное хранилище
        localStorage.setItem('newsViews', views.toString());
    });

    // Функция для обновления отображения количества просмотров
    function updateViewsDisplay() {
        // Если количество просмотров превышает 1000000, переводим его в миллионы
        if (views >= 1000000) {
            var millions = Math.floor(views / 1000000 * 10) / 10; // Округляем до одного знака после запятой
            newsView.textContent = millions + 'M';
        }
        // Если количество просмотров превышает 1000, переводим его в тысячи
        else if (views >= 1000) {
            var thousands = Math.floor(views / 1000);
            newsView.textContent = thousands + 'K';
        } else {
            // Иначе просто показываем количество просмотров
            newsView.textContent = views;
        }
    }
});



