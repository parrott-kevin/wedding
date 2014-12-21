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
        link: 'http://www.westelm.com'
      },
      {
        name: 'Target',
        pic: './assets/img/logo.target.png',
        link: 'http://www.target.com'
      },
      {
        name: 'Williams and Sonoma',
        pic: './assets/img/logo.williams-sonoma.svg',
        link: 'http://www.williams-sonoma.com/'
      }];
    }
})();
