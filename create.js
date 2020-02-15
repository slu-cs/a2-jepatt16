// store some data in the db

// imports
const mongoose = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');
const fs = require('fs');

// read from file and make array
let voters = [];
fs.readFile('voters.csv', function(error, data){
	if (error) console.error(error.stack);
	// get file into workable format
	const data_arr = data.toString().split('\r\n');

	for (const line of data_arr){
		const line_arr = line.split(',');
		const a_voter = new Voter({
			first: line_arr[0],
			last: line_arr[1],
			zip: parseInt(line_arr[2]),
			history : []
			});
		voters.push(a_voter);
	}
	console.log(voters);
});

//connect(); // database time
