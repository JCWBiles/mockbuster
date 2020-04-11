var express = require('express');
var router = express.Router();

var CheckoutController = require('../controllers/checkout');
var FilmsController = require('../controllers/films');

router.get('/', CheckoutController.Checkout);
router.post('/payment/:_id', CheckoutController.EditPay);
router.get('/thank_you', CheckoutController.Thank_You);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);
router.post('/cart/delete/:_id', CheckoutController.Payment);

module.exports = router;
