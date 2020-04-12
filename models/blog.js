var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BlogSchema = new Schema({
  id: String,
  movie: String,
  review: String,
  user: { type: mongoose.ObjectId,
  ref: "Users" },
  date: { type: Date, default: Date.now }
});

var Blog = mongoose.model('Blogs', BlogSchema);

module.exports = Blog;
