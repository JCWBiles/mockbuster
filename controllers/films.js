var Films = require('../models/films');
var pool = require('../config')

var FilmsController = {
  Index: function(req, res) {

    pool.query('SELECT * FROM films', (error, res) => {
      if (error) {
        throw error
      }
      res.render('films/index', { films: films });
      console.log('films showing!');
    })
  },

  Genre1: function(req, res) {

    pool.query("SELECT * FROM films  WHERE 'Thriller' = ANY ('genres')", (error, res) => {
      if (error) {
        throw error
      }
      res.render('films/index', { films: films });
      console.log('films showing!');
    })
  },

  Genre2: function(req, res) {

    pool.query("SELECT * FROM films  WHERE 'Drama' = ANY ('genres')", (error, res) => {
      if (error) {
        throw error
      }
      res.render('films/drama', { films: films });
      console.log('films showing!');
    })
  },

  Genre3: function(req, res) {

    pool.query("SELECT * FROM films  WHERE 'Action' = ANY ('genres')", (error, res) => {
      if (error) {
        throw error
      }
      res.render('films/index', { films: films });
      console.log('films showing!');
    })
  },
}

module.exports = FilmsController;
