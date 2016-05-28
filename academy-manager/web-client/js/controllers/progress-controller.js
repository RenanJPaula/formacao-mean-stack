(function(angular) {
  'use strict';

  angular.module('am').controller('ProgressCtrl', controller);

  controller.$inject = ['$rootScope'];

  function controller($rootScope) {
    var ctrl = this;
    ctrl.requestInProgress = false;

    $rootScope.$on('progress', function(event, requestInProgress) {
      ctrl.requestInProgress = requestInProgress;
    });

    return ctrl;
  }

})(angular);
