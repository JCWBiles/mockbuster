var User = require('../models/user');
var Films = require('../models/films');
var Cart = require('../models/cart');

var CartController = {
  Create: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users){
      console.log(req.session.userId);
      if (err) {
        throw err
      }
      var cart = new Cart({
        film: req.body.filmId,
        user: req.body.userId,
      });
      console.log(req.body.filmId);
      console.log(req.body.userId);
      cart.save(function(err) {
        if (err) { throw err; }
        else {
          res.status(201).redirect('/films')
        }
      })
    })
  }
};

module.exports = CartController;
