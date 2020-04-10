User = require('../models/user')
var VideoController = {
  Index: function(req, res) {
    User.find({_id: req.session.userId}, function(err, users) {
      if (err) { throw err; }
      res.render('videochat/index', {users:users});
    });
  },
};

module.exports = VideoController;
