var User = require('../models/user');
var Films = require('../models/films');
var Cart = require('../models/cart');

var QuizController = {
  Index: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/index', { films: films, users: users, cartusers: cartusers, href: "/films", iconClass: "fas fa-photo-video" });
        })
      })
    });
  },

  Level: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/level', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },

  Easy: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/game', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },

  Medium: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/mediumgame', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },

  Difficult: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/difficultgame', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },

  End: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/end', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },

  Highscores: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          if (err) { throw err; }
          res.render('quiz/highscores', { films: films, users: users, cartusers: cartusers});
        })
      })
    });
  },
};
module.exports =QuizController;
