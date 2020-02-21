var express = require('express');
var router = express.Router();

var FilmsController = require('../controllers/films');

router.get('/', FilmsController.Index);
router.get('/horror', FilmsController.Horror);
router.get('/a_to_e', FilmsController.A_to_E);
router.get('/f_to_j', FilmsController.F_to_J);
router.get('/k_to_o', FilmsController.K_to_O);
router.get('/p_to_t', FilmsController.P_to_T);
router.get('/u_to_z', FilmsController.U_to_Z);
router.get('/zero_to_nine', FilmsController.Zero_to_Nine);

module.exports = router;
