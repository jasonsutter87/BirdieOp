const express = require('express');
const router = express.Router();

//disc Models
const Discs = require('../models/disc');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// Disc Routes
router.get('/', (req, res) => {
	Discs.getDiscs((err, discs) => {
		if(err){
			throw err;
		}
		res.json(discs)
	})
});
router.post('/', (req, res) =>  {
	let disc = req.body;
	Discs.addDisc(disc, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
router.get('/:_id', (req, res) => {
	Discs.getDiscById(req.params._id, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const disc = req.body;
	Discs.updateDisc(id, disc, {}, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Discs.removeDisc(id, function(err, disc){
		if(err){
			throw err;
		}
		res.json(disc)
	})
});

module.exports = router;
