// Получение кода ошибки из URL
const errorCode = parseInt(window.location.search.substring(1));

// Определение сообщения об ошибке
let errorMessage;
switch (errorCode) {
    case 404:
        errorMessage = "Page not found";
        break;
    case 402:
        errorMessage = "Payment Required";
        break;
    case 505:
        errorMessage = "HTTP Version Not Supported";
        break;
    default:
        errorMessage = "An error has occurred";
}

// Вывод сообщения об ошибке
document.getElementById('error-container').innerHTML = `
     <h1>Error ${errorCode}</h1>
     <p>${errorMessage}</p>
 `;