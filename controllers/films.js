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

};
module.exports = FilmsController;
