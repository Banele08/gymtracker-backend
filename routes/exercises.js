const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

// GET all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;