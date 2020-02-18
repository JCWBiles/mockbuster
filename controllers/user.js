var User = require('../models/user');
var bcrypt = require('bcrypt');

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var UserController = {
  Index: function(req, res) {
    res.status(201).render('user/index');
  },


  Create: function(req, res) {
    var { first_name, last_name, email, password } = req.body
    pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, password], (error, result) => {
      if (error) {
        throw error
      }
      res.status(201).redirect('/films')
      // res.status(200).json(results.rows)
    })
  },

  Login: function(req, res) {
    res.status(201).render('login/index');
  },

  Authenticate: function(req, res) {
    var { email } = req.body.email
    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, users) => {
      
      if (users) {
        bcrypt.compare(req.body.password, users.password, function (err, result) {
          if (result == true) {
            req.session.userId = users.id;
            console.log(req.session.userId)
            res.redirect('/films');
          }
          else {
            console.log('wrong password');

            res.status(201).redirect('/')
          }
        })
      }
      else{
        console.log('wrong email');
        res.status(201).redirect('/')
      }
    })
  },

  Logout: function(req, res) {
    console.log(req.session.userId)
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        throw err;
      }
      else
      {
        res.status(201).redirect('/');
      }
    });
  }
};

module.exports = UserController;
