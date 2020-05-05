var User = require('../models/user');
var Films = require('../models/films');
var Cart = require('../models/cart');
var nodemailer = require('nodemailer');

var CheckoutController = {
  Checkout: function(req, res) {
    User.find({_id: req.session.userId}, function(err,users) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        Cart.find({user:req.session.userId}).populate('film').exec(function(err,cartusers){
          Cart.countDocuments({user:req.session.userId}, (err, count) => {
            if (count) res.render('checkout/index', { films: films, users: users, cartusers: cartusers, count: count, href: "/films", iconClass: "fas fa-photo-video" });
            else res.send(err);
            console.log( "Number of docs: ", count );
            console.log(req.session.userId);
            console.log(users);
          })
        })
      })
    });
  },

  EditPay: function(req, res) {
    var email = req.body.email;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    User.findOneAndUpdate({_id: req.params._id}, {$set: { address_first_line: req.body.address_first_line,
      address_second_line: req.body.address_second_line,
      address_town: req.body.address_town,
      address_post_code: req.body.address_post_code,
      card_holder: req.body.card_holder,
      card_number: req.body.card_number,
      expiration_month: req.body.expiration_month,
      expiration_year: req.body.expiration_year,
      cvc: req.body.cvc  }, overwrite: true} , function(err){
        // console.log("finished upodate");
        if (err) { throw err; }
        Cart.find().populate('user').exec(function(err, cart) {
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'mockbuster2020@gmail.com',
              pass: 'xxxxx'
            }
          });

          var mailOptions = {
            from: 'MockBuster <mockbuster2020@gmail.com>',
            to: email,
            subject: `Thank You ${em_first_name}`,
            html: `<head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <style>
            body { font-family: "Roboto", serif; font-size: 0.8rem; font-weight: 400; line-height: 1.4; color: #000000; }
            h1, h2, h4, h5 { font-weight: 700; color: #000000; }
            h1 { font-size: 2rem; }
            h2 { font-size: 1.6rem; }
            h4 { font-size: 1.2rem; }
            h5 { font-size: 1rem; }
            .table { color: #000; }
            .table td, .table th { border-top: 1px solid #000; }
            .table thead th { vertical-align: bottom; border-bottom: 2px solid #000; }

            @page {
              margin-top: 2.5cm;
              margin-bottom: 2.5cm;
            }

            @page :first {
              margin-top: 0;
              margin-bottom: 2.5cm;
            }
            </style>

            </head>
            <body>

            <div style="background-color: #000000; height: 10px;"></div>

            <div class="container-fluid pt-2 pt-md-4 px-md-5">

            <!-- Invoice heading -->

            <table class="table table-borderless">
            <tbody>
            <tr>
            <td class="border-0">
            <div class="row">
            <div class="col-md text-center text-md-left mb-3 mb-md-0">
            <img class="logo img-fluid mb-3" src="https://docamatic.s3-eu-west-1.amazonaws.com/assets/360_logo.png" style="max-height: 140px;"/>
            <br>

            <h2 class="mb-1">MockBuster</h2>
            ${address_first_line}<br>
            ${address_second_line}<br>
            ${address_town}<br>
            ${address_post_code}<br>
             United Kingdom<br>
            info@mockbuster.co.uk / 0208 123 456<br>
            <strong>mockbuster.co.uk</strong>
            </div>

            <div class="col text-center text-md-right">

            <!-- Dont' display Bill To on mobile -->
            <span class="d-none d-md-block">
            <h1>Billed To</h1>
            </span>

            <h4 class="mb-0">${firstname} ${lastname}</h4>

            57 Parkway, 5th Floor<br/>
            New York, NY 10013<br/>
            ${email}<br/>

            <h5 class="mb-0 mt-3" id="date">DATE</h5>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>

            <!-- Invoice items table -->

            <table class="table">
            <thead>
            <tr>
            <th>Summary</th>
            <th class="text-right">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>
            <h5 class="mb-1">Pursuit Running Shoes</h5>
            Men's Pursuit Running Shoes - 10/M
            </td>
            <td class="font-weight-bold align-middle text-right text-nowrap">$149.00 USD</td>
            </tr>
            <tr>
            <td>
            <h5 class="mb-1">Shelby Boots</h5>
            Men's Shelby Leather Boots - 10/M
            </td>
            <td class="font-weight-bold align-middle text-right text-nowrap">$99.00 USD</td>
            </tr>
            <tr>
            <td colspan="2" class="text-right border-0 pt-4"><h5>Total: $248.00 USD</h5></td>
            </tr>
            </table>

            <!-- Thank you note -->

            <h5 class="text-center pt-2">
            Thank you for your custom!
            </h5>
            </div>
            <script>
            var today = new Date();
            document.getElementById('date').innerHTML=today;
            </script>
            </body>`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          Cart.remove({user: req.session.userId}, function(err){
            res.status(201).redirect('/checkout/thank_you');
          })
        })

      })
    },

    Payment: function(req, res){
      var email = req.body.email;
      var firstname = req.body.firstname;
      var lastname = req.body.lastname;
      User.find({_id: req.session.userId, }, function(err,users) {
        if (err) { throw err; }
        console.log(users);
        Cart.find().populate('user').exec(function(err, cart) {
          console.log(email);
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'mockbuster2020@gmail.com',
              pass: 'xxxxx'
            }
          });

          var mailOptions = {
            from: 'MockBuster <mockbuster2020@gmail.com>',
            to: email,
            subject: `Thank You ${firstname}`,
            html: `<head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
            <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <style>
            body { font-family: "Roboto", serif; font-size: 0.8rem; font-weight: 400; line-height: 1.4; color: #000000; }
            h1, h2, h4, h5 { font-weight: 700; color: #000000; }
            h1 { font-size: 2rem; }
            h2 { font-size: 1.6rem; }
            h4 { font-size: 1.2rem; }
            h5 { font-size: 1rem; }
            .table { color: #000; }
            .table td, .table th { border-top: 1px solid #000; }
            .table thead th { vertical-align: bottom; border-bottom: 2px solid #000; }

            @page {
              margin-top: 2.5cm;
              margin-bottom: 2.5cm;
            }

            @page :first {
              margin-top: 0;
              margin-bottom: 2.5cm;
            }
            </style>

            </head>
            <body>

            <div style="background-color: #000000; height: 10px;"></div>

            <div class="container-fluid pt-2 pt-md-4 px-md-5">

            <!-- Invoice heading -->

            <table class="table table-borderless">
            <tbody>
            <tr>
            <td class="border-0">
            <div class="row">
            <div class="col-md text-center text-md-left mb-3 mb-md-0">
            <img class="logo img-fluid mb-3" src="https://docamatic.s3-eu-west-1.amazonaws.com/assets/360_logo.png" style="max-height: 140px;"/>
            <br>

            <h2 class="mb-1">MockBuster</h2>
            787 Fake Street, Fake Town United Kingdom<br>
            info@mockbuster.co.uk / 0208 123 456<br>
            <strong>mockbuster.co.uk</strong>
            </div>

            <div class="col text-center text-md-right">

            <!-- Dont' display Bill To on mobile -->
            <span class="d-none d-md-block">
            <h1>Billed To</h1>
            </span>

            <h4 class="mb-0">${firstname} ${lastname}</h4>

            57 Parkway, 5th Floor<br/>
            New York, NY 10013<br/>
            ${email}<br/>

            <h5 class="mb-0 mt-3" id="date"></h5>
            </div>
            </div>
            </td>
            </tr>
            </tbody>
            </table>

            <!-- Invoice items table -->

            <table class="table">
            <thead>
            <tr>
            <th>Summary</th>
            <th class="text-right">Price</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>
            <h5 class="mb-1">Pursuit Running Shoes</h5>
            Men's Pursuit Running Shoes - 10/M
            </td>
            <td class="font-weight-bold align-middle text-right text-nowrap">$149.00 USD</td>
            </tr>
            <tr>
            <td>
            <h5 class="mb-1">Shelby Boots</h5>
            Men's Shelby Leather Boots - 10/M
            </td>
            <td class="font-weight-bold align-middle text-right text-nowrap">$99.00 USD</td>
            </tr>
            <tr>
            <td colspan="2" class="text-right border-0 pt-4"><h5>Total: $248.00 USD</h5></td>
            </tr>
            </table>

            <!-- Thank you note -->

            <h5 class="text-center pt-2">
            Thank you for your custom!
            </h5>
            </div>
            <script>
            var today = new Date();
            document.getElementById('date').innerHTML=today;
            </script>
            </body>`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
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
        res.render('checkout/thank_you', {  users: users, href: "/films", iconClass: "fas fa-photo-video" });
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
