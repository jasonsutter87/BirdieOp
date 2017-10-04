const express = require('express');
const router = express.Router();

//disc Models
const Discs = require('../models/disc');

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

/** Get Discs */
router.get('/', (req, res) => {
	Discs.getDiscs((err, discs) => {
		if(err){
			throw err;
		}
		res.json(discs)
	})
});

/** Create a new Disc */
router.post('/', (req, res) =>  {
	let disc = req.body;
	Discs.addDisc(disc, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});

/** Get Disc by ID */
router.get('/:_id', (req, res) => {
	Discs.getDiscById(req.params._id, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});

/** Update Disc by ID */
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

/** Delete Disc by ID */
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
