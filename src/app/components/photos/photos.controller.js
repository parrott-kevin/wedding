(function() {
  'use strict';
  
  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

    PhotosController.$inject = ['$scope'];

    function PhotosController($scope) {
      $scope.message = "I'm the photos page"; 
    }

})();