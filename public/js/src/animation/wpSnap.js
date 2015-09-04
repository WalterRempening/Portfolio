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

            //-----------------------------------------------
            //  Animation Length Time
            //-----------------------------------------------
            var animationTime = {
              stripes: 300,
              textPath: 1500,
              backgroundDrop: 900
            };

            //-----------------------------------------------
            //  Name Titel
            //-----------------------------------------------
            var titelB = Snap.select( 'g.TitelB' ),
                titelW = Snap.selectAll( 'g.TitelW > path' );
            var delay = 0;

            titelW.forEach( function ( path ) {
              var lenT = path.getTotalLength();
              path
                .attr( {
                  stroke: '#FFF',
                  fill: '#117bb2',
                  strokeWidth: "2",
                  "stroke-dasharray": lenT + " " + lenT,
                  "stroke-dashoffset": lenT
                } );

              setTimeout( function () {
                path.animate( {
                  fill: '#fff',
                  "stroke-dashoffset": 10
                  //opacity:1
                }, animationTime.textPath, mina.linear );
              }, 300 + delay );
              delay += 50;
              console.log( delay );
            } );


            titelB.attr( {
              opacity: 0,
              transform: 't0 50'
            } );

            var animateTitelBackground = function () {
              titelB.animate( {
                opacity: 1,
                transform: 't0 0'
              }, animationTime.backgroundDrop, mina.easeIn );
            };


            //-----------------------------------------------
            //  Background
            //-----------------------------------------------
            //-----------------------------------------------
            //  Mono
            //-----------------------------------------------
            //-----------------------------------------------
            //  Bottom Stripe
            //-----------------------------------------------
            var stripeTop    = Snap.select( 'polygon#BarT' ),
                stripeGrad   = Snap.select( 'polygon#BarG' ),
                stripeBottom = Snap.select( 'polygon#BarB' );

            var stripePos = {
              init: {
                top: [ 82.9, 727.6, 82.9, 672.6, 82.9, 623.6, 142, 612.5, 142, 716.5 ],
                mid: [ 624.8, 541.5, 624.8, 645.2, 659.9, 624.6, 659.9, 524.1 ],
                bottom: [ 153.9, 740.4, 153.9, 870, 235.5, 855.3, 165.7, 799.2, 235.5, 725.7 ]
              },
              finish: {
                top: [ 82.9, 727.6, 138.9, 668.6, 82.9, 623.6, 659.9, 520.6, 659.9, 624.6 ],
                mid: [ 153.9, 740.4, 153.9, 870, 659.9, 624.6, 659.9, 524.1 ],
                bottom: [ 153.9, 740.4, 153.9, 870, 748.7, 763.6, 678.9, 707.6, 748.7, 634 ]
              }
            };

            stripeTop.attr( {
              "opacity": 0,
              "points": stripePos.init.top.toString()
            } );

            stripeGrad.attr( {
              "opacity": 0,
              "points": stripePos.init.mid.toString()
            } );

            stripeBottom.attr( {
              "opacity": 0,
              "points": stripePos.init.bottom.toString()
            } );

            //----------------------------------------------
            var animateSt = function () {
              stripeTop.animate( {
                "opacity": 1,
                "points": stripePos.finish.top.toString()
              }, animationTime.stripes, mina.backout );
            };

            var animateSg = function () {
              stripeGrad.animate( {
                "opacity": 1,
                "points": stripePos.finish.mid.toString()
              }, animationTime.stripes, mina.easeinout );
            };

            var animateSb = function () {
              stripeBottom.animate( {
                "opacity": 1,
                "points": stripePos.finish.bottom.toString()
              }, animationTime.stripes, mina.backout );
            };

            //-----------------------------------------------
            //  Stripe Text
            //-----------------------------------------------
            var craftB = Snap.select( '#CraftB' ),
                codeB  = Snap.select( '#CodeB' ),
                craftW = Snap.select( '#CraftW' ),
                codeW  = Snap.select( '#CodeW' );


            //-----------------------------------------------
            //  Animiation Timeline
            //-----------------------------------------------

            setTimeout( animateTitelBackground, 900 );
            setTimeout( animateSt, 300 );
            setTimeout( animateSg, 500 );
            setTimeout( animateSb, 800 );

          }
        );
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