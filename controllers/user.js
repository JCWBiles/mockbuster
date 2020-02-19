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

//   Create: function(req, res) {
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash(req.password), 10, function(err, hash) {
//       if (err) {
//         return next(err);
//       }
//       users.password = hash;
//       next();
//       var { first_name, last_name, email, password } = req.body
//       pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, password], (err, res) => {
//         if (err) {
//           throw err
//         }
//         else {
//           res.status(201).redirect('/films')
//         }
//     })
//   }
// })
// },

// Create: function(req, res, email, password) {
//
//   bcrypt.genSalt(saltCount, function(err, salt) {
//             bcrypt.hash(password, salt, function(err, hash) {
//               var { first_name, last_name, email, password } = req.body
//                 pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, password], (err, res) => {
//                   if (err) {
//                         throw err
//                       }
//                       else {
//                         res.status(201).redirect('/films')
//                       }
//
//                 })
//             });
//         });
// },

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
      res.status(201).redirect('/films')
      // res.status(200).json(results.rows)
    })
  },

  Login: function(req, res) {
    res.status(201).render('login/index');
  },

  Authenticate: async (req, res) => {
    var  { email, password } = req.body;

    var foundUser = pool.query(`SELECT * FROM users WHERE email = '${email}'`, (error, users) => {
      console.log(email)


      if (users) {
        console.log(users)
        var compare = await(bcrypt.compare(password, foundUser.rows[0]['password']), function (err, result) {
          if (compare == true) {
            console.log(result)
            res.session('email', foundUser.rows[0]['email'])
            // req.session.userId = users.id;
            // console.log(req.session.userId)
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
