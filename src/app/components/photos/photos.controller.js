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
        image: 'http://www.placecage.com/c/600/400'
      });
    };

    for (var i = 0; i < 4; i++) {
      vm.addSlide();
    }

  }

})();
