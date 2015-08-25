(function ( angular ) {
  'use strict';
  angular.module( 'wpPortfolio', [] )
    .controller( 'PortfolioController',
    [ '$scope', 'SocketFactory', function ( $scope, SocketFactory ) {

      $scope.portfolio = {};
      SocketFactory.emit( 'getPortfolio', 'en' );

      SocketFactory.on( 'receivePortfolio', function ( data ) {
        $scope.portfolio = data;
      } );

    } ] )

    .directive( 'wpTile', [ 'Snap', '$state', '$rootScope',function ( Snap, $state ) {
      var linker = function ( scope, element, attrs ) {

        var svg    = element.find( 'svg' ),
            panel  = svg[ 0 ].childNodes[ 1 ].attributes.d.value,
            target = attrs.pathHover,
            speed  = 330,
            easing = mina.backout;

        scope.s = Snap( element[ 0 ] );
        scope.path = scope.s.select( 'path' );

        scope.play = function () {
          scope.path.animate( { 'path': target }, speed, easing );
        };

        scope.reverse = function () {
          scope.path.animate( { 'path': panel }, speed, easing );
        };

        scope.tileConfig = {
          titel: attrs.wtitel,
          description: attrs.wdescription,
          img: attrs.wimage,
          planeColor: "#FF4C59",  //attrs.wplaneColor
          index : attrs.windex,
          link: function () {
            var address = attrs.wtitel.replace( /\s/g, '-' );
            address = address.replace( /:/g, '' );
            return address;
          }
        };

        scope.toWork = function ( target, wIndex ) {
          $state.transitionTo( 'content.detail', { workTitel: target, index: wIndex } );
        };

      };

      return {
        scope: true,
        replace: true,
        link: linker,
        templateUrl: '../../../views/portfolio/portfolio-tile.tmpl.html'
      };
    } ] );

})( angular );