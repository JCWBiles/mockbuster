var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
mongoose.set('useCreateIndex', true);

var ManagerSchema = new mongoose.Schema({
  id: String,
  man_firstname: String,
  man_lastname: String,
  man_email: String,
  man_password: String,
});

//authenticating
ManagerSchema.statics.authenticate = function(man_email, man_password, callback){
  Manager.findOne({man_email: man_email})
  .exec(function(err,manager){
    if(err) {
      return callback(err)
    } else if (!manager) {
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(man_password, manager.man_password, function(err, result){
      if (result === true) {
        return callback(null, manager);
      } else{
        return callback();
      }
    })
  });
}

//hashing password
ManagerSchema.pre('save', function(next){
  var manager = this;
  bcrypt.hash(manager.man_password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    manager.man_password = hash;
    next();
  })
});

var Manager = mongoose.model('Managers', ManagerSchema);

module.exports = Manager;
