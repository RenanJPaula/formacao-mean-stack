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
      cpf: { type: mongoose.Schema.Types.String, required: true, trim: true },
      rg: { type: mongoose.Schema.Types.String, required: true, trim: true },
      email: { type: mongoose.Schema.Types.String, required: true, trim: true, unique: true },
      phones: { type: [mongoose.Schema.Types.String], default: [] },
      address: { type: [addressSchema], default: [] },
      observation: { type: mongoose.Schema.Types.String, trim: true, default: null },
      active: { type: mongoose.Schema.Types.Boolean, default: true }
    })
  , Student = mongoose.model('Student', studentSchema);

/**
 * Find all active Students
 * @return {Promise}
 */
module.exports.findAll = function findAll() {

};

/**
 * Find Student by _ID
 * @param  {String} studentId [required] ObjectId
 * @return {Promise}
 */
module.exports.findById = function findById(studentId) {

};

/**
 * Insert Student
 * @param  {Student} student [required]
 * @return {Prmise}
 */
module.exports.save = function save(student) {
  
};

/**
 * Modify Student
 * @param  {Student} student [required]
 * @return {Primise}
 */
module.exports.update = function update(student) {

};

/**
 * Inactivate Student by _ID
 * @param  {String} studentId [required] ObjectId
 * @return {Promise}
 */
module.exports.remove = function remove(studentId) {

};
