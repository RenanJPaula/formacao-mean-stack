'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/student-controller');

route.get('/students', ctrl.findAll);
route.get('/students/:id', ctrl.findById);
route.post('/students', ctrl.save);
route.put('/students/:id', ctrl.update);
route.delete('/students/:id', ctrl.remove);

module.exports = route;
