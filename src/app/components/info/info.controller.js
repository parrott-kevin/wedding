(function() {
  'use strict';
  
  angular
    .module('info.controller', ['google-maps'.ns()])
    .controller('InfoController', InfoController);

  InfoController.$inject = ['$scope', 'GoogleMapApi'.ns()];  

  function InfoController($scope) {
    $scope.title = "Information";

    var locations = [{
        title: 'Grand Rapids Art Museum',
        address: '101 Monroe Center NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'http://www.artmuseumgr.org/',
        latitude: 42.96505,
        longitude: -85.67105
      },
      {
        title: 'Courtyard Grand Rapids Downtown',
        address: '11 Monroe NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'https://resweb.passkey.com/go/KevinandVirginia',
        latitude: 42.964103,
        longitude: -85.673271
      }];

    $scope.locations = locations;

    $scope.map = {
      center: {
        latitude: 42.96505,
        longitude: -85.67105
      },
      zoom: 15
    };
    
    var markers = [];
    for (var i = 0; i < locations.length; i++) {
      markers.push(createMarker(i, locations[i]));
    }

    $scope.markers = markers;

    function createMarker(i, location) {
      var marker = {
        id: i,
        title: location.title,
        address: location.address,
        city: location.city,
        state: location.state,
        zip: location.zip,
        link: location.link,
        latitude: location.latitude,
        longitude: location.longitude,
        show: false,
        onClick: function() {
          $scope.show = !$scope.show;
        }
      };

      return marker;
    }

  }



})();