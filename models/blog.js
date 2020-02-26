var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BlogSchema = new Schema({
  id: String,
  movie: String,
  review: String,
  user: String,
  date: { type: Date, default: Date.now }
});

var Blog = mongoose.model('Blogs', BlogSchema);

module.exports = Blog;
