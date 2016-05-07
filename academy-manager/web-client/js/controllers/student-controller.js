(function(angular) {
  'use strict';

  angular.module('am').controller('StudentCtrl', controller);

  controller.$inject = ['StudentService', '$location', '$routeParams', '$mdToast', 'MessageService'];

  function controller(studentService, $location, $routeParams, $mdToast, messageService) {
    var ctrl = this;

    ctrl.init = function() {
      ctrl.student = {};
      ctrl.student.phones = [];

      var id = $routeParams.id;
      if(id) {
        studentService.getById(id)
          .then(function(res) {
            ctrl.student = res.data;
          })
          .catch(function(res) {
            messageService.showError(res.messages);
          });
      }
    };

    ctrl.save = function(student) {
      studentService.save(student)
        .then(function(res) {
          messageService.showSuccess(res.messages);
          student._id = res.data;
          $location.search({}).path('/student/' + student._id + '/edit');
        })
        .catch(function(res) {
          messageService.showError(res.messages);
        });
    };

    ctrl.remove = function(id) {
      studentService.remove(id)
        .then(function(res) {
          messageService.showSuccess(res.messages);
          ctrl.student = {};
          $location.search({}).path('/student/new');
        })
        .catch(function(res) {
          messageService.showError(res.messages);
        });
    };

    ctrl.cancel = function() {
      $location.search({}).path('/students');
    };

    ctrl.new = function() {
      $location.search({}).path('/student/new');
    };

  }

})(angular);
