'use strict';

var app = angular.module('am', []);

app.controller('StudentCtrl', function($scope, $http) {

  $scope.save = function() {
    var promise;

    if($scope.student && $scope.student._id) {
      promise = $http.put('http://localhost:3000/api/v1/students/' + $scope.student._id, $scope.student);
    } else {
      promise = $http.post('http://localhost:3000/api/v1/students/', $scope.student);
    }

    promise
      .success(function(res) {
        $scope.messages = res.messages;
        $scope.loadList();
        $scope.student = {};
      })
      .error(function(res) {
        console.log(res);
      });
  };

  $scope.loadList = function() {
    $http.get('http://localhost:3000/api/v1/students/')
      .success(function(res) {
        $scope.students = res.data;
      })
      .error(function(res) {
        console.log(res);
      });
  };

  $scope.load = function(student) {
    $http.get('http://localhost:3000/api/v1/students/' + student._id)
      .success(function(res) {
        $scope.student = res.data;
      })
      .error(function(res) {
        console.log(res);
      });
  };

  $scope.remove = function(student) {
    $http.delete('http://localhost:3000/api/v1/students/' + student._id)
      .success(function(res) {
        $scope.messages = res.messages;
        $scope.loadList();
        $scope.student = {};
      })
      .error(function(res) {
        console.log(res);
      });
  };

});
