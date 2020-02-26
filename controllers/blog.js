var Blog = require('../models/blog');
var User = require('../models/user');

var BlogController = {
  Index: function(req, res) {
    // res.status(201).render('blog/index');
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Blog.find(function(err, blog) {
        if (err) { throw err; }
        res.render('blog/index', {  blog: blog, users: users });
        console.log(req.session.userId);
      }).sort( { date: -1 } );
    });
    },
  
  
    Create: function(req, res) {
      User.find({_id: req.session.userId}, function(err) {
        if (err) { throw err; }
        // console.log('CREATE Running')
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
  
          res.redirect('/blog'); //currently working on attaching user object to blog page.
        })
      })
    },
  
    Delete: function(req, res){
      // console.log('DELETE Running')
      Blog.findByIdAndRemove({_id: req.params._id}, function(err){
        if (err) { throw err; }
        res.status(201).redirect('/blog');
      })
    },
  
    // Change: function(req, res) {
    //   Blog.find({_id: req.params._id}, function(err, blog) {
    //     if (err) { throw err; }
    //     res.render('blog/edit', { blog: blog })
    //   })
    // },
  
    Edit_movie: function(req, res){
      // console.log('EDIT Running')
      // console.log(req.body.review)
      Blog.findOneAndUpdate({_id: req.params._id}, {$set: { movie: req.body.movie }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }
        res.status(201).redirect('/blog');
      });
    },

    Edit_review: function(req, res){
      // console.log('EDIT Running')
      // console.log(req.body.review)
      Blog.findOneAndUpdate({_id: req.params._id}, {$set: { review: req.body.review }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }
        res.status(201).redirect('/blog');
      });
    },
    Edit_user: function(req, res){
      // console.log('EDIT Running')
      // console.log(req.body.review)
      Blog.findOneAndUpdate({_id: req.params._id}, {$set: { user: req.body.user }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }
        res.status(201).redirect('/blog');
      });
    },
    // Comment: function(req, res){
    //   Blog.find({_id: req.params._id}, function(err, blog) {
    //     if (err) { throw err; }
    //     res.render('blog/comment', { blog: blog })
    //   })
    // },

};
module.exports = BlogController;
