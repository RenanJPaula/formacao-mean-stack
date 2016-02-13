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
  return new Promise(function(resolve, reject) {
    let query = { active: true };

    Student.find(query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * Find Student by _ID
 * @param  {String} studentId [required] ObjectId
 * @return {Promise}
 */
module.exports.findById = function findById(studentId) {
  return new Promise(function(resolve, reject) {
    let query = { _id : studentId };

    Student.findOne(query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * Insert Student
 * @param  {Student} student [required]
 * @return {Promise}
 */
module.exports.save = function save(student) {
  return new Promise(function(resolve, reject) {
    new Student(student).save(function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * Modify Student
 * @param  {Student} student [required]
 * @return return new Promise(function(resolve, reject) {
    let query = { active: true };

    Student.find(query, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });{Promise}
 */
module.exports.update = function update(student) {
  return new Promise(function(resolve, reject) {
    let query = { _id : student._id };

    Student.update(query, student, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * Inactivate Student by _ID
 * @param  {String} studentId [required] ObjectId
 * @return {Promise}
 */
module.exports.remove = function remove(studentId) {
  return new Promise(function(resolve, reject) {
    let query = { _id : studentId }
      , mod = { active: false };

    Student.update(query, mod, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
