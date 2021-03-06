(function ( angular ) {
  'use strict';
  angular.module( 'wpGsap', [] )

    .directive( 'wpGsapAnimation', function () {
      var linker = function ( scope, element, attrs ) {
        var tl = new TimelineLite();
        // animation comes here
        tl.stop();


        scope.play = function () {
          tl.play();
        }

        scope.reverse = function () {
          tl.reverse();
        }
      };

      return {
        scope: true,
        link: linker,
        templateUrl: '../../../views/landing/home-logo.tmpl.html'
      };
    } );


})( angular );