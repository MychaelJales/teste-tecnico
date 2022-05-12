const express = require('express');

const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('funciona');
});

module.exports = app;
