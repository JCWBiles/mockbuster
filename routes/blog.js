var express = require('express');
var router = express.Router();

var BlogController = require('../controllers/blog');
var FilmsController = require('../controllers/films');

router.get('/', BlogController.Index);
router.post('/', BlogController.Create);
router.post('/delete/:_id', BlogController.Delete);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);

module.exports = router;
