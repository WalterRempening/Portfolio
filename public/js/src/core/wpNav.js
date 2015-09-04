(function ( angular ) {
  'use strict';
  angular.module( 'wpNav', [] )
    .controller( 'NavigationController',
    [ '$state', '$scope', function ( $state, $scope ) {
      $scope.currentPage = $state.current.data.location;
      $scope.state = {
        port: $scope.currentPage == "portfolio" ? "active" : "idle",
        about: $scope.currentPage == "about" ? "active" : "idle",
        contact: $scope.currentPage == "contact" ? "active" : "idle"
      };

      $scope.$on( "$stateChangeSuccess", function () {
        $scope.currentPage = $state.current.data.location;
        $scope.state = {
          port: $scope.currentPage == "portfolio" ? "active" : "idle",
          about: $scope.currentPage == "about" ? "active" : "idle",
          contact: $scope.currentPage == "contact" ? "active" : "idle"
        };
      } );

    } ] )
    .directive( 'wpNavigation', function () {
      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: '../../../views/core/navigation-partial.html',
        controller: 'NavigationController',
        controllerAs: 'NavCtrl'
      };
    } );


})( angular );