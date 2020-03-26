var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');
var FilmsController = require('../controllers/films');

router.get('/', UserController.Account);
router.post('/delete/:_id', UserController.Delete);
router.post('/first/:_id', UserController.EditFirst);
router.post('/last/:_id', UserController.EditLast);
router.post('/email/:_id', UserController.EditEmail);
router.post('/password/:_id', UserController.NewPassword);
router.post('/upload/:_id', UserController.EditPic);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);

module.exports = router;
