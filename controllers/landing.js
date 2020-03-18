var Films = require('../models/films');
var LandingController = {
  Index: function(req, res) {
      res.render('landing/index');
  },
};

module.exports = LandingController;
