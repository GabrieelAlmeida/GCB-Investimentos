
const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

//Connecting DB;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gcb', {useNewUrlParser: true, useUnifiedTopology: true});

//Importing All Models;
requireDir('./src/models/');

//Using Routes;
app.use('/api', require('./src/routes'));

app.listen(3001);