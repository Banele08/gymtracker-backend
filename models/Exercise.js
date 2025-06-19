const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);