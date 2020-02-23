// schema for a voter

// imports
const mongoose = require('mongoose');

// a voter has:
// Voter first name
// Voter last name
// Voter zip code
// Voter history string
const Voter = new mongoose.Schema({
  first : String,
  last : String,
  zip : Number,
  history : Array
});

// speed up queries on all fields
Voter.index({first : 1});
Voter.index({last : 1});
Voter.index({zip : 1});
Voter.index({history : 1});

// election object, constructs from a string of length 4
const Election = function(s){
	this.type = s.slice(0, 2);
	this.year = parseInt(s.slice(2));
};

// compile and export as model
exports.Voter = mongoose.model('Voter', Voter);
exports.Election = Election;
