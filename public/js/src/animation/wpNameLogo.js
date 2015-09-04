(function ( angular ) {
  'use strict';
  angular.module( 'wpNameLogo', [] )
    .directive( 'wpLogo', function ( Snap ) {
      return {
        replace: true,
        controller: function ( $scope ) {
          Snap.load( $scope.src, function ( f ) {

              $scope.el.append( f );

              var aniTime = {
                foreground: 600,
                background: 300
              }

              var nameW  = Snap.selectAll( 'g#nameW  path' ),
                  nameBG = Snap.select( 'g#nameBG' ),
                  delay  = 0;

              nameW.forEach( function ( path ) {
                var lenT = path.getTotalLength();
                path
                  .attr( {
                    fill: 'none',
                    fillOpacity: 0,
                    stroke: '#FFF',
                    strokeOpacity: 1,
                    strokeWidth: 1,
                    strokeMitterLimit: 1,
                    "stroke-dasharray": lenT + " " + lenT,
                    "stroke-dashoffset": lenT
                  } );

                setTimeout( function () {
                  path.animate( {
                    fill: '#fff',
                    fillOpacity: 1,
                    "stroke-dashoffset": 10
                  }, aniTime.foreground, mina.linear );
                }, 300 + delay );
                delay += 30;
              } );

              nameBG.attr( {
                opacity: 0,
                transform: 't -2 -2'
              } );

              var aniNameBG = function () {
                nameBG.animate( {
                  opacity: 1,
                  transform: 't 5 5'
                }, 300, mina.easein );
              };

              setTimeout( aniNameBG, 1000 );

            }
          );
        },
        scope: {
          src: '@'
        }
        ,
        link: function ( scope, el, attrs ) {
          scope.el = Snap( el[ 0 ] );
        }
        ,
        template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 228.5 184.5" enable-background="new 0 0 228.5 184.5" xml:space="preserve"></svg>'
      };


    } );

})( angular );