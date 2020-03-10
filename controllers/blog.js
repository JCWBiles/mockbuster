var Blog = require('../models/blog');
var User = require('../models/user');

var BlogController = {
  Index: function(req, res) {
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
};
module.exports = BlogController;
