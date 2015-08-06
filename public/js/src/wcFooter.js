/**
 * Main Page Footer Directive
 */

(function ( angular ) {
  'use strict';
  angular.module( 'wcFooter', [] )
    .controller( 'FooterController', function () {
      this.year = new Date( Date.now() ).getFullYear();
    } )

    .directive( 'wpFooter', function () {
      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: '../../views/footer-partial.html',
        controller: 'FooterController',
        controllerAs: 'ftrCtrl'
      };
    } );

})( angular );