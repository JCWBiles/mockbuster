var express = require('express');
var router = express.Router();

var VideoController = require('../controllers/video');
var FilmsController = require('../controllers/films');

router.get('/', VideoController.Index);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);

module.exports = router;
