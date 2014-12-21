(function() {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    var vm = this;

    vm.message = 'I\'m the home page';
    vm.image = {
      src: './assets/img/home.jpg'
    };
  }

})();
