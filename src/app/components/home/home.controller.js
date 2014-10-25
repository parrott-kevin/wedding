(function() {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.message = "I'm the home page";
  }

})();

