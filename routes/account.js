var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');
var FilmsController = require('../controllers/films');

router.get('/', UserController.Account);
router.post('/delete/:_id', UserController.Delete);
router.post('/edit_user/:_id', UserController.EditUser);
// router.post('/upload/:_id', UserController.EditPic);
router.post('/password/:_id', UserController.NewPassword);
router.post('/feedback', UserController.Feedback);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);


module.exports = router;
