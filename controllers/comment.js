// // var Post = require('../models/post');
// var Comment = require('../models/comment');
// // var session = require('express-session');

// var CommentController = {

//   // Index: function(req, res) {
//   //   Comment.find({_id: req.params._id}, function(err, posts) {
//   //     if (err) { throw err; }
//   //     res.render('posts/comment', { posts: posts })
//   //   })
//   // },

//   Create: function(req, res){
//     var comment = new Comment(req.body);
//     // var user = new User({
//     //   firstname: req.body.firstname,
//     //   lastname: req.body.lastname,
//     //   email: req.body.email,
//     //   password: req.body.password,
//     //   user_id: req.body.user_id
//     // });
//     comment.save(function(err, comment) {
//       if (err) { throw err; }

//       res.status(201).redirect('/posts ', { comment: comment });
//     })
//   }
// };
