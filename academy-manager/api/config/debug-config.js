'use strict';

var env = require('./env-config')
  , debug = require('debug');

module.exports = function CreateCustonDebug(module) {
  let _custonDebug = debug(env.appName + ':' + module);

  return function sendMessage(message) {
    _custonDebug(message);
  }
};
