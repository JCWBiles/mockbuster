var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let ChatSchema = new Schema({
  id: String,
  name: String,
  message : String,
  user: { type: mongoose.ObjectId,
  ref: "Users" },
  date: { type: Date, default: Date.now }
});

var Chat = mongoose.model('Chats', ChatSchema);

module.exports = Chat;
