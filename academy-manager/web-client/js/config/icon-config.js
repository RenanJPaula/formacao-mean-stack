(function(angular) {
  'use strict';

  angular.module('am').config(config);

  config.$inject = ['$mdIconProvider'];

  function config($mdIconProvider) {
    $mdIconProvider
      .icon('action:power', 'img/icons/ic_power.svg', 24)
      .icon('content:add', 'img/icons/ic_add.svg', 24)
      .icon('navigation:menu', 'img/icons/ic_menu.svg', 24)
      .icon('social:people', 'img/icons/ic_people.svg', 24);
  }

})(angular);
