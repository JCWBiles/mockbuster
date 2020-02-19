var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');
router.get('/', UserController.Login);
router.post('/', UserController.Authenticate);
router.get('/session/destroy', UserController.Logout);

module.exports = router;