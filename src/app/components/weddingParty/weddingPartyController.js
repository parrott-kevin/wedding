

angular
  .module('weddingPartyController', [])
  .controller('WeddingPartyController', ['$scope', function WeddingPartyController($scope) {
    $scope.message = "I'm the wedding party page";
  }]);