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




// document.addEventListener('copy', function (event) {
//     event.preventDefault(); // Отмена действия копирования
//     alert('Копирование запрещено');
// });








// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });

// document.addEventListener('keydown', function (event) {
//     // Блокируем F12
//     if (event.key === 'F12') {
//         event.preventDefault();
//     }

//     // Блокируем Ctrl + Shift + C
//     if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
//         event.preventDefault();
//     }

//     // Блокируем Ctrl + Shift + U
//     if (event.ctrlKey && event.shiftKey && event.keyCode === 85) {
//         event.preventDefault();
//     }

//     // Блокируем Ctrl + Shift + I, если нажата дополнительная клавиша, кроме "Alt"
//     if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
//         return;
//     }

//     // Разрешаем другие комбинации клавиш
//     // Например, Ctrl + R или Ctrl + Shift + R
//     if (event.ctrlKey && (event.key === 'R' || event.keyCode === 82)) {
//         return; // Не блокируем Ctrl + R или Ctrl + Shift + R
//     }
// });















window.addEventListener('keydown', function (event) {
    if (event.keyCode === 123) { // F12
        console.log('Консоль открыта');
        // Здесь можно предпринять дополнительные действия
    }
});
