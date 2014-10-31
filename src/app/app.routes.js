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
        controllerAs: 'vm'
      })
      .when('/weddingparty', {
        templateUrl: 'views/wedding-party.html',
        controller: 'WeddingPartyController',
        controllerAs: 'vm'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosController',
        controllerAs: 'vm'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoController',
        controllerAs: 'vm'
      })
      .when('/registry', {
        templateUrl: 'views/registry.html',
        controller: 'RegistryController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();