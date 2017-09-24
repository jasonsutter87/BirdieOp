const mongoose = require('mongoose');

// Round Schema
const roundSchema = mongoose.Schema({
	course:{
		type: String
	},
  friends:{
		type: Array
	},
  users_score:{
    type: Number
  },
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Round = module.exports = mongoose.model('Round', roundSchema);

//Round Controller
module.exports.getRounds = (callback, limit) => {
	Round.find(callback).limit(limit);
}

module.exports.getRoundsById = (id, callback) => {
	Round.findById(id, callback);
}

module.exports.addRound = (round, callback) => {
	Round.create(round, callback);
}

module.exports.updateRound = (id, round, options, callback) => {
	let query = { _id: id};
	let update = {
		name: round.name
	}
	Round.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeRound = (id, callback) => {
	let query = { _id: id};
	Round.remove(query, callback);
}
