const mongoose = require('mongoose');

// Disc Schema
const discSchema = mongoose.Schema({
	name:{
		type: String
	},
	manufacture:{
		type: String
	},
	description:{
		type: String
	},
  disc_type:{
		type: String
	},
  speed:{
		type: Number
	},
  glide:{
		type: Number
	},
  turn:{
		type: Number
	},
  fade:{
		type: Number
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Disc = module.exports = mongoose.model('Disc', discSchema);

//Disc Controller
module.exports.getDiscs = (callback, limit) => {
	Disc.find(callback).limit(limit);
}

module.exports.getDiscsById = (id, callback) => {
	Disc.findById(id, callback);
}

module.exports.addDisc = (disc, callback) => {
	Disc.create(disc, callback);
}

module.exports.updateDisc = (id, disc, options, callback) => {
	let query = { _id: id};
	let update = {
		name: disc.name
	}
	Disc.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeDisc = (id, callback) => {
	let query = { _id: id};
	Disc.remove(query, callback);
}
