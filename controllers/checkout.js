var User = require('../models/user');


var CheckoutController = {
  Index: function(req, res) {
    req.session.userId = user._id
    res.status(201).render('checkout/index');
  },

  Send: function(req, res) {
      User.findOneAndUpdate({_id: req.params._id}, {$set: { first_line: req.body.first_line, second_line: req.body.second_line, town: req.body.town, post_code: req.body.post_code, card_holder: req.body.card_holder, month: req.body.month, year: req.body.year, cvc: req.body.cvc  }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }

     res.status(201).redirect('checkout/thank_you');
     })
   },

   Thank_You: function(req, res) {
     // req.session.userId = user._id
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
