(function() {
  'use strict';
  
  angular
    .module('info.controller', ['google-maps'.ns()])
    .controller('InfoController', InfoController);

  InfoController.$inject = ['$scope', 'GoogleMapApi'.ns()];  

  function InfoController($scope) {
    $scope.message = "I'm the info page (venue and hotel)";
    $scope.map = {
      center: {
        latitude: 42.96505,
        longitude: -85.67105
      },
      zoom: 15
    };

    $scope.markers = [
      {
        id: 0,
        title: 'gram',
        latitude: 42.96505,
        longitude: -85.67105
      },
      {
        id: 1,
        title: 'hotel',
        latitude: 42.964103,
        longitude: -85.673271  
      }
    ]; 
  }

})();