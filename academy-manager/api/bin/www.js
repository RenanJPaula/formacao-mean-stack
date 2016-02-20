'use strict';

var http = require('http')
  , app = require('../app');

var server = http.createServer(app);

server.listen(3000, function() {
  console.log("Server listening on: http://localhost:%s", 3000);
});
