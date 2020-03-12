var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');
var ManagerController = require('../controllers/manager');

router.get('/', ManagerController.Index);
router.post('/', EmployeeController.Create);
router.get('/completed', ManagerController.Completed);

module.exports = router;
