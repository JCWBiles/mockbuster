var express = require('express');
var router = express.Router();

var CheckoutController = require('../controllers/checkout');

router.get('/', CheckoutController.Index);
router.post('/:_id', CheckoutController.Send);
router.get('/thank_you', CheckoutController.Thank_You);

module.exports = router;
