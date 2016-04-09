(function(angular) {
  'use strict';

  angular.module('am').factory('StudentService', function($http, $q, api) {
    var svc = {};

    function resolveRequest(promise, resolve, reject) {
      promise
        .success(function(res) {
          resolve(res);
        })
        .error(function(res) {
          reject(res);
        });
    }

    svc.getAll = function() {
      return $q(function(resolve, reject) {
        var promise = $http.get(api.student);
        resolveRequest(promise, resolve, reject);
      });
    };

    svc.getById = function(id) {
      return $q(function(resolve, reject) {
        var promise = $http.get(api.student + id);
        resolveRequest(promise, resolve, reject);
      });
    };

    svc.save = function(student) {
      return $q(function(resolve, reject) {
        var promise = null;

        if(student && student._id) {
          promise = $http.put(api.student + student._id, student);
        } else {
          promise = $http.post(api.student, student);
        }

        resolveRequest(promise, resolve, reject);
      });
    };

    svc.remove = function(id) {
      return $q(function(resolve, reject) {
        var promise = $http.delete(api.student + id);
        resolveRequest(promise, resolve, reject);
      });
    };

    return svc;
  });

})(angular);
