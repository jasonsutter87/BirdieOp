const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Courses = require('./models/course');
Rounds = require('./models/round');
Holes = require('./models/hole');
Discs = require('./models/disc');
Users = require('./models/user');

//Connect to mongoose
mongoose.connect('mongodb://localhost/BirdieOp')
const db = mongoose.connection;


app.get('/', (req, res) => {
	res.send('Please use endpoint: /api/courses');
});

// Courses Routes
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
	Courses.removeCourse(id, function(err, course){
		if(err){
			throw err;
		}
		res.json(course)
	})
});


// Rounds Routes
app.get('/api/rounds', (req, res) => {
	Rounds.getRounds((err, rounds) => {
		if(err){
			throw err;
		}
		res.json(rounds)
	})
});
app.post('/api/rounds', (req, res) =>  {
	let round = req.body;
	Rounds.addRound(round, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
app.get('/api/rounds/:_id', (req, res) => {
	Rounds.getRoundById(req.params._id, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
app.put('/api/rounds/:_id', (req, res) => {
	const id = req.params._id;
	const round = req.body;
	Rounds.updateRound(id, round, {}, (err, round) => {
		if(err){
			throw err;
		}
		res.json(round)
	})
});
app.delete('/api/rounds/:_id', (req, res) => {
	const id = req.params._id;
	Rounds.removeRound(id, function(err, round){
		if(err){
			throw err;
		}
		res.json(round)
	})
});


// Hole Routes
app.get('/api/holes', (req, res) => {
	Holes.getHoles((err, holes) => {
		if(err){
			throw err;
		}
		res.json(holes)
	})
});
app.post('/api/holes', (req, res) =>  {
	let hole = req.body;
	Holes.addHole(hole, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});
app.get('/api/holes/:_id', (req, res) => {
	Holes.getHoleById(req.params._id, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});
app.put('/api/holes/:_id', (req, res) => {
	const id = req.params._id;
	const hole = req.body;
	Holes.updateHole(id, hole, {}, (err, hole) => {
		if(err){
			throw err;
		}
		res.json(hole)
	})
});
app.delete('/api/holes/:_id', (req, res) => {
	const id = req.params._id;
	Holes.removeHole(id, function(err, hole){
		if(err){
			throw err;
		}
		res.json(hole)
	})
});

// Disc Routes
app.get('/api/discs', (req, res) => {
	Discs.getDiscs((err, discs) => {
		if(err){
			throw err;
		}
		res.json(discs)
	})
});
app.post('/api/discs', (req, res) =>  {
	let disc = req.body;
	Discs.addDisc(disc, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
app.get('/api/discs/:_id', (req, res) => {
	Discs.getDiscById(req.params._id, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
app.put('/api/discs/:_id', (req, res) => {
	const id = req.params._id;
	const disc = req.body;
	Discs.updateDisc(id, disc, {}, (err, disc) => {
		if(err){
			throw err;
		}
		res.json(disc)
	})
});
app.delete('/api/discs/:_id', (req, res) => {
	const id = req.params._id;
	Discs.removeDisc(id, function(err, disc){
		if(err){
			throw err;
		}
		res.json(disc)
	})
});


// User Routes
app.get('/api/users', (req, res) => {
	Users.getUsers((err, users) => {
		if(err){
			throw err;
		}
		res.json(users)
	})
});
app.post('/api/users', (req, res) =>  {
	let user = req.body;
	Users.addUser(user, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});
app.get('/api/users/:_id', (req, res) => {
	Users.getUserById(req.params._id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});
app.put('/api/users/:_id', (req, res) => {
	const id = req.params._id;
	const user = req.body;
	Users.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user)
	})
});
app.delete('/api/users/:_id', (req, res) => {
	const id = req.params._id;
	Users.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user)
	})
});

app.listen(3000);
console.log('Listing on port 3000...');
