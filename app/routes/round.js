const express = require('express');
const router = express.Router();

//Rounds Models
const Rounds = require('../models/round');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// Rounds Routes
router.get('/', (req, res) => {
	Rounds.getRounds((err, rounds) => {
		if(err){
			throw err;
		}
		res.json(rounds)
	})
});
router.post('/', (req, res) =>  {
	let round = req.body;
	Rounds.addRound(round, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
router.get('/:_id', (req, res) => {
	Rounds.getRoundById(req.params._id, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const round = req.body;
	Rounds.updateRound(id, round, {}, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Rounds.removeRound(id, function(err, round){
		if(err){
			throw err;
		}
		res.json(round)
	})
});

module.exports = router;
