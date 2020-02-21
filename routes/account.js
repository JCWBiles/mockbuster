var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');

router.get('/', UserController.Account);
router.post('/delete/:id', UserController.Delete);
router.post('/:id', UserController.Edit);


module.exports = router;
