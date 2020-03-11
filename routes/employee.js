var express = require('express');
var router = express.Router();

var EmployeeController = require('../controllers/employee');


router.get('/', EmployeeController.Login);
router.post('/', EmployeeController.Authenticate);
router.get('/change', EmployeeController.Change);
router.post('/password/:_id', EmployeeController.NewPassword);


module.exports = router;
