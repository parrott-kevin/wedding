/**
 * Created by parrott-kevin on 2/13/15.
 */

'use strict';

app.directive('analytics', analytics);

analytics.$inject = ['$rootScope', '$location'];

function analytics($rootScope, $location) {
  return {
    link: function(scope, elem, attrs, ctrl) {
      $rootScope.$on('$rootChangeSuccess', function(event, currRoute, prevRoute) {
        ga('set', 'page', $location.push());
        ga('send', 'pageview');
      });
    }
  };
}
