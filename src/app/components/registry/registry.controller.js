(function() {
  'use strict';
  
  angular
    .module('registry.controller', [])
    .controller('RegistryController', RegistryController);

  RegistryController.$inject = ['$scope'];
  
  function RegistryController($scope) {
      $scope.message = "I'm the registry page"; 
    }
})();