'use strict';

var User = require ('../models/user-model')
  , debug = require('../config/debug-config')('basic-auth-filter')
  , auth = require('basic-auth')
  , error = require('../models/error-model');

module.exports = function(req, res, next) {
  let _credentials = auth(req);
  debug('Credentials: ' + _credentials);

  if(_credentials) {
    User.authenticate(_credentials.name, _credentials.pass)
      .then(function(user) {
        debug('User: ' + user);
        req.user = user;
        next();
      }).catch(function(err) {
        next(new error.AuthorizationRequired(res));
      });
  } else {
    next(new error.AuthorizationRequired(res));
  }
};
