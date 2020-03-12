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
router.get('/a_to_e', FilmsController.A_to_E);
router.get('/f_to_j', FilmsController.F_to_J);
router.get('/k_to_o', FilmsController.K_to_O);
router.get('/p_to_t', FilmsController.P_to_T);
router.get('/u_to_z', FilmsController.U_to_Z);
router.get('/zero_to_nine', FilmsController.Zero_to_Nine);
router.get('/search', FilmsController.Search);

module.exports = router;
