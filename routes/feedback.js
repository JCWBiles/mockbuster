var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');
var FilmsController = require('../controllers/films');

router.get('/', UserController.FeedbackIndex);
router.post('/', UserController.Feedback);

module.exports = router;
