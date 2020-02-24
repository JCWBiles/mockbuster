const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var BasketController = {
  Index: function(req, res) {

    pool.query('INSERT INTO basket', (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/index', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  module.exports = BasketController;
