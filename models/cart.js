var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
  id: String,
  film: {type: mongoose.ObjectId,
  ref: "Films"},
  user: { type: mongoose.ObjectId,
  ref: "Users" }
});



var Cart = mongoose.model('Carts', CartSchema);

module.exports = Cart;
