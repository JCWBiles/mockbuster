var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.set('useCreateIndex', true);

var EmployeeSchema = new mongoose.Schema({
  id: String,
  em_first_name: String,
  em_last_name: String,
  employee_number: {type: Number, unique: true },
  em_email: {type: String, required: true},
  password: String,
  imageUrl: String
});

//authenticating
EmployeeSchema.statics.authenticate = function(employee_number, password, callback){
  Employee.findOne({employee_number: employee_number})
  .exec(function(err,employee){
    if(err) {
      return callback(err)
    } else if (!employee) {
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, employee.password, function(err, result){
      if (result === true) {
        return callback(null, employee);
      } else{
        return callback();
      }
    })
  });
}

//hashing password
EmployeeSchema.pre('save', function(next){
  var employee = this;
  bcrypt.hash(employee.password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    employee.password = hash;
    next();
  })
});
var Employee = mongoose.model('Employees', EmployeeSchema);

module.exports = Employee;
