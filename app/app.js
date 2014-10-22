// Create the module and name it weddingApp
var app = angular.module('weddingApp', [
  'ngRoute',
  'weddingControllers'
  ]);

// Configure the routes
app.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/weddingparty', {
        templateUrl: 'views/weddingParty.html',
        controller: 'WeddingPartyController'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosController'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoController'
      })
      .when('/registry', {
        templateUrl: 'views/registry.html',
        controller: 'RegistryController'
      })
      .otherwise({
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      });
}]);
