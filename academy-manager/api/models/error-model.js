'use strict';

var HttpStatus = require('http-status-codes')
  , env = require('../config/env-config');
const MONGOOSE_CUSTOM_ERROR = 'user defined';

module.exports.Error = function(statusCode, messageIds, stack) {
  this.statusCode = statusCode;
  this.messageIds = messageIds;
  this.stack = stack;
};

module.exports.UnespectedError = function(stack) {
  this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  this.messageIds = [env.defaultMessage];
  this.stack = stack;
};

module.exports.BusinessError = function(messageId, stack) {
  this.statusCode = HttpStatus.BAD_REQUEST;
  this.messageIds = [messageId];
  this.stack = stack;
};

module.exports.AuthorizationRequired = function(res) {
  this.statusCode = HttpStatus.UNAUTHORIZED;
  this.messageIds = ['authorization-required'];
  res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
};

module.exports.Forbidden = function(res) {
  this.statusCode = HttpStatus.FORBIDDEN;
  this.messageIds = ['forbidden'];
  res.set('WWW-Authenticate', 'Basic realm=Forbidden');
};

module.exports.MongooseError = function(err) {
  if(err.name === 'ValidationError') {
    this.statusCode = HttpStatus.BAD_REQUEST;
    this.messageIds = [];

    let erros = err.errors;
    for (var prop in erros) {
      let validationError = erros[prop];

      if(validationError.kind == MONGOOSE_CUSTOM_ERROR) {
        this.messageIds.push(validationError.message);
      } else {
        this.messageIds.push(validationError.path + '-' + validationError.kind);
      }
    }
  } else {
    this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    this.messageIds = [env.defaultMessage];
    this.stack = err;
  }
};
