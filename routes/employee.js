var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');
var FilmsController = require('../controllers/films');

router.get('/', EmployeeController.Login);
router.post('/', EmployeeController.Authenticate);
router.get('/change', EmployeeController.Change);
router.post('/password/:_id', EmployeeController.NewPassword);
router.get('/em_hub', EmployeeController.Em_Hub);
router.get('/account', EmployeeController.Account);
router.get('/update', EmployeeController.RequestUpdate);
router.get('/em_film_lib', EmployeeController.EmFilmLib);
router.get('/em_film_creation', EmployeeController.EmFilmCreation);
// router.post('/em_film_creation', FilmsController.Create);
router.post('/em_edit_film/:_id', EmployeeController.EmEditFilm);
router.post('/em_delete_film/:_id', EmployeeController.EmDeleteFilm);
router.post('/updatedetails', EmployeeController.Message);
router.get('/session/destroy', EmployeeController.Logout);
router.get('/completed', EmployeeController.Completed);
router.get('/feedback', EmployeeController.Feedback);
router.get('/suggestions', EmployeeController.Suggestion);
router.get('/complaints', EmployeeController.Complaint);
router.get('/individualfeedback/:_id', EmployeeController.IndividualFeedback);
router.post('/feedback/delete/:_id', EmployeeController.DeleteFeedback);

module.exports = router;
