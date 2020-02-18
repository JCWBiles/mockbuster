var express = require('express');
var router = express.Router();

var FilmsController = require('../controllers/films');

router.get('/', FilmsController.Index);

module.exports = router;
