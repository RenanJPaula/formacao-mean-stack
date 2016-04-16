(function(angular) {
  'use strict';

  angular.module('am').config(config);

  config.$inject = ['$mdIconProvider'];

  function config($mdIconProvider) {
    $mdIconProvider
      .icon('navigation:menu', 'img/icons/ic_menu.svg', 24)
      .icon('social:people', 'img/icons/ic_people.svg', 24);
  }

})(angular);
