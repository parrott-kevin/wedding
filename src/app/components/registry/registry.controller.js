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
        pic: 'https://corporate.target.com/_ui/img/global/target-bullseye.png',
        link: 'http://www.target.com'
      },
      {
        name: 'West Elm',
        pic: 'http://www.westelm.com/weimgs/ab/images/i/201450/0034/images/common/logo_we.png',
        link: 'http://www.westelm.com'
      },
      {
        name: 'Williams and Sonoma',
        pic: 'http://www.williams-sonoma.com/wsimgs/ab/images/i/201451/0004/images/common/logo.svg',
        link: 'http://www.williams-sonoma.com/'
      }];
    }
})();
