'use strict';

var debug = require('../config/debug-config')('api:error')
  , env = require('../config/env-config');

module.exports = function apiErrorHandler(err, req, res, next) {
  debug(err);
  if(err.messageIds) {
    err.messages = [];
    for (var i = 0; i < err.messageIds.length; i++) {
      let _message = req.getMessage(err.messageIds[i]) || req.getMessage(env.defaultMessage);
      err.messages.push(_message);
    }
  }
  res.status(err.statusCode || 500).send(err);
};
