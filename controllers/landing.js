var pg = require ('pg');
var config = ('../config');
var films = require('../models/films')
var app = require('../app')

var LandingController = {
  Index: function(req, res) {
    // var config = {
    //   user: 'student',
    //   host: 'localhost',
    //   database: 'mockbuster_test',
    //   password: null,
    //   port: 3000,
    // }
    //
    // var pool = new pg.Pool(config);
    // pool.on('connect', () => {
    //   console.log('connected to the Database');
    // })
    // pool.query('SELECT * FROM films', (error, res) => {
    //   if (error) {
    //     throw error
    //   }
    // })

    var pool = new pg.Pool()

    pool.connect(function (err, client, done) {
      if (err) {
        console.log("Can not connect to the DB" + err);
      }
      res.render('landing/index', { films: [{name: "Parasite"}] })

      client.query('SELECT * from films', function (err, res) {
        done();
        if (err) {throw err};
        console.log(res);
      })
    })
  }
}

module.exports = LandingController;
