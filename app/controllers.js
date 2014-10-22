// Controllers
var weddingControllers = angular.module('weddingControllers', ['google-maps'.ns()]);

weddingControllers.controller('HomeController',['$scope', function($scope) {
  $scope.message = "I'm the home page";
}]);

weddingControllers.controller('WeddingPartyController', ['$scope', function($scope) {
  $scope.message = "I'm the wedding party page";
}]);

weddingControllers.controller('PhotosController', ['$scope', function($scope) {
  $scope.message = "I'm the photo page";
}]);

weddingControllers.controller('InfoController', ['$scope', 'GoogleMapApi'.ns(), 
  function($scope) {
    $scope.message = "I'm the info page (venue and hotel)";

    $scope.map = {
      center: {
        latitude: 42.96505,
        longitude: -85.67105
      },
      zoom: 15
    };

    $scope.markers = [
      {
        id: 0,
        title: 'gram',
        latitude: 42.96505,
        longitude: -85.67105
      },
      {
        id: 1,
        title: 'hotel',
        latitude: 42.964103,
        longitude: -85.673271  
      }
    ];
}]);

weddingControllers.controller('RegistryController', ['$scope', function($scope) {
  $scope.message = "I'm the registry page";
}]);
