// store some data in the db

// imports
const mongoose = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');

// read from file and make array
f = new File([], 'voters.txt')

connect(); // database time
