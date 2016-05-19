'use strict';

// Declare app level module which depends on views, and components
angular.module('aia', [
  'aia.splash'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}]);
