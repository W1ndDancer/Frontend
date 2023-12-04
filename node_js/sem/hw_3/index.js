// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер.


const express = require('express');
const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'counter.json');

const app = express();

app.get('/', (req, res) => {
    const counterData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
    counterData.home += 1;
    res.send(`<h1>Home Page</h1><h3>Total Visitors: ${counterData.home}</h3><a href="/about">Go To About</a>`);
    fs.writeFileSync(pathToFile, JSON.stringify(counterData, null, 2));
});
app.get('/about', (req, res) => {
    const counterData = JSON.parse(fs.readFileSync(pathToFile, 'utf-8'));
    counterData.about += 1;
    fs.writeFileSync(pathToFile, JSON.stringify(counterData, null, 2));
    res.send(`<h1>About Us</h1><h3>Total Visitors: ${counterData.about}</h3><a href="/">Back To Home</a>`);
});
app.listen(3000);