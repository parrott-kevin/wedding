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
    ])
    .constant('_', window._)
    .run(function($rootScope, $location, $window) {
      $rootScope._ = window._;
    });

})();
