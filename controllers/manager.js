var Manager = require('../models/films');
var ManagerController = {
  Index: function(req, res) {
      res.render('manager/index');
  }
};

module.exports = ManagerController;
