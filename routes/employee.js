var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');

router.get('/', EmployeeController.Index);
router.post('/password/:_id', EmployeeController.NewPassword);
router.get('/login', EmployeeController.Login);
router.post('/', EmployeeController.Authenticate);

module.exports = router;
