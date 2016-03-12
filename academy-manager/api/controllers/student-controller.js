'use strict';

var Student = require('../models/student-model')
  , success = require('../models/success-response-model')
  , ctrl = {};

ctrl.findAll = function(req, res) {
  Student.findAll()
    .then(function(students) {
      new success.FindMany(students).send(req, res);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

ctrl.findById = function(req, res) {
  Student.findById(req.params.id)
    .then(function(student) {
      new success.FindOne(student).send(req, res);
    })
    .catch(function(err) {
      res.status(404).send(err);
    });
};

ctrl.save = function(req, res) {
  Student.save(req.body)
    .then(function(student) {
      new success.Inserted(student._id).send(req, res);
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
      new success.Updated(student._id).send(req, res);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

ctrl.remove = function(req, res) {
  Student.remove(req.params.id)
    .then(function(data) {
      new success.Removed().send(req, res);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
};

module.exports = ctrl;
