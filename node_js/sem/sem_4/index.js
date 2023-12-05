/*
GET /users получить всех пользователей

GET /users/:id Получить 1го пользователя

POST /users создать пользователя

PUT /users/:id обновляем пользователя

DELETE /users/:id удаляем 1 пользователя
*/

const express = require('express');
const joi = require('joi');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'users.json');

const app = express();
app.use(express.json());

const userSheme = joi.object({
    firstName: joi.string().min(1).required(),
    lastName: joi.string().min(1).required(),
    age: joi.number().min(1).max(150).required(),
    city: joi.string().min(1)
})

let id = 0;
var jsonParseUsers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

app.get('/users', (req, res) => {
    res.send({ jsonParseUsers });
})

app.get('/users/:id', (req, res) => {
    const userId = +req.params.id
    const user = jsonParseUsers.find((user) => user.id === userId)
    if (user) {
        res.send({ user })
    } else {
        res.status(404)
        res.send({ user: null })
    }
})

app.post('/users', (req, res) => {
    const result = userSheme.validate(req.body);
    if (result.error) {
        return res.status(404).send({error: result.error.details});
    }
    id = jsonParseUsers.length + 1;
    jsonParseUsers.push({
        id: id,
        ...req.body
    })
    res.send({ id: id })
})

app.put('/users/:id', (req, res) => {
    const result = userSheme.validate(req.body);
    if (result.error) {
        return res.status(404).send({error: result.error.details});
    }
    const userId = +req.params.id;
    const user = jsonParseUsers.find((user) => user.id === userId);
    if (user) {
        const { firstName, lastName, age, city } = req.body;
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;
        user.city = city;
        res.send({ user });
    } else {
        res.status(404)
        res.send({ user: null })
    }
})

app.delete('/users/:id', (req, res) => {
    const userId = +req.params.id
    const user = jsonParseUsers.find((user) => user.id === userId)
    if (user) {
        const userIndex = jsonParseUsers.indexOf(user);
        jsonParseUsers.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(jsonParseUsers, null, 2));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
})

app.listen(3000);