const mongoose = require('mongoose');

// Hole Schema
const holeSchema = mongoose.Schema({
	hole_number:{
		type: Number
	},
  par:{
		type: Number
	},
  stroke_count:{
		type: Number
	},
  discs_thrown:{
		type: Array
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Hole = module.exports = mongoose.model('Hole', holeSchema);

//Hole Controller
module.exports.getHoles = (callback, limit) => {
	Hole.find(callback).limit(limit);
}

module.exports.getHolesById = (id, callback) => {
	Hole.findById(id, callback);
}

module.exports.addHole = (hole, callback) => {
	Hole.create(hole, callback);
}

module.exports.updateHole = (id, hole, options, callback) => {
	let query = { _id: id};
	let update = {
		name: hole.name
	}
	Hole.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeHole = (id, callback) => {
	let query = { _id: id};
	Hole.remove(query, callback);
}
