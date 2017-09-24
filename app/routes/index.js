const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Birdie OP home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birdies')
})

module.exports = router;
