var Employee = require('../models/employee');
var bcrypt = require('bcrypt');

var EmployeeController = {
  Index: function(req, res){
    res.status(201).render('employee/index');
  },

  Create: function(req, res){
    var employee = new Employee({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      employee_number:  req.body.employee_number,
      password: req.body.password,
    });

    employee.save(function(err) {
      if (err) { throw err; }
      else {
        res.status(201).redirect('/films')
      }
  })
},

  NewPassword: function(req, res){
    User.findOneAndUpdate({_id: req.params._id}, {$set: { password: req.body.password }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/employee/login');
    });
  },

  Login: function(req, res) {
    res.status(201).render('employee/login');
  },

  Authenticate: function(req, res) {
    Employee.findOne({employee_number: req.body.employee_number}, function(err,employee){
      if (employee) {
        bcrypt.compare(req.body.password, employee.password, function (err, result) {
          if (result == true) {
            req.session.employeeId = employee._id;
            console.log(req.session.employeeId)
            res.redirect('/films');
          }
          else {
            console.log('wrong password');

            res.status(201).redirect('/')
          }
        })
      }
      else {
        console.log('wrong email');
        res.status(201).redirect('/')
      }
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
    Employee.find({_id: req.session.employeeId}, function(err,employee){
      if (err) {
        throw err
      }
      res.status(201).render('account/index', { employee: employee })
    });
  },



  EditFirst: function(req, res){
    Employee.findOneAndUpdate({_id: req.params._id}, {$set: { firstname: req.body.firstname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },

  EditLast: function(req, res){
    Employee.findOneAndUpdate({_id: req.params._id}, {$set: { lastname: req.body.lastname }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },

  EditEmployeeNumber: function(req, res){
    Employee.findOneAndUpdate({_id: req.params._id}, {$set: { email: req.body.email }, overwrite: true} , function(err){
      if (err) { throw err; }
      res.status(201).redirect('/account');
    });
  },
};

module.exports = EmployeeController;
