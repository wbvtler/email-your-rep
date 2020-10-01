const express = require('express');

const router = express.Router();

// @route     GET api/reps
// @desc      Get all reps
// @access    Public
router.get('/', (req, res) => {
  res.send('Get all reps');
});

module.exports = router;
