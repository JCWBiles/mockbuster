var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BlogCommentSchema = new Schema({
  blog: { type: mongoose.ObjectId,
  ref: "Blogs" },
  comment: String,
  user: { type: mongoose.ObjectId,
  ref: "Users" },
  date: { type: Date, default: Date.now }
});

var BlogComment = mongoose.model('BlogComments', BlogCommentSchema);

module.exports = BlogComment;
