var mongoose = require('mongoose');

var FeedbackSchema = new mongoose.Schema({
  id: String,
  movieSuggestion: String,
  complaint: String,
  dateCreated: { type: Date, default: Date.now },
  read: {type: Boolean, default: false },
  user: { type: mongoose.ObjectId,
  ref: "Users", required : true }
});



var Feedback = mongoose.model('Feedbacks', FeedbackSchema);

module.exports = Feedback;
