var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');

router.get('/', EmployeeController.Login);
router.post('/', EmployeeController.Authenticate);
router.get('/change', EmployeeController.Change);
router.post('/password/:_id', EmployeeController.NewPassword);
router.get('/em_hub', EmployeeController.Em_Hub);
router.get('/account', EmployeeController.Account);
router.get('/update', EmployeeController.RequestUpdate);
router.get('/em_film_lib', EmployeeController.EmFilmLib);
router.get('/em_film_creation', EmployeeController.EmFilmCreation);
router.post('/em_edit_film/:_id', EmployeeController.EmEditFilm);
router.post('/em_delete_film/:_id', EmployeeController.EmDeleteFilm);
router.get('/session/destroy', EmployeeController.Logout);

module.exports = router;
