const express = require('express');

const userController = require('./controllers/userController');

const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', userController.getAll);

module.exports = app;
