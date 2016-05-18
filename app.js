'use strict';

// Declare app level module which depends on views, and components
angular.module('aia', [
  'ngRoute',
  'aia.view1',
  'aia.view2',
  'aia.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
