var Employee = require('../models/employee');
var Message = require('../models/message');
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
            res.status(201).redirect('/employee')
          }
        })
      }
      else {
        console.log('wrong employee number');
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
    }
    res.status(201).render('employee/em_hub', { employees: employees })
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
        console.log(message);
        res.status(201).redirect('/employee/completed')
      }
  })
})
},

Completed: function(req, res){
  Employee.find({_id: req.session.employeeId}, function(err,employees){
    if (err) {
      throw err
    }
    res.status(201).render('employee/completed', { employees: employees })
  });
}
};

module.exports = EmployeeController;
