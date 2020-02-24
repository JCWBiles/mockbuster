var checkout = require('../models/checkout');
var bcrypt = require('bcrypt');
var saltCount = 10;
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'mockbuster_test',
  port: 5432,
})
var CheckoutController = {
  Index: function(req, res) {
    res.status(201).render('checkout/index');
  },

  Thank_You: function(req, res) {
    // Send order confirmation email

    // var api_key = 'XXxxxxxxxxxxxxxxxxxxxxxxxxxxXX';
    // var domain = 'XXXXXX';
    // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    //
    // var data = {
    //   from: 'MockBuster <mockbuster2020@gmail.com>',
    //   to: req.body.email,
    //   subject: 'Order confirmed',
    //   text: 'Thank you for your order'
    // };
    //
    // mailgun.messages().send(data, function (error, body) {
    //   if (error){
    //     console.log(error);
    //   }
    //   console.log(body);
    // });


    res.status(201).render('checkout/thank_you');
  },

};









module.exports = CheckoutController;
