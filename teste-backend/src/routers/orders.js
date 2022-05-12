const express = require('express');

const orderController = require('../controllers/orderController');

const router = express.Router();

router
  .get('/:id', orderController.getByUserId);

module.exports = router;
