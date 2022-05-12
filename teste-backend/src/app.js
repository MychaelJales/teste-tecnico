const express = require('express');

const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');

const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/orders', orderController.getAll);

module.exports = app;
