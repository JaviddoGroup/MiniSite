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





// --------------------------------
let blogs = document.querySelectorAll('.blog');
let loadMoreButton = document.getElementById('load-more');
let blogCount = blogs.length;
let visibleBlogs = 3; // Изменено на количество блогов в одной строке
let currentRow = 0;

function loadMore() {
    // Определяем следующие блоги, которые будут отображены
    let start = currentRow * visibleBlogs;
    let end = start + visibleBlogs * 2; // Умножаем на 2, так как хотим показывать следующие 2 строки

    // Отображаем следующие блоги
    for (let i = start; i < end && i < blogCount; i++) {
        blogs[i].classList.remove('hidden');
    }

    // Если больше блогов нет, скрываем кнопку Load More
    if (end >= blogCount) {
        loadMoreButton.style.display = 'none';
    }

    currentRow += 2; // Увеличиваем на 2, так как показываем следующие 2 строки
}

// Скрытие всех блогов, начиная с visibleBlogs * 3 (то есть с 9-го блога)
for (let i = visibleBlogs * 3; i < blogCount; i++) {
    blogs[i].classList.add('hidden');
}
