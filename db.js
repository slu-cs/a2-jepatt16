// This script provides a function for connecting to the database.

const mongoose = require('mongoose');

module.exports = function() {

  // Avoid warnings
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useUnifiedTopology', false);
  mongoose.set('useCreateIndex', true);
  mongoose.set('useFindAndModify', false);

  // Start connecting
  mongoose.connect('mongodb://localhost/voters');

  // Log errors
  mongoose.connection.on('error', function(error) {
    console.error(error.stack);
  });
};
