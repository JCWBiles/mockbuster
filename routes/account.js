var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');

router.get('/', UserController.Account);
router.post('/delete/:_id', UserController.Delete);
router.post('/first/:_id', UserController.EditFirst);
router.post('/last/:_id', UserController.EditLast);
router.post('/email/:_id', UserController.EditEmail);


module.exports = router;
