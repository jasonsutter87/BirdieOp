const express = require('express');
const router = express.Router();

//Hole Models
const Holes = require('../models/hole');

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

/** Get Holes */
router.get('/', (req, res) => {
	Holes.getHoles((err, holes) => {
		if(err){
			throw err;
		}
		res.json(holes)
	})
});

/** Create a new Hole */
router.post('/', (req, res) =>  {
	let hole = req.body;
	Holes.addHole(hole, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});

/** Get Hole by ID */
router.get('/:_id', (req, res) => {
	Holes.getHoleById(req.params._id, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});

/** Update Hole by ID */
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const hole = req.body;
	Holes.updateHole(id, hole, {}, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});

/** Delete Hole by ID */
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Holes.removeHole(id, function(err, hole){
		if(err){
			throw err;
		}
		res.json(hole)
	})
});

module.exports = router;
