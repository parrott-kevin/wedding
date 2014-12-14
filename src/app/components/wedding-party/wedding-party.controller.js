(function() {
  'use strict';

  angular
    .module('wedding-party.controller', [])
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$scope', '$http'];

  function WeddingPartyController($scope, $http) {
    var vm = this;

    vm.groomsmen = [{
      name: 'Eric Parrott',
      pic: './assets/img/Eric Par.jpg',
      meet: 'When the he came home from the hospital',
      xp: 'Weekend in Colorado downhill mountain biking'
    },
    {
      name: 'Zak Tafelsky',
      pic: './assets/img/Zak.jpg',
      meet: 'At the VanAndel Public Museum for a birthday party',
      xp: 'Living together in a decrepit house and convincing all of our roommates that Oblivion is amazing.'
    },
    {
      name: 'Ian Minter',
      pic: './assets/img/Ian.jpg',
      meet: 'At a his going away to Houston party (even though I never met him before and was just tagging along, come to find out he loves it when people do this)',
      xp: 'Pedal Party Houston'
    },
    {
      name: 'Jordan Kokot',
      pic: './assets/img/Jordan.jpg',
      meet: 'Fourth grade, new kid introductions',
      xp: 'Rampaging through Kamchatka due previous transgressions'
    },
    {
      name: 'Eric Priestly',
      pic: './assets/img/Eric Pre.jpg',
      meet: 'Via window at Bubble Island',
      xp: 'Late night bike rides through Ann Arbor'
    },
    {
      name: 'Nick Schneider',
      pic: './assets/img/Nick.jpg',
      meet: 'Gin\'s Graduation',
      xp: '...'
    }];

    vm.bridesmaids = [{
      name: 'Annie Schneider',
      pic: './assets/img/Annie.jpg',
      meet: 'We were babies, probably pooping our pants in our mother\'s arms',
      xp: 'Performing highly rated family variety shows in living rooms and basements across St. Clair county.'
    },
    {
      name: 'Mary Motta',
      pic: './assets/img/Mary.jpg',
      meet: 'We were babies, probably crawling around fascinated by the existence of the floor.',
      xp: 'Ran an underground jewelry trade until locals shut us down.'
    },
    {
      name: 'Lisa Dubois',
      pic: './assets/img/Lisa.jpg',
      meet: 'The workplace',
      xp: 'We once brought an entire bar of strangers together through the talent of Lisa’s voice, our interpretive dance, and Journey’s inescapable pull.'
    },
    {
      name: 'Ellen Mey',
      pic: './assets/img/Ellen.jpg',
      meet: 'The playground',
      xp: 'While members of the exclusive nomrom club they wrote/performed big hits at band camp.'
    },
    {
      name: 'Stephanie Hrisca',
      pic: './assets/img/Steph.jpg',
      meet: 'The playground',
      xp: 'We once filled Stephanie’s entire swimsuit with sand. It was a true representation of how far humanity has come.'
    },
    {
      name: 'Nicole Parrott',
      pic: './assets/img/Nicole.jpg',
      meet: 'Dinner with Kevin\'s family',
      xp: 'Visited an aquarium with a white tiger and petted stingrays'
    }];
  }

})();
