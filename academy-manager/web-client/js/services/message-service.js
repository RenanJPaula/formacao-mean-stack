(function(angular) {
  'use strict';

  angular.module('am').factory('MessageService', factory);

  factory.$inject = ['$rootScope'];

  function factory($rootScope) {
    var svc = {}
      , _SUCCESS = "SUCCESS"
      , _ERROR = "ERROR";

    svc.showSuccess = function(messages) {
      $rootScope.$broadcast('messages', { type: _SUCCESS, values: messages});
    };

    svc.showError = function(messages) {
      $rootScope.$broadcast('messages', { type: _ERROR, values: messages});
    };

    return svc;
  }

})(angular);
