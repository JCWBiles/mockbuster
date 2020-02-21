var films = require('../models/films');
var flash = require('express-flash-messages');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var LandingController = {
  Index: function(req, res) {

    pool.query('SELECT * FROM films', (error, films) => {
      if (error) {
        throw error
      }
      res.render('landing/index', { films: films })
      // console.log(films);
      // res.status(200).json(results.rows)
    })
  }
};


module.exports = LandingController;
