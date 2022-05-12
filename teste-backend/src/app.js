const express = require('express');

const cors = require('cors');

const orderController = require('./controllers/orderController');

const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

app.get('/orders', orderController.getAll);

module.exports = app;
