(function() {
  'use strict';

  angular
    .module('info.controller', ['google-maps'.ns()])
    .controller('InfoController', InfoController);

  InfoController.$inject = ['$scope', 'GoogleMapApi'.ns()];

  function InfoController($scope) {
    var vm = this;

    vm.title = 'Information';

    var locations = [{
        id: 0,
        title: 'Grand Rapids Art Museum',
        address: '101 Monroe Center NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'http://www.artmuseumgr.org/',
        latitude: 42.96505,
        longitude: -85.67105,
        show: false,
        windowOptions: {
          maxWidth: 200
        },
        onClick: function() {
          vm.show = !vm.show;
        }
      },
      {
        id: 1,
        title: 'Courtyard Grand Rapids Downtown',
        address: '11 Monroe NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'https://resweb.passkey.com/go/KevinandVirginia',
        latitude: 42.964103,
        longitude: -85.673271,
        show: false,
        windowOptions: {
          maxWidth: 200
        },
        onClick: function() {
          vm.show = !vm.show;
        }
      }];

    vm.locations = locations;

    vm.map = {
      center: {
        latitude: 42.96505,
        longitude: -85.67105
      },
      zoom: 15
    };

  }

})();
