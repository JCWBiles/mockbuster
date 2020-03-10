var express = require('express');
var router = express.Router();

var LandingController = require('../controllers/landing');

router.get('/', LandingController.Index);

module.exports = router;
