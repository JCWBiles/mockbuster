var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let FilmSchema = new Schema({
  id: String,
  name: String,
  genres: Array,
  actors: Array,
  directors: Array,
  date: { type: Date },
  price: Number,
});

var Film = mongoose.model('Films', FilmSchema);

module.exports = Film;
