const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send('Birdie OP home page')
})
// define the login route
router.post('/login', function (req, res) {
  let email = req.body.email;
  // let password = req.body.password;
  User.findOne({email:email}, function(err, user){
    if(err){
      return res.status(500).send('log in failed');
    }

    if(!user){
      return res.status(404).send('No user found');
    }
    req.session.user = user;
    return res.status(200).send('You have been logged in');
  })

})

// define the logout route
router.get('/logout', function (req, res) {
  req.session.destroy(function(err) {
  })
  res.send('You have been logout')
})

// define the dashboard route
router.get('/dashboard', function (req, res) {
  // res.send('dashboard')
  if(!req.session.user){
    return res.status(404).send('Sign in to view desktop');
  }
  return res.status(200).send('Desktop');
})

module.exports = router;
