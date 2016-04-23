(function(angular) {
  'use strict';

  angular.module('am').config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {
    registerStudentRoute($routeProvider);
  }

  function registerStudentRoute($routeProvider) {
    $routeProvider
			.when('/students', {
				templateUrl: 'view/students.html',
				controller: 'StudentsCtrl',
				controllerAs: 'studentsCtrl'
			})
      .when('/student', {
				templateUrl: 'view/student.html',
				controller: 'StudentCtrl',
				controllerAs: 'studentCtrl'
			});
  }

})(angular);
