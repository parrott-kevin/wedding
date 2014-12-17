(function() {
  'use strict';

  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

  PhotosController.$inject = ['_'];

  function PhotosController(_) {
    var vm = this;
    vm.message = 'I\'m the photos page';
    var n = ['100', '200', '300', '400'];
    vm.slides = _.map(n, function(i) {
      return {image: 'http://placehold.it/940x' + i};
    });

  }

})();
