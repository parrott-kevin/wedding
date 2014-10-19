// Create the module and name it weddingApp
var app = angular.module('weddingApp', [
  'ngRoute',
  'weddingControllers'
  ]);

// Configure the routes
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .when('/venue', {
        templateUrl: 'views/venue.html',
        controller: 'VenueController'
      });
}]);
