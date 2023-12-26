const express = require('express');
const router = express.Router();
const order = require('../controller/OrderController')
const authorization = require('../middleware/authorize');

router.post('/order', authorization.authorize,order.createOrder);
router.get('/userOrder', authorization.authorize,order.getUserOrders);

module.exports = router;
