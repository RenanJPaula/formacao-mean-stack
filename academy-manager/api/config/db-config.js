'use strict';

var mongoose = require('mongoose');

// configure a mongoose connection
mongoose.connect('mongodb://localhost/school');

var db = mongoose.connection;

// configure connection listeners
db.on('connected', function () {
  console.log('MongoDB connected.');
}).on('open', function () {
  console.log('MongoDB open.');
}).on('disconnected', function () {
  console.log('MongoDB disconnected.');
}).on('error', function (err) {
  console.log('MongoDB error: ' + err);
});

// configure process listener
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('MongoDB disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
