'use strict';

var mongoose = require('mongoose')
  , addressSchema = new mongoose.Schema({
      alias: { type: mongoose.Schema.Types.String, required: true, trim: true },
      cep: { type: mongoose.Schema.Types.String, required: true, trim: true },
      state: { type: mongoose.Schema.Types.String, required: true, trim: true },
      city: { type: mongoose.Schema.Types.String, required: true, trim: true },
      district: { type: mongoose.Schema.Types.String, required: true, trim: true },
      street: { type: mongoose.Schema.Types.String, required: true, trim: true },
      number: { type: mongoose.Schema.Types.String, required: true, trim: true },
      complement: { type: mongoose.Schema.Types.String, default: null, trim: true },
      reference: { type: mongoose.Schema.Types.String, default: null, trim: true },
      localPhone: { type: mongoose.Schema.Types.String, default: null, trim: true },
      branchLine: { type: mongoose.Schema.Types.String, default: null, trim: true }
    })
  , studentSchema = new mongoose.Schema({
      name: { type: mongoose.Schema.Types.String, required: true, trim: true },
      birthDate: { type: mongoose.Schema.Types.Date, required: true },
      sex: { type: mongoose.Schema.Types.String, enum: ['Male', 'Female'], default: 'Male' },
      cpf: { type: String, required: true, trim: true },
      rg: { type: String, required: true, trim: true },
      email: { type: mongoose.Schema.Types.String, required: true, trim: true, unique: true },
      phones: { type: [mongoose.Schema.Types.String], default: [] },
      address: { type: [addressSchema], default: [] },
      observation: { type: mongoose.Schema.Types.String, trim: true, default: null },
      active: { type: mongoose.Schema.Types.Boolean, default: true }
    })
  , Student = mongoose.model('Student', studentSchema);

module.exports.findAll = function findAll() {
  return new Promise(function(resolve, reject) {
    let query = { active: true };
    Student.find(query, function(err, data) {
      if(err) {
        reject(err);
      }
      else {
        resolve(data);
      }
    });
  });
};
