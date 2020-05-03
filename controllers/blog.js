var Blog = require('../models/blog');
var User = require('../models/user');
var Cart = require('../models/cart');
var Employee = require('../models/employee');
var Manager = require('../models/manager');

var BlogController = {
  Index: function(req, res) {
    console.log(req.query);
    if (req.session.userId) {
      User.find({_id: req.session.userId}, function(err, users) {
        if (err) { throw err; }
        Blog.find().populate('user').sort( { date: -1 } ).exec(function(err, blog) {
          if (err) { throw err; }
          Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
            res.render('blog/index', { qs:req.query, blog: blog, users: users, cartusers:cartusers, href: "/films", iconClass: "fas fa-photo-video" });
            console.log(req.session.userId);
          })
        })
      });
    }else if (req.session.employeeId) {
      Employee.find({_id: req.session.employeeId}, function(err, employees) {
        if (err) { throw err; }
        Blog.find().populate('user').sort( { date: -1 } ).exec(function(err, blog) {
          if (err) { throw err; }
          res.render('blog/index', { qs:req.query, blog: blog, employees: employees});
          console.log(req.session.employeeId);
        })
      });
    }else {
      Manager.find({_id: req.session.managerId}, function(err, managers) {
        if (err) { throw err; }
        Blog.find().populate('user').sort( { date: -1 } ).exec(function(err, blog) {
          if (err) { throw err; }
          res.render('blog/index', { qs:req.query, blog: blog, managers: managers});
          console.log(req.session.managerId);
        })
      });
    }
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

  Delete: function(req, res){
    Blog.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err };
      res.status(201).redirect('back');
    })
  },

  Delete2: function(req, res){
    Blog.findByIdAndUpdate({_id: req.params._id},{$set: { review: "This post has been removed due to the violation of the terms and conditions of use of this website." }, overwrite: true}, function (err){
      if (err) { throw err };
      res.status(201).redirect('back');
    })
  }
};
module.exports = BlogController;
