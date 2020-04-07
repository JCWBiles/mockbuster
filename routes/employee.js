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
router.post('/updatedetails', EmployeeController.Message);
router.get('/session/destroy', EmployeeController.Logout);
router.get('/completed', EmployeeController.Completed);
router.get('/feedback', EmployeeController.Feedback);
router.get('/suggestions', EmployeeController.Suggestion);
router.get('/complaints', EmployeeController.Complaint);
router.get('/individualfeedback/:_id', EmployeeController.IndividualFeedback);
router.post('/feedback/delete/:_id', EmployeeController.DeleteFeedback);

module.exports = router;
