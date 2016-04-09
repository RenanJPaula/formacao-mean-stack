(function(angular) {
  'use strict';

  angular.module('am').controller('StudentCtrl', function($scope, $http, StudentService) {

    $scope.save = function() {
      StudentService.save($scope.student)
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
      StudentService.getAll()
        .then(function(res) {
          $scope.students = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    $scope.load = function(student) {
      StudentService.getById(student._id)
        .then(function(res) {
          $scope.student = res.data;
        })
        .catch(function(res) {
          console.log(res);
        });
    };

    $scope.remove = function(student) {
      StudentService.remove(student._id)
        .then(function(res) {
          $scope.messages = res.messages;
          $scope.loadList();
          $scope.student = {};
        })
        .catch(function(res) {
          console.log(res);
        });
    };

  });

})(angular);
