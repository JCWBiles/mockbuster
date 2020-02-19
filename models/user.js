//
// var pg = require('pg');
// var bcrypt = require('bcrypt');
//
//
//
// pool.query("INSERT INTO users(first_name, last_name, email, password, created_on, payment_id, film_id) VALUES('#{ first_name}', '#{last_name}', '#{email}', '#{encrypted_password}') RETURNING id, name, username, email;")
// User.new(id: result[0]['id'], first_name: result[0]['first_name'], last_name: result[0]['last_name'], email: result[0]['email']);
//
//
//
// //authenticating
// UserSchema.statics.authenticate = function(email, password, callback){
//   User.findOne({email: email})
//   .exec(function(err,user){
//     if(err) {
//       return callback(err)
//     } else if (!user) {
//       err.status = 401;
//       return callback(err);
//     }
//     bcrypt.compare(password, user.password, function(err, result){
//       if (result === true) {
//         return callback(null, user);
//       } else{
//         return callback();
//       }
//     })
//   });
// }
//
// //hashing password
// UserSchema.pre('save', function(next){
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash){
//     if(err){
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
//
// var User = pg.model('Users', UserSchema);
//
// module.exports = User;
