var pg= require('pg');
// var db = require('./config');
var db = require('../config');

var config = {
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 3000,
}

var pool = new pg.Pool(config);
pool.on('connect', () => {
  console.log('connected to the Database');
})

var createUser = () => {
  var users = `CREATE TABLE users IF NOT EXISTS(id SERIAL PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE, password VARCHAR(120) NOT NULL,
    created_on DATE NOT NULL DEFAULT CURRENT_DATE,
    payment_id INTEGER REFERENCES payments(id),
    film_id INTEGER REFERENCES films(id));`;
    pool.query(users)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });


    module.exports = {
      createUser,
      pool,
    }
  };
// var pg = require('pg');
// var bcrypt = require('bcrypt');
//
//
//
// pool.query("INSERT INTO users(first_name, last_name, email, password, created_on, payment_id, film_id) VALUES('#{ first_name}', '#{last_name}', '#{email}', '#{encrypted_password}') RETURNING id, name, username, email;")
// User.new(id: result[0]['id'], first_name: result[0]['first_name'], last_name: result[0]['last_name'], email: result[0]['email']);
//
//
//
// //authenticating
// UserSchema.statics.authenticate = function(email, password, callback){
//   User.findOne({email: email})
//   .exec(function(err,user){
//     if(err) {
//       return callback(err)
//     } else if (!user) {
//       err.status = 401;
//       return callback(err);
//     }
//     bcrypt.compare(password, user.password, function(err, result){
//       if (result === true) {
//         return callback(null, user);
//       } else{
//         return callback();
//       }
//     })
//   });
// }
//
// //hashing password
// UserSchema.pre('save', function(next){
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash){
//     if(err){
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
//
// var User = pg.model('Users', UserSchema);
//
// module.exports = User;
