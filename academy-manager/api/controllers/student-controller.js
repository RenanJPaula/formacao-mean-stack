'use strict';

var Student = require('../models/student-model')
  , success = require('../models/success-response-model')
  , ctrl = {};

ctrl.findAll = function(req, res, next) {
  Student.findAll()
    .then(function(students) {
      new success.FindMany(students).send(req, res);
    })
    .catch(function(err) {
      next(err);
    });
};

ctrl.findById = function(req, res, next) {
  Student.findById(req.params.id)
    .then(function(student) {
      new success.FindOne(student).send(req, res);
    })
    .catch(function(err) {
      next(err);
    });
};

ctrl.save = function(req, res, next) {
  Student.save(req.body)
    .then(function(student) {
      new success.Inserted(student._id).send(req, res);
    })
    .catch(function(err) {
      next(err);
    });
};

ctrl.update = function(req, res, next) {
  var student = req.body;
  student._id = req.params.id;

  Student.update(student)
    .then(function(data) {
      new success.Updated(student._id).send(req, res);
    })
    .catch(function(err) {
      next(err);
    });
};

ctrl.remove = function(req, res, next) {
  Student.remove(req.params.id)
    .then(function(data) {
      new success.Removed().send(req, res);
    })
    .catch(function(err) {
      next(err);
    });
};

module.exports = ctrl;
