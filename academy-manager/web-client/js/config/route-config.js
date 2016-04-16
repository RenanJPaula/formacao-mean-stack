(function(angular) {
  'use strict';

  angular.module('am').config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    $routeProvider
			.when('/students', {
				templateUrl: 'view/students.html',
				controller: 'StudentCtrl',
				controllerAs: 'studentCtrl'
			});
  }

})(angular);
