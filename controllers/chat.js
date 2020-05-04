var Chat = require('../models/chat');
var User = require('../models/user');
var Cart = require('../models/cart');
var Films = require('../models/films');
var app = require('../app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ChatController = {
  // Index: function(req, res) {
  //   var rooms = { Marvel: {} }
  //   var chusers = {};
  //   User.find({_id: req.session.userId}, function(err,users) {
  //     if (err) { throw err; }
  //     Films.find(function(err, films) {
  //       if (err) { throw err };
  //       Chat.find({},(err, chat)=> {
  //         res.render('chat/index', { users: users, films: films, chat: chat, rooms: rooms });
  //       })
  //     })
  //   })
  // },

};


module.exports = ChatController;
