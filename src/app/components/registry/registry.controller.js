(function() {
  'use strict';

  angular
    .module('registry.controller', [])
    .controller('RegistryController', RegistryController);

  RegistryController.$inject = ['$scope'];

  function RegistryController($scope) {
      var vm = this;

      vm.message = 'I\'m the registry page';
    }
})();
