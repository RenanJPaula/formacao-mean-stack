(function(angular) {
  'use strict';

  angular.module('am').factory('StudentService', factory);

  factory.$inject = ['$http', '$q', 'api'];

  function factory($http, $q, api) {
    var svc = {};

    function defaultRequestCallback(request, resolve, reject) {
      request
        .success(function(resp) {
          resolve(resp);
        })
        .error(function(resp) {
          reject(resp);
        });
    }

    svc.getAll = function() {
      return $q(function(resolve, reject) {
        var request = $http.get(api.students);
        defaultRequestCallback(request, resolve, reject);
      });
    };

    svc.getById = function(id) {
      return $q(function(resolve, reject) {
        var request = $http.get(api.students + id);
        defaultRequestCallback(request, resolve, reject);
      });
    };

    svc.save = function(student) {
      return $q(function(resolve, reject) {
        var request = null;

        if(student._id) {
          request = $http.put(api.students + student._id, student);
        } else {
          request = $http.post(api.students, student);
        }

        defaultRequestCallback(request, resolve, reject);
      });
    };

    svc.remove = function(id) {
      return $q(function(resolve, reject) {
        var request = $http.delete(api.students + id);
        defaultRequestCallback(request, resolve, reject);
      });
    };

    return svc;
  }

})(angular);
