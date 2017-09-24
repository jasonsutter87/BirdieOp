const mongoose = require('mongoose');

// Course Schema
const courseSchema = mongoose.Schema({
	name:{
		type: String
	},
	rating:{
		type: Number
	},
	difficulty:{
		type: String
	},
	description:{
		type: String
	},
	lat:{
		type: Number
	},
	lng:{
		type: Number
	},
	course_avg:{
		type: Number
	},
	players_course_avg:{
		type: Number
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Course = module.exports = mongoose.model('Course', courseSchema);

//Course Controller
module.exports.getCourses = (callback, limit) => {
	Course.find(callback).limit(limit);
}

module.exports.getCoursesById = (id, callback) => {
	Course.findById(id, callback);
}

module.exports.addCourse = (course, callback) => {
	Course.create(course, callback);
}

module.exports.updateCourse = (id, course, options, callback) => {
	let query = { _id: id};
	let update = {
		name: course.name,
		rating: course.rating,
		difficulty: course.difficulty,
		description: course.description,
		lat: course.lat,
		lng: course.lng,
		course_avg: course.course_avg,
		players_course_avg: course.players_course_avg


	}
	Course.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeCourse = (id, callback) => {
	let query = { _id: id};
	Course.remove(query, callback);
}
