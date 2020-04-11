var User = require('../models/user');
var Films = require('../models/films');
var Cart = require('../models/cart');

var CheckoutController = {
  Checkout: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
          Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
            Cart.find().populate('film').exec(function(err, cart) {
              Cart.countDocuments({user:req.session.userId}, (err, count) => {
                console.log( "Number of docs: ", count );
                if (count) res.render('checkout/index', { films: films, users: users, cartusers: cartusers, cart: cart, count: count });
                else res.send(err);
                console.log( "Number of docs: ", count );
                console.log(req.session.userId);
                console.log(users);

            })
          });
        })
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

   Payment: function(req, res){
     User.find({_id: req.session.userId}, function(err,users) {
       if (err) { throw err; }
       Cart.find().populate('user').exec(function(err, cart) {
       Cart.remove({user: req.session.userId}, function(err){
         if (err) { throw err; }
         res.status(201).redirect('/checkout/thank_you');
       })
       })
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
};

module.exports = CheckoutController;
