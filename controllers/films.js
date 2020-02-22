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
      res.render('films/index', { films: results })
    })
  },

  Action: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Action' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/action', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Biopic: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Biopic' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/biopic', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Comedy: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Comedy' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/comedy', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Crime: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Crime' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/crime', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Drama: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Drama' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/drama', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Fantasy: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Fantasy' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/fantasy', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  History: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'History' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/history', { films:results })
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
  },

  Kids: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Kids' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/kids', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Legal: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Legal' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/legal', { films:results })

      // res.status(200).json(results.rows)
    })
  },

  Musical: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Musical' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/musical', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Romance: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Romance' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/romance', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Sports: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Sports' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/sports', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Superhero: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Superhero' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/superhero', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  Thriller: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'Thriller' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/thriller', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  War: function(req, res) {

    pool.query(`SELECT * FROM films WHERE 'War' = ANY ("genres")`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/war', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  A_to_E: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE 'A%' OR name LIKE 'B%' OR name LIKE 'C%' OR name LIKE 'D%' OR name LIKE 'E%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/a_to_e', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  F_to_J: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE 'F%' OR name LIKE 'G%' OR name LIKE 'H%' OR name LIKE 'I%' OR name LIKE 'J%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/f_to_j', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  K_to_O: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE 'K%' OR name LIKE 'L%' OR name LIKE 'M%' OR name LIKE 'N%' OR name LIKE 'O%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/k_to_o', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  P_to_T: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE 'P%' OR name LIKE 'Q%' OR name LIKE 'R%' OR name LIKE 'S%' OR name LIKE 'T%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/p_to_t', { films:results })
      // res.status(200).json(results.rows)
    })
  },

  U_to_Z: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE 'U%' OR name LIKE 'V%' OR name LIKE 'W%' OR name LIKE 'X%' OR name LIKE 'Y%' OR name LIKE 'Z%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/u_to_z', { films:results })
       // res.status(200).json(results.rows)
    })
  },

  Zero_to_Nine: function(req, res) {

    pool.query(`SELECT * FROM films WHERE name LIKE '0%' OR name LIKE '1%' OR name LIKE '2%' OR name LIKE '3%' OR name LIKE '4%' OR name LIKE '5%' OR name LIKE '6%' OR name LIKE '7%' OR name LIKE '8%' OR name LIKE '9%' ORDER BY name ASC`, (error, results) => {
      if (error) {
        throw error
      }
      res.render('films/zero_to_nine', { films:results })
      // res.status(200).json(results.rows)
    })
  },

};
module.exports = FilmsController;
