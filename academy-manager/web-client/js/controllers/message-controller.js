(function(angular) {
  'use strict';

  angular.module('am').controller('MessageCtrl', controller);

  controller.$inject = ['$rootScope', '$mdToast'];

  function controller($rootScope, $mdToast) {
    var ctrl = this;

    $rootScope.$on('messages', function(event, content) {
      if(content && content.values) {
        for (var i = 0; i < content.values.length; i++) {
          $mdToast.showSimple(content.values[i]);
        }
      }
    });

    return ctrl;
  }

})(angular);
