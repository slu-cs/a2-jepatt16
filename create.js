// store some data in the db

// imports
const mongoose = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');
const fs = require('fs');

connect(); // database time

// helper function to make an array of elections from a string
const mkhistory = function(s){
	let elections = [];
	for (let i = 0; i < s.length; i += 4){
		elections.push(new Voter.Election(s.slice(i, i + 4)));
	}
	return elections;
};

// read from file and make array
let voters = [];
fs.readFile('voters.csv', function(error, data){
	if (error) console.error(error.stack);
	// get file into workable format
	const data_arr = data.toString().split('\r\n');

	for (const line of data_arr){
		if (line){
			const line_arr = line.split(',');
			voters.push(new Voter.Voter({
				first: line_arr[0],
				last: line_arr[1],
				zip: parseInt(line_arr[2]),
				history : mkhistory(line_arr[3])
			}));
		}
	}
});

mongoose.connection.dropDatabase()
	.then(_ => Promise.all(voters.map(voter => voter.save())))
	.then(_ => mongoose.connection.close())
  .then(_ => console.log('Database populated.'))
	.catch(error => console.error(error.stack));
