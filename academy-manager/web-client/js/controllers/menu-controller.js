(function(angular) {
  'use strict';

  angular.module('am').controller('MenuCtrl', controller);

  controller.$inject = ['$mdSidenav', '$location'];

  function controller($mdSidenav, $location) {
    var ctrl = this
      , MENU_ID = 'menu';

    ctrl.init = function() {
      ctrl.menus = [];

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
  }

})(angular);
