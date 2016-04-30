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
      .when('/student/new', {
				templateUrl: 'view/student.html',
				controller: 'StudentCtrl',
				controllerAs: 'studentCtrl'
			})
      .when('/student/:id/edit', {
				templateUrl: 'view/student.html',
				controller: 'StudentCtrl',
				controllerAs: 'studentCtrl'
			});
  }

})(angular);
