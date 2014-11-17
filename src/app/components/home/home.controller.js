(function() {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    var vm = this;

    vm.message = 'I\'m the home page';
    vm.image = {
      src: './assets/img/DSC_5132.jpg'
    };
  }

})();
