var User = require('../models/user');
var bcrypt = require('bcrypt');

var UserController = {
  Index: function(req, res) {
    res.render('user/index');
  },

  // Create: function(req, res) {
  //   var user = new User({
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email:  req.body.email,
  //     password: req.body.password,
  //     address_first_line: req.body.address_first_line,
  //     address_second_line: req.body.address_second_line,
  //     address_town: req.body.address_town,
  //     address_post_code: req.body.address_post_code,
  //     card_holder: req.body.card_holder,
  //     card_number: req.body.card_number,
  //     expiration_year: req.body.expiration_year,
  //     expiration_month: req.body.expiration_month,
  //     cvc: req.body.cvc,
  //     imageUrl: req.file.path,
  //
  //   });
  //   console.log(req.body.firstname);
  //   console.log(req.body.email);
  //   user.save(function(err) {
  //     if (err) { throw err; }
  //     else {
  //       req.session.userId = user._id;
  //       res.status(201).redirect('/films')
  //     }
  //
  //     // var api_key = '';
  //     // var domain = '';
  //     // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  //     //
  //     // var data = {
  //     //   from: 'MockBuster <mockbuster2020@gmail.com>',
  //     //   to: req.body.email,
  //     //   subject: 'Welcome to MockBuster!',
  //     //   text: `You're all signed up! We hope you enjoy our incredible library of films.`
  //     // };
  //     //
  //     // mailgun.messages().send(data, function (error, body) {
  //     //   if (error){
  //     //     console.log(error);
  //     //   }
  //     //   console.log(body);
  //     // });
  //   });
  //
  // },

  Login: function(req, res) {

    res.status(201).render('login/index');
  },

  Authenticate: function(req, res) {
    User.findOne({email: req.body.email}, function(err,user){
      if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
          if (result == true) {
            req.session.userId = user._id;
            console.log(req.session.userId)
            res.redirect('/films');
          }
          else {
            console.log('wrong password');

            res.render('login/index', { sessionFlash: res.locals.passworderror });
          }
        })
      }
      else {
        console.log('wrong email');

        res.render('login/index', { sessionFlash: res.locals.emailerror });
      }
    });
  },

  Logout: function(req, res) {
    console.log(req.session.userId)
    req.session.destroy(function(err){
      if(err){
        console.log(err);
        throw err;
      }
      else
      {
        res.status(201).redirect('/');
      }
    })
  },
  Account: function(req, res){
    User.find({_id: req.session.userId}, function(err,users){
      if (err) {
        throw err
      }
      res.status(201).render('account/index', { users: users })
    });
  },

  Delete: function(req, res){
    User.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/');
    })
  },


  EditFirst: function(req, res){
    User.findOneAndUpdate({_id: req.params._id}, {$set: { firstname: req.body.firstname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },

  EditLast: function(req, res){
    User.findOneAndUpdate({_id: req.params._id}, {$set: { lastname: req.body.lastname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },

  EditEmail: function(req, res){
    User.findOneAndUpdate({_id: req.params._id}, {$set: { email: req.body.email }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },

  // EditPic: function(req, res){
  //   User.findOneAndUpdate({_id: req.params._id}, {$set: { imageUrl: req.body.imageUrl }, overwrite: true} , function(err){
  //     if (err) { throw err; }
  //     res.status(201).redirect('/account');
  //   });
  // },

  NewPassword: function(req, res){
    // retrieve the password field
    var password = req.body.password
    // update it with hash
    bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err){
        return(err);
      }
      req.body.password = hash;
      User.findOneAndUpdate({_id: req.params._id}, {$set: { password: req.body.password }, overwrite: true} , function(err){
        if (err) { throw err; }
        res.status(201).redirect('/account')
      })
    });
  },
};

module.exports = UserController;
