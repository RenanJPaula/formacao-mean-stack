(function(angular) {
  'use strict';

  angular.module('am').controller('StudentCtrl', controller);

  controller.$inject = ['$scope', '$http', 'StudentService'];

  function controller($scope, $http, studentService) {

    $scope.save = function() {
      studentService.save($scope.student)
        .then(function(res) {
          $scope.messages = res.messages;
          $scope.loadList();
          $scope.student = {};
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    $scope.loadList = function() {
      studentService.getAll()
        .then(function(res) {
          $scope.students = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    $scope.load = function(student) {
      studentService.getById(student._id)
        .then(function(res) {
          $scope.student = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    $scope.remove = function(student) {
      studentService.remove(student._id)
        .then(function(res) {
          $scope.messages = res.messages;
          $scope.loadList();
          $scope.student = {};
        })
        .catch(function(res) {
          console.log(res);
        });
    };

  }

})(angular);
