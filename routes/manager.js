var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');
var ManagerController = require('../controllers/manager');

router.get('/', ManagerController.Index);
// router.post('/', ManagerController.Create);
router.get('/login', ManagerController.Login);
router.get('/login/:_id', ManagerController.Authenticate);
router.get('/hub', ManagerController.Hub);
router.get('/hr', ManagerController.HR);
router.post('/edit_em/:_id', ManagerController.EditEmployee);
// router.post('/staff_creation', EmployeeController.Create);
router.get('/staff_creation', ManagerController.Staff_Creation);
router.get('/completed', ManagerController.Completed);
router.get('/session/destroy', ManagerController.Logout);
router.get('/account', ManagerController.Account);
router.post('/delete/:_id', ManagerController.Delete);
router.post('/edit_man/:_id', ManagerController.EditMan);
router.post('/man_password/:_id', ManagerController.ManNewPassword);
router.post('/password/:_id', EmployeeController.NewPassword);

module.exports = router; 
