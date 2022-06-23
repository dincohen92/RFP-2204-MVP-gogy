const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gogy');

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connecting to database gogy');
});

db.once('open', () => {
  console.log('connected to database gogy');
});

const projectSchema = mongoose.Schema({
  name: String,
  description: String,
  instructions: String,
  groupSize: Number,
  age: Number,
  coverPhoto: String,
  materials: Array,
  tools: Array,
  hazards: Array,
  reviews: Array,
  photos: Array,
  verified: Boolean,
  featured: Boolean,
  flagged: Boolean,
});

// const reviewSchema = mongoose.Schema({
//   rating: Number,
//   summary: String,
//   body: String,
//   likes: Number,
//   flagged: Boolean
// });

const Project = mongoose.model('Project', projectSchema);
// const Review = mongoose.model('Review', reviewSchema);

module.exports = Project;
// module.exports = Review;