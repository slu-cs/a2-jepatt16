// imports
const mg = require('mongoose');
const connect = require('./db.js');
const Voter = require('./schema.js');

connect();

// queries
const queries = [
  // How many registered voters live in the Canton zip code (13617)?
	Voter.find().where('zip').equals(13617),
  // What are the full names of all the registered voters whose first-name is STARR?
  Voter.find().where('first').equals('STARR'),
  // How many people voted in the 2016 general election (GE16)?
	Voter.find(),
  // What is the last-name that comes last in the county in alphabetical order?
	Voter.find().sort({'last' : -1}),
	// How many zip codes does the county contain?
	Voter.distinct('zip')
]

Promise.all(queries)
  .then(function(results){
		console.log('Number of voters in Canton zip: ', results[0].length);
    console.log('Voter\'s whose first name is "STARR": ', results[1].map(voter => (voter.first + ' ' + voter.last)));

		console.log('How many people voted in the 2016 general election: ', results[2].map(voter => voter.history).filter(history => history.includes('GE16')).length);

		console.log('Last name in the phonebook: ', results[3][0].last);

		console.log('Number of zip codes: ', results[4].length)

		mg.connection.close();
	})
	.catch(function(error) {
    console.error(error.stack);
  });
