(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'home.controller',
      'info.controller',
      'photos.controller',
      'registry.controller',
      'wedding-party.controller'
    ])
    .constant('_', window._)
    .run(function($rootScope, $location, $window) {
      $rootScope._ = window._;
    });

})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/components/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .when('/weddingparty', {
        templateUrl: 'app/components/wedding-party/wedding-party.html',
        controller: 'WeddingPartyController',
        controllerAs: 'vm'
      })
      .when('/photos', {
        templateUrl: 'app/components/photos/photos.html',
        controller: 'PhotosController',
        controllerAs: 'vm'
      })
      .when('/info', {
        templateUrl: 'app/components/info/info.html',
        controller: 'InfoController',
        controllerAs: 'vm'
      })
      .when('/registry', {
        templateUrl: 'app/components/registry/registry.html',
        controller: 'RegistryController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();

(function() {
  'use strict';

  angular
    .module('home.controller', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  function HomeController() {
    var vm = this;

    vm.message = 'I\'m the home page';
    vm.image = {
      src: './assets/img/home.jpg'
    };
  }

})();

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
        info: 'The above link leads to a block of rooms reserved at the Courtyard Marriott across the street from the GRAM. Rooms can be booked by phone or through the link below. If you are booking by phone, please call their toll free number 877-901-6632 and reference “Schneider-Parrott Wedding Block”.',
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
        info: 'Enter from Ionia. Free parking passes will be provided',
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
        info: 'Enter structure from Ottawa Ave NW. Free parking passes will be provided',
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

(function() {
  'use strict';

  angular
    .module('photos.controller', ['ui.bootstrap'])
    .controller('PhotosController', PhotosController);

  PhotosController.$inject = ['_'];

  function PhotosController(_) {
    var vm = this;
    vm.message = 'I\'m the photos page';
    var imageNames = ['0', '1', '2', '3', '4', '5', '6'];
    vm.slides = _.map(imageNames, function(i) {
      return {image: './assets/img/slideshow/' + i + '.png'};
    });
  }

})();

(function() {
  'use strict';

  angular
    .module('registry.controller', [])
    .controller('RegistryController', RegistryController);

  RegistryController.$inject = [];

  function RegistryController() {
      var vm = this;

      vm.stores = [
        {
          name: 'West Elm',
          pic: './assets/img/logo.west-elm.png',
          link: 'https://secure.westelm.com/registry/n7rglc7vbt/registry-list.html'
        },
        {
          name: 'Target',
          pic: './assets/img/logo.target.png',
          link: 'https://www-secure.target.com/gift-registry/giftgiver?registryId=UpMh6bDpPRmWALvOyN5jJg'
        },
        {
          name: 'Williams and Sonoma',
          pic: './assets/img/logo.williams-sonoma.svg',
          link: 'https://secure.williams-sonoma.com/registry/c2pntv67zs/registry-list.html'
        },
        {
          name: 'Etsy',
          pic: './assets/img/logo.etsy.png',
          link: 'https://www.etsy.com/registry/NDc2MTg1Mnw5MjM3OTYy/'
        },
        {
          name: 'A Plus Store',
          pic: './assets/img/logo.apr.png',
          link: 'http://www.aplusrstore.com/wishlists/view/9779'
        }];
    }
})();

(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$http'];

  function WeddingPartyController($http) {
    var vm = this;

    $http.get('./app/components/wedding-party/wedding-party-groomsmen.json')
      .success(function(data) {
        vm.groomsmen = data;
      });
    $http.get('./app/components/wedding-party/wedding-party-bridesmaids.json')
      .success(function(data) {
        vm.bridesmaids = data;
      });
  }
})();
