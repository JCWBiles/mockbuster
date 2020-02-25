var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var UserSchema = new mongoose.Schema({
  // user_id: String,
  id: String,
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  dateCreated: { type: Date, default: Date.now },
});

//authenticating
UserSchema.statics.authenticate = function(email, password, callback){
  User.findOne({email: email})
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
UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  })
});

var User = mongoose.model('Users', UserSchema);

module.exports = User;
