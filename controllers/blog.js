var Blog = require('../models/blog');
var User = require('../models/user');
var Employee = require('../models/employee');
var Manager = require('../models/manager');

var BlogController = {
  Index: function(req, res) {
    console.log(req.query);
    if (req.session.userId) {
      User.find({_id: req.session.userId}, function(err, users) {
        if (err) { throw err; }
        Blog.find(function(err, blog) {
          if (err) { throw err; }
          res.render('blog/index', { qs:req.query, blog: blog, users: users});
          console.log(req.session.userId);
        }).sort( { date: -1 } );
      });
    }else if (req.session.employeeId) {
      Employee.find({_id: req.session.employeeId}, function(err, employees) {
        if (err) { throw err; }
        Blog.find(function(err, blog) {
          if (err) { throw err; }
          res.render('blog/index', { qs:req.query, blog: blog, employees: employees});
          console.log(req.session.employeeId);
        }).sort( { date: -1 } );
      });
    }else {
      Manager.find({_id: req.session.managerId}, function(err, managers) {
        if (err) { throw err; }
        Blog.find(function(err, blog) {
          if (err) { throw err; }
          res.render('blog/index', { qs:req.query, blog: blog, managers: managers});
          console.log(req.session.managerId);
        }).sort( { date: -1 } );
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
          user: req.body.user,

        });
        console.log(req.body.movie);
        console.log(req.session.userId);

        blog.save(function(err) {
          if (err) { throw err; }

          res.redirect('/blog');
        })
      })
    },

    Delete: function(req, res){
      Blog.findByIdAndRemove({_id: req.params._id}, function(err){
        if (err) { throw err; }
        res.status(201).redirect('/blog');
      })
    },
};
module.exports = BlogController;
