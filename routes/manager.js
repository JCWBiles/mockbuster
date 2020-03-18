var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');
var ManagerController = require('../controllers/manager');

router.get('/', ManagerController.Index);
router.post('/', ManagerController.Create);
router.get('/login', ManagerController.Login);
router.get('/login/:_id', ManagerController.Authenticate);
router.get('/hub', ManagerController.Hub);
router.get('/staff_creation', ManagerController.Staff_Creation);
router.post('/staff_creation', EmployeeController.Create);
router.get('/completed', ManagerController.Completed);

module.exports = router; 
