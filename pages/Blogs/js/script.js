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
                    // Сохраняем выбранный язык в localStorage
                    localStorage.setItem('selectedLanguage', lang);
                })
                .catch(error => console.error('Error:', error));
        });
    });

    // Проверяем, есть ли сохраненный язык при загрузке страницы
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        fetch(`./languages/${savedLang}.json`)
            .then(response => response.json())
            .then(data => {
                replaceKeywords(data);
            })
            .catch(error => console.error('Error:', error));
    }

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

$(document).ready(function () {
    var $blogContainer = $('#blog-container');
    var $viewMoreButton = $('#view-more-btn');

    // Функция для показа скрытых блогов
    function showHiddenBlogs() {
        var hiddenBlogs = $blogContainer.find('.blog.hidden').slice(0, 6); // Загружаем 6 блогов вместо 3
        hiddenBlogs.removeClass('hidden');
        // Если больше блогов нет, скрываем кнопку "View More"
        if ($blogContainer.find('.blog.hidden').length === 0) {
            $('#view-more-btn-container').hide();
        }
    }
    // Показываем скрытые блоги при загрузке страницы
    showHiddenBlogs();

    // Добавляем обработчик события для кнопки "View More"
    $viewMoreButton.on('click', function () {
        showHiddenBlogs();
    });
});

$(document).ready(function () {
    var $input = $('.input'); // Получаем поле ввода
    var $blogs = $('.blog'); // Получаем все блоги

    // Обработчик ввода в поле поиска
    $input.on('input', function () {
        var searchText = $(this).val().toLowerCase(); // Получаем текст из поля в нижнем регистре

        // Проходимся по каждому блогу и скрываем или отображаем в зависимости от соответствия текста
        $blogs.each(function () {
            var blogText = $(this).find('.blog-text p').text().toLowerCase(); // Получаем текст блога в нижнем регистре
            if (blogText.includes(searchText)) {
                $(this).show(); // Отображаем блог, если текст соответствует
            } else {
                $(this).hide(); // Скрываем блог, если текст не соответствует
            }
        });
    });
});
