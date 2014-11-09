(function() {
  'use strict';
  
  angular
    .module('app') 
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/weddingparty', {
        templateUrl: 'app/components/wedding-party/wedding-party.html',
        controller: 'WeddingPartyController',
        controllerAs: 'vm'
      })
      .when('/photos', {
        templateUrl: 'app/components/photos/photos.html',
        controller: 'PhotosController',
        controllerAs: 'vm'
      })
      .when('/info', {
        templateUrl: 'app/components/info/info.html',
        controller: 'InfoController',
        controllerAs: 'vm'
      })
      .when('/registry', {
        templateUrl: 'app/components/registry/registry.html',
        controller: 'RegistryController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();