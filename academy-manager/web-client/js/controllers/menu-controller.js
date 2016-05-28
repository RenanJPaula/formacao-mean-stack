(function(angular) {
  'use strict';

  angular.module('am').controller('MenuCtrl', controller);

  controller.$inject = ['$mdSidenav', '$location', 'UserService', '$window'];

  function controller($mdSidenav, $location, userService, $window) {
    var ctrl = this
      , MENU_ID = 'menu';

    ctrl.init = function() {
      ctrl.menus = [];
      ctrl.user = userService.getUser();

      ctrl.menus.push({
          name: 'Administration'
        , itens: [
            { name: 'Students', icon: 'social:people', path: '/students' }
          ]
        });
    };

    ctrl.openMenu = function() {
      $mdSidenav(MENU_ID).toggle();
    };

    ctrl.navigateTo = function(path) {
      $mdSidenav(MENU_ID).toggle();
      $location.path(path);
    };

    ctrl.logout = function() {
      userService.clearCredentials();
      $window.location.href = 'login';
    };
  }

})(angular);
