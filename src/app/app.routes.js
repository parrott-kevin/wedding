(function() {
  'use strict';
  
  angular
    .module('app') 
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
      })
      .when('/weddingparty', {
        templateUrl: 'views/wedding-party.html',
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
        redirectTo: '/'
      });
  }

})();