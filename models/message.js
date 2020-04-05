var mongoose = require('mongoose');


var MessageSchema = new mongoose.Schema({
  id: String,
  name: String,
  message: String,
  dateCreated: { type: Date, default: Date.now },
  read: Boolean,
  employee: {type: mongoose.ObjectId,
  ref: "Employees"}
});



var Message = mongoose.model('Messages', MessageSchema);

module.exports = Message;
