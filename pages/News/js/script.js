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


// ------------------------------
// Находим все иконки по классу
const icons = document.querySelectorAll('.news-link');

// Добавляем обработчик события клика на каждую иконку
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Получаем текст для копирования из атрибута data-copytext иконки
        const textToCopy = icon.getAttribute('data-copytext');

        // Копируем текст в буфер обмена
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Если копирование прошло успешно, выводим уведомление
                const notification = document.createElement('div');
                notification.innerHTML = `
                    <div class="notification-content">
                        <p data-keyword="notification">Copied</p>
                    </div>
                `;
                notification.classList.add('notification');
                document.body.appendChild(notification);

                // Удаляем уведомление через несколько секунд
                setTimeout(() => {
                    notification.remove();
                }, 1500);
            })
            .catch(err => {
                // Если произошла ошибка при копировании, выводим сообщение об ошибке
                console.error('Ошибка при копировании текста: ', err);
            });
    });
});

// -------------------------------------
// Функция для удаления класса active у элемента grid-item при клике на кнопку закрытия
function removeActiveClass(event) {
    var closeButton = event.target; // Получаем кнопку, на которую был клик
    var gridItem = closeButton.closest('.grid-item'); // Находим ближайший элемент с классом grid-item
    if (gridItem) {
        gridItem.classList.remove('active'); // Удаляем класс active у элемента grid-item
    }
    event.stopPropagation(); // Остановка распространения события, чтобы не вызывался toggleActive
}
// Функция для удаления класса active у элемента grid-item при клике вне области pop-up
function removeActiveClassOutsidePopup(event) {
    var popUp = document.querySelector('.pop-up'); // Находим элемент с классом pop-up
    var gridItem = document.querySelector('.grid-item.active'); // Находим элемент с классом grid-item и active

    // Проверяем, был ли клик вне области pop-up и grid-item
    if (popUp && !popUp.contains(event.target) && gridItem && !gridItem.contains(event.target)) {
        gridItem.classList.remove('active'); // Удаляем класс active у элемента grid-item
    }
}

// Добавляем обработчик события клика на документ
document.addEventListener('click', removeActiveClassOutsidePopup);

function toggleActive(element) {
    // Находим родительский элемент grid-item
    var gridItem = element.closest('.grid-item');

    // Добавляем или удаляем класс active в зависимости от его наличия
    if (gridItem) {
        gridItem.classList.toggle('active');
    }
}

// -------------------------------------------------------
function filterBlogs() {
    const searchBar = document.getElementById('search-bar');
    const searchTerm = searchBar.value.toLowerCase();
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        const title = item.dataset.title.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block'; // Показываем блог, если текст содержит запрос
        } else {
            item.style.display = 'none'; // Скрываем блог, если текст не содержит запрос
        }
    });
}

// ---------------------------------

// Функция для переключения изображения и добавления класса
function SwitchFilter() {
    var saveImage = document.getElementById("saveImage");
    var gridContainer = document.querySelector(".grid-container");
    if (saveImage.src.includes("unsave")) {
        saveImage.src = "./media/icon/save.svg";
        gridContainer.classList.add("active-filter");
    } else {
        saveImage.src = "./media/icon/unsave.svg";
        gridContainer.classList.remove("active-filter");
    }
}