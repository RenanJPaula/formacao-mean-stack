'use strict';

var mongoose = require('mongoose')
  , schema = new mongoose.Schema({
      name: { type: mongoose.Schema.Types.String, required: true, trim: true },
      mensalValue: { type: mongoose.Schema.Types.Number, required: true },
      paymentDay: { type: mongoose.Schema.Types.Number, required: true },
      observation: { type: mongoose.Schema.Types.String, trim: true, default: '' }
    })
  , Model = mongoose.model('Student', schema);

module.exports.save = function(student, callback) {
  new Model(student).save(callback);
};
