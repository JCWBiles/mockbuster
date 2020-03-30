var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');
var ManagerController = require('../controllers/manager');

router.get('/', ManagerController.Index);
router.post('/', ManagerController.Create);
router.get('/login', ManagerController.Login);
router.get('/login/:_id', ManagerController.Authenticate);
router.get('/hub', ManagerController.Hub);
router.get('/hr', ManagerController.HR);
router.post('/em_first_name/:_id', ManagerController.EditEmployee);
// router.post('/em_last_name/:_id', ManagerController.EditEmLastName);
// router.post('/em_email/:_id', ManagerController.EditEmEmail);
router.post('/staff_creation', EmployeeController.Create);
router.get('/staff_creation', ManagerController.Staff_Creation);
router.get('/completed', ManagerController.Completed);
router.get('/session/destroy', ManagerController.Logout);
router.get('/account', ManagerController.Account);
router.post('/delete/:_id', ManagerController.Delete);
router.post('/man_first/:_id', ManagerController.EditManFirst);
router.post('/man_last/:_id', ManagerController.EditManLast);
router.post('/man_email/:_id', ManagerController.EditManEmail);

module.exports = router; 
