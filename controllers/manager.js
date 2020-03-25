var Manager = require('../models/manager');
var bcrypt = require('bcrypt');

// var Manager = require('../models/films');

var ManagerController = {
  Index: function(req, res) {
      res.render('manager/index');
  },

  Create: function(req, res) {
    var manager = new Manager({
      man_firstname: req.body.man_firstname,
      man_lastname: req.body.man_lastname,
      man_email: req.body.man_email,
      man_password: req.body.man_password,
    });
    console.log(req.body.man_firstname);
    console.log(req.body.man_email);
    manager.save(function(err) {
      if (err) { throw err; }
      else {
        req.session.managerId = manager._id;
        res.status(201).redirect('/manager/login')
      }

      // var api_key = '';
      // var domain = '';
      // var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
      //
      // var data = {
      //   from: 'MockBuster <mockbuster2020@gmail.com>',
      //   to: req.body.email,
      //   subject: 'Welcome to MockBuster!',
      //   text: `You're all signed up! We hope you enjoy our incredible library of films.`
      // };
      //
      // mailgun.messages().send(data, function (error, body) {
      //   if (error){
      //     console.log(error);
      //   }
      //   console.log(body);
      // });
    });

  },

  Login: function(req, res) {
    res.status(201).render('manager/login');
  },

  Authenticate: function(req, res) {
    Manager.findOne({man_email: req.body.man_email}, function(err,manager){
      if (manager) {
        bcrypt.compare(req.body.man_password, manager.man_password, function (err, result) {
          if (result == true) {
            req.session.managerId = manager._id;
            console.log(req.session.managerId)
            res.redirect('/manager/hub');
          }
          else {
            console.log('wrong password');

            res.status(201).redirect('/manager')
          }
        })
      }
      else {
        console.log('wrong email');
        res.status(201).redirect('/manager')
      }
    });
  },

  Hub: function(req,res) {
    Manager.find({_id: req.session.managerId}, function(err,managers){
      if (err) {
        throw err
      }
      res.status(201).render('manager/hub', { managers: managers })
    });
  },

  Staff_Creation: function(req,res) {
    Manager.find({_id: req.session.managerId}, function(err,managers){
      if (err) {
        throw err
      }
      res.status(201).render('manager/staff_creation', { managers: managers })
    });
  },

  Logout: function(req, res) {
    console.log(req.session.managerId)
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
    Manager.find({_id: req.session.managerId}, function(err,managers){
      if (err) {
        throw err
      }
      res.status(201).render('manager/account', { managers: managers })
    });
  },

  Delete: function(req, res){
    Manager.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/manager');
    })
  },


  EditManFirst: function(req, res){
    Manager.findOneAndUpdate({_id: req.params._id}, {$set: { man_firstname: req.body.man_firstname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/manager/account');
    });
  },

  EditManLast: function(req, res){
    Manager.findOneAndUpdate({_id: req.params._id}, {$set: { man_lastname: req.body.man_lastname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/manager/account');
    });
  },

  EditManEmail: function(req, res){
    Manager.findOneAndUpdate({_id: req.params._id}, {$set: { man_email: req.body.man_email }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/manager/account');
    }); 
  },

  Completed: function(req, res) {
    Manager.find({_id: req.session.managerId}, function(err,managers){
      if (err) {
        throw err
      }
      res.status(201).render('manager/completed', { managers: managers })
    });
  },
};

module.exports = ManagerController;
