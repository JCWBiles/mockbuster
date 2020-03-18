var express = require('express');
var router = express.Router();

var ManagerController = require('../controllers/manager');

router.get('/', ManagerController.Login);
router.post('/', ManagerController.Authenticate);
router.get('/session/destroy', ManagerController.Logout);

module.exports = router;
