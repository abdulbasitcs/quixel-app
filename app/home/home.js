'use strict';

angular.module('home', []).
  controller('HomeController', ['$scope', '$http', '$route', '$location', 'Data', function($scope, $http, $route, $location, Data) {
    $scope.success = Data.getSuccessMsg();
    getUser();
    
    $scope.logout = function() {
      logout();
    };

    $scope.updateName = function() {
      postCall("name", $scope.name)
    };

    $scope.updatePassword = function() {
      if($scope.password == $scope.rePassword)
        postCall("password", $scope.password)
      else 
        $scope.error = "Both passwords mismatch."
    };

    function getUser() {
      $http({
        method : "GET",
        url : "http://quixelsso-staging.us-west-2.elasticbeanstalk.com/api/v1/users/" + Data.getEmail(),
        headers: {
          "Authorization": Data.getToken()
        }
        }).then(function mySucces(response) {
          $scope.etag = response.headers().etag
          $scope.name = response.data.name;
        }, function myError(response) {
          $scope.error = response.data.message;
      });
    }
    
    function postCall(path, value) {
      $http({
        method : "PATCH",
        url : "http://quixelsso-staging.us-west-2.elasticbeanstalk.com/api/v1/users/" + Data.getEmail(),
        headers: {
          "Authorization": Data.getToken(),
          "if-Match": $scope.etag
        },
        data: [{ "op": "replace", "path": "/"+path, "value": value}]
        }).then(function mySucces(response) {
          $route.reload();
          Data.setSuccessMsg(path + " updated successfully.");
        }, function myError(response) {
          $scope.error = response.data.message;
      });
    }

    function logout() {
      $http({
        method : "POST",
        url : "http://quixelsso-staging.us-west-2.elasticbeanstalk.com/api/v1/logout",
        headers: {
          "Authorization": Data.getToken()
        }
        }).then(function mySucces(response) {
          $location.path('/login')
        }, function myError(response) {
          $scope.error = response.data.message;
      });
    }
}]);
