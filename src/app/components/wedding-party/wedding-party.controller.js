(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$http'];

  function WeddingPartyController($http) {
    var vm = this;

    $http.get('./app/components/wedding-party/wedding-party-groomsmen.json')
      .success(function(data) {
        vm.groomsmen = data;
      });
    $http.get('./app/components/wedding-party/wedding-party-bridesmaids.json')
      .success(function(data) {
        vm.bridesmaids = data;
      });
  }
})();
