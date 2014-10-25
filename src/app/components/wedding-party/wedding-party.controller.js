(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$scope'];

  function WeddingPartyController($scope) {
    $scope.message = "I'm the wedding party page";
  }

   
})();