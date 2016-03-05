'use strict';

var messages = {
      pt: require('./messages-pt.json')
    , en: require('./messages-en.json')
    }
  , DEFAULT_LOCALE_MESSAGES = messages.en
  , DEFAULT_MESSAGE = 'unespected-error';

module.exports.getMessageHandlersOfLocales = function(locales) {
  for (var i = 0; i < locales.length; i++) {
    let _locale = locales[i]
      , _messagesOfLocale = messages[_locale.name];

    if(_messagesOfLocale) {
      return createMessageHandler(_messagesOfLocale)
    }
  }

  return createMessageHandler(DEFAULT_LOCALE_MESSAGES);
};

function createMessageHandler(messages) {
  return function getMessage(messageId) {
    let _message = messages[messageId];
    if(_message) {
      return _message;
    } else {
      return messages[DEFAULT_MESSAGE];
    }
  };
}
