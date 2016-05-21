'use strict';

var express = require('express')
  , route = express.Router()
  , ctrl = require('../controllers/user-controller');

route.get('/user/profile', ctrl.getProfile);

module.exports = route;
