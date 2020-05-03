var User = require('../models/user');
var Cart = require('../models/cart');

var VideoController = {
  Index: function(req, res) {
    User.find({_id: req.session.userId}, function(err, users) {
      Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
        if (err) { throw err; }
        res.render('videochat/index', {users:users, cartusers: cartusers, href: "/films", iconClass: "fas fa-photo-video"});
      })
    });
  },
};

module.exports = VideoController;
