(function() {
  'use strict';

  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

  PhotosController.$inject = ['$scope'];

  function PhotosController($scope) {
    var vm = this;
    vm.message = 'I\'m the photos page';

    vm.slides = [];
    var slides = vm.slides;

    vm.addSlide = function() {
      var n = Math.floor(Math.random() * (10 - 1) + 1);
      slides.push({
        image: 'http://lorempixel.com/g/600/400/animals/' + n
      });
    };

    for (var i = 0; i < 4; i++) {
      vm.addSlide();
    }

  }

})();
