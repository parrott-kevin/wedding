angular
  .module('weddingApp') 
  .config([
  '$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homeView.html',
        controller: 'HomeController'
      })
      .when('/weddingparty', {
        templateUrl: 'views/weddingPartyView.html',
        controller: 'WeddingPartyController'
      })
      .when('/photos', {
        templateUrl: 'views/photosView.html',
        controller: 'PhotosController'
      })
      .when('/info', {
        templateUrl: 'views/infoView.html',
        controller: 'InfoController'
      })
      .when('/registry', {
        templateUrl: 'views/registryView.html',
        controller: 'RegistryController'
      })
      .otherwise({
        templateUrl: 'views/homeView.html',
        controller: 'HomeController'
      });
}]);
