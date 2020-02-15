// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');

connect();

// queries
const queries = [
  // How many registered voters live in the Canton zip code (13617)?

  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('first').equals('STARR');

  // How many people voted in the 2016 general election (GE16)?
  // What is the last-name that comes last in the county in alphabetical order?
  // How many zip codes does the county contain?
]

Promise.all(queries)
  .then(function(results)){
    console.log('Voter\'s whose first name is "STARR": ', results[0])
    mg.connection.close();
	})
	.catch(function(error) {
    console.error(error.stack);
  });
