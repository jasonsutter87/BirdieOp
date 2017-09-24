const express = require('express');
const router = express.Router();

//Hole Models
const Holes = require('../models/hole');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// Hole Routes
router.get('/', (req, res) => {
	Holes.getHoles((err, holes) => {
		if(err){
			throw err;
		}
		res.json(holes)
	})
});
router.post('/', (req, res) =>  {
	let hole = req.body;
	Holes.addHole(hole, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});
router.get('/:_id', (req, res) => {
	Holes.getHoleById(req.params._id, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});
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
