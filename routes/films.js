var express = require('express');
var router = express.Router();

var FilmsController = require('../controllers/films');

router.get('/', FilmsController.Index);
router.get('/horror', FilmsController.Horror);

module.exports = router;
