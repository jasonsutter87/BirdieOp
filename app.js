const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Courses = require('./models/course');

//Connect to mongoose
mongoose.connect('mongodb://localhost/BirdieOp')
const db = mongoose.connection;


app.get('/', (req, res) => {
	res.send('Please use /api/courses');
});

app.get('/api/courses', (req, res) => {
	Courses.getCourses((err, courses) => {
		if(err){
			throw err;
		}
		res.json(courses)
	})
});
app.post('/api/courses', (req, res) =>  {
	let course = req.body;
	Courses.addCourse(course, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});

app.get('/api/courses/:_id', (req, res) => {
	Courses.getCoursesById(req.params._id, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});

app.put('/api/courses/:_id', (req, res) => {
	const id = req.params._id;
	const course = req.body;
	Courses.updateCourse(id, course, {}, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});


app.delete('/api/courses/:_id', (req, res) => {
	const id = req.params._id;
	Courses.removeCourse(id, (err, course) => {
		if(err){
			throw err;
		}
		res.json(course)
	})
});


app.listen(3000);
console.log('Listing on port 3000...');
