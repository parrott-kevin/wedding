angular
  .module('homeController', [])
  .controller('HomeController',['$scope', function HomeController($scope) {
    $scope.message = "I'm the home page";  
  }]);
