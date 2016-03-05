'use strict';

var env = {
  appName: 'academy-manager',
  version: 'v1',
  port: process.env.API_PORT || 3000,
  defaultLocale: 'en',
  defaultMessage: 'unespected-error',
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost/school',
    credentials: {
      name: process.env.DB_USER || '',
      pass: process.env.DB_PASS || ''
    }
  }
};

module.exports = env;
