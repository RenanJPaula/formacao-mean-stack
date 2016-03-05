'use strict';

var debug = require('../config/debug-config')('i18n:config')
  , messages = {}
  , env = require('../config/env-config')
  , path = require('path')
  , fs = require('fs')
  , i18nDir = __dirname
  , fileNames = fs.readdirSync(i18nDir)
  , I18N_FILE_PREFIX = 'messages-'
  , I18N_FILE_SUFIX = '.json';

for (var i = 0; i < fileNames.length; i++) {
  let _name = fileNames[i];
  if(_name.startsWith(I18N_FILE_PREFIX)) {
    messages[_name.replace(I18N_FILE_PREFIX, '').replace(I18N_FILE_SUFIX,'')] = require(path.join(i18nDir, _name));
    debug('Added locale messages: ' + _name);
  }
}

module.exports.getMessageHandlerOfLocales = function(locales) {
  for (var i = 0; i < locales.length; i++) {
    let _locale = locales[i]
      , _messages = messages[_locale.name];

    if(_messages) {
      return createMessageHandler(_messages);
    }
  }

  return createMessageHandler(messages[env.defaultLocale]);
};

function createMessageHandler(messages) {
  return function getMessage(messageId) {
    let _message = messages[messageId];
    if(_message) {
      return _message;
    } else {
      return messages[env.defaultMessage];
    }
  };
};
