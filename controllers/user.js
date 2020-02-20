var users = require('../models/user');
var bcrypt = require('bcrypt');
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
    let hashedPassword = await bcrypt.hash(password, 10)
    pool.query(`INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}','${last_name}', '${email}', '${hashedPassword}')`, (error, result) => {
      console.log(first_name)
      console.log(last_name)
      console.log(email)
      console.log(password)
      if (error) {
        throw error
      }

      // var api_key = '#########';
      // var domain = 's#########';
      // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
      //
      // var data = {
      //   from: 'Mockbuster <zitarosson@gmail.com>',
      //   to: req.body.email,
      //   subject: 'Hello',
      //   text: 'Testing some Mailgun awesomeness!'
      // };
      //
      // mailgun.messages().send(data, function (error, body) {
      //   if (error){
      //     console.log(error);
      //   }
        // console.log(body);
      // });

      res.status(201).redirect('/films')
      // res.status(200).json(results.rows)
    })
  },
  Login: function(req, res) {
    res.status(201).render('login/index');
  },
  Authenticate: async function (req, res) {
    var  { email, password } = req.body;
    var foundUser = await pool.query(`SELECT * FROM users WHERE email = '${email}'`);
      console.log(email)
      var compare = await(bcrypt.compare(password, foundUser.rows[0]['password']))
          if (compare === true) {
            res.cookie('email', foundUser.rows[0]['email'])
            res.redirect('/films');
          }
          else {
            console.log('wrong password');
            res.status(201).redirect('/')
          }
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
