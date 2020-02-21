var express = require('express');
var router = express.Router();

var FilmsController = require('../controllers/films');

router.get('/', FilmsController.Index);
router.get('/action', FilmsController.Action);
router.get('/biopic', FilmsController.Biopic);
router.get('/comedy', FilmsController.Comedy);
router.get('/crime', FilmsController.Crime);
router.get('/drama', FilmsController.Drama);
router.get('/fantasy', FilmsController.Fantasy);
router.get('/history', FilmsController.History);
router.get('/horror', FilmsController.Horror);
router.get('/kids', FilmsController.Kids);
router.get('/legal', FilmsController.Legal);
router.get('/musical', FilmsController.Musical);
router.get('/romance', FilmsController.Romance);
router.get('/sports', FilmsController.Sports);
router.get('/superhero', FilmsController.Superhero);
router.get('/thriller', FilmsController.Thriller);
router.get('/war', FilmsController.War);

module.exports = router;
