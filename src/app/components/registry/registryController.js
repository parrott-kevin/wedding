
angular
  .module('registryController', [])
  .controller('RegistryController',['$scope', function RegistryController($scope) {
    $scope.message = "I'm the registry page"; 
  }]);