const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  exercise: { type: String, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true },
  weight: { type: Number },
  date: { type: Date, default: Date.now },
  category: { type: String }
});

module.exports = mongoose.model('Workout', WorkoutSchema);
