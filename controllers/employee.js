var Employee = require('../models/employee');
var Films = require('../models/films');
var Message = require('../models/message');
var Feedback = require('../models/feedback');
var Blog = require('../models/blog');
var bcrypt = require('bcrypt');

var EmployeeController = {

  Create: function(req, res){
    var employee = new Employee({
      em_first_name: req.body.em_first_name,
      em_last_name: req.body.em_last_name,
      employee_number:  req.body.employee_number,
      em_email: req.body.em_email,
      em_address_line1: req.body.em_address_line1,
      em_address_line2: req.body.em_address_line2,
      em_address_city: req.body.em_address_city,
      em_address_postcode: req.body.em_address_postcode,
      em_tel: req.body.em_tel,
      staff_id: req.body.staff_id,
      password: req.body.password,
    });
    employee.save(function(err) {
      if (err) { throw err; }
      else {
        res.status(201).redirect('/manager/completed')
      }
    })
  },

  Login: function(req, res) {
    res.status(201).render('employee/index');
  },

  Authenticate: function(req, res) {
    Employee.findOne({employee_number: req.body.employee_number}, function(err,employees){
      if (employees) {
        console.log(employees.employee_number)
        bcrypt.compare(req.body.password, employees.password, function (err, result) {
          if (result == true) {
            req.session.employeeId = employees._id;
            console.log(req.session.employeeId)
            res.redirect('/employee/change');
          }
          else {
            console.log('wrong password');
            req.session.sessionFlash = {
              type: 'info',
              message: 'Incorrect password, please try again'
            }
            res.status(201).redirect('/employee')
          }
        })
      }
      else {
        console.log('wrong employee number');
        req.session.sessionFlash = {
          type: 'info',
          message: 'Incorrect employee number, please try again'
        }
        res.status(201).redirect('/employee')
      }
    });
  },

  Change: function(req, res) {
    Employee.find({_id: req.session.employeeId}, function(err, employees) {
      if (err) { throw err; }
      res.render('employee/change', { employees: employees });
      console.log(req.session.employeeId);
    });
  },

  NewPassword: function(req, res){
    // retrieve the password field
    var password = req.body.password
    // update it with hash
    bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err){
        return(err);
      }
      req.body.password = hash;
      Employee.findOneAndUpdate({_id: req.params._id}, {$set: { password: req.body.password }, overwrite: true} , function(err, employee){
        if (err) { throw err; }
        res.status(201).redirect('/employee/em_hub')
      })
    });
  },

  Em_Hub: function(req, res) {
    Employee.find({_id: req.session.employeeId}, function(err,employees){
      console.log(req.session.employeeId);
      if (err) {
        throw err
      };
      Feedback.find(function(err, feedback){
        if (err){throw err};
        res.status(201).render('employee/em_hub', { feedback: feedback, employees:employees })
      })
    });
  },

  Logout: function(req, res) {
    console.log(req.session.employeeId)
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
    Employee.find({_id: req.session.employeeId}, function(err,employees){
      console.log(req.session.employeeId);
      if (err) {
        throw err
      }
      res.status(201).render('employee/account', { employees: employees })
    });
  },

  RequestUpdate: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err,employees){
      console.log(req.session.employeeId);
      if (err) {
        throw err
      }
      res.status(201).render('employee/update', { employees: employees });
    });
  },

  EmFilmLib: function(req, res) {
    Employee.find({_id: req.session.employeeId}, function(err,employees) {
      if (err) { throw err; }
      Films.find(function(err, films) {
        if (err) { throw err; }
        res.render('employee/em_film_lib', {  films: films, employees: employees });
        console.log(req.session.employeeId);
      })
    });
  },

  EmFilmCreation: function(req, res) {
    Employee.find({_id: req.session.employeeId}, function(err,employees){
      if (err) {
        throw err
      }
      res.status(201).render('employee/em_film_creation', { employees: employees })
    });
  },
  //
  // EmEditFilm: function(req, res){
  //   Films.findOneAndUpdate({_id: req.params._id}, {$set: { name: req.body.name, genres: req.body.genres, actors: req.body.actors, directors: req.body.directors, date: req.body.date, price: req.body.price, description: req.body.description }, overwrite: true} , function(err, film){
  //     if (err) { throw err; }
  //     res.status(201).redirect('/employee/em_film_lib');
  //   });
  // },

  EmDeleteFilm: function(req, res){
    Films.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err; }
      res.status(201).redirect('/employee/em_film_lib');
    })
  },

  Message: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err,employees){
      console.log(req.session.employeeId);
      if (err) {
        throw err
      }
      var message = new Message({
        message: {
          em_first_name: req.body.em_first_name,
          em_last_name: req.body.em_last_name,
          employee_number:  req.body.employee_number,
          em_email: req.body.em_email,
          em_address_line1: req.body.em_address_line1,
          em_address_line2: req.body.em_address_line2,
          em_address_city: req.body.em_address_city,
          em_address_postcode: req.body.em_address_postcode,
          em_tel: req.body.em_tel,
        },
        staff_id: req.body.staff_id,
        password: req.body.password,
        employee: req.body.employeeId

      });
      message.save(function(err) {
        if (err) { throw err; }
        else {
          console.log('request sent');
          req.session.sessionFlash = {
            type: 'success',
            message: 'Request Sent!'
          }
          console.log(message);
          res.status(201).redirect('/employee/update')
        }
      })
    })
  },

  Feedback: function (req, res){
    Employee.find({_id: req.session.employeeId}, function(err, employees){
      if (err) { throw err }
      Feedback.find().populate('user').exec(function (err, feedback) {
        if (err) { throw err };
        Feedback.countDocuments({movieSuggestion: {$ne: null} }, (err, countSug) => {
          console.log( "Number of docs: ", countSug );
          Feedback.countDocuments({complaint: {$ne: null} }, (err, countCom) => {
            console.log( "Number of docs: ", countCom );
            if (countCom) res.render('employee/feedback', { feedback: feedback, employees: employees, countSug:countSug, countCom: countCom });
            else res.send(err);
            console.log(req.session.employeeId);
          });
        });
      });
    });
  },

  Suggestion: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err, employees){
      if (err) { throw err }
      Feedback.find({"movieSuggestion":{$ne:null}}).populate('user').exec(function (err, feedback) {
        if (err) { throw err };
        res.status(201).render('employee/suggestions', { feedback: feedback, employees: employees })
      })
    })
  },

  Complaint: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err, employees){
      if (err) { throw err }
      Feedback.find({"complaint":{$ne:null}}).populate('user').exec(function (err, feedback) {
        if (err) { throw err };
        res.status(201).render('employee/complaints', { feedback: feedback, employees: employees })
      })
    })
  },

  IndividualFeedback: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err, employees){
      if (err) { throw err }
      Feedback.findByIdAndUpdate({_id: req.params._id}, {$set: { read: true }, overwrite: true}).populate('user').exec(function (err, feedback) {
        if (err) { throw err };
        res.status(201).render('employee/individualfeedback', { feedback: feedback, employees: employees })
      })
    })
  },

  DeleteFeedback: function(req, res){
    Employee.find({_id: req.session.employeeId}, function(err, employees){
      if (err) { throw err }
      Feedback.findByIdAndRemove({_id: req.params._id}, function(err, feedback){
        if (err) { throw err }
        res.status(201).redirect('back')
      })
    })
  },

  Blog: function(req, res) {
    console.log(req.query);
    Employee.find({_id: req.session.employeeId}, function(err, employees) {
      if (err) { throw err; }
      Blog.find().populate('user').sort( { date: -1 } ).exec(function(err, blog) {
        if (err) { throw err; }
        res.render('employee/blog', { qs:req.query, blog: blog, employees: employees});
        console.log(req.session.employeeId);
      })
    });
  },

  BlogDelete: function(req, res){
    Blog.findByIdAndRemove({_id: req.params._id}, function(err){
      if (err) { throw err };
      res.status(201).redirect('back');
    })
  },

  BlogDelete2: function(req, res){
    Blog.findByIdAndUpdate({_id: req.params._id},{$set: { review: "This post has been removed due to the violation of the terms and conditions of use of this website." }, overwrite: true}, function (err){
      if (err) { throw err };
      res.status(201).redirect('back');
    })
  },
};

module.exports = EmployeeController;
