(function ( angular ) {
  'use strict';
  var app = angular.module( 'wpSnap', [] );

  app.factory( 'Snap', [
    function () {
      return window.Snap;
    }
  ] );

  app.directive( 'ngSvg', function ( Snap ) {
    "use strict";

    return {
      replace: true,
      controller: function ( $scope ) {
        Snap.load( $scope.src, function ( f ) {
          $scope.el.append( f );
        } );
      },
      scope: {
        src: '@'
      },
      link: function ( scope, el, attrs ) {
        scope.el = Snap( el[ 0 ] );
        scope.el.attr( {
          'fill': '#FFFFFF',
          'stroke': '#FFFFFF',
          'strokeWidth': 0.0
        } );
      },
      template: '<svg height="100%" width="100%"></svg>'
    };
  } );
})( angular );