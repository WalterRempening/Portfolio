(function ( angular ) {
  'use strict';
  var app = angular.module( 'wpSnap', [] );

  app.factory( 'Snap', [
    function () {
      return window.Snap;
    }
  ] );

  app.directive( 'wpHomeLogo', function ( Snap ) {
    "use strict";

    return {
      replace: true,
      controller: function ( $scope ) {
        Snap.load( $scope.src, function ( f ) {
            $scope.el.append( f );

            //var oval = Snap.select( 'g#Layer_3' );
            //var  stripe = Snap.select( 'g#Layer_2 > polygon' );
            //var titel = Snap.select( 'g#Layer_1 text > textpath' );
            //var lenB = stripe.getTotalLength();
            //var lenT = Snap.path.getTotalLength(titel);
            //var lenT = 500;

            //console.log( lenT );

            //titel.attr( {
            //  stroke: '#FF0000',
            //  strokeWidth: "2",
            //  strokeMiterLimit: "200",
            //  strokeDasharray: '10 10',
            //  strokeDashOffset: lenT
            //} ).animate( {
            //    "stroke-dashoffset": 10
            //  }, 4000, mina.easeinout
            //);

            //stripe.attr( {
            //  stroke: '#000000',
            //  strokeWidth: "4",
            //  strokeMiterLimit: "10",
            //  strokeDasharray: "9 9",
            //  strokeDashOffset: "1000.43",
            //  "stroke-dasharray": lenB + " " + lenB,
            //  "stroke-dashoffset": lenB
            //} );

            //setTimeout( function () {
            //  oval.animate( { transform: 't300 150', opacity: 0 }, 1000,
            //    mina.bounce );
            //  stripe.animate( { "stroke-dashoffset": 10 }, 2500, mina.easeinout )
            //}, 0 );

          }
        )
        ;
      },
      scope: {
        src: '@'
      }
      ,
      link: function ( scope, el, attrs ) {
        scope.el = Snap( el[ 0 ] );
        //console.log( el[ 0 ] );
      }
      ,
      template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 40 833.7 890.9" enable-background="new 0 40 833.7 890.9" xml:space="preserve" class="home-logo"></svg>'
    };
  } )
  ;
})
( angular );