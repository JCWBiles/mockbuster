// var Films = require('../models/films');
// var User = require('../models/user');
//
// var BasketController = {
//   Index: function(req, res) {
//     User.find({_id: req.session.userId}, function(err,users) {
//       if (err) { throw err; }
//       Films.find(function(err, films) {
//         if (err) { throw err; }
//         res.render('films/index', {  films: films, users: users });
//         console.log(req.session.userId);
//       })
//     });
//   },
//
//   module.exports = BasketController;
