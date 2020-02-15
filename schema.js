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

// compile and export as model
module.exports = mongoos.model('Voter', Voter);
