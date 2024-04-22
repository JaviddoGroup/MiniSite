document.addEventListener('DOMContentLoaded', function () {
    const errorCode = parseInt(window.location.search.substring(1));

    switch (errorCode) {
        case 404:
            window.location.href = './Errors/error404.html';
            break;
        case 402:
            window.location.href = './Errors/error402.html';
            break;
        case 505:
            window.location.href = './Errors/error505.html';
            break;
        // Добавьте другие коды состояния по мере необходимости
        default:
            // Если код состояния не определен, ничего не делаем
            break;
    }
});
