'use strict';

angular.module('aia.splash', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
      .state('splash', {
        url: "/",
        templateUrl: "splash/splash.html",
        controller: "SplashCtrl"
      });
}])

.controller('SplashCtrl', [function() {

}]);