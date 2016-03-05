'use strict';

var debug = require('../config/debug-config')('i18n:filter')
  , LOCALE_SEPARATOR = ','
  , LOCALE_FIELD_SEPARATOR = ';'
  , LOCALE_FIELD_QUALITY_PREFIX = 'q='
  , Locale = function Locale(name, quality) {
      this.name = name;
      this.quality = quality ? parseFloat(quality.replace(LOCALE_FIELD_QUALITY_PREFIX, '')) : 1;
    }
  , messages = require('../i18n/messages');

module.exports = function(req, res, next) {
  let _locales = getLocales(req);

  _locales.sort(function(locale1, locale2) {
    return locale2.quality >= locale1.quality;
  });

  req.getMessage = messages.getMessageHandlersOfLocales(_locales);

  next();
};

function getLocales(req) {
  let _acceptLanguages = req.headers['accept-language'] || ''
    , _acceptLocales = _acceptLanguages.split(LOCALE_SEPARATOR)
    , _locales = [];

  for (var i = 0; i < _acceptLocales.length; i++) {
    let _localeFields = _acceptLocales[i].split(LOCALE_FIELD_SEPARATOR);
    _locales.push(new Locale(_localeFields[0], _localeFields[1]));
  }
  return _locales;
}
