var Chat = require('../models/chat');
var User = require('../models/user');
var Cart = require('../models/cart');
var Films = require('../models/films');
var app = require('../app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ChatController = {
  Index: function(req, res) {
    var rooms = { Marvel: {} }
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err };
        Chat.find({},(err, chat)=> {
          res.render('chat/index', { users: users, films: films, chat: chat, rooms: rooms });
        })
      })
    })
  },

  CreateRoom: function(req, res){
    var rooms = { Marvel: {} }
    if (rooms[req.body.room] != null) {
      return res.redirect('/chat')
    }
    rooms[req.body.room] = { users: {} }
    res.redirect(req.body.room)
    // Send message that new room was created
    io.emit('room-created', req.body.room)
    // res.redirect('/chat/room', { roomName: req.params.room })
  },

  Room: function(req, res){
    // var rooms = { Marvel: {} }
    // if (rooms[req.params.room] == null) {
    //   return res.redirect('/chat')
    // }
    res.render('chat/room', { roomName: req.params.room })
  },

  Create: async (req, res) => {
    try{
      var message = new Chat(req.body);

      var savedMessage = await message.save()
      console.log('saved');

      var censored = await Chat.findOne({message:'badword'});
      if(censored)
      await Chat.remove({_id: censored.id})
      else
      io.emit('message', req.body);
      res.sendStatus(200);
    }
    catch (error){
      res.sendStatus(500);
      return console.log('error',error);
    }
    finally{
      console.log('Message Posted')
    }

  }
};


module.exports = ChatController;
