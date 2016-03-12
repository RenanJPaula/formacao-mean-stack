'use strict';

var db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , app = express()
  , routeConfig = require('./config/route-config')
  , i18n = require('./filters/i18n-filter')
  , basicAuth = require('./filters/basic-auth-filter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(i18n);

app.use(basicAuth);

routeConfig.configApiRoutes(app);

module.exports = app;
