var Manager = require('../models/manager');
var Employee = require('../models/employee');
var Message = require('../models/message');
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
            req.session.sessionFlash = {
              type: 'info',
              message: 'Incorrect password, please try again'
            }
            console.log('wrong password');
            res.status(201).redirect('/manager')
          }
        })
      }
      else {
        req.session.sessionFlash = {
          type: 'info',
          message: 'Incorrect password, please try again'
        }
        console.log('wrong email');
        res.status(201).redirect('/manager')
      }
    });
  },

  Hub: function(req,res) {
    Manager.find({_id: req.session.managerId}, function(err,managers){
      if (err) {throw err;}
      Message.find(function(err, messages) {
        if (err) { throw err; }
      res.status(201).render('manager/hub', {messages: messages, managers: managers })
    })
    });
  },

  HR: function(req, res) {
    Manager.find({_id: req.session.managerId}, function(err,managers) {
      if (err) { throw err; }
      Employee.find(function(err, employees) {
        if (err) { throw err; }
        res.render('manager/hr', {  managers: managers, employees: employees });
        console.log(req.session.managerId);
      })
    });
  },

  EditEmployee: function(req, res){
    Employee.findOneAndUpdate({_id: req.params._id}, {$set: { em_first_name: req.body.em_first_name, em_last_name: req.body.em_last_name, em_email: req.body.em_email }, overwrite: true} , function(err, employee){
      if (err) { throw err; }
      res.status(201).redirect('/manager/hr');
    });
  },

  // EditEmLastName: function(req, res){
  //   Employee.findOneAndUpdate({_id: req.params._id}, {$set: { em_last_name: req.body.em_last_name }, overwrite: true} , function(err, employee){
  //     if (err) { throw err; }
  //     res.status(201).redirect('/manager/hr');
  //   });
  // },

  // EditEmEmail: function(req, res){
  //   Employee.findOneAndUpdate({_id: req.params._id}, {$set: { em_email: req.body.em_email }, overwrite: true} , function(err, employee){
  //     if (err) { throw err; }
  //     res.status(201).redirect('/manager/hr');
  //   });
  // },

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

  Message: function (req, res){
    Manager.find({_id: req.session.managerId}, function(err, managers){
      if (err) { throw err }
      Message.find(function(err, messages){
        if (err) { throw err }
        res.status(201).render('manager/messages', { messages: messages, managers: managers })
        console.log(messages)
      })
    })
  },

  Message: function (req, res){
    Manager.find({_id: req.session.managerId}, function(err, managers){
      if (err) { throw err }
      Message.find().populate('employee').exec(function (err, messages) {
        if (err) { throw err };
        res.status(201).render('manager/messages', { messages: messages, managers: managers })
  });
    })
  },

  IndividualMsg:function(req, res){
    Manager.find({_id: req.session.managerId}, function(err, managers){
      if (err) { throw err }
      Message.findById({_id: req.params._id}).populate('employee').exec(function (err, messages) {
        if (err) { throw err };
        res.status(201).render('manager/individualmsg', { messages: messages, managers: managers })
      })
    })
  },

  DeleteMsg: function(req, res){
    Manager.find({_id: req.session.managerId}, function(err, managers){
      if (err) { throw err }
      Message.findByIdAndRemove({_id: req.params._id}, function(err, messages){
        if (err) { throw err }
        res.status(201).redirect('/manager/messages')
      })
    })
  },

};

module.exports = ManagerController;
