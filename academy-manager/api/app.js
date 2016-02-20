'use strict';

var Student = require('./models/student-model')
  , db = require('./config/db-config')
  , express = require('express')
  , bodyParser = require('body-parser')
  , app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get /students lista todos os estudantes
app.get('/students', function(req, res) {
  Student.findAll()
    .then(function(students) {
      res.status(200).json(students);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

// Get em /students/id lista um determinado estudante
app.get('/students/:id', function(req, res) {
  Student.findById(req.params.id)
    .then(function(student) {
      res.status(200).json(student);
    })
    .catch(function(err) {
      res.status(404).send(err);
    });
});

// Post em /students insere um determinado estudante
app.post('/students', function(req, res) {
  Student.save(req.body)
    .then(function(student) {
      res.status(200).json(student);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

// Put em /students/:id altera o registro referente ao id da url com os dados do body
app.put('/students/:id', function(req, res) {
  var student = req.body;
  student._id = req.params.id;

  Student.update(student)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

// Delete em /students/:id remove o registro referente ao id da url
app.delete('/students/:id', function(req, res) {
  Student.remove(req.params.id)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
});

module.exports = app;
