const express = require('express');
const router = express.Router();

//Course Models
const Courses = require('../models/course');

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

/** Get Courses */
router.get('/', function (req, res) {
	Courses.getCourses((err, courses) => {
		if(err){
			throw err;
		}
		res.json(courses)
	})
});

/** Create a new Course */
router.post('/', (req, res) =>  {
	let course = req.body;
	Courses.addCourse(course, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});

/** Get a Course by ID */
router.get('/:_id', (req, res) => {
	Courses.getCoursesById(req.params._id, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});

/** Update a Course by ID */
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

/** Delete a Course by ID */
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
