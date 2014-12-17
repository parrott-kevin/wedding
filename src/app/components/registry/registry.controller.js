(function() {
  'use strict';

  angular
    .module('registry.controller', [])
    .controller('RegistryController', RegistryController);

  RegistryController.$inject = [];

  function RegistryController() {
      var vm = this;

      vm.stores = [{
        name: 'Target',
        pic: '',
        link: 'http://www.target.com'
      },
      {
        name: 'West Elm',
        pic: '',
        link: 'http://www.westelm.com'
      },
      {
        name: 'Williams and Sonoma',
        pic: '',
        link: 'http://www.williams-sonoma.com/'
      }];
    }
})();
