var express = require('express');
var router = express.Router();

var BlogController = require('../controllers/blog');

router.get('/', BlogController.Index);
router.post('/', BlogController.Create);

module.exports = router;
