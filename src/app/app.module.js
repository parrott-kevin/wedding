(function() {
  'use strict';
  
  angular
    .module('app', [
      'ngRoute',
      'home.controller',
      'info.controller',
      'photos.controller',
      'registry.controller',
      'wedding-party.controller'
    ]);

})();