(function(angular) {
	'use strict';

	angular.module('am').factory('BasicAuthInterceptor', factory);

	factory.$inject = ['$q', '$window', '$cookies'];

  function factory($q, $window, $cookies) {
		var interceptor = {}
			, TAG_USER = 'USER';

		function generateCredentials(user) {
      return btoa(user.name + ':' + user.password);
    }

		interceptor.request = function(config) {
			var user = $cookies.getObject(TAG_USER);
			if(!user) {
				$window.location.href = 'login';
			}
			config.headers.Authorization = 'Basic ' + generateCredentials(user);
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
