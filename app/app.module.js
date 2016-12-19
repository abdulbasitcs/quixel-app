'use strict';

var quixelApp = angular.module('quixelApp', [
  'ngRoute',
  'register',
  'login',
  'home'
]);


quixelApp.factory('Data', function () {

    var data = {
        token: null,
        refreshToken: null,
        msg: null
    };

    return {
        getToken: function () {
            return data.token;
        },
        setToken: function (token) {
            data.token = token;
        },
        getRefreshToken: function () {
            return data.refreshToken;
        },
        setRefreshToken: function (refreshToken) {
            data.refreshToken = refreshToken;
        },
        getSuccessMsg: function () {
            return data.msg;
        },
        setSuccessMsg: function (msg) {
            data.msg = msg;
        },
        getEmail: function () {
            return data.email;
        },
        setEmail: function (email) {
            data.email = email;
        },
    };
});