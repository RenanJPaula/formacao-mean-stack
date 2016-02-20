'use strict';

var Student = require('./models/student-model')
  , db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/students', function(req, res) {

  Student.findAll()
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });

});

app.get('/students/:id', function(req, res) {

  Student.findById(req.params.id)
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      res.status(404).send(err);
    });

});

app.post('/students', function(req, res) {

  Student.save(req.body)
    .then(function(data) {
      res.status(200).send(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });

});

module.exports = app;
