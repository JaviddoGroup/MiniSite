const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Подключение к базе данных
const connection = mysql.createConnection({
    host: '127.0.0.1', // Хост базы данных
    user: 'root', // Имя пользователя
    password: '', // Пароль
    database: 'Hellper' // Имя базы данных
});

// Подключение к базе данных
connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных: ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных успешно установлено');
});

app.get('/news', (req, res) => {
    connection.query('SELECT * FROM News', (error, results, fields) => {
        if (error) {
            res.status(500).json({ error: 'Ошибка при выполнении запроса к базе данных' });
            return;
        }

        console.log('Данные из таблицы News:', results); // Выводим результаты запроса в консоль
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
