(function() {
  'use strict';

  angular
    .module('registry.controller', [])
    .controller('RegistryController', RegistryController);

  RegistryController.$inject = [];

  function RegistryController() {
      var vm = this;

      vm.stores = [
      {
        name: 'West Elm',
        pic: './assets/img/logo.west-elm.png',
        link: 'https://secure.westelm.com/registry/n7rglc7vbt/registry-list.html'
      },
      {
        name: 'Target',
        pic: './assets/img/logo.target.png',
        link: 'https://www-secure.target.com/gift-registry/giftgiver?registryId=UpMh6bDpPRmWALvOyN5jJg'
      },
      {
        name: 'Williams and Sonoma',
        pic: './assets/img/logo.williams-sonoma.svg',
        link: 'https://secure.williams-sonoma.com/registry/c2pntv67zs/registry-list.html'
      }];
    }
})();
