(function(angular) {
  'use strict';

  angular.module('am').factory('UserService', factory);

  factory.$inject = ['$q', '$http', 'api', '$cookies'];

  function factory($q, $http, api, $cookies) {
    var svc = {}
      , TAG_USER = 'USER';

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
            $cookies.putObject(TAG_USER, resp.data);
            resolve(resp.data);
          })
          .error(function(resp) {
            reject();
          });
      });
    };

    svc.clearCredentials = function() {
      $cookies.remove(TAG_USER);
    };

    return svc;
  }

})(angular);
