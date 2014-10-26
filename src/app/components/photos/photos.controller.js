(function() {
  'use strict';
  
  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

    PhotosController.$inject = ['$scope'];

    function PhotosController($scope) {
      $scope.message = "I'm the photos page";

      $scope.slides = [];
      var slides = $scope.slides; 

      $scope.addSlide = function() {
        var n = Math.floor(Math.random() * (29-1) + 1);
        slides.push({
          image: 'http://placepuppy.it/600/400&n=' + n
        });
      };

      for (var i = 0; i < 4; i++){
        $scope.addSlide();
      }

    }

})();