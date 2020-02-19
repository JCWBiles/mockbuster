var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user')

router.get('/', UserController.Index);
router.post('/', UserController.Create);
router.get('/new', UserController.New);
router.get('/:_id', UserController.Authenticate);


module.exports = router;
