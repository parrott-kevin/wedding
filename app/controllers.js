// Controllers
var weddingControllers = angular.module('weddingControllers', []);

weddingControllers.controller('HomeController',['$scope', function($scope) {
  $scope.message = "I'm the home page";
}]);
weddingControllers.controller('AboutController', ['$scope', function($scope) {
  $scope.message = "I'm the about page";
}]);
weddingControllers.controller('VenueController', ['$scope', function($scope) {
  $scope.message = "I'm the venue page";
}]);
