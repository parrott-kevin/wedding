(function() {
  'use strict';

  angular
    .module('info.controller', ['uiGmapgoogle-maps'])
    .controller('InfoController', InfoController);

  InfoController.$inject = [];

  function InfoController() {
    var vm = this;

    vm.locations = [{
        id: 0,
        title: 'Grand Rapids Art Museum',
        address: '101 Monroe Center NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'http://www.artmuseumgr.org/',
        info: 'The ceremony will be taking place at the Pocket Park at the GRAM and the reception will take place inside the GRAM main lobby.',
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
        info: 'The above link leads to a block of rooms reserved at the Courtyard Marriott across the street from the GRAM. Rooms can be booked by phone or through the link below. If you are booking by phone, please call their toll free number 877-901-6632 and reference “Schneider-Parrott Wedding Block”. We will also be providing free parking passes to anyone driving to the GRAM.',
        latitude: 42.964103,
        longitude: -85.673271,
        show: false,
        windowOptions: {
          maxWidth: 200
        },
        onClick: function() {
          vm.show = !vm.show;
        }
      },
      {
        id: 2,
        title: 'Parking - Monroe Center Ramp',
        address: 'Near Ionia Ave NW & Louis St NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'http://grcity.us/enterprise-services/Parking-Services/Pages/default.aspx',
        info: 'Enter from Ionia',
        latitude: 42.9641349,
        longitude: -85.6699985,
        show: false,
        windowOptions: {
          maxWidth: 200
        },
        onClick: function() {
          vm.show = !vm.show;
        }
      },
      {
        id: 3,
        title: 'Parking - Ottawa Ramp',
        address: 'Near Ottawa Ave NW and Louis St NW',
        city: 'Grand Rapids',
        state: 'MI',
        zip: '49503',
        link: 'http://grcity.us/enterprise-services/Parking-Services/Pages/default.aspx',
        info: 'Enter structure from Ottawa Ave NW',
        latitude: 42.96365,
        longitude: -85.6717726,
        show: false,
        windowOptions: {
          maxWidth: 200
        },
        onClick: function() {
          vm.show = !vm.show;
        }
      }];

    vm.map = {
      center: {
        latitude: 42.9643529,
        longitude: -85.6709889
      },
      zoom: 17
    };

  }

})();
