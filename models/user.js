var pg= require('pg');
// var db = require('./config');
var bcrypt = require('bcrypt');

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
  bcrypt.genSalt(saltCount, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      var users = this
      if (err) {
              return next(err);
            }
            this.password = hash;
            next();
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
  })
})
  };

    module.exports = {
      createUser,
      pool,
    }
