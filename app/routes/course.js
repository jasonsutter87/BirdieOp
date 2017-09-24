const express = require('express');
const router = express.Router();

//Course Models
const Courses = require('../models/course');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  next()
})

// Courses Routes
router.get('/', function (req, res) {
	Courses.getCourses((err, courses) => {
		if(err){
			throw err;
		}
		res.json(courses)
	})
});
router.post('/', (req, res) =>  {
	let course = req.body;
	Courses.addCourse(course, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});
router.get('/:_id', (req, res) => {
	Courses.getCoursesById(req.params._id, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const course = req.body;
	Courses.updateCourse(id, course, {}, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Courses.removeCourse(id, function(err, course){
		if(err){
			throw err;
		}
		res.json(course)
	})
});

module.exports = router;
