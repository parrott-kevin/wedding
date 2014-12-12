(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$scope', '$http'];

  function WeddingPartyController($scope, $http) {
    var vm = this;

    vm.groomsmen = [{
      name: 'Eric Parrott',
      content: 'lorem ipsum',
      pic: './assets/img/Eric Par.jpg'
    },
    {
      name: 'Zak Tafelsky',
      content: 'lorem ipsum',
      pic: './assets/img/Zak.jpg'
    },
    {
      name: 'Ian Minter',
      content: 'lorem ipsum',
      pic: './assets/img/Ian.jpg'
    },
    {
      name: 'Jordan Kokot',
      content: 'lorem ipsum',
      pic: './assets/img/Jordan.jpg'
    },
    {
      name: 'Eric Priestly',
      content: 'lorem ipsum',
      pic: './assets/img/Eric Pre.jpg'
    },
    {
      name: 'Nick Schneider',
      content: 'lorem ipsum',
      pic: './assets/img/Nick.jpg'
    }];

    vm.bridesmaids = [{
      name: 'Annie Schneider',
      content: 'lorem ipsum',
      pic: './assets/img/Annie.jpg'
    },
    {
      name: 'Mary Motta',
      content: 'lorem ipsum',
      pic: './assets/img/Mary.jpg'
    },
    {
      name: 'Lisa Dubouis',
      content: 'lorem ipsum',
      pic: './assets/img/Lisa.jpg'
    },
    {
      name: 'Ellen Mey',
      content: 'lorem ipsum',
      pic: './assets/img/Ellen.jpg'
    },
    {
      name: 'Stephanie Hrisca',
      content: 'lorem ipsum',
      pic: './assets/img/Steph.jpg'
    },
    {
      name: 'Nicole Parrott',
      content: 'lorem ipsum',
      pic: './assets/img/Nicole.jpg'
    }];
  }

})();
