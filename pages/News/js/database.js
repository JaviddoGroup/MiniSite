// Функция для переключения состояния сохранения новости
function toggleSave(element) {
    // Получаем родительский элемент .grid-item
    const gridItem = element.closest('.grid-item');

    // Переключаем класс save для родительского элемента .grid-item
    gridItem.classList.toggle('save');

    // Получаем изображение внутри .news-save
    const img = element.querySelector('img');

    // Проверяем, есть ли у .grid-item класс save
    if (gridItem.classList.contains('save')) {
        // Если есть, меняем изображение на save.svg
        img.src = './media/icon/save.svg';
        // Получаем атрибут data-title у .grid-item
        const title = gridItem.getAttribute('data-title');
        // Сохраняем состояние в куки
        document.cookie = encodeURIComponent(title) + "=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    } else {
        // Если нет, меняем изображение на unsave.svg
        img.src = './media/icon/unsave.svg';
        // Получаем атрибут data-title у .grid-item
        const title = gridItem.getAttribute('data-title');
        // Удаляем состояние из куки
        document.cookie = encodeURIComponent(title) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

// Проверяем куки при загрузке страницы
window.addEventListener('load', function () {
    // Получаем все куки и разбиваем их на массив
    const cookies = document.cookie.split(';');

    // Проходимся по каждому куки
    cookies.forEach(cookie => {
        // Разбиваем куки на название и значение
        const [name, value] = cookie.split('=');
        // Получаем элемент по названию из куки
        const element = document.querySelector('.grid-item[data-title="' + decodeURIComponent(name.trim()) + '"] .news-save');
        if (element && value.trim() === 'true') {
            // Если значение куки равно true, добавляем класс save
            element.classList.add('save');
            // Меняем изображение на save.svg
            element.querySelector('img').src = './media/icon/save.svg';
        }
    });
});