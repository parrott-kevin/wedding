(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$scope'];

  function WeddingPartyController($scope) {
    var vm = this;

    vm.groomsmen = [{
      name: 'Eric Parrott',
      content: 'lorem ipsum',
    },
    {
      name: 'Zak Tafelsky',
      content: 'lorem ipsum' 
    },
    {
      name: 'Ian Minter',
      content: 'lorem ipsum'
    },
    {
      name: 'Jordan Kokot',
      content: 'lorem ipsum'
    },
    {
      name: 'Eric Priestly',
      content: 'lorem ipsum'
    },
    {
      name: 'Nick Schneider',
      content: 'lorem ipsum'
    }];

    vm.bridesmaids = [{
      name: 'Annie Schneider',
      content: 'lorem ipsum' 
    },
    {
      name: 'Mary Motta',
      content: 'lorem ipsum' 
    },
    {
      name: 'Lisa Dubouis',
      content: 'lorem ipsum'
    },
    {
      name: 'Ellen Mey',
      content: 'lorem ipsum'
    },
    {
      name: 'Stephanie Hrisca',
      content: 'lorem ipsum'
    },
    {
      name: 'Nicole Parrott',
      content: 'lorem ipsum' 
    }];



  }

   
})();