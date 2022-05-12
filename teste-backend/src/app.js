const express = require('express');

const cors = require('cors');

const orderRouter = require('./routers/orders');

const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

app.use('/orders', orderRouter);

module.exports = app;
