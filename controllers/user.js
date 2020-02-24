var users = require('../models/user');
var bcrypt = require('bcrypt');
var session = require('express-session');

var saltCount = 10;

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
  Create: async (req, res) => {
    var { first_name, last_name, email, password } = req.body;
     // first_name: req.body.first_name
     // last_name: req.body.last_name
     // email: req.body.email
     // password: req.body.password
    let hashedPassword = await bcrypt.hash(password, 10)
    newUser = pool.query(`INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}','${last_name}', '${email}', '${hashedPassword}') RETURNING *`, (error, user) => {
      console.log(first_name)
      console.log(last_name)
      console.log(email)
      console.log(password)
      if (error) {
        throw error
      }
      else {
        user.id = req.session.id
        console.log(user.id)
        res.status(201).redirect('/films')
      }

    //   var api_key = 'YOUR API KEY';
    //   var domain = 'YOUR DOMAIN';
    //   var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    //
    //   var data = {
    //     from: 'MockBuster <mockbuster2020@gmail.com>',
    //     to: req.body.email,
    //     subject: 'Welcome to MockBuster!',
    //     text: 'You're all signed up! We hope you enjoy our incredible library of films. To start viewing, please go to localhost:3000.'
    //   };
    //
    //   mailgun.messages().send(data, function (error, body) {
    //     if (error){
    //       console.log(error);
    //     }
    //     console.log(body);
    //   });
    //
    })
  },

  Login: function(req, res) {
    users.id = req.session.id
    res.status(201).render('login/index');
  },
  Authenticate: async function (req, res) {
    var  {email, password } = req.body;
    var foundUser = await pool.query(`SELECT * FROM users WHERE email = '${email}' `);
      console.log(email)
      // if(!foundUser){
      //   console.log('wrong email')
      //   res.status(201).redirect('/');
      // }
      var compare = await(bcrypt.compare(password, foundUser.rows[0]['password']))
          if (compare === true) {
            res.cookie('email', foundUser.rows[0]['email'])
              // req.session.userId = user.id;
              // console.log(req.session.userId)
            res.redirect('/films');

          }
          else {
            console.log('wrong password');
            res.status(201).redirect('/')
          }
  },

  Logout: function(req, res) {
    res.clearCookie('email');
    req.session.destroy();
    res.status(201).redirect('/');
    console.log('session destroyed')
  },

  Account: function(req, res){
    users.id = req.session.id
    pool.query(`SELECT * FROM users`, (error, users ) => {
      if (error) {
        throw error
      }
      res.status(201).render('account/index', { users: users.rows })
    });
  },


// Edit: function(req,res){
//   var id = parseInt(req.params.id)
//   console.log(id)
//   var first_name = req.body.first_name
//   var last_name = req.body.last_name
//   var email = req.body.email
//   console.log(first_name)
//   pool.query(
//     `UPDATE users SET first_name = ${req.body.first_name}, last_name = ${req.body.last_name}, email = ${req.body.email} WHERE id = ${id}`,
//     [first_name, last_name, email, id],
//     (error, results) => {
//       console.log(first_name)
//       if (error) {
//         throw error
//       }
//       res.status(201).redirect('/account');
//     });
// },

  Edit: function(req, res){
    console.log('EDIT Running')
    users.id = req.session.id
    console.log(users.id)
      var id = req.params.id
      console.log(req.params.id)
      var { first_name } = req.body
      console.log(first_name)
      pool.query(`UPDATE users SET first_name = '${first_name}' WHERE id = '${id}' RETURNING id, first_name, last_name, email`, (err, result) => {

      if (err) { throw err }

      console.log("finished update");
      res.status(201).redirect('/account');
    });
  },

  Delete: function(req, res){
    users.id = req.session.id
    var id = parseInt(req.params.id)
    pool.query(`DELETE * FROM users WHERE id = '${id}'`, (error, result) => {
      if (error) {
        throw error
      }
      console.log(`User deleted with ID: ${id}`)
      res.status(201).redirect('/')
    });
  }
};
module.exports = UserController;
