var Films = require('../models/films');
var User = require('../models/user');

<<<<<<< HEAD
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})

var UserController = {
  Index: function(req, res) {
    res.status(201).render('films/index');
  },
};

=======
>>>>>>> 91530a2409c3036c498a3b6499d9464e29c1e228
var FilmsController = {
  Index: function(req, res) {
    // console.log('INDEX Running')
    // Films.find(function(err, films){
    //   if (err) {throw err}
    //   res.render('films/index', { films: films});
    // })
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
      if (err) { throw err; }
      res.render('films/index', {  films: films, users: users });
      console.log(req.session.userId);
    })
  });
},



//
A_to_E: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^A/, /^B/,/^C/, /^D/,/^E/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/a_to_e', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},

F_to_J: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^F/, /^G/,/^H/, /^I/,/^J/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/f_to_j', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},

K_to_O: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^K/, /^L/,/^M/, /^N/,/^O/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/k_to_o', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},

P_to_T: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^P/, /^Q/,/^R/, /^S/,/^T/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/p_to_t', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},

U_to_Z: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^U/, /^V/,/^W/, /^X/,/^Y/,/^Z/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/u_to_z', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},

Zero_to_Nine: function(req, res){
  User.find({_id: req.session.userId}, function(err,users) {
    if (err) { throw err; }
    Films.find(({ name: { $in: [ /^0/, /^1/,/^2/, /^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/] } }), function(err, films) {
      if (err) { throw err; }
      res.render('films/zero_to_nine', {  films: films, users: users });
      console.log(req.session.userId);
    })
  })
},


  Action: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
        if (err) { throw err; }
        Films.find(({"genres":{"$in":["Action"]}}), function(err, films) {
          if (err) { throw err; }
      res.render('films/action', { films:films, users:users })
    })
  })
  },

  Biopic: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
        if (err) { throw err; }
        Films.find(({"genres":{"$in":["Biopic"]}}), function(err, films) {
          if (err) { throw err; }
          res.render('films/biopic', { films:films, users:users })
      })
    })
  },

  Comedy: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Comedy"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/comedy', { films:films, users:users })
      })
    })
  },

  Crime: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Crime"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/crime', { films:films, users:users })
      })
    })
  },

  Drama: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Drama"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/drama', { films:films, users:users })
      })
    })
  },

  Fantasy: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Fantasy"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/fantasy', { films:films, users:users })
      })
    })
  },

  History: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["History"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/history', { films:films, users:users })
      })
    })
  },

  Horror: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Horror"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/horror', { films:films, users:users })
      })
    })
  },

  Kids: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Kids"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/kids', { films:films, users:users })
      })
    })
  },

  Legal: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Legal"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/legal', { films:films, users:users })
      })
    })
  },

  Musical: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Musical"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/musical', { films:films, users:users })
      })
    })
  },

  Romance: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Romance"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/romance', { films:films, users:users })
      })
    })
  },

  Sports: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Sports"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/sports', { films:films, users:users })
      })
    })
  },

  Superhero: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Superhero"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/superhero', { films:films, users:users })
      })
    })
  },

  Thriller: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Thriller"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/thriller', { films:films, users:users })
      })
    })
  },

  War: function(req, res) {

    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["War"]}}), function(err, films) {
        if (err) { throw err; }
        res.render('films/war', { films:films, users:users })
      })
    })
  }
};
module.exports = UserController;
module.exports = FilmsController;
