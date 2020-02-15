// store some data in the db

// imports
const mongoose = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');
const fs = require('fs');

// read from file and make array
fs.readFile('voters.csv', function(error, data){
	if (error) console.error(error.stack);
	console.log(data.toString());

});

//connect(); // database time
