var Blog = require('../models/blog');
var User = require('../models/user');
var Cart = require('../models/cart');
var Employee = require('../models/employee');
var Manager = require('../models/manager');

var BlogController = {
  Index: function(req, res) {
    console.log(req.query);
      User.find({_id: req.session.userId}, function(err, users) {
        if (err) { throw err; }
        Blog.find().populate('user').sort( { date: -1 } ).exec(function(err, blog) {
          if (err) { throw err; }
          Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
            res.render('blog/index', { blog: blog, users: users, cartusers:cartusers, href: "/films", iconClass: "fas fa-photo-video" });
            console.log(req.session.userId);
          })
        })
      });
  },


  Create: function(req, res) {
    User.find({_id: req.session.userId}, function(err) {
      if (err) { throw err; }
      var blog = new Blog({
        movie: req.body.movie,
        review: req.body.review,
        date: req.body.date,
        user: req.body.userId,

      });
      console.log(req.body.movie);
      console.log(req.session.userId);

      blog.save(function(err) {
        if (err) { throw err; }

        res.redirect('back');
      })
    })
  },
};
module.exports = BlogController;
