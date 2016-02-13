'use strict';

var Student = require('./models/student-model')
  , db = require('./config/db-config');


db.on('open', function() {

  var operations = [Student.findAll(), Student.findAll()];

  Promise.all(operations).then(function(datas) {
    console.log(datas);
  });

});
