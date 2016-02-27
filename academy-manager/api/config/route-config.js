'use strict';

var config = {}
  , studentRoute = require('../routes/student-route')
  , path = require('path')
  , fs = require('fs')
  , env = require('./env-config')
  , baseRoutePath = '/api/' + env.version + '/';

config.configApiRoutes = function(app) {
  var _routePath = path.join(__dirname, '../routes')
    , _fileNames = fs.readdirSync(_routePath);

  _fileNames.forEach(function(fileName) {
    var routeConfig = require(path.join(_routePath, fileName));

    app.use(baseRoutePath, routeConfig);
  });
}

module.exports = config;
