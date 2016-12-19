'use strict';

angular.
  module('quixelApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {

      $routeProvider.
        when('/login', {
          templateUrl: 'login/login.template.html'
        }). 
        when('/register', {
          templateUrl: 'register/register.template.html'
        }).
        when('/home', {
          templateUrl: 'home/home.html'
        }).
        otherwise('/register');
    }
  ]);
