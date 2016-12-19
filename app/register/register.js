'use strict';

angular.
  module('register', []).
  controller('RegisterController', ['$scope', '$http', function($scope, $http) {
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
      console.log(response.data)
    }, function myError(response) {
      console.log(response.data)
      $scope.error=response.data.message;
    });
  };

}]);
