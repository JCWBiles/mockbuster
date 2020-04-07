var mongoose = require('mongoose');


var MessageSchema = new mongoose.Schema({
  id: String,
  message: { em_first_name: String,
  em_last_name: String,
  em_email: String,
  em_address_line1: String,
  em_address_line2: String,
  em_address_city: String,
  em_address_postcode: String,
  em_tel: Number },
  dateCreated: { type: Date, default: Date.now },
  read: {type: Boolean, default: false },
  employee: { type: mongoose.ObjectId,
  ref: "Employees", required : true }
});



var Message = mongoose.model('Messages', MessageSchema);

module.exports = Message;
