const express = require('express');
const router = express.Router();
const session = require('express-session');
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const {encryptUserPassword} = require('../helpers/users');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// home page route
router.get('/', function (req, res) {
  res.send('Birdie OP home page')
})

// login route
router.post('/login', function (req, res) {
  let email = req.body.email;

  /**
    * Finds the the users email
    * @param {email} x - users email
    */
  User.findOne({email: email}, function(err, user){
    if(err){
      return res.status(500).send('log in failed');
    }
    if(!user){
      return res.status(404).send('No user found');
    }
    req.session.user = user;
    let password = req.body.password;
    /**
      * Checks if the users plain text password is equaled to the hash version.
      * @param {password} x - users plain text password
      * @param {session_password_hash} x - users hash password
      */
    bcrypt.compare(password, req.session.user.password_hash, function(err, res2) {
        if(res2 == true){
          return res.status(200).send('You have been logged in');
        }else{
          return res.status(500).send('Email or Password is incorrect');
        }
    });
  })
})

// logout route
router.get('/logout', function (req, res) {
  req.session.destroy(function(err) {
  })
  res.send('You have been logout')
})

// dashboard route
router.get('/dashboard', function (req, res) {
  if(!req.session.user){
    return res.status(404).send('Sign in to view desktop');
  }
  return res.status(200).send('Desktop');
})

module.exports = router;
