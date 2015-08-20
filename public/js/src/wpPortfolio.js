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

    .directive( 'wpTile', [ 'Snap', function ( Snap ) {
      var linker = function ( scope, element, attrs ) {

        //data-path-hover="M500.5,0L0,0l0,60h500.5V0z"
        //d="M500.5,0L0,0l0,215l500.5-81V0z"

        var svg    = element.find( 'svg' ),
            panel  = svg[ 0 ].childNodes[ 1 ].attributes.d.value,
            target = attrs.pathHover,
            speed  = 330,
            easing = mina.backout;

        console.log( svg );

        scope.s = Snap( element[0] );
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
          link: attrs.wlink,
          planeColor: "#FF4C59"  //attrs.wplaneColor
        };

      };

      return {
        scope: true,
        replace: true,
        link: linker,
        templateUrl: '../../views/portfolio-tile.tmpl.html'
      };
    } ] );

})( angular );