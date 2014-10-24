
angular
  .module('photosController', [])
  .controller('PhotosController',['$scope', function PhotosController($scope) {
    $scope.message = "I'm the photos page"; 
  }]);