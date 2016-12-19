'use strict';

angular.
  module('login', []).
  controller('LoginController', ['$scope', '$http', '$location', 'Data', function($scope, $http, $location, Data) {

    $scope.signin = function() {
      $http({
        method : "POST",
        url : "http://quixelsso-staging.us-west-2.elasticbeanstalk.com/api/v1/login",
        data: { "email": $scope.email, "password": $scope.password, "realm": "neebz" }
        }).then(function mySucces(response) {
          $scope.refreshToken = response.data.refreshToken;
          Data.setToken(response.data.token);
          Data.setRefreshToken(response.data.refreshToken);
          Data.setEmail($scope.email);
          $location.path('/home')
        }, function myError(response) {
          $scope.error = response.data.message;
      });
    };
}]);
