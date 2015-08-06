(function ( angular ) {
  'use strict';
  angular.module('wpNav',[])
    .controller('NavigationController',['$state',function ($state) {

    }])
    .directive( 'wpNavigation', function () {
      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: '../../views/navigation-partial.html',
        controller: 'NavigationController',
        controllerAs: 'NavCtrl'
      };
    } );


})( angular );