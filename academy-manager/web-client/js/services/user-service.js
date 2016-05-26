(function(angular) {
  'use strict';

  angular.module('am').factory('UserService', factory);

  factory.$inject = ['$q', '$http', 'api'];

  function factory($q, $http, api) {
    var svc = {};

    function generateCredentials(user) {
      return btoa(user.name + ':' + user.password);
    }

    svc.login = function(user) {
      return $q(function(resolve, reject) {
        var _options = {
          headers: {
            Authorization: 'Basic ' + generateCredentials(user)
          }
        };

        $http.get(api.userProfile, _options)
          .success(function(resp) {
            console.log(resp);
          })
          .error(function(resp) {
            reject();
          });

      });
    };

    return svc;
  }

})(angular);
