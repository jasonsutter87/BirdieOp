const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const index = require('./app/routes/index');
const course = require('./app/routes/course');
const round = require('./app/routes/round');
const hole = require('./app/routes/hole');
const disc = require('./app/routes/disc');
const user = require('./app/routes/user');
const session = require('express-session')
require('dotenv').config()


//Connect to mongoose
mongoose.connect('mongodb://localhost/BirdieOp')
const db = mongoose.connection;
const router = express.Router()

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(session({secret: process.env.REACT_APP_SECERT_KEY, resave: false, saveUninitialized: true}))
app.use('/', index); // mount the index route at the / path
app.use('/api/courses', course); // mount the index route at the /api/courses path
app.use('/api/rounds', round); // mount the index route at the /api/rounds path
app.use('/api/holes', hole); // mount the index route at the /api/holes path
app.use('/api/discs', disc); // mount the index route at the /api/disc path
app.use('/api/users', user); // mount the index route at the /api/users path
//

app.listen(3000);
console.log('Listing on port 3000...');
