const express = require('express');
const router = express.Router();
const {encryptUserPassword} = require('../helpers/users');

//User Models
const Users = require('../models/user');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

/** Headers. */
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/** Get Users. */
router.get('/', (req, res) => {
	Users.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users)
	})
});

/** Create User. */
router.post('/', (req, res) =>  {
	let user = req.body;
  /**
    * Finds users email
    * @param {email} x - users email
    */
  Users.findOne({ 'email': user.email }, function (err, userCheck) {
    if(!userCheck){
      user.password_hash = encryptUserPassword(user.password_hash)
    	Users.addUser(user, (err, newUser) => {
    		if(err){
    			throw err;
    		}
    		res.json(newUser)
    	})
    }else{
      res.send('User already exist');
    }
  });
});

/** Get User by ID */
router.get('/:_id', (req, res) => {
	Users.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});

/** Update User by ID */
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const user = req.body;
	Users.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});

/** Delete User by ID */
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Users.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user)
	})
});

module.exports = router;
