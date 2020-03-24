var User = require('../models/user');
var Films = require('../models/films');
var CheckoutController = {
  Checkout: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        res.render('checkout/index', {  films: films, users: users });
        console.log(req.session.userId);
      })
    });
  },

  EditPay: function(req, res) {
      User.findOneAndUpdate({_id: req.params._id}, {$set: { address_first_line: req.body.address_first_line, address_second_line: req.body.address_second_line, address_town: req.body.address_town, address_post_code: req.body.address_post_code, card_holder: req.body.card_holder, card_number: req.body.card_number, expiration_month: req.body.expiration_month, expiration_year: req.body.expiration_year, cvc: req.body.cvc  }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }

     res.status(201).redirect('/checkout/thank_you');
     })
   },

   Thank_You: function(req, res) {
     User.find({_id: req.session.userId}, function(err,users) {
       if (err) { throw err; }
       res.render('checkout/thank_you', {  users: users });
       console.log(req.session.userId);
     })
  
     // Send order confirmation email

  //    var api_key = '';
  //    var domain = '';
  //    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  //    var data = {
  //      from: 'MockBuster <mockbuster2020@gmail.com>',
  //      to: 'parkermakers@gmail.com',
  //      subject: 'Order confirmed',
  //      text: 'Thank you for your order! We hope you have a premium viewing experience!'
  //    };

  //    mailgun.messages().send(data, function (error, body) {
  //      if (error){
  //        console.log(error);
  //      }
  //      console.log(body);
  //    });

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
   var noMatch = null;
       if(req.query.search) {
           const regex = new RegExp(escapeRegex(req.query.search), 'gi');
           // Get all films from DB
           Films.find({name: regex}, function(err, allFilms){
              if(err){
                  console.log(err);
              } else {
                 if(allFilms.length < 1) {
                     noMatch = "No films match that query, please try again.";
                 }
                 res.render("films/search",{films:allFilms, noMatch: noMatch});
              }
           });
       } else {
           // Get all films from DB
           Films.find({}, function(err, allFilms){
              if(err){
                  console.log(err);
              } else {
                 res.render("films/search",{films:allFilms, noMatch: noMatch});
              }
           });
       }
      //  User.find({_id: req.session.userId}, function(err,users){
      //   if (err) {
      //     throw err
      //   }
      //   res.status(201).render('films/search', { users: users })
      // });
      //      User.find({_id: req.session.userId}, function(err,users) {
      // if (err) { throw err; }
      //  res.render('films/search', { users:users })
      // })
 },
};
function escapeRegex(text){
 return text.replace(/[-[\]{}()*+?.,\\^$!#\s]{}]/g, "\\$&");
}

module.exports = CheckoutController;
