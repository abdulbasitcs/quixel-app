'use strict';

angular.
  module('register', []).
  controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.registration = function() {
    $http({
      method : "POST",
      url : "http://quixelsso-staging.us-west-2.elasticbeanstalk.com/api/v1/users",
      data: {
        "email": $scope.email,
        "name": $scope.name,
        "password": $scope.password,
        "scope": ["neebz"]
      }
    }).then(function mySucces(response) {
        $location.path('/login')
    }, function myError(response) {
      $scope.error=response.data.message;
    });
  };

}]);
