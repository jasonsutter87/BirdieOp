const mongoose = require('mongoose');

// User Schema
const userSchema = mongoose.Schema({
	name:{
		type: String
	},
  email:{
		type: String
	},
  password_hash:{
		type: String
	},
  total_average:{
		type: Number
	},
  total_courses:{
		type: Array
	},
  total_stokes:{
		type: Number
	},
	signed_on:{
		type: Boolean
	},
	site_admin:{
		type: Boolean
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const User = module.exports = mongoose.model('User', userSchema);

//User Controller
module.exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

module.exports.getUserById = (id, callback) => {
	User.findById(id, callback);
}

module.exports.addUser = (user, callback) => {
	User.create(user, callback);
}

module.exports.updateUser = (id, user, options, callback) => {
	let query = { _id: id};
	let update = {
    name: user.name,
    email: user.email,
    password_hash: user.password_hash,
    total_average: user.total_average,
    total_stokes: user.total_stokes,
		site_admin: user.site_admin
	}
	User.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeUser = (id, callback) => {
	let query = { _id: id};
	User.remove(query, callback);
}
