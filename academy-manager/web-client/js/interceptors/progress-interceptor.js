(function(angular) {
	'use strict';

	angular.module('am').factory('ProgressInterceptor', factory);

	factory.$inject = ['$q', '$rootScope'];

  function factory($q, $rootScope) {
		var interceptor = {}
			,	_count = 0;

		function showProgress() {
			if(_count == 0) {
				$rootScope.$broadcast('progress', true);
			}
			_count++;
		}

		function hideProgress() {
			_count--;
			if(_count == 0) {
				$rootScope.$broadcast('progress', false);
			}
		}

		interceptor.request = function(config) {
			showProgress();
      return config;
    };

		interceptor.requestError = function(rejection) {
			hideProgress();
			return $q.reject(rejection);
		};

		interceptor.response = function(response) {
			hideProgress();
			return response;
		};

		interceptor.responseError = function(rejection) {
			hideProgress();
			return $q.reject(rejection);
		};

		return interceptor;
  }

})(angular);
