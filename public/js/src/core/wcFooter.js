/**
 * Footer Directive
 */

(function ( angular ) {
  'use strict';
  angular.module( 'wcFooter', [] )
    .controller( 'FooterController', [ "$scope", "$mdDialog", function ($scope, $mdDialog ) {
      $scope.year = new Date( Date.now() ).getFullYear();

      $scope.showImprint = function ( event ) {
        $mdDialog.show( {
          templateUrl: '../../../views/core/imprint.tmpl.html',
          targetEvent: event,
          clickOutsideToClose: true,
          parent: angular.element( document.body ),
          controller: DialogController
        } )

      };

    } ] )

    .directive( 'wpFooter', function () {
      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: '../../../views/core/footer-partial.html',
        controller: 'FooterController',
        controllerAs: 'ftrCtrl'
      };
    } );

  function DialogController ( $scope, $mdDialog ) {
    $scope.hide = function () {
      $mdDialog.hide();
      console.log( "hide bitch" );
    }
  }

})( angular );