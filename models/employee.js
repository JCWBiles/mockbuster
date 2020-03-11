var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  employee_number: Number,
  password: String,
});

//authenticating
EmployeeSchema.statics.authenticate = function(employee_number, password, callback){
  Employee.findOne({employee_number: employee_number})
  .exec(function(err,user){
    if(err) {
      return callback(err)
    } else if (!user) {
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result){
      if (result === true) {
        return callback(null, user);
      } else{
        return callback();
      }
    })
  });
}

//hashing password
EmployeeSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  })
});
var Employee = mongoose.model('Employees', EmployeeSchema);

module.exports = Employee;
