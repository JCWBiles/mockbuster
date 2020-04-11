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
        user: req.session.userId,
      });
      console.log(req.body.filmId);
      console.log(req.session.userId);
      cart.save(function(err) {
        if (err) { throw err; }
        else {
          res.status(201).redirect('back')
        }
      })
    })
  },

  Delete: function(req, res){
    User.find({id:req.session.userId}, function(err, users){
      if (err) { throw err  };
      Cart.remove({_id: req.params._id}, function(err, cartusers){
        if (err) { throw err }
        res.redirect('back');
      })
    })
  },
};

module.exports = CartController;
