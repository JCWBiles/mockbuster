var Films = require('../models/films');
var LandingController = {
  Index: function(req, res) {
    Films.find(function(err, films) {
    if (err) { throw err; }
    res.render('landing/index', { films: films});
  })
  }
};

module.exports = LandingController;
