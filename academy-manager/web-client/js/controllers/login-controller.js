(function(angular) {
  'use strict';

  angular.module('am').controller('LoginCtrl', controller);

  controller.$inject = ['$window', 'UserService'];

  function controller($window, userService) {
    var ctrl = this;

    ctrl.init = function() {
      ctrl.invalidLogin = false;
      ctrl.user = {};
    };

    ctrl.login = function(user) {
      userService.login(user)
        .then(function() {
          $window.location.href = 'index';
        })
        .catch(function () {
          ctrl.invalidLogin = true;
        });
    };

    return ctrl;
  }

})(angular);
