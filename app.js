const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

Courses = require('./models/course');

//Connect to mongoose
mongoose.connect('mongodb://localhost/BirdieOp')
const db = mongoose.connection;


app.get('/', function(req, res) {
	res.send('Please use /api/courses');
});

app.get('/api/courses', function(req, res) {
	Courses.getCourses(function(err, courses){
		if(err){
			throw err;
		}
		res.json(courses)
	})
});

app.listen(3000);
console.log('Listing on port 3000...');