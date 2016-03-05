'use strict';

var mongoose = require('mongoose')
  , env = require('./env-config')
  , debug = require('./debug-config')('db');

// configure a mongoose connection
mongoose.connect(env.db.uri, env.db.credentials);

var db = mongoose.connection;

// configure connection listeners
db.on('connected', function () {
  debug('MongoDB connected.');
}).on('open', function () {
  debug('MongoDB open.');
}).on('disconnected', function () {
  debug('MongoDB disconnected.');
}).on('error', function (err) {
  debug('MongoDB error: ' + err);
});

// configure process listener
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    debug('MongoDB disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
