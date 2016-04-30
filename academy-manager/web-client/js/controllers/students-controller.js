(function(angular) {
  'use strict';

  angular.module('am').controller('StudentsCtrl', controller);

  controller.$inject = ['StudentService', '$location'];

  function controller(studentService, $location) {
    var ctrl = this;

    ctrl.init = function() {
      studentService.getAll()
        .then(function(res) {
          ctrl.students = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    ctrl.new = function() {
      $location.search({}).path('/student/new');
    };

    ctrl.edit = function(id) {
      $location.search({}).path('/student/' + id + '/edit');
    };

  }

})(angular);
