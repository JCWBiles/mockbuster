var express = require('express');
var router = express.Router();

var BlogController = require('../controllers/blog');

router.get('/', BlogController.Index);
router.post('/', BlogController.Create);
router.post('/delete/:_id', BlogController.Delete);
// router.get('/edit/:_id', BlogController.Change);
router.post('/movie/:_id', BlogController.Edit_movie);
router.post('/review/:_id', BlogController.Edit_review);
router.post('/user/:_id', BlogController.Edit_user);
// router.get('/comment/:_id', BlogController.Comment);

module.exports = router;
