'use strict';

var debug = require('../config/debug-config')('i18n:filter')
  , LOCALE_SEPARATOR = ','
  , LOCALE_ATTRIBUTE_SEPARATOR = ';'
  , LOCALE_QUALITY_PREFIX = 'q='
  , Locale = function Locale(name, quality) {
      this.name = name;
      this.quality = quality ? parseFloat(quality.replace(LOCALE_QUALITY_PREFIX, '')) : parseFloat(1);
    }
  , i18nMessages = require('../i18n');

module.exports = function(req, res, next) {
  let _locales = getAcceptedLocales(req);
  debug(_locales);
  req.getMessage = i18nMessages.getMessageHandlerOfLocales(_locales);
  next();
};

function getAcceptedLocales(req) {
  let _acceptLanguages = req.headers['accept-language'] || ''
    , _acceptLocales = _acceptLanguages.split(LOCALE_SEPARATOR)
    , _locales = [];

  for (var i = 0; i < _acceptLocales.length; i++) {
    let _localeAttributes = _acceptLocales[i].split(LOCALE_ATTRIBUTE_SEPARATOR);

    _locales.push(new Locale(_localeAttributes[0], _localeAttributes[1]));
  }

  _locales.sort(function(locale1, locale2) {
    return locale1.quality <= locale2.quality;
  });

  return _locales;
}
