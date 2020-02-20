var Films = require('../models/films');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var FilmsController = {
  Index: function(req, res) {

    pool.query('SELECT * FROM films ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/index', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Horror: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Horror' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/horror', { films:results })
      // res.status(200).json(results.rows)
    })
  }

};
module.exports = FilmsController;
