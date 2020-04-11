var Films = require('../models/films');
var User = require('../models/user');
var Cart = require('../models/cart');

var FilmsController = {

  Index: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err };
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          Cart.find().populate('film').exec(function(err, cart){
            if (err) { throw err };
            Cart.aggregate([ {
              $unwind: '$film'},
              {$group: {
                _id: null,
                total: {
                  $sum: "$film.price"
                }
              }
            } ] , function(err, total){
              res.render('films/index', {  films: films, users: users, cart: cart, cartusers: cartusers, total:total});
              console.log( "Total price : ", total );
              console.log(req.session.userId);
            })
          })
        })
      })
    });
  },

  // Create: function(req, res) {
  //   var films = new Films({
  //     name: req.body.name,
  //     genres: req.body.genres,
  //     actors: req.body.actors,
  //     directors: req.body.directors,
  //     date: req.body.date,
  //     price: req.body.price,
  //     imageUrl: req.body.imageUrl,
  //     description: req.body.description,
  //     trailerUrl: req.body.trailerUrl,
  //     modal: req.body.modal,
  //   });
  //   console.log(req.body.modal);
  //   console.log(req.body.date);
  //   films.save(function(err) {
  //     if (err) { throw err; }
  //     else {
  //
  //       res.status(201).redirect('/employee/em_film_lib')
  //     }
  //   })
  // },

  A_to_E: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^A/, /^B/,/^C/, /^D/,/^E/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/a_to_e', {  films: films, users: users, cartusers: cartusers });
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },

  F_to_J: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^F/, /^G/,/^H/, /^I/,/^J/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/f_to_j', {  films: films, users: users, cartusers: cartusers});
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },

  K_to_O: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^K/, /^L/,/^M/, /^N/,/^O/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/k_to_o', {  films: films, users: users, cartusers: cartusers });
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },

  P_to_T: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^P/, /^Q/,/^R/, /^S/,/^T/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/p_to_t', {  films: films, users: users, cartusers: cartusers});
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },

  U_to_Z: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^U/, /^V/,/^W/, /^X/,/^Y/,/^Z/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/u_to_z', {  films: films, users: users, cartusers: cartusers });
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },

  Zero_to_Nine: function(req, res){
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({ name: { $in: [ /^0/, /^1/,/^2/, /^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/] } }), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/zero_to_nine', {  films: films, users: users, cartusers: cartusers });
          console.log(req.session.userId);
        })
      }).sort( { name: 1 });
    })
  },


  Action: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Action"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/action', { films:films, users: users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Biopic: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Biopic"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/biopic', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Comedy: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Comedy"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/comedy', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Crime: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Crime"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/crime', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Drama: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Drama"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/drama', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Fantasy: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Fantasy"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/fantasy', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  History: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["History"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/history', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Horror: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Horror"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/horror', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Kids: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Kids"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/kids', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Legal: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Legal"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/legal', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Musical: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Musical"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/musical', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Romance: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Romance"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/romance', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Sports: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Sports"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/sports', { films:films, users:users, cartusers:cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Superhero: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Superhero"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/superhero', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Thriller: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["Thriller"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/thriller', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  War: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(({"genres":{"$in":["War"]}}), function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render('films/war', { films:films, users:users, cartusers: cartusers })
        })
      }).sort( { name: 1 });
    })
  },

  Autocomplete: function(req, res, next){
    var regex = new RegExp(req.query["term"], 'i');
    var filmFilter = Films.find({name: regex}, {'name': 1}).limit(20);
    filmFilter.exec(function(err, data){
      console.log(data);
      var result = [];
      if(!err){
        if(data && data.length && data.length > 0){
          data.forEach(film =>{
            let obj = {
              id: film._id,
              label: film.name
            };
            result.push(obj);
          });
          res.jsonp(result)
        }
      }
    })

  },

  Search: function(req, res, next){
    User.find({_id: req.session.userId}, function(err,users) {
      var noMatch = null;
      if(req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        // Get all films from DB
        Films.find({name: regex}, function(err, allFilms){
          if(err){
            console.log(err);
          } else {Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
            if(allFilms.length < 1) {
              noMatch = "No films match that query, please try again.";
            }
            res.render("films/search",{films:allFilms, noMatch: noMatch, users:users, cartusers: cartusers});
          })
        }

      });
    } else {
      // Get all films from DB
      Films.find({}, function(err, allFilms){
        if(err){
          console.log(err);
        } else {Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          res.render("films/search",{films:allFilms, noMatch: noMatch, users:users, cartusers: cartusers});
        })
      }
    });
  }
});
},
};
function escapeRegex(text){
  return text.replace(/[-[\]{}()*+?.,\\^$!#\s]{}]/g, "\\$&");
}

module.exports = FilmsController;
