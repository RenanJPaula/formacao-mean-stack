'use strict';

var Student = require('../models/student-model')
  , ctrl = {};

ctrl.findAll = function(req, res) {
  Student.findAll()
    .then(function(students) {
      res.status(200).json(students);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

ctrl.findById = function(req, res) {
  Student.findById(req.params.id)
    .then(function(student) {
      res.status(200).json(student);
    })
    .catch(function(err) {
      res.status(404).send(err);
    });
};

ctrl.save = function(req, res) {
  Student.save(req.body)
    .then(function(student) {
      res.status(200).json(req.getMessage('student-success-inserted'));
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

ctrl.update = function(req, res) {
  var student = req.body;
  student._id = req.params.id;

  Student.update(student)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

ctrl.remove = function(req, res) {
  Student.remove(req.params.id)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

module.exports = ctrl;
