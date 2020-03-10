var express = require('express');
var router = express.Router();


var CheckoutController = require('../controllers/checkout');
router.get('/', CheckoutController.Checkout);
router.post('/payment/:_id', CheckoutController.EditPay);
router.get('/thank_you', CheckoutController.Thank_You);

module.exports = router;
