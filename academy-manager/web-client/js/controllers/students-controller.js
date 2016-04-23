(function(angular) {
  'use strict';

  angular.module('am').controller('StudentsCtrl', controller);

  controller.$inject = ['$http', 'StudentService'];

  function controller($http, studentService) {
    var ctrl = this;

    ctrl.save = function() {
      studentService.save(ctrl.student)
        .then(function(res) {
          ctrl.messages = res.messages;
          ctrl.loadList();
          ctrl.student = {};
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    ctrl.loadList = function() {
      studentService.getAll()
        .then(function(res) {
          ctrl.students = res.data.slice(0, 10);
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    ctrl.load = function(student) {
      studentService.getById(student._id)
        .then(function(res) {
          ctrl.student = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    ctrl.remove = function(student) {
      studentService.remove(student._id)
        .then(function(res) {
          ctrl.messages = res.messages;
          ctrl.loadList();
          ctrl.student = {};
        })
        .catch(function(res) {
          console.log(res);
        });
    };

  }

})(angular);
