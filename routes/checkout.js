var express = require('express');
var router = express.Router();

var CheckoutController = require('../controllers/checkout');

router.get('/', CheckoutController.Index);
router.post('/', CheckoutController.Send);


module.exports = router;
