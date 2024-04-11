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
// Функция для переключения сохранения новости
function toggleSave(element) {
    // Получаем родительский элемент .news-save
    const newsSave = element.closest('.news-save');

    // Переключаем класс save
    newsSave.classList.toggle('save');

    // Получаем изображение внутри .news-save
    const img = newsSave.querySelector('img');

    // Проверяем, есть ли у .news-save класс save
    if (newsSave.classList.contains('save')) {
        // Если есть, меняем изображение на save.svg
        img.src = './media/icon/save.svg';
        // Сохраняем состояние в локальное хранилище
        saveToLocalStorage();
    } else {
        // Если нет, меняем изображение на unsave.svg
        img.src = './media/icon/unsave.svg';
        // Обновляем локальное хранилище
        removeFromLocalStorage();
    }
}

// Функция для сохранения в локальное хранилище
function saveToLocalStorage() {
    // Получаем все элементы с классом .news-save
    const newsSaves = document.querySelectorAll('.news-save');
    const savedTitles = [];

    // Перебираем все элементы .news-save
    newsSaves.forEach(newsSave => {
        // Если у элемента есть класс save, сохраняем его data-title
        if (newsSave.classList.contains('save')) {
            const title = newsSave.parentElement.parentElement.dataset.title;
            savedTitles.push(title);
        }
    });

    // Сохраняем массив сохраненных заголовков в локальное хранилище
    localStorage.setItem('savedNewsTitles', JSON.stringify(savedTitles));
}

// Функция для удаления из локального хранилища
function removeFromLocalStorage() {
    // Получаем все элементы с классом .news-save
    const newsSaves = document.querySelectorAll('.news-save');
    const savedTitles = [];

    // Перебираем все элементы .news-save
    newsSaves.forEach(newsSave => {
        // Если у элемента есть класс save, сохраняем его data-title
        if (newsSave.classList.contains('save')) {
            const title = newsSave.parentElement.parentElement.dataset.title;
            savedTitles.push(title);
        }
    });

    // Удаляем из локального хранилища сохраненные заголовки, которые были удалены
    localStorage.setItem('savedNewsTitles', JSON.stringify(savedTitles));
}

// Проверяем, сохранено ли состояние
window.onload = function () {
    const savedTitlesJSON = localStorage.getItem('savedNewsTitles');
    if (savedTitlesJSON) {
        const savedTitles = JSON.parse(savedTitlesJSON);
        const newsSaves = document.querySelectorAll('.news-save');

        // Перебираем все элементы .news-save и восстанавливаем сохраненные состояния
        newsSaves.forEach(newsSave => {
            const title = newsSave.parentElement.parentElement.dataset.title;
            if (savedTitles.includes(title)) {
                newsSave.classList.add('save');
                newsSave.querySelector('img').src = './media/icon/save.svg';
            }
        });
    }
};





