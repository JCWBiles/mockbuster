var mongoose = require('mongoose');


var MessageSchema = new mongoose.Schema({
  id: String,
  name: String,
  message: String,
  dateCreated: { type: Date, default: Date.now },
  read: Boolean,
  user: {type: mongoose.ObjectId,
  ref: "Users"}
});



var Message = mongoose.model('Messages', MessageSchema);

module.exports = Message;
