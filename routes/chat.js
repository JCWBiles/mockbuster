var express = require('express');
var router = express.Router();
var app = require('../app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ChatController = require('../controllers/chat');
var FilmsController = require('../controllers/films');

// router.get('/', ChatController.Index);
// // router.get('/:user', ChatController.UserIndex);
// router.post('/room', ChatController.CreateRoom);
router.get('/:room', ChatController.Room);
router.post('/', ChatController.Create);
router.get('/search', FilmsController.Search);
router.get('/autocomplete', FilmsController.Autocomplete);

module.exports = router;
