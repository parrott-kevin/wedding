(function() {
  'use strict';

  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

  PhotosController.$inject = ['_'];

  function PhotosController(_) {
    var vm = this;
    vm.message = 'I\'m the photos page';
    var imageNames = ['0', '1', '2', '3', '4'];
    vm.slides = _.map(imageNames, function(i) {
      return {image: './assets/img/slideshow/' + i + '.png'};
    });
  }

})();
