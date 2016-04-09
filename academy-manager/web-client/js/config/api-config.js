(function(angular) {
  'use strict';

  var BASE_API_PATH = 'http://localhost:3000/api/v1/'
    , api = {
        basePath: BASE_API_PATH
      , student: buildResourceURI('students')
      };

  function buildResourceURI(name) {
    return BASE_API_PATH + name + '/';
  }

  angular.module('am').constant('api', api);

})(angular);
