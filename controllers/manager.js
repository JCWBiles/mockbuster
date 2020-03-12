var Manager = require('../models/films');
var ManagerController = {
  Index: function(req, res) {
      res.render('manager/index');
  },

  Completed: function(req, res) {
    res.render('manager/completed');
  }
};

module.exports = ManagerController;
