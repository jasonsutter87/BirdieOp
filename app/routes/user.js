const express = require('express');
const router = express.Router();

//User Models
const Users = require('../models/user');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// User Routes
router.get('/', (req, res) => {
	Users.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users)
	})
});
router.post('/', (req, res) =>  {
	let user = req.body;
	Users.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});
router.get('/:_id', (req, res) => {
	Users.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});
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
