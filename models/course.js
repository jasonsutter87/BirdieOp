const mongoose = require('mongoose');

// Course Schema

const courseSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	rating:{
		type: Number,
		required: true
	},
	hole_count:{
		type: Number,
		required: true
	},
	course_avg:{
		type: Number,
		required: true
	},
	played:{
		type: Boolean,
		required: true
	},
	lat:{
		type: Number,
		required: true
	},
	lng:{
		type: Number,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
})

const Course = module.exports = mongoose.model('Course', courseSchema);




module.exports.getCourses = function(callback, limit){
	Course.find(callback).limit(limit);
}