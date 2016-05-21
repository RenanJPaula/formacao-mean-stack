(function(angular) {
	'use strict';

	angular.module('am').factory('BasicAuthInterceptor', factory);

	factory.$inject = ['$q', '$window'];

  function factory($q, $window) {
		var interceptor = {};

		interceptor.request = function(config) {
			config.headers.Authorization = 'Basic';
			return config;
		};

		interceptor.responseError = function(rejection) {
			if(rejection.status === 401 || rejection.status === 403) {
				$window.location.href = 'login';
			}

			return $q.reject(rejection);
		};

		return interceptor;
  }

})(angular);
