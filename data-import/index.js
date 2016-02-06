'use strict';

var Student = require('./model/student-model')
  , program = require('commander')
  , xlsx = require('node-xlsx')
  , db = require('./config/db-config');

program
  .version('1.0.0')
  .option('-f, --file [path]', 'Path of xcell file to import')
  .option('-i, --info', 'Show process info')
  .parse(process.argv);

var filePath = program.file
  , showDebug = program.info;

function debug(value) {
  if(showDebug) {
    console.log(value);
  }
}

debug('- Read file: ' + filePath);

var excel = xlsx.parse(filePath)
  , excelPageNumber = 0
  , data = excel[excelPageNumber].data;

debug('- Processing ' + (data.length - 1) + ' records...');

db.on('open', function() {

  for (var i = 1; i < data.length; i++) {
    var record = data[i]
    , student = {
        name: record[1],
        mensalValue: record[2],
        paymentDay: record[4],
        observation: record[5]
      };

    Student.save(student, function(err, recordSaved) {
      if(err){
        debug('- Error in save ' + recordSaved.name);
      } else {
        debug('- Student ' + recordSaved.name + ' saved with _id: ' + recordSaved._id);
      }
    });
  }

});
